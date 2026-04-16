export const translateVote = (v: string): string => {
  switch (v) {
    case 'Yes': return 'Sim';
    case 'No': return 'Não';
    case 'Abstain': return 'Abstenção';
    case 'Absent': return 'Ausente';
    default: return v;
  }
};

export const translatePromiseStatus = (s: string): string => {
  switch (s) {
    case 'Fulfilled': return 'Cumprida';
    case 'In Progress': return 'Em Andamento';
    case 'Broken': return 'Quebrada';
    case 'Expired': return 'Expirada';
    default: return s;
  }
};

export const translateProposalStatus = (s: string): string => {
  switch (s) {
    case 'Active': return 'Ativa';
    case 'Passed': return 'Aprovada';
    case 'Failed': return 'Rejeitada';
    case 'Withdrawn': return 'Retirada';
    default: return s;
  }
};
