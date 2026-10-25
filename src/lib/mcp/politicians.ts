import { politiciansData } from '../../data/politiciansData';
import { publicCatalog, publishedPromises } from './promise-catalog';

export function findPolitician(query: string) {
  const q = query.trim().toLowerCase();
  return politiciansData.find(p => p.id === q) ?? politiciansData.find(p => p.name.toLowerCase() === q)
    ?? politiciansData.find(p => p.name.toLowerCase().includes(q)) ?? politiciansData.find(p => p.party.toLowerCase() === q);
}
export async function listPoliticians() {
  const catalog = await publicCatalog();
  return politiciansData.map(p => ({id:p.id, name:p.name, party:p.party, position:p.position, state:p.state,
    termStart:p.termStart, termEnd:p.termEnd, instagram:p.phone, website:p.website,
    counts:{votes:p.voteRecords.length, promises:catalog.promises.filter(x=>x.politician_id===p.id).length, proposals:p.proposals.length}}));
}
export async function politicianDetail(query: string) {
  const p = findPolitician(query);
  if (!p) return undefined;
  const {imageUrl: _imageUrl, phone, promises: _legacy, ...rest} = p;
  return {...rest, instagram:phone, promises:publishedPromises(await publicCatalog(),p.id)};
}
export async function listCommitments(query: string | undefined, status: string | undefined) {
  const catalog = await publicCatalog();
  const person = query ? findPolitician(query) : undefined;
  if (query && !person) return [];
  const items = publishedPromises(catalog, person?.id).map(p=>({...p,
    politicianId:p.politician_id, politicianName:catalog.politicians.find(x=>x.id===p.politician_id)?.name}));
  return status ? items.filter(i=>i.status.toLowerCase()===status.trim().toLowerCase()) : items;
}
export async function platformStats() {
  const catalog = await publicCatalog();
  return {politicians:politiciansData.length, votes:politiciansData.reduce((n,p)=>n+p.voteRecords.length,0),
    promises:catalog.promises.length, proposals:politiciansData.reduce((n,p)=>n+p.proposals.length,0)};
}
