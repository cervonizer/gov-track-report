import { currentAssessment, calendar, type Catalog } from '../promises';

// Public integration deliberately uses the anonymous key, never service_role.
export async function publicCatalog(): Promise<Catalog> {
  const runtime = globalThis as typeof globalThis & {
    Deno?: {env: {get(name: string): string | undefined}};
    process?: {env: Record<string, string | undefined>};
  };
  const env = (name: string) => runtime.Deno?.env.get(name) ?? runtime.process?.env[name];
  const url = env('SUPABASE_URL') ?? import.meta.env?.VITE_SUPABASE_URL;
  const key = env('SUPABASE_ANON_KEY') ?? env('SUPABASE_PUBLISHABLE_KEY') ?? import.meta.env?.VITE_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) throw new Error('Catálogo indisponível: configuração pública do banco ausente.');
  const response = await fetch(`${url.replace(/\/$/, '')}/rest/v1/rpc/promise_catalog`, {
    method: 'POST', headers: {apikey: key, 'Content-Type': 'application/json'}, body: '{}',
  });
  if (!response.ok) throw new Error('Não foi possível consultar as promessas publicadas.');
  return response.json();
}
export function publishedPromises(c: Catalog, politicianId?: string) {
  return c.promises.filter(p => !politicianId || p.politician_id === politicianId).map(p => {
    const assessment = currentAssessment(c, p.id);
    return {...p, kind: 'promessa', status: assessment?.status ?? 'ainda não avaliável',
      fulfillment_percent: assessment?.fulfillment_percent ?? null,
      verification: assessment ? 'approved' : 'pending',
      calendar: calendar(p.promised_on, p.deadline),
      sources: c.sources.filter(s => s.promise_id === p.id && !(c.research ?? []).some(d => d.source_ids.includes(s.id))),
      research: (c.research ?? []).filter(d => d.promise_id === p.id).map(d => ({...d, verification: 'pending', sources: c.sources.filter(s => d.source_ids.includes(s.id))})), assessment: assessment ?? null,
      legacy_notice: p.legacy_assertion ? 'Registro antigo não verificado; alegações originais apenas para auditoria.' : null};
  });
}
