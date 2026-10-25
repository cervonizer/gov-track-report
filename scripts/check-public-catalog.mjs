import fs from 'node:fs';
const env=Object.fromEntries(fs.readFileSync('.env','utf8').trim().split('\n').map(line=>{const [k,...v]=line.split('=');return [k,v.join('=').replace(/^"|"$/g,'')];}));
const response=await fetch(env.VITE_SUPABASE_URL+'/rest/v1/rpc/promise_catalog',{method:'POST',headers:{apikey:env.VITE_SUPABASE_PUBLISHABLE_KEY,'Content-Type':'application/json'},body:'{}'});
console.log('Public catalog HTTP',response.status);
if(!response.ok)process.exitCode=1;
else {const c=await response.json();console.log(JSON.stringify({promises:c.promises.length,sources:c.sources.length,assessments:c.assessments.length,evidence:c.evidence.length}));}
