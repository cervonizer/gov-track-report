const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const ts=require('typescript');
const exported={};
const code=ts.transpileModule(fs.readFileSync('src/lib/promises.ts','utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText;
vm.runInNewContext(code,{exports:exported,require,URLSearchParams,Intl,Date});
const {calendar,todayInBrazil,dayOrdinal,currentAssessment,consistentPercent,filterPromises}=exported;
const catalog=()=>({promises:[],politicians:[{id:'1',name:'Pessoa Um'}],sources:[],assessments:[],evidence:[],reviews:[]});
const p={id:'p',politician_id:'1',title:'Mobilidade local',description:'Compromisso atribuído',category:'Infraestrutura',promised_on:'2025-01-01',deadline:'2025-12-31'};
const assessment=(extra={})=>({id:'a',promise_id:'p',version:1,verification:'approved',status:'cumprida',fulfillment_percent:100,evidence_ids:['e'],...extra});
function reviewed(){const c=catalog();c.promises=[{...p}];c.assessments=[assessment()];c.evidence=[{id:'e',promise_id:'p'}];c.reviews=[{evidence_id:'e',sequence:1,decision:'approved'}];return c;}
test('civil dates validate leap years without timezone drift',()=>{assert.equal(dayOrdinal('2025-02-29'),null);assert.notEqual(dayOrdinal('2024-02-29'),null);assert.equal(dayOrdinal('2025-13-01'),null);});
test('Brazil reference day does not advance at UTC midnight',()=>{assert.equal(todayInBrazil(new Date('2026-10-25T01:00:00Z')),'2026-10-24');});
test('elapsed time clamps past/future and handles invalid intervals',()=>{assert.equal(calendar('2025-01-01','2025-01-11','2024-12-31').percent,0);assert.equal(calendar('2025-01-01','2025-01-11','2025-01-06').percent,50);assert.equal(calendar('2025-01-01','2025-01-11','2026-01-01').percent,100);assert.equal(calendar('2025-01-11','2025-01-01','2025-01-05').percent,null);assert.equal(calendar(null,'2025-01-11','2025-01-05').percent,null);});
test('deadline includes its last civil day',()=>{assert.equal(calendar('2025-01-01','2025-01-11','2025-01-11').deadline,'no prazo');assert.equal(calendar('2025-01-01','2025-01-11','2025-01-12').deadline,'vencido');});
test('missing deadline is independent of fulfillment',()=>{const c=reviewed();c.promises[0].deadline=null;assert.equal(calendar(p.promised_on,null).percent,null);assert.equal(filterPromises(c,new URLSearchParams('prazo=sem+prazo&status=cumprida')).length,1);});
test('overdue alone does not imply failure or 0% fulfillment',()=>{const c=catalog();c.promises=[p];assert.equal(currentAssessment(c,'p'),undefined);assert.equal(filterPromises(c,new URLSearchParams('prazo=vencido&status=ainda+n%C3%A3o+avali%C3%A1vel'),'2026-01-01').length,1);});
test('latest unsupported approval never resurrects older conclusion',()=>{const c=reviewed();c.assessments.push(assessment({id:'new',version:2,evidence_ids:['revoked']}));assert.equal(currentAssessment(c,'p'),undefined);});
test('revocation invalidates latest conclusion and cross-promise evidence is invalid',()=>{const c=reviewed();assert.equal(currentAssessment(c,'p').status,'cumprida');c.reviews.push({evidence_id:'e',sequence:2,decision:'rejected'});assert.equal(currentAssessment(c,'p'),undefined);c.reviews.pop();c.evidence[0].promise_id='other';assert.equal(currentAssessment(c,'p'),undefined);});
test('pending assessment and provenance cannot prove fulfillment',()=>{const c=reviewed();c.assessments[0].verification='pending';c.sources=[{promise_id:'p',provenance:'official'}];assert.equal(currentAssessment(c,'p'),undefined);assert.equal(filterPromises(c,new URLSearchParams('origem=official&politico=1&categoria=Infraestrutura&q=mobilidade')).length,1);assert.equal(filterPromises(c,new URLSearchParams('origem=non_official')).length,0);});
test('unknown stays nullable; impossible percentages are rejected',()=>{assert.equal(consistentPercent('ainda não avaliável',null),true);assert.equal(consistentPercent('ainda não avaliável',0),false);assert.equal(consistentPercent('cumprida',70),false);assert.equal(consistentPercent('cumprida',100),true);assert.equal(consistentPercent('parcialmente cumprida',100),false);assert.equal(consistentPercent('em andamento',NaN),false);assert.equal(consistentPercent('inventado',null),false);});

test('public research and its sources never become fulfillment assessments',()=>{const c=catalog();c.promises=[p];c.sources=[{id:'s',promise_id:'p',provenance:'official'}];c.research=[{promise_id:'p',state:'awaiting_review',source_ids:['s'],findings:[{text:'Norma localizada'}]}];assert.equal(currentAssessment(c,'p'),undefined);assert.equal(filterPromises(c,new URLSearchParams('status=cumprida')).length,0);assert.equal(filterPromises(c,new URLSearchParams('status=ainda+n%C3%A3o+avali%C3%A1vel')).length,1);});
