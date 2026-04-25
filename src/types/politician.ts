export interface Source {
  label: string;
  url: string;
}

export interface VoteRecord {
  id: string;
  title: string;
  description: string;
  date: string;
  vote: 'Yes' | 'No' | 'Abstain' | 'Absent';
  billNumber: string;
  category: string;
  sources?: Source[];
}

export interface Promise {
  id: string;
  title: string;
  description: string;
  datePromised: string;
  deadline: string;
  status: 'Fulfilled' | 'In Progress' | 'Broken' | 'Expired';
  progress: number;
  category: string;
  sources?: Source[];
}

export interface Proposal {
  id: string;
  title: string;
  description: string;
  dateProposed: string;
  status: 'Active' | 'Passed' | 'Failed' | 'Withdrawn';
  category: string;
  supportLevel: number;
  sources?: Source[];
}

export interface Mandate {
  position: string;
  start: string; // YYYY or YYYY-MM-DD
  end: string;   // YYYY or YYYY-MM-DD
  current?: boolean;
}

export interface Politician {
  id: string;
  name: string;
  party: string;
  position: string;
  district?: string;
  state: string;
  birthPlace: string;
  mandates: Mandate[];
  termStart: string;
  termEnd: string;
  imageUrl: string;
  biography: string;
  website: string;
  email: string;
  phone: string;
  voteRecords: VoteRecord[];
  promises: Promise[];
  proposals: Proposal[];
  committeeMemberships: string[];
}
