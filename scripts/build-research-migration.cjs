const fs=require('node:fs');
const dossier=JSON.parse(fs.readFileSync('research/salario-minimo.json','utf8'));
const sql=`-- Research is a public draft, not an approved evidence assessment.
CREATE TABLE IF NOT EXISTS public.promise_research (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 promise_id uuid NOT NULL REFERENCES public.political_promises(id),
 research_key text NOT NULL UNIQUE,
 title text NOT NULL,
 scope text NOT NULL,
 summary text NOT NULL,
 methodology text NOT NULL,
 findings jsonb NOT NULL,
 review_checklist text[] NOT NULL,
 limitations text[] NOT NULL,
 source_ids uuid[] NOT NULL,
 recording_candidate jsonb,
 cutoff_on date NOT NULL,
 prepared_by text NOT NULL,
 prepared_at timestamptz NOT NULL DEFAULT now(),
 state text NOT NULL DEFAULT 'awaiting_review' CHECK(state='awaiting_review'),
 published boolean NOT NULL DEFAULT false
);
ALTER TABLE public.promise_research ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS visible_research ON public.promise_research;
CREATE POLICY visible_research ON public.promise_research FOR SELECT USING (
 (published AND EXISTS(SELECT 1 FROM public.political_promises p WHERE p.id=promise_id AND p.published))
 OR public.is_promise_reviewer());
REVOKE ALL ON public.promise_research FROM anon,authenticated;
GRANT SELECT ON public.promise_research TO anon,authenticated;
GRANT ALL ON public.promise_research TO service_role;
DROP TRIGGER IF EXISTS immutable_research ON public.promise_research;
CREATE TRIGGER immutable_research BEFORE UPDATE OR DELETE ON public.promise_research
 FOR EACH ROW EXECUTE FUNCTION public.prevent_audit_mutation();
CREATE INDEX IF NOT EXISTS research_promise ON public.promise_research(promise_id);
COMMENT ON TABLE public.promise_research IS 'Research drafts prepared with AI assistance. Never an approved assessment or source of fulfillment percentages. Immutable revisions; reviewers approve evidence through the separate evidence/assessment workflow.';

DO $research$
DECLARE d jsonb := $dossier$${JSON.stringify(dossier)}$dossier$::jsonb;
 pid uuid; s jsonb; sid uuid; ids uuid[] := '{}';
BEGIN
 SELECT id INTO pid FROM public.political_promises WHERE legacy_key=d->>'promise_legacy_key';
 IF pid IS NULL THEN RAISE EXCEPTION 'Promise for research not found'; END IF;
 IF EXISTS(SELECT 1 FROM public.promise_research WHERE research_key=d->>'key') THEN RETURN; END IF;
 FOR s IN SELECT value FROM jsonb_array_elements(d->'sources') LOOP
  INSERT INTO public.promise_sources(promise_id,url,title,publisher,provenance,quotation,published_on,accessed_on,uncertainty,published)
  VALUES(pid,s->>'url',s->>'title',s->>'publisher',(s->>'provenance')::public.source_provenance,s->>'quotation',(s->>'published_on')::date,(s->>'accessed_on')::date,s->>'uncertainty',true)
  RETURNING id INTO sid;
  ids:=array_append(ids,sid);
 END LOOP;
 d := jsonb_set(d,'{findings}',(SELECT jsonb_agg(f || jsonb_build_object('source_ids',
  (SELECT jsonb_agg(ids[s.ordinality::int]) FROM jsonb_array_elements(d->'sources') WITH ORDINALITY s(value,ordinality)
   WHERE f->'source_keys' ? (s.value->>'key')))) FROM jsonb_array_elements(d->'findings') f));
 INSERT INTO public.promise_research(promise_id,research_key,title,scope,summary,methodology,findings,review_checklist,limitations,source_ids,recording_candidate,cutoff_on,prepared_by,published)
 VALUES(pid,d->>'key',d->>'title',d->>'scope',d->>'summary',d->>'methodology',d->'findings',
 ARRAY(SELECT jsonb_array_elements_text(d->'review_checklist')),ARRAY(SELECT jsonb_array_elements_text(d->'retrieval_limits')),
 ids,d->'recording_candidate',(d->>'cutoff_on')::date,d->>'prepared_by',true);
END $research$;

CREATE OR REPLACE FUNCTION public.promise_catalog() RETURNS jsonb LANGUAGE sql STABLE SECURITY INVOKER SET search_path=public AS $$
 SELECT jsonb_build_object(
 'promises',COALESCE((SELECT jsonb_agg(to_jsonb(p) ORDER BY p.created_at DESC,p.id) FROM public.political_promises p),'[]'),
 'politicians',COALESCE((SELECT jsonb_agg(to_jsonb(p)) FROM public.politicians p),'[]'),
 'sources',COALESCE((SELECT jsonb_agg(to_jsonb(s)) FROM public.promise_sources s),'[]'),
 'assessments',COALESCE((SELECT jsonb_agg(to_jsonb(a)) FROM public.promise_assessments a),'[]'),
 'evidence',COALESCE((SELECT jsonb_agg(to_jsonb(e)) FROM public.promise_evidence e),'[]'),
 'reviews',COALESCE((SELECT jsonb_agg(to_jsonb(r)) FROM public.evidence_reviews r),'[]'),
 'research',COALESCE((SELECT jsonb_agg(to_jsonb(d) ORDER BY prepared_at DESC) FROM public.promise_research d),'[]'))
$$;
GRANT EXECUTE ON FUNCTION public.promise_catalog() TO anon,authenticated;
`;
fs.writeFileSync('drizzle/migrations/0004_promise_research.sql',sql);
