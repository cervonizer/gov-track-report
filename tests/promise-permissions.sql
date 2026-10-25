-- All fixtures, including auth identities, are rolled back. Run as database administrator.
BEGIN;
INSERT INTO auth.users(id,email) VALUES
 ('f0000000-0000-4000-8000-000000000001','polis-contributor-test@example.invalid'),
 ('f0000000-0000-4000-8000-000000000002','polis-reviewer-test@example.invalid'),
 ('f0000000-0000-4000-8000-000000000003','polis-other-test@example.invalid');
INSERT INTO public.user_roles(user_id,role) VALUES('f0000000-0000-4000-8000-000000000002','reviewer');
SET LOCAL ROLE authenticated;
DO $$
DECLARE pid uuid; eid uuid; aid uuid; approved uuid; n integer;
BEGIN
 PERFORM set_config('request.jwt.claims','{"sub":"f0000000-0000-4000-8000-000000000002","role":"authenticated"}',true);
 pid:=public.create_promise('{"politician_id":"1","title":"Teste transacional de revisão","category":"Teste","promised_on":"2025-01-01","deadline":"2026-01-01","source":{"url":"https://example.invalid/promise","provenance":"unknown"}}');
 PERFORM set_config('request.jwt.claims','{"sub":"f0000000-0000-4000-8000-000000000001","role":"authenticated"}',true);
 IF public.is_promise_reviewer() THEN RAISE EXCEPTION 'Contributor has reviewer role'; END IF;
 BEGIN
  INSERT INTO public.user_roles(user_id,role) VALUES('f0000000-0000-4000-8000-000000000001','reviewer');
  RAISE EXCEPTION 'Unexpected self-grant permission';
 EXCEPTION WHEN insufficient_privilege THEN NULL; END;
 BEGIN
  INSERT INTO public.political_promises(politician_id,title,published) VALUES('1','Direct client insert',true);
  RAISE EXCEPTION 'Unexpected direct write';
 EXCEPTION WHEN insufficient_privilege THEN NULL; END;
 eid:=public.submit_evidence(jsonb_build_object('promise_id',pid,'description','Evidência de teste','url','https://example.invalid/evidence','submitted_by','f0000000-0000-4000-8000-000000000002'));
 IF NOT EXISTS(SELECT 1 FROM public.promise_evidence WHERE id=eid AND submitted_by=auth.uid()) THEN RAISE EXCEPTION 'Author was not stamped'; END IF;
 BEGIN
  PERFORM public.review_evidence(eid,'approved','Autor não pode aprovar');
  RAISE EXCEPTION 'Unexpected contributor review';
 EXCEPTION WHEN raise_exception THEN IF SQLERRM='Unexpected contributor review' THEN RAISE; END IF; END;
 BEGIN
  PERFORM public.submit_assessment(jsonb_build_object('promise_id',pid,'status','cumprida','fulfillment_percent',100,'criteria','Critério','methodology','Método','rationale','Teste','evidence_ids',jsonb_build_array(eid)));
  RAISE EXCEPTION 'Unexpected pending evidence acceptance';
 EXCEPTION WHEN raise_exception THEN IF SQLERRM='Unexpected pending evidence acceptance' THEN RAISE; END IF; END;
 PERFORM set_config('request.jwt.claims','{"sub":"f0000000-0000-4000-8000-000000000003","role":"authenticated"}',true);
 IF EXISTS(SELECT 1 FROM public.promise_evidence WHERE id=eid) THEN RAISE EXCEPTION 'Private evidence leaked'; END IF;
 PERFORM set_config('request.jwt.claims','{"sub":"f0000000-0000-4000-8000-000000000002","role":"authenticated"}',true);
 PERFORM public.review_evidence(eid,'approved','Evidência aprovada para teste');
 BEGIN
  PERFORM public.submit_assessment(jsonb_build_object('promise_id',pid,'status','cumprida','fulfillment_percent',40,'criteria','Critério','methodology','Método','rationale','Teste','evidence_ids',jsonb_build_array(eid)));
  RAISE EXCEPTION 'Unexpected inconsistent percentage';
 EXCEPTION WHEN raise_exception THEN IF SQLERRM='Unexpected inconsistent percentage' THEN RAISE; END IF; END;
 aid:=public.submit_assessment(jsonb_build_object('promise_id',pid,'status','cumprida','fulfillment_percent',100,'criteria','Critério objetivo','methodology','Método documentado','rationale','Teste de aprovação','evidence_ids',jsonb_build_array(eid)));
 approved:=public.review_assessment(aid,'approved','Teste de aprovação com autoria');
 IF NOT EXISTS(SELECT 1 FROM public.promise_assessments WHERE id=approved AND reviewer_id=auth.uid() AND reviewed_at IS NOT NULL AND verification='approved') THEN RAISE EXCEPTION 'Approval attribution missing'; END IF;
 BEGIN
  PERFORM public.review_assessment(aid,'approved','Revisão duplicada');
  RAISE EXCEPTION 'Unexpected duplicate review';
 EXCEPTION WHEN raise_exception THEN IF SQLERRM='Unexpected duplicate review' THEN RAISE; END IF; END;
 PERFORM public.review_evidence(eid,'rejected','Revogação de teste');
 IF public.assessment_supported(approved) THEN RAISE EXCEPTION 'Revoked evidence still supports assessment'; END IF;
 BEGIN
  PERFORM public.submit_evidence(jsonb_build_object('promise_id',pid,'description','Data inválida','url','https://example.invalid/future','published_on','2999-01-01'));
  RAISE EXCEPTION 'Unexpected future source date';
 EXCEPTION WHEN raise_exception THEN IF SQLERRM='Unexpected future source date' THEN RAISE; END IF; END;
END $$;
SET LOCAL ROLE anon;
SELECT set_config('request.jwt.claims','{"role":"anon"}',true);
DO $$ BEGIN
 IF has_function_privilege(current_user,'public.submit_evidence(jsonb)','EXECUTE') THEN RAISE EXCEPTION 'Anonymous submission permission'; END IF;
 IF EXISTS(SELECT 1 FROM public.promise_evidence WHERE url='https://example.invalid/evidence') THEN RAISE EXCEPTION 'Revoked evidence publicly visible'; END IF;
 IF EXISTS(SELECT 1 FROM public.promise_assessments WHERE verification<>'approved') THEN RAISE EXCEPTION 'Pending assessment publicly visible'; END IF;
END $$;
RESET ROLE;
ROLLBACK;
SELECT 'PASS: roles, RLS, attribution, moderation, percentages, revocation and source dates; all fixtures rolled back' AS result;
