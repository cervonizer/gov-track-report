import { z } from 'zod';
import type { Tables } from '@/integrations/supabase/types';
export const statuses = ['ainda não avaliável','em andamento','cumprida','parcialmente cumprida','não cumprida'] as const;
export const provenanceLabels = {official:'Oficial',non_official:'Não oficial',unknown:'Origem desconhecida'};
export type Catalog = {promises:Tables<'political_promises'>[];politicians:Tables<'politicians'>[];sources:Tables<'promise_sources'>[];assessments:Tables<'promise_assessments'>[];evidence:Tables<'promise_evidence'>[];reviews:Tables<'evidence_reviews'>[]};
export const emptyCatalog:Catalog={promises:[],politicians:[],sources:[],assessments:[],evidence:[],reviews:[]};
export function dayOrdinal(value:string|null|undefined):number|null {
 if(!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
 const n=Date.parse(value+'T00:00:00Z'); return Number.isFinite(n) && new Date(n).toISOString().slice(0,10)===value?n/86400000:null;
}
export function dateLabel(value:string|null|undefined){return dayOrdinal(value)===null?'Não informada':value?.split('-').reverse().join('/');}
export function todayInBrazil(now=new Date()) { return new Intl.DateTimeFormat('sv-SE',{timeZone:'America/Sao_Paulo',year:'numeric',month:'2-digit',day:'2-digit'}).format(now); }
export function calendar(start:string|null,end:string|null,today=todayInBrazil()) {
 const a=dayOrdinal(start),b=dayOrdinal(end),n=dayOrdinal(today);
 return {deadline:b===null?'sem prazo':n!==null&&n>b?'vencido':a!==null&&n!==null&&n<a?'futuro':'no prazo',percent:a===null||b===null||n===null||b<=a?null:Math.max(0,Math.min(100,(n-a)/(b-a)*100))};
}
export function evidenceApproved(c:Catalog,id:string){const r=c.reviews.filter(r=>r.evidence_id===id).sort((a,b)=>b.sequence-a.sequence)[0];return r?.decision==='approved';}
export function currentAssessment(c:Catalog,id:string){
 const latest=c.assessments.filter(a=>a.promise_id===id&&a.verification==='approved').sort((a,b)=>b.version-a.version)[0];
 if(!latest || !consistentPercent(latest.status,latest.fulfillment_percent)) return undefined;
 return (latest.status==='ainda não avaliável'||latest.evidence_ids.length>0)&&latest.evidence_ids.every(id=>c.evidence.some(e=>e.id===id&&e.promise_id===latest.promise_id)&&evidenceApproved(c,id))?latest:undefined;
}
export function filterPromises(c:Catalog,params:URLSearchParams,today?:string){return c.promises.filter(p=>{
 const status=currentAssessment(c,p.id)?.status??'ainda não avaliável'; const q=(params.get('q')??'').toLocaleLowerCase('pt-BR');
 const name=c.politicians.find(x=>x.id===p.politician_id)?.name??'';
 return (p.title+' '+p.description+' '+name).toLocaleLowerCase('pt-BR').includes(q)&&(!params.get('politico')||p.politician_id===params.get('politico'))&&(!params.get('categoria')||p.category===params.get('categoria'))&&(!params.get('status')||status===params.get('status'))&&(!params.get('prazo')||calendar(p.promised_on,p.deadline,today).deadline===params.get('prazo'))&&(!params.get('origem')||c.sources.some(s=>s.promise_id===p.id&&s.provenance===params.get('origem'))||params.get('origem')==='unknown'&&!c.sources.some(s=>s.promise_id===p.id));
 });}
export function consistentPercent(status:string,percent:number|null){return statuses.some(s=>s===status)&&(percent===null||Number.isFinite(percent)&&percent>=0&&percent<=100&&status!=='ainda não avaliável'&&(status!=='cumprida'||percent===100)&&(status!=='não cumprida'||percent===0)&&(status!=='parcialmente cumprida'||percent>0&&percent<100)&&(status!=='em andamento'||percent<100));}
export const sourceSchema=z.object({url:z.string().url().max(4000).refine(v=>/^https?:\/\//.test(v),'Use http ou https'),publisher:z.string().max(500),title:z.string().max(500),provenance:z.enum(['official','non_official','unknown']),quotation:z.string().max(10000),published_on:z.string(),accessed_on:z.string(),timestamp_start:z.string(),timestamp_end:z.string()});
