import { Politician } from '@/types/politician';

export const mockPoliticians: Politician[] = [
  {
    id: '1',
    name: 'Luiz Inácio Lula da Silva',
    party: 'PT',
    position: 'Presidente da República',
    state: 'São Paulo',
    district: undefined,
    termStart: '2023-01-01',
    termEnd: '2027-01-01',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Presidente_Lula.jpg/440px-Presidente_Lula.jpg',
    biography: 'Luiz Inácio Lula da Silva, nascido em 27 de outubro de 1945 em Caetés, Pernambuco, é o 39º presidente do Brasil, exercendo seu terceiro mandato desde 1º de janeiro de 2023. Metalúrgico e sindicalista, foi presidente do Sindicato dos Metalúrgicos do ABC e cofundador do Partido dos Trabalhadores (PT) em 1980. Governou o Brasil de 2003 a 2010, período marcado por programas sociais como o Bolsa Família e o Fome Zero, que retiraram milhões de brasileiros da pobreza. Em seu atual mandato, retomou políticas de combate à fome, proteção ambiental na Amazônia e reinserção do Brasil na diplomacia internacional.',
    website: 'https://www.gov.br/planalto',
    email: 'contato@planalto.gov.br',
    phone: '(61) 3411-1200',
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
    name: 'Carlos Mendes',
    party: 'PL',
    position: 'Deputado Federal',
    state: 'Minas Gerais',
    district: undefined,
    termStart: '2023-02-01',
    termEnd: '2027-02-01',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    biography: 'Deputado Carlos Mendes representa Minas Gerais, defendendo o crescimento de pequenas empresas e responsabilidade fiscal.',
    website: 'https://carlosmendes.camara.leg.br',
    email: 'contato@carlosmendes.camara.leg.br',
    phone: '(61) 3215-4567',
    committeeMemberships: ['Comissão de Pequenas Empresas', 'Comissão de Orçamento'],
    voteRecords: [
      {
        id: 'v4',
        title: 'Apoio às Pequenas Empresas',
        description: 'Legislação para oferecer benefícios fiscais a pequenas empresas.',
        date: '2023-11-20',
        vote: 'Yes',
        billNumber: 'PL 4521/2023',
        category: 'Economia'
      },
      {
        id: 'v5',
        title: 'Reforma Tributária',
        description: 'Projeto de reforma do sistema tributário nacional.',
        date: '2023-11-15',
        vote: 'Yes',
        billNumber: 'PEC 45/2019',
        category: 'Economia'
      }
    ],
    promises: [
      {
        id: 'p4',
        title: 'Apoiar Pequenas Empresas',
        description: 'Defender políticas que ajudem pequenas empresas a prosperar e criar empregos.',
        datePromised: '2022-09-10',
        deadline: '2026-12-31',
        status: 'In Progress',
        progress: 72,
        category: 'Economia'
      },
      {
        id: 'p5',
        title: 'Reduzir Gastos Públicos',
        description: 'Trabalhar para eliminar gastos governamentais desnecessários.',
        datePromised: '2022-09-10',
        deadline: '2026-12-31',
        status: 'In Progress',
        progress: 45,
        category: 'Política Fiscal'
      }
    ],
    proposals: [
      {
        id: 'pr3',
        title: 'Reforma Tributária para PMEs',
        description: 'Reforma tributária abrangente para beneficiar pequenos empresários.',
        dateProposed: '2023-08-10',
        status: 'Active',
        category: 'Economia',
        supportLevel: 62
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
    termStart: '2023-02-01',
    termEnd: '2027-02-01',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
    biography: 'Deputada Estadual Ana Beatriz Costa representa o Rio de Janeiro, focando em reforma educacional e habitação acessível.',
    website: 'https://anabeatriz.alerj.rj.gov.br',
    email: 'contato@anabeatriz.alerj.rj.gov.br',
    phone: '(21) 2588-7891',
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
    name: 'Roberto Almeida',
    party: 'PSD',
    position: 'Governador',
    state: 'Bahia',
    district: undefined,
    termStart: '2023-01-01',
    termEnd: '2027-01-01',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    biography: 'Governador Roberto Almeida administra a Bahia, com foco em desenvolvimento agrícola e turismo.',
    website: 'https://governador.ba.gov.br',
    email: 'contato@governador.ba.gov.br',
    phone: '(71) 3115-5628',
    committeeMemberships: ['Conselho de Governadores do Nordeste'],
    voteRecords: [
      {
        id: 'v9',
        title: 'Plano Safra Estadual',
        description: 'Programa de apoio à agricultura familiar.',
        date: '2023-12-10',
        vote: 'Yes',
        billNumber: 'Decreto 4672/2023',
        category: 'Agricultura'
      },
      {
        id: 'v10',
        title: 'Programa de Turismo',
        description: 'Expansão do programa estadual de turismo.',
        date: '2023-11-22',
        vote: 'Yes',
        billNumber: 'Lei 3891/2023',
        category: 'Turismo'
      }
    ],
    promises: [
      {
        id: 'p8',
        title: 'Apoiar Agricultores Baianos',
        description: 'Defender políticas que protejam a agricultura do estado.',
        datePromised: '2022-10-01',
        deadline: '2026-12-31',
        status: 'Fulfilled',
        progress: 100,
        category: 'Agricultura'
      },
      {
        id: 'p9',
        title: 'Desenvolver Turismo',
        description: 'Expandir infraestrutura turística em todo o estado.',
        datePromised: '2022-10-01',
        deadline: '2026-12-31',
        status: 'In Progress',
        progress: 82,
        category: 'Turismo'
      }
    ],
    proposals: [
      {
        id: 'pr5',
        title: 'Internet Rural',
        description: 'Levar internet de alta velocidade para comunidades rurais da Bahia.',
        dateProposed: '2023-07-18',
        status: 'Active',
        category: 'Tecnologia',
        supportLevel: 76
      },
      {
        id: 'pr6',
        title: 'Rota Turística do Cacau',
        description: 'Desenvolvimento de rota turística na região cacaueira.',
        dateProposed: '2023-05-30',
        status: 'Passed',
        category: 'Turismo',
        supportLevel: 89
      }
    ]
  },
  {
    id: '5',
    name: 'Luciana Ferreira',
    party: 'PSOL',
    position: 'Vereadora',
    state: 'São Paulo',
    district: 'São Paulo',
    termStart: '2021-01-01',
    termEnd: '2025-01-01',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
    biography: 'Vereadora Luciana Ferreira atua na Câmara Municipal de São Paulo, com foco em direitos humanos e mobilidade urbana.',
    website: 'https://lucianaferreira.saopaulo.sp.leg.br',
    email: 'contato@lucianaferreira.sp.leg.br',
    phone: '(11) 3396-2024',
    committeeMemberships: ['Comissão de Direitos Humanos', 'Comissão de Mobilidade'],
    voteRecords: [
      {
        id: 'v12',
        title: 'Tarifa Zero nos Domingos',
        description: 'Projeto para isenção de tarifa de transporte aos domingos.',
        date: '2023-08-15',
        vote: 'Yes',
        billNumber: 'PL 1976/2023',
        category: 'Mobilidade'
      },
      {
        id: 'v13',
        title: 'Moradia Digna',
        description: 'Projeto para regularização de moradias populares.',
        date: '2023-07-20',
        vote: 'Yes',
        billNumber: 'PL 109/2023',
        category: 'Habitação'
      }
    ],
    promises: [
      {
        id: 'p10',
        title: 'Transporte Público Acessível',
        description: 'Reduzir tarifas de transporte público para a população.',
        datePromised: '2020-10-15',
        deadline: '2024-12-31',
        status: 'In Progress',
        progress: 55,
        category: 'Mobilidade'
      },
      {
        id: 'p11',
        title: 'Direitos das Mulheres',
        description: 'Ampliar políticas de proteção às mulheres.',
        datePromised: '2020-10-15',
        deadline: '2024-12-31',
        status: 'In Progress',
        progress: 70,
        category: 'Direitos Humanos'
      },
      {
        id: 'p12',
        title: 'Ciclovias na Cidade',
        description: 'Expandir malha cicloviária em 50km.',
        datePromised: '2020-10-15',
        deadline: '2024-12-31',
        status: 'Fulfilled',
        progress: 100,
        category: 'Mobilidade'
      }
    ],
    proposals: [
      {
        id: 'pr7',
        title: 'Passe Livre Estudantil',
        description: 'Gratuidade no transporte para estudantes da rede pública.',
        dateProposed: '2024-02-01',
        status: 'Active',
        category: 'Mobilidade',
        supportLevel: 68
      },
      {
        id: 'pr8',
        title: 'Casa da Mulher Paulistana',
        description: 'Criação de centros de apoio às mulheres em situação de violência.',
        dateProposed: '2024-03-15',
        status: 'Active',
        category: 'Direitos Humanos',
        supportLevel: 72
      }
    ]
  },
  {
    id: '6',
    name: 'Fernando Santos',
    party: 'NOVO',
    position: 'Prefeito',
    state: 'Santa Catarina',
    district: 'Florianópolis',
    termStart: '2021-01-01',
    termEnd: '2025-01-01',
    imageUrl: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&h=400&fit=crop&crop=face',
    biography: 'Prefeito Fernando Santos administra Florianópolis com foco em inovação, gestão eficiente e desenvolvimento sustentável.',
    website: 'https://prefeito.florianopolis.sc.gov.br',
    email: 'contato@prefeito.florianopolis.sc.gov.br',
    phone: '(48) 3251-2025',
    committeeMemberships: ['Conselho de Prefeitos de Capitais'],
    voteRecords: [
      {
        id: 'v14',
        title: 'Reforma Administrativa',
        description: 'Projeto de modernização da gestão municipal.',
        date: '2023-09-10',
        vote: 'Yes',
        billNumber: 'PL 4820/2023',
        category: 'Gestão'
      },
      {
        id: 'v15',
        title: 'Startup City',
        description: 'Programa de incentivo a startups e empresas de tecnologia.',
        date: '2023-08-25',
        vote: 'Yes',
        billNumber: 'Lei 3245/2023',
        category: 'Economia'
      }
    ],
    promises: [
      {
        id: 'p13',
        title: 'Desburocratização',
        description: 'Simplificar processos na prefeitura e reduzir tempo de atendimento.',
        datePromised: '2020-10-01',
        deadline: '2024-12-31',
        status: 'Fulfilled',
        progress: 100,
        category: 'Gestão'
      },
      {
        id: 'p14',
        title: 'Cidade Inteligente',
        description: 'Implementar tecnologias de cidade inteligente em Florianópolis.',
        datePromised: '2020-10-01',
        deadline: '2024-12-31',
        status: 'In Progress',
        progress: 78,
        category: 'Tecnologia'
      },
      {
        id: 'p15',
        title: 'Sustentabilidade Urbana',
        description: 'Transformar Florianópolis em referência de sustentabilidade.',
        datePromised: '2020-10-01',
        deadline: '2024-12-31',
        status: 'In Progress',
        progress: 62,
        category: 'Meio Ambiente'
      }
    ],
    proposals: [
      {
        id: 'pr9',
        title: 'Floripa Digital',
        description: 'Digitalização completa dos serviços públicos municipais.',
        dateProposed: '2024-02-15',
        status: 'Active',
        category: 'Tecnologia',
        supportLevel: 84
      },
      {
        id: 'pr10',
        title: 'PPP Saneamento',
        description: 'Parceria público-privada para universalizar saneamento básico.',
        dateProposed: '2024-01-20',
        status: 'Active',
        category: 'Infraestrutura',
        supportLevel: 71
      }
    ]
  }
];
