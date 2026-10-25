const fs = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');
function readModule(path) {
  const exports = {};
  const code = ts.transpileModule(fs.readFileSync(path, 'utf8'), {compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText;
  vm.runInNewContext(code, {exports, require:()=>new Proxy({}, {get:()=>undefined})});
  return exports;
}
const {politiciansData} = readModule('src/data/politiciansData.ts');
const {legacyDataMap} = readModule('src/data/legacyData.ts');
const quote = value => value == null ? 'NULL' : "'" + String(value).replaceAll("'", "''") + "'";
const sql = ['-- Importação auditável; nenhum status ou percentual antigo constitui avaliação aprovada.'];
for (const person of politiciansData) {
  sql.push(`INSERT INTO public.politicians(id,name) VALUES(${quote(person.id)},${quote(person.name)}) ON CONFLICT(id) DO NOTHING;`);
  const records = [...person.promises.map(p=>({key:`profile:${person.id}:${p.id}`, original:p, title:p.title, category:p.category})), ...(legacyDataMap[person.id]?.commitments??[]).map(p=>({key:`legacy:${person.id}:${p.id}`,original:p,title:p.title,category:'Histórico'}))];
  for(const record of records) {
    const original = {...record.original}; delete original.icon;
    sql.push(`INSERT INTO public.political_promises(politician_id,legacy_key,title,description,category,legacy_assertion,date_uncertainty,published) VALUES(${quote(person.id)},${quote(record.key)},${quote(record.title)},'Compromisso atribuído no acervo anterior da Polis. A atribuição, as datas e o cumprimento aguardam verificação.',${quote(record.category)},${quote(JSON.stringify(original))}::jsonb,'Datas e prazo do registro antigo não confirmados. Ausência de prazo confirmado não significa que a declaração original não tinha prazo.',true) ON CONFLICT(legacy_key) DO NOTHING;`);
    for(const source of original.sources??[]) sql.push(`INSERT INTO public.promise_sources(promise_id,url,title,provenance,uncertainty,published) SELECT p.id,${quote(source.url)},${quote(source.label)},'unknown','Link preservado do acervo anterior; conteúdo, natureza da fonte e vínculo com a promessa ainda não verificados.',true FROM public.political_promises p WHERE p.legacy_key=${quote(record.key)} AND NOT EXISTS(SELECT 1 FROM public.promise_sources s WHERE s.promise_id=p.id AND s.url=${quote(source.url)});`);
  }
}

fs.writeFileSync('drizzle/migrations/0003_legacy_promises.sql', sql.join('\n')+'\n');
console.log('Importação gerada:', sql.filter(s=>s.startsWith('INSERT INTO public.political_promises')).length, 'registros');
