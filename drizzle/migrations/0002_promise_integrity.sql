-- Keep approved history visible for audit. Current conclusions are computed only
-- from the latest approved version; revoked evidence must never resurrect an older conclusion.
ALTER POLICY visible_assessments ON public.promise_assessments USING (
 (verification='approved' AND EXISTS(SELECT 1 FROM public.political_promises p WHERE p.id=promise_id AND p.published))
 OR submitted_by=auth.uid() OR public.is_promise_reviewer());

REVOKE INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER ON public.user_roles,
 public.politicians,public.political_promises,public.promise_sources,public.promise_evidence,
 public.evidence_reviews,public.promise_assessments FROM anon,authenticated;

CREATE OR REPLACE FUNCTION public.validate_assessment(s public.promise_status,p numeric,ids uuid[],pid uuid)
RETURNS void LANGUAGE plpgsql SECURITY DEFINER SET search_path=public AS $$
BEGIN
 IF s IS NULL OR ids IS NULL THEN RAISE EXCEPTION 'Situação e lista de evidências são obrigatórias'; END IF;
 IF p IS NOT NULL AND (p::text IN ('NaN','Infinity','-Infinity') OR p<0 OR p>100 OR s='ainda não avaliável'
   OR s='cumprida' AND p<>100 OR s='não cumprida' AND p<>0
   OR s='parcialmente cumprida' AND (p<=0 OR p>=100) OR s='em andamento' AND p>=100)
 THEN RAISE EXCEPTION 'Percentual incompatível com a situação'; END IF;
 IF s<>'ainda não avaliável' AND cardinality(ids)=0 THEN RAISE EXCEPTION 'A avaliação exige evidências aprovadas'; END IF;
 IF EXISTS(SELECT 1 FROM unnest(ids) eid WHERE NOT EXISTS(SELECT 1 FROM public.promise_evidence e
   WHERE e.id=eid AND e.promise_id=pid AND public.evidence_is_public(e.id)))
 THEN RAISE EXCEPTION 'Evidência não aprovada ou de outra promessa'; END IF;
END $$;

CREATE OR REPLACE FUNCTION public.validate_source_dates() RETURNS trigger
LANGUAGE plpgsql SET search_path=public AS $$
BEGIN
 IF NEW.published_on > (now() AT TIME ZONE 'America/Sao_Paulo')::date
 OR NEW.accessed_on > (now() AT TIME ZONE 'America/Sao_Paulo')::date
 THEN RAISE EXCEPTION 'Datas de publicação e consulta não podem estar no futuro'; END IF;
 IF NEW.published_on IS NOT NULL AND NEW.accessed_on IS NOT NULL AND NEW.accessed_on<NEW.published_on
 THEN RAISE EXCEPTION 'A consulta não pode anteceder a publicação'; END IF;
 RETURN NEW;
END $$;
DROP TRIGGER IF EXISTS source_dates ON public.promise_sources;
CREATE TRIGGER source_dates BEFORE INSERT OR UPDATE ON public.promise_sources FOR EACH ROW EXECUTE FUNCTION public.validate_source_dates();
DROP TRIGGER IF EXISTS evidence_dates ON public.promise_evidence;
CREATE TRIGGER evidence_dates BEFORE INSERT ON public.promise_evidence FOR EACH ROW EXECUTE FUNCTION public.validate_source_dates();
REVOKE ALL ON FUNCTION public.validate_source_dates() FROM PUBLIC,anon,authenticated;

-- Private helpers are not public RPCs. Policies call the two boolean helpers by design.
REVOKE ALL ON FUNCTION public.require_contributor(boolean),public.validate_assessment(public.promise_status,numeric,uuid[],uuid) FROM PUBLIC,anon,authenticated;
