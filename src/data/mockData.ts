import { Politician } from '@/types/politician';

export const mockPoliticians: Politician[] = [
  {
    id: '1',
    name: 'Luiz Inácio Lula da Silva',
    party: 'PT',
    position: 'Presidente da República',
    state: 'São Paulo',
    district: undefined,
    birthPlace: 'Caetés, PE',
    mandates: [
      { position: 'Deputado Federal (SP)', start: '1987', end: '1991' },
      { position: 'Presidente da República', start: '2003', end: '2006' },
      { position: 'Presidente da República', start: '2007', end: '2010' },
      { position: 'Presidente da República', start: '2023', end: '2027', current: true },
    ],
    termStart: '2023-01-01',
    termEnd: '2027-01-01',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Presidente_Lula.jpg/440px-Presidente_Lula.jpg',
    biography: 'Luiz Inácio Lula da Silva, nascido em 27 de outubro de 1945 em Caetés, Pernambuco, é o 39º presidente do Brasil, exercendo seu terceiro mandato desde 1º de janeiro de 2023. Metalúrgico e sindicalista, foi presidente do Sindicato dos Metalúrgicos do ABC e cofundador do Partido dos Trabalhadores (PT) em 1980. Governou o Brasil de 2003 a 2010, período marcado por programas sociais como o Bolsa Família e o Fome Zero, que retiraram milhões de brasileiros da pobreza. Em seu atual mandato, retomou políticas de combate à fome, proteção ambiental na Amazônia e reinserção do Brasil na diplomacia internacional.',
    website: 'https://www.gov.br/planalto',
    email: 'contato@planalto.gov.br',
    instagram: 'lulaoficial',
    committeeMemberships: ['BRICS', 'G20', 'MERCOSUL', 'CELAC'],
    voteRecords: [
      {
        id: 'v1',
        title: 'Novo Arcabouço Fiscal',
        description: 'Sanção do novo marco fiscal em substituição ao Teto de Gastos.',
        date: '2023-08-31',
        vote: 'Yes',
        billNumber: 'LC 200/2023',
        category: 'Economia'
      },
      {
        id: 'v2',
        title: 'Reforma Tributária',
        description: 'Sanção da Emenda Constitucional da Reforma Tributária sobre o consumo.',
        date: '2023-12-20',
        vote: 'Yes',
        billNumber: 'PEC 45/2019',
        category: 'Economia'
      },
      {
        id: 'v3',
        title: 'Marco Temporal de Terras Indígenas',
        description: 'Veto parcial ao projeto que estabelecia marco temporal para demarcação de terras indígenas.',
        date: '2023-10-20',
        vote: 'No',
        billNumber: 'PL 2903/2023',
        category: 'Meio Ambiente'
      },
      {
        id: 'v16',
        title: 'Igualdade Salarial',
        description: 'Sanção da lei que garante igualdade salarial entre homens e mulheres.',
        date: '2023-07-03',
        vote: 'Yes',
        billNumber: 'PL 1085/2023',
        category: 'Trabalho'
      }
    ],
    promises: [
      {
        id: 'p1',
        title: 'Acabar com a Fome no Brasil',
        description: 'Retomar e ampliar o programa Brasil Sem Fome para tirar o país do Mapa da Fome da ONU.',
        datePromised: '2022-10-30',
        deadline: '2026-12-31',
        status: 'In Progress',
        progress: 55,
        category: 'Social'
      },
      {
        id: 'p2',
        title: 'Desmatamento Zero na Amazônia',
        description: 'Combater o desmatamento ilegal e alcançar desmatamento zero na Amazônia até 2030.',
        datePromised: '2022-10-30',
        deadline: '2030-12-31',
        status: 'In Progress',
        progress: 45,
        category: 'Meio Ambiente'
      },
      {
        id: 'p3',
        title: 'Reajuste Real do Salário Mínimo',
        description: 'Garantir reajuste do salário mínimo acima da inflação, com ganho real pelo PIB.',
        datePromised: '2022-10-30',
        deadline: '2026-12-31',
        status: 'Fulfilled',
        progress: 100,
        category: 'Economia'
      },
      {
        id: 'p16',
        title: 'Retomar o Minha Casa Minha Vida',
        description: 'Relançar o programa habitacional com meta de 2 milhões de moradias.',
        datePromised: '2022-10-30',
        deadline: '2026-12-31',
        status: 'In Progress',
        progress: 40,
        category: 'Habitação'
      }
    ],
    proposals: [
      {
        id: 'pr1',
        title: 'Nova Indústria Brasil (NIB)',
        description: 'Plano de neoindustrialização com foco em transição energética, saúde, agro sustentável e defesa.',
        dateProposed: '2024-01-22',
        status: 'Active',
        category: 'Economia',
        supportLevel: 65
      },
      {
        id: 'pr2',
        title: 'Programa Pé-de-Meia',
        description: 'Poupança para estudantes do ensino médio público como incentivo à permanência escolar.',
        dateProposed: '2024-03-26',
        status: 'Passed',
        category: 'Educação',
        supportLevel: 82
      },
      {
        id: 'pr11',
        title: 'Programa Acredita',
        description: 'Programa de crédito e microcrédito para famílias de baixa renda e pequenos empreendedores.',
        dateProposed: '2024-04-22',
        status: 'Active',
        category: 'Economia',
        supportLevel: 70
      }
    ]
  },
  {
    id: '2',
    name: 'Flávio Bolsonaro',
    party: 'PL',
    position: 'Senador',
    state: 'Rio de Janeiro',
    district: undefined,
    birthPlace: 'Rio de Janeiro, RJ',
    mandates: [
      { position: 'Deputado Estadual (RJ)', start: '2003', end: '2007' },
      { position: 'Deputado Estadual (RJ)', start: '2007', end: '2011' },
      { position: 'Deputado Estadual (RJ)', start: '2011', end: '2015' },
      { position: 'Deputado Estadual (RJ)', start: '2015', end: '2019' },
      { position: 'Senador (RJ)', start: '2019', end: '2027' },
      { position: 'Senador (RJ)', start: '2023', end: '2031', current: true },
    ],
    termStart: '2023-02-01',
    termEnd: '2031-02-01',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Foto_oficial_de_Fl%C3%A1vio_Bolsonaro_%282%29.jpg/440px-Foto_oficial_de_Fl%C3%A1vio_Bolsonaro_%282%29.jpg',
    biography: 'Flávio Nantes Bolsonaro é um político brasileiro, senador pelo estado do Rio de Janeiro desde 2019. Filho mais velho do ex-presidente Jair Bolsonaro, iniciou sua carreira política como deputado estadual pelo Rio de Janeiro, cargo que exerceu por quatro mandatos consecutivos (2003-2019) na Assembleia Legislativa do Estado do Rio de Janeiro (ALERJ). Como senador, tem atuado em pautas conservadoras, defesa da família tradicional, segurança pública e liberalismo econômico. É formado em Direito e foi reeleito senador em 2022 para um mandato até 2031.',
    website: 'https://flaviobolsonaro.com',
    email: 'sen.flaviobolsonaro@senado.leg.br',
    instagram: 'flaviobolsonaro',
    committeeMemberships: ['Comissão de Assuntos Econômicos (CAE)', 'Comissão de Constituição, Justiça e Cidadania (CCJ)', 'Comissão de Segurança Pública (CSP)'],
    voteRecords: [
      {
        id: 'v4',
        title: 'Reforma Tributária',
        description: 'Votação da PEC da Reforma Tributária que unifica impostos sobre consumo.',
        date: '2023-11-08',
        vote: 'No',
        billNumber: 'PEC 45/2019',
        category: 'Economia'
      },
      {
        id: 'v5',
        title: 'Marco Legal das Armas',
        description: 'Projeto que flexibiliza regras para posse e porte de armas de fogo.',
        date: '2023-06-15',
        vote: 'Yes',
        billNumber: 'PL 3723/2019',
        category: 'Segurança Pública'
      },
      {
        id: 'v5b',
        title: 'Novo Arcabouço Fiscal',
        description: 'Votação do novo marco fiscal proposto pelo governo Lula.',
        date: '2023-06-01',
        vote: 'No',
        billNumber: 'PLP 93/2023',
        category: 'Economia'
      }
    ],
    promises: [
      {
        id: 'p4',
        title: 'Redução de Impostos',
        description: 'Lutar pela redução da carga tributária sobre empresas e cidadãos brasileiros.',
        datePromised: '2022-08-15',
        deadline: '2026-12-31',
        status: 'In Progress',
        progress: 30,
        category: 'Economia'
      },
      {
        id: 'p5',
        title: 'Segurança Pública',
        description: 'Defender o endurecimento de penas para crimes violentos e o direito à legítima defesa armada.',
        datePromised: '2022-08-15',
        deadline: '2026-12-31',
        status: 'In Progress',
        progress: 45,
        category: 'Segurança Pública'
      },
      {
        id: 'p5b',
        title: 'Combate à Corrupção',
        description: 'Apoiar projetos que fortaleçam o combate à corrupção e a transparência pública.',
        datePromised: '2022-08-15',
        deadline: '2026-12-31',
        status: 'In Progress',
        progress: 25,
        category: 'Governança'
      }
    ],
    proposals: [
      {
        id: 'pr3',
        title: 'Escola sem Partido',
        description: 'Projeto que visa garantir a neutralidade político-ideológica nas escolas.',
        dateProposed: '2023-03-20',
        status: 'Active',
        category: 'Educação',
        supportLevel: 48
      },
      {
        id: 'pr3b',
        title: 'Excludente de Ilicitude para Policiais',
        description: 'Projeto que amplia a excludente de ilicitude para agentes de segurança em operações.',
        dateProposed: '2023-05-10',
        status: 'Active',
        category: 'Segurança Pública',
        supportLevel: 42
      }
    ]
  },
  {
    id: '3',
    name: 'Ana Beatriz Costa',
    party: 'MDB',
    position: 'Deputada Estadual',
    state: 'Rio de Janeiro',
    district: undefined,
    birthPlace: 'Niterói, RJ',
    mandates: [
      { position: 'Vereadora (Niterói)', start: '2017', end: '2021' },
      { position: 'Deputada Estadual (RJ)', start: '2023', end: '2027', current: true },
    ],
    termStart: '2023-02-01',
    termEnd: '2027-02-01',
    imageUrl: '/src/assets/politicians/ana-beatriz-costa.jpg',
    biography: 'Deputada Estadual Ana Beatriz Costa representa o Rio de Janeiro, focando em reforma educacional e habitação acessível.',
    website: 'https://anabeatriz.alerj.rj.gov.br',
    email: 'contato@anabeatriz.alerj.rj.gov.br',
    instagram: 'anabeatrizcosta',
    committeeMemberships: ['Comissão de Educação', 'Comissão de Habitação'],
    voteRecords: [
      {
        id: 'v6',
        title: 'Lei de Habitação Popular',
        description: 'Projeto para aumentar financiamento de programas de habitação.',
        date: '2023-12-05',
        vote: 'Yes',
        billNumber: 'PL 5623/2023',
        category: 'Habitação'
      },
      {
        id: 'v7',
        title: 'Financiamento da Educação',
        description: 'Projeto para aumentar recursos para escolas públicas.',
        date: '2023-11-28',
        vote: 'Yes',
        billNumber: 'PL 5201/2023',
        category: 'Educação'
      },
      {
        id: 'v8',
        title: 'Infraestrutura Estadual',
        description: 'Investimento em melhorias de infraestrutura estadual.',
        date: '2023-11-15',
        vote: 'Yes',
        billNumber: 'PL 3684/2023',
        category: 'Infraestrutura'
      }
    ],
    promises: [
      {
        id: 'p6',
        title: 'Aumentar Investimento em Educação',
        description: 'Garantir recursos adicionais para escolas públicas do estado.',
        datePromised: '2022-09-15',
        deadline: '2026-12-31',
        status: 'In Progress',
        progress: 68,
        category: 'Educação'
      },
      {
        id: 'p7',
        title: 'Programa de Habitação Popular',
        description: 'Criar 5.000 novas unidades habitacionais populares.',
        datePromised: '2022-09-15',
        deadline: '2027-01-01',
        status: 'In Progress',
        progress: 55,
        category: 'Habitação'
      }
    ],
    proposals: [
      {
        id: 'pr4',
        title: 'Valorização do Professor',
        description: 'Projeto para aumentar salários e benefícios dos professores.',
        dateProposed: '2023-09-12',
        status: 'Active',
        category: 'Educação',
        supportLevel: 71
      }
    ]
  },
  {
    id: '4',
    name: 'Ronaldo Caiado',
    party: 'PSD',
    position: 'Governador',
    state: 'Goiás',
    district: undefined,
    birthPlace: 'Anápolis, GO',
    mandates: [
      { position: 'Senador (GO)', start: '1991', end: '1995' },
      { position: 'Deputado Federal (GO)', start: '1999', end: '2003' },
      { position: 'Deputado Federal (GO)', start: '2003', end: '2007' },
      { position: 'Deputado Federal (GO)', start: '2007', end: '2011' },
      { position: 'Deputado Federal (GO)', start: '2011', end: '2015' },
      { position: 'Senador (GO)', start: '2015', end: '2019' },
      { position: 'Governador de Goiás', start: '2019', end: '2023' },
      { position: 'Governador de Goiás', start: '2023', end: '2027', current: true },
    ],
    termStart: '2023-01-01',
    termEnd: '2027-01-01',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Ronaldo_Caiado_em_2023.jpg/440px-Ronaldo_Caiado_em_2023.jpg',
    biography: 'Ronaldo Ramos Caiado é médico e político brasileiro, atual Governador de Goiás em seu segundo mandato (2023-2027). Nascido em Anápolis (GO) em 1949, formou-se em Medicina pela UFG. Foi presidente da UDR nos anos 1980, defendendo os interesses dos proprietários rurais. Elegeu-se senador por Goiás em 1990 e deputado federal em 1998, 2002, 2006 e 2010. Foi novamente senador entre 2015 e 2018, quando se elegeu governador. É considerado uma liderança do agronegócio e defensor de pautas conservadoras. Seu governo prioriza segurança pública, infraestrutura e desenvolvimento econômico do estado.',
    website: 'https://www.goias.gov.br',
    email: 'contato@goias.gov.br',
    instagram: 'ronaldocaiado',
    committeeMemberships: ['Consórcio Brasil Central', 'Fórum de Governadores'],
    voteRecords: [
      {
        id: 'v9',
        title: 'Reforma Administrativa do Estado',
        description: 'Reestruturação das secretarias e órgãos do governo estadual para maior eficiência.',
        date: '2023-03-15',
        vote: 'Yes',
        billNumber: 'Lei 21.792/2023',
        category: 'Administração'
      },
      {
        id: 'v10',
        title: 'Programa Goiás Social',
        description: 'Ampliação de programas de transferência de renda e assistência social.',
        date: '2023-06-20',
        vote: 'Yes',
        billNumber: 'Lei 21.850/2023',
        category: 'Social'
      },
      {
        id: 'v11',
        title: 'Incentivo ao Agronegócio',
        description: 'Pacote de incentivos fiscais para o setor agropecuário goiano.',
        date: '2023-09-10',
        vote: 'Yes',
        billNumber: 'Decreto 10.234/2023',
        category: 'Agronegócio'
      }
    ],
    promises: [
      {
        id: 'p8',
        title: 'Segurança Pública Reforçada',
        description: 'Reduzir a criminalidade em Goiás com investimento em polícia e inteligência.',
        datePromised: '2022-08-15',
        deadline: '2026-12-31',
        status: 'In Progress',
        progress: 72,
        category: 'Segurança'
      },
      {
        id: 'p9',
        title: 'Goiás na Frente em Infraestrutura',
        description: 'Asfaltar 10 mil km de estradas estaduais e municipais.',
        datePromised: '2022-08-15',
        deadline: '2026-12-31',
        status: 'In Progress',
        progress: 60,
        category: 'Infraestrutura'
      },
      {
        id: 'p9b',
        title: 'Equilíbrio Fiscal do Estado',
        description: 'Manter as contas do estado equilibradas sem aumento de impostos.',
        datePromised: '2022-08-15',
        deadline: '2026-12-31',
        status: 'Fulfilled',
        progress: 100,
        category: 'Economia'
      }
    ],
    proposals: [
      {
        id: 'pr5',
        title: 'Programa Servidor do Futuro',
        description: 'Modernização e valorização do funcionalismo público estadual com capacitação e revisão salarial.',
        dateProposed: '2023-04-10',
        status: 'Active',
        category: 'Administração',
        supportLevel: 68
      },
      {
        id: 'pr6',
        title: 'Corredor Logístico Centro-Oeste',
        description: 'Desenvolvimento de infraestrutura logística para escoamento da produção agrícola goiana.',
        dateProposed: '2023-07-22',
        status: 'Passed',
        category: 'Infraestrutura',
        supportLevel: 85
      }
    ]
  },
  {
    id: '5',
    name: 'Renan Santos',
    party: 'Missão',
    position: 'Deputado Federal',
    state: 'São Paulo',
    district: 'São Paulo',
    birthPlace: 'São Paulo, SP',
    mandates: [
      { position: 'Deputado Federal (SP)', start: '2023', end: '2027', current: true },
    ],
    termStart: '2023-01-01',
    termEnd: '2027-01-01',
    imageUrl: '/src/assets/politicians/renan-santos.jpg',
    biography: 'Renan Santos é empresário, ativista político e fundador do Movimento Brasil Livre (MBL), uma das organizações políticas mais influentes do Brasil desde 2014. Nascido em São Paulo, tornou-se figura central nos protestos contra a corrupção e pelo impeachment de Dilma Rousseff em 2015-2016. Eleito Deputado Federal por São Paulo em 2022 pelo partido Missão, com foco em liberalismo econômico, desburocratização do Estado e combate a privilégios no setor público. É defensor da reforma administrativa, privatizações e da modernização da gestão pública.',
    website: 'https://www.camara.leg.br/deputados/renan-santos',
    email: 'dep.renansantos@camara.leg.br',
    instagram: 'renansantosmbl',
    committeeMemberships: ['Comissão de Administração e Serviço Público', 'Comissão de Fiscalização Financeira e Controle', 'Comissão de Ciência e Tecnologia'],
    voteRecords: [
      {
        id: 'v12',
        title: 'Reforma Administrativa (PEC 32)',
        description: 'Proposta de emenda constitucional para reformar o serviço público, acabando com estabilidade para novos servidores e reestruturando carreiras.',
        date: '2023-09-12',
        vote: 'Yes',
        billNumber: 'PEC 32/2020',
        category: 'Administração Pública'
      },
      {
        id: 'v13',
        title: 'Marco Legal das Startups',
        description: 'Regulamentação do ecossistema de startups e fintechs no Brasil.',
        date: '2023-06-20',
        vote: 'Yes',
        billNumber: 'PL 2234/2022',
        category: 'Tecnologia'
      },
      {
        id: 'v14',
        title: 'Privatização dos Correios',
        description: 'Projeto para privatização da Empresa Brasileira de Correios e Telégrafos.',
        date: '2023-11-05',
        vote: 'Yes',
        billNumber: 'PL 591/2021',
        category: 'Economia'
      }
    ],
    promises: [
      {
        id: 'p10',
        title: 'Redução da Máquina Pública',
        description: 'Propor cortes em cargos comissionados e funções de confiança no governo federal.',
        datePromised: '2022-08-15',
        deadline: '2026-12-31',
        status: 'In Progress',
        progress: 40,
        category: 'Administração Pública'
      },
      {
        id: 'p11',
        title: 'Combate a Privilégios',
        description: 'Projetos para acabar com penduricalhos salariais e privilégios no setor público.',
        datePromised: '2022-08-15',
        deadline: '2026-12-31',
        status: 'In Progress',
        progress: 55,
        category: 'Transparência'
      },
      {
        id: 'p12',
        title: 'Desburocratização Digital',
        description: 'Digitalizar e simplificar processos burocráticos para cidadãos e empresas.',
        datePromised: '2022-08-15',
        deadline: '2026-12-31',
        status: 'In Progress',
        progress: 35,
        category: 'Tecnologia'
      }
    ],
    proposals: [
      {
        id: 'pr7',
        title: 'Fim do Foro Privilegiado',
        description: 'Proposta para extinguir o foro privilegiado para políticos em exercício de mandato.',
        dateProposed: '2024-03-01',
        status: 'Active',
        category: 'Justiça',
        supportLevel: 78
      },
      {
        id: 'pr8',
        title: 'Transparência Total nos Gastos Públicos',
        description: 'Obrigatoriedade de publicação detalhada e em tempo real de todos os gastos com cartão corporativo e verbas parlamentares.',
        dateProposed: '2024-05-10',
        status: 'Active',
        category: 'Transparência',
        supportLevel: 85
      }
    ]
  },
  {
    id: '6',
    name: 'Romeu Zema',
    party: 'NOVO',
    position: 'Governador',
    state: 'Minas Gerais',
    district: undefined,
    birthPlace: 'Araxá, MG',
    mandates: [
      { position: 'Governador de Minas Gerais', start: '2019', end: '2023' },
      { position: 'Governador de Minas Gerais', start: '2023', end: '2027', current: true },
    ],
    termStart: '2023-01-01',
    termEnd: '2027-01-01',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Romeu_Zema_em_2023.jpg/440px-Romeu_Zema_em_2023.jpg',
    biography: 'Romeu Zema Neto é empresário e político brasileiro, atual Governador de Minas Gerais em seu segundo mandato (2023-2027). Nascido em Araxá (MG) em 1964, é formado em Engenharia Mecânica pela UFMG e administrou o Grupo Zema, conglomerado empresarial com atuação em diversos setores. Filiado ao partido NOVO, foi eleito governador em 2018 como outsider da política, derrotando candidatos tradicionais. Reeleito em 2022 no primeiro turno com mais de 56% dos votos. Seu governo é marcado pelo foco em equilíbrio fiscal, desburocratização, concessões e parcerias público-privadas.',
    website: 'https://www.mg.gov.br',
    email: 'contato@governo.mg.gov.br',
    instagram: 'romeuzemape',
    committeeMemberships: ['Consórcio de Integração Sul e Sudeste (COSUD)', 'Fórum de Governadores'],
    voteRecords: [
      {
        id: 'v14',
        title: 'Reforma Administrativa de MG',
        description: 'Reestruturação do governo estadual com extinção e fusão de secretarias para redução de gastos.',
        date: '2023-02-15',
        vote: 'Yes',
        billNumber: 'Lei 24.313/2023',
        category: 'Administração'
      },
      {
        id: 'v15',
        title: 'Programa Minas Livre para Crescer',
        description: 'Pacote de desburocratização e simplificação tributária para empresas mineiras.',
        date: '2023-07-10',
        vote: 'Yes',
        billNumber: 'Lei 24.468/2023',
        category: 'Economia'
      },
      {
        id: 'v15b',
        title: 'Concessão de Rodovias Estaduais',
        description: 'Aprovação de concessões rodoviárias para melhoria da malha viária de MG.',
        date: '2023-10-05',
        vote: 'Yes',
        billNumber: 'Decreto 48.765/2023',
        category: 'Infraestrutura'
      }
    ],
    promises: [
      {
        id: 'p13',
        title: 'Equilíbrio Fiscal de Minas',
        description: 'Recuperar as finanças do estado e eliminar o déficit fiscal herdado.',
        datePromised: '2022-08-01',
        deadline: '2026-12-31',
        status: 'Fulfilled',
        progress: 100,
        category: 'Economia'
      },
      {
        id: 'p14',
        title: 'Pagar Servidores em Dia',
        description: 'Regularizar o pagamento dos servidores públicos estaduais sem atrasos.',
        datePromised: '2022-08-01',
        deadline: '2026-12-31',
        status: 'Fulfilled',
        progress: 100,
        category: 'Administração'
      },
      {
        id: 'p15',
        title: 'Concessões e PPPs',
        description: 'Ampliar parcerias público-privadas para melhorar infraestrutura e serviços públicos.',
        datePromised: '2022-08-01',
        deadline: '2026-12-31',
        status: 'In Progress',
        progress: 70,
        category: 'Infraestrutura'
      }
    ],
    proposals: [
      {
        id: 'pr9',
        title: 'Minas Digital',
        description: 'Digitalização completa dos serviços públicos estaduais com atendimento 100% online.',
        dateProposed: '2023-05-20',
        status: 'Active',
        category: 'Tecnologia',
        supportLevel: 79
      },
      {
        id: 'pr10',
        title: 'Segurança Hídrica de MG',
        description: 'Programa de recuperação de bacias hidrográficas e garantia de abastecimento de água.',
        dateProposed: '2023-08-12',
        status: 'Active',
        category: 'Meio Ambiente',
        supportLevel: 74
      }
    ]
  }
];
