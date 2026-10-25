-- Research is a public draft, not an approved evidence assessment.
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
DECLARE d jsonb := $dossier${"key":"salario-minimo-pesquisa-2026-10-24-v1","promise_legacy_key":"profile:1:p3","title":"Valorização do salário mínimo: documentos para revisão","cutoff_on":"2026-10-24","prepared_by":"Pesquisa assistida por IA — sem aprovação editorial","scope":"Examinar a retomada da política de valorização e distinguir a instituição da regra de sua execução continuada. Não confirmar a data de campanha de 2022 nem o prazo de 2026 presentes no acervo antigo.","summary":"Foram localizados relatos de uma declaração de fevereiro de 2023, a lei que instituiu a política, uma regra posterior de limitação do ganho real e o decreto que fixou o valor para 2026. O conjunto ainda não equivale a uma avaliação de cumprimento.","methodology":"Confrontar a declaração atribuída ao político com o ato instituidor, as regras posteriores e os atos de execução. Para medir ganho real, comparar cada reajuste com o INPC do período de referência correto; não confundir inflação do ano civil com os 12 meses encerrados em novembro. Não calcular percentual de cumprimento com a variação nominal do salário.","findings":[{"date":"2023-02-16","title":"Declaração reportada em entrevista à CNN","text":"TV Cultura e o site do PT reproduzem uma declaração sobre retomar uma regra baseada em inflação e PIB. A publicação partidária tem interesse direto no tema; a gravação integral e o trecho exato ainda precisam ser conferidos. É uma reafirmação posterior à eleição, não comprovação da data de campanha do acervo.","source_keys":["cultura","pt"]},{"date":"2023-08-28","title":"Instituição da política em lei","text":"A Lei 14.663 estabeleceu diretrizes de valorização a partir de 2024. O art. 3º prevê INPC e crescimento real do PIB de dois anos antes, com tratamento específico para PIB negativo. A existência da lei é um marco documental; não prova, sozinha, execução integral em todos os anos.","source_keys":["lei2023"]},{"date":"2024-12-27","title":"Regra posterior para o ganho real","text":"O art. 4º da Lei 15.077 vincula o aumento real, entre 2025 e 2030, a limites relacionados ao arcabouço fiscal. A avaliação deve considerar essa regra e distinguir ganho acima da inflação de repasse integral do PIB.","source_keys":["lei2024"]},{"date":"2026-01-01","title":"Valor fixado para 2026","text":"O Decreto 12.797, assinado em 23/12/2025 e publicado em 24/12/2025, fixou R$ 1.621 a partir de 01/01/2026 e cita as duas leis. Esse valor nominal não é um percentual de cumprimento da promessa.","source_keys":["decreto2026"]}],"review_checklist":["Conferir a gravação original da entrevista e registrar o timestamp somente após ouvir o trecho.","Confirmar qual declaração define o compromisso de campanha; manter 30/10/2022 como data não confirmada até haver fonte direta.","Distinguir o compromisso pontual de retomar a política da obrigação recorrente de valorização anual.","Conferir decretos e séries do INPC para todos os períodos avaliados, incluindo o período de referência de novembro.","Registrar separadamente a mudança de regra de 2024 e seu efeito sobre o repasse do PIB.","Resolver a relação com o registro semelhante legacy:1:3, preservando a auditoria e sem contar duas vezes um mesmo compromisso.","Submeter evidências e avaliação ao fluxo de revisão com uma conta autorizada; não aprovar automaticamente este dossiê."],"sources":[{"key":"cultura","url":"https://cultura.uol.com.br/noticias/56174_lula-confirma-salario-minimo-de-r-1320-e-anuncia-isencao-do-ir-de-r-2640.html","title":"Lula confirma salário mínimo de R$ 1.320 e anuncia isenção de IR de R$ 2.640","publisher":"TV Cultura — jornalismo","provenance":"non_official","published_on":"2023-02-16","accessed_on":"2026-10-24","quotation":"O salário mínimo terá, além da reposição inflacionária, terá o crescimento do PIB","uncertainty":"Reprodução jornalística de declaração. Classificada como fonte não governamental para este registro; não é a gravação primária da entrevista. Pesquisa pendente de revisão."},{"key":"pt","url":"https://pt.org.br/lula-a-cnn-eu-nao-estou-governando-para-o-mercado-e-sim-para-o-povo/","title":"Lula, à CNN: Eu não estou governando para o mercado, e sim para o povo","publisher":"Partido dos Trabalhadores — Rede PT de Comunicação","provenance":"non_official","published_on":"2023-02-16","accessed_on":"2026-10-24","quotation":"O salário mínimo, além da reposição inflacionária, terá o crescimento do PIB","uncertainty":"Publicação partidária interessada que reproduz declaração e incorpora vídeo da CNN. Não é fonte governamental nem checagem independente. Timestamp não conferido."},{"key":"lei2023","url":"https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/l14663.htm","title":"Lei 14.663, de 28 de agosto de 2023 — arts. 3º e 4º","publisher":"Presidência da República — Planalto","provenance":"official","published_on":"2023-08-28","accessed_on":"2026-10-24","quotation":"Ficam estabelecidas as diretrizes para a política de valorização do salário mínimo a vigorar a partir de 2024","uncertainty":"Ato normativo localizado. Evidencia a instituição da política; não comprova isoladamente sua execução contínua ou o cumprimento integral da promessa."},{"key":"lei2024","url":"https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/l15077.htm","title":"Lei 15.077, de 27 de dezembro de 2024 — art. 4º","publisher":"Presidência da República — Planalto","provenance":"official","published_on":"2024-12-27","accessed_on":"2026-10-24","quotation":null,"uncertainty":"Regra de limitação do ganho real entre 2025 e 2030. Deve ser lida junto da Lei 14.663 e da LC 200; leitura documental não equivale a parecer jurídico ou avaliação aprovada."},{"key":"decreto2026","url":"https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/decreto/d12797.htm","title":"Decreto 12.797, de 23 de dezembro de 2025 — valor para 2026","publisher":"Presidência da República — Planalto","provenance":"official","published_on":"2025-12-24","accessed_on":"2026-10-24","quotation":"A partir de 1º de janeiro de 2026, o valor do salário mínimo será de R$ 1.621,00","uncertainty":"Ato assinado em 23/12/2025, com publicação indicada no DOU de 24/12/2025. Valor nominal não equivale a ganho real nem a percentual de cumprimento."}],"retrieval_limits":["O endereço antigo do portal gov.br sobre o pronunciamento de abril de 2023 retornou conteúdo restrito; não foi usado como evidência.","A data de publicação da matéria da TV Cultura consta no resultado de busca e no conteúdo consultado pelo serviço web; a captura principal não inclui o cabeçalho com a data.","Não foram conferidos o áudio integral, timestamps ou a série completa de reajustes e INPC."],"recording_candidate":{"url":"https://www.youtube.com/watch?v=5OFu98ADdUw","publisher":"CNN Brasil","title":"CNN 360º — 16/02/2023","origin":"Link incorporado na publicação partidária consultada; gravação não ouvida nesta pesquisa.","timestamp_start":null,"timestamp_end":null},"review_state":"awaiting_review","fulfillment_percent":null,"reviewer_id":null,"reviewed_at":null}$dossier$::jsonb;
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
