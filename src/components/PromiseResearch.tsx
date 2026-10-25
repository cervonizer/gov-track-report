import {Link} from 'react-router-dom';
import {BookOpen, CircleHelp} from 'lucide-react';
import {type Catalog, dateLabel} from '@/lib/promises';
import {Citation} from './PromiseCitation';

export function PromiseResearch({promiseId,catalog}:{promiseId:string;catalog:Catalog}) {
 const drafts=(catalog.research??[]).filter(d=>d.promise_id===promiseId);
 if(!drafts.length) return null;
 return <section aria-label="Pesquisa documental" className="space-y-6">{drafts.map(d=>{
  const sources=d.source_ids.map(id=>catalog.sources.find(s=>s.id===id)).filter(s=>s!==undefined);
  return <article key={d.id} className="rounded-3xl border bg-muted/30 p-5 sm:p-8 space-y-6 break-words">
   <header className="space-y-3">
    <span className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs font-medium"><CircleHelp size={15}/>Pesquisa aguardando revisão</span>
    <h2 className="text-2xl font-semibold flex items-start gap-3"><BookOpen className="shrink-0 mt-1" size={22}/>{d.title}</h2>
    <p className="text-xs text-muted-foreground">{d.prepared_by} · Fontes consultadas até {dateLabel(d.cutoff_on)}</p>
    <p className="text-sm border-l-2 border-amber-500 pl-3">Este dossiê ainda não foi aprovado. Não determina o status nem o percentual de cumprimento da promessa.</p>
   </header>
   <p>{d.summary}</p>
   <details><summary className="cursor-pointer font-medium">Escopo e método da pesquisa</summary><div className="space-y-3 pt-3 text-sm"><p>{d.scope}</p><p>{d.methodology}</p></div></details>
   <div className="space-y-5"><h3 className="font-semibold text-lg">Marcos documentais</h3>{d.findings.map((f,i)=><div key={i} className="border-l-2 pl-4 space-y-2"><p className="text-xs text-muted-foreground">{dateLabel(f.date)}</p><h4 className="font-medium">{f.title}</h4><p className="text-sm">{f.text}</p><div className="flex flex-wrap gap-3 text-xs">{f.source_ids.map(id=>{const n=d.source_ids.indexOf(id);return n<0?null:<a key={id} href={`#research-source-${id}`} className="underline">Fonte {n+1}</a>;})}</div></div>)}</div>
   <div className="space-y-4"><h3 className="font-semibold text-lg">Fontes da pesquisa</h3><p className="text-xs text-muted-foreground">A classificação oficial ou não oficial indica a origem. Não equivale a uma verificação do compromisso.</p>{sources.map((s,i)=><div id={`research-source-${s.id}`} key={s.id} className="scroll-mt-24 rounded-2xl border bg-background p-4 space-y-2"><p className="text-xs font-semibold text-muted-foreground">Fonte {i+1} · Aguardando revisão</p><Citation source={s}/></div>)}</div>
   <div className="space-y-3"><h3 className="font-semibold text-lg">O que falta verificar</h3><ul className="list-disc pl-5 space-y-2 text-sm">{d.review_checklist.map(item=><li key={item}>{item}</li>)}</ul></div>
   {d.recording_candidate&&<div className="text-sm space-y-2"><a className="underline" target="_blank" rel="noopener noreferrer" href={d.recording_candidate.url}>{d.recording_candidate.title}</a><p>{d.recording_candidate.origin}</p><p className="text-muted-foreground">Trecho ainda não conferido; sem marcação de tempo validada.</p></div>}
   <details><summary className="cursor-pointer font-medium">Limites da coleta</summary><ul className="list-disc pl-5 pt-3 space-y-2 text-sm">{d.limitations.map(item=><li key={item}>{item}</li>)}</ul></details>
   <p className="text-sm text-muted-foreground">A aprovação acontece pelo fluxo de evidências e avaliações. <Link className="underline" to="/revisao">Abrir painel de revisão</Link></p>
  </article>;
 })}</section>;
}
