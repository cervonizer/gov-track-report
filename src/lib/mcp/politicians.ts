import { politiciansData } from "../../data/politiciansData";

export type PoliticianSummary = {
  id: string;
  name: string;
  party: string;
  position: string;
  state: string;
  termStart: string;
  termEnd: string;
  instagram: string;
  website: string;
  counts: { votes: number; promises: number; proposals: number };
};

export function listPoliticians(): PoliticianSummary[] {
  return politiciansData.map((p) => ({
    id: p.id,
    name: p.name,
    party: p.party,
    position: p.position,
    state: p.state,
    termStart: p.termStart,
    termEnd: p.termEnd,
    instagram: p.phone,
    website: p.website,
    counts: {
      votes: p.voteRecords.length,
      promises: p.promises.length,
      proposals: p.proposals.length,
    },
  }));
}

export function findPolitician(query: string) {
  const q = query.trim().toLowerCase();
  return (
    politiciansData.find((p) => p.id === q) ??
    politiciansData.find((p) => p.name.toLowerCase() === q) ??
    politiciansData.find((p) => p.name.toLowerCase().includes(q)) ??
    politiciansData.find((p) => p.party.toLowerCase() === q)
  );
}

export function politicianDetail(query: string) {
  const p = findPolitician(query);
  if (!p) return undefined;
  const { imageUrl: _imageUrl, phone, ...rest } = p;
  return { ...rest, instagram: phone };
}

export function listCommitments(query: string | undefined, status: string | undefined) {
  const people = query ? [findPolitician(query)].filter(Boolean) : politiciansData;
  const items = (people as typeof politiciansData).flatMap((p) =>
    [
      ...p.promises.map((pr) => ({ kind: "promessa" as const, ...pr })),
      ...p.proposals.map((pp) => ({
        kind: "proposta" as const,
        id: pp.id,
        title: pp.title,
        description: pp.description,
        datePromised: pp.dateProposed,
        deadline: "",
        status: pp.status,
        progress: pp.supportLevel,
        category: pp.category,
        sources: pp.sources,
      })),
    ].map((item) => ({ politicianId: p.id, politicianName: p.name, ...item })),
  );
  return status
    ? items.filter((i) => i.status.toLowerCase() === status.trim().toLowerCase())
    : items;
}

export function platformStats() {
  return {
    politicians: politiciansData.length,
    votes: politiciansData.reduce((n, p) => n + p.voteRecords.length, 0),
    promises: politiciansData.reduce((n, p) => n + p.promises.length, 0),
    proposals: politiciansData.reduce((n, p) => n + p.proposals.length, 0),
  };
}
