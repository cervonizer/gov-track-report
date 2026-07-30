import { mockPoliticians } from "../../data/mockData";
import { legacyDataMap } from "../../data/legacyData";

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
  return mockPoliticians.map((p) => ({
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
    mockPoliticians.find((p) => p.id === q) ??
    mockPoliticians.find((p) => p.name.toLowerCase() === q) ??
    mockPoliticians.find((p) => p.name.toLowerCase().includes(q)) ??
    mockPoliticians.find((p) => p.party.toLowerCase() === q)
  );
}

export function politicianDetail(query: string) {
  const p = findPolitician(query);
  if (!p) return undefined;
  const { imageUrl: _imageUrl, phone, ...rest } = p;
  return { ...rest, instagram: phone };
}

export function politicianLegacy(query: string) {
  const p = findPolitician(query);
  if (!p) return undefined;
  const legacy = legacyDataMap[p.id];
  if (!legacy) return undefined;
  return {
    politician: { id: p.id, name: p.name, position: p.position, party: p.party },
    subtitle: legacy.subtitle,
    comparisonLabel: legacy.comparisonLabel,
    footnote: legacy.footnote,
    commitments: legacy.commitments.map(({ icon: _icon, ...c }) => c),
    performance: legacy.performance.map(({ icon: _icon, ...cat }) => cat),
    dataSources: legacy.dataSources ?? [],
  };
}

export function platformStats() {
  return {
    politicians: mockPoliticians.length,
    votes: mockPoliticians.reduce((n, p) => n + p.voteRecords.length, 0),
    promises: mockPoliticians.reduce((n, p) => n + p.promises.length, 0),
    proposals: mockPoliticians.reduce((n, p) => n + p.proposals.length, 0),
  };
}
