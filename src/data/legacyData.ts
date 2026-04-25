import {
  GraduationCap,
  Stethoscope,
  ShieldCheck,
  Landmark,
  Droplets,
  BriefcaseBusiness,
  TrendingUp,
  FileText,
  Vote,
  Users,
  Leaf,
  Building2,
  type LucideIcon,
} from "lucide-react";

export type CommitmentStatus = "Cumprida" | "Parcialmente Cumprida" | "Em Andamento" | "Não Cumprida";

export interface Source {
  label: string;
  url: string;
}

export interface Commitment {
  id: number;
  title: string;
  icon: LucideIcon;
  status: CommitmentStatus;
  progress: number;
  detail: string;
  sources?: Source[];
}

export interface PerformanceMetric {
  label: string;
  before: string;
  after: string;
  change: string;
  positive: boolean;
  sources?: Source[];
}

export interface PerformanceCategory {
  title: string;
  icon: LucideIcon;
  metrics: PerformanceMetric[];
}

export interface ChartPoint {
  ano: string;
  Anterior: number | null;
  Atual: number | null;
}

export interface LegacyData {
  subtitle: string;
  commitments: Commitment[];
  performance: PerformanceCategory[];
  chart1: { title: string; unit: string; data: ChartPoint[]; positiveTrend: boolean; sources?: Source[] };
  chart2: { title: string; unit: string; data: ChartPoint[]; positiveTrend: boolean; sources?: Source[] };
  comparisonLabel: string;
  footnote: string;
  dataSources?: Source[];
}

// Helper: build chart data with split series
const splitSeries = (
  values: { ano: string; value: number; current: boolean }[]
): ChartPoint[] =>
  values.map((v) => ({
    ano: v.ano,
    Anterior: v.current ? null : v.value,
    Atual: v.current ? v.value : null,
  }));

export const legacyDataMap: Record<string, LegacyData> = {
  // Lula - Presidente
  "1": {
    subtitle: "Indicadores nacionais durante o terceiro mandato presidencial de Lula.",
    commitments: [
      { id: 1, title: "Brasil Sem Fome", icon: Stethoscope, status: "Em Andamento", progress: 55, detail: "Saída do Mapa da Fome em curso" },
      { id: 2, title: "Desmatamento Zero (Amazônia)", icon: Leaf, status: "Em Andamento", progress: 45, detail: "Queda de 50% no desmatamento" },
      { id: 3, title: "Reajuste real do salário mínimo", icon: BriefcaseBusiness, status: "Cumprida", progress: 100, detail: "Política de valorização restabelecida" },
      { id: 4, title: "Minha Casa Minha Vida", icon: Building2, status: "Em Andamento", progress: 40, detail: "Programa relançado em 2023" },
      { id: 5, title: "Reforma Tributária", icon: Landmark, status: "Cumprida", progress: 100, detail: "EC 132/2023 promulgada" },
      { id: 6, title: "Novo PAC", icon: BriefcaseBusiness, status: "Em Andamento", progress: 35, detail: "R$ 1,7 trilhão em obras" },
    ],
    performance: [
      {
        title: "Economia",
        icon: TrendingUp,
        metrics: [
          { label: "Crescimento do PIB", before: "2,9%", after: "3,2%", change: "+0,3 p.p.", positive: true, sources: [{ label: "IBGE — Contas Nacionais", url: "https://www.ibge.gov.br/explica/pib.php" }] },
          { label: "Taxa de desemprego", before: "8,5%", after: "6,2%", change: "-2,3 p.p.", positive: true, sources: [{ label: "IBGE — PNAD Contínua", url: "https://www.ibge.gov.br/estatisticas/sociais/trabalho/9173-pesquisa-nacional-por-amostra-de-domicilios-continua-trimestral.html" }] },
          { label: "Inflação (IPCA acumulado)", before: "5,79%", after: "4,83%", change: "-0,96 p.p.", positive: true, sources: [{ label: "IBGE — IPCA", url: "https://www.ibge.gov.br/explica/inflacao.php" }] },
          { label: "Salário Mínimo (R$)", before: "R$ 1.212", after: "R$ 1.518", change: "+25,2%", positive: true, sources: [{ label: "Planalto — Política do Salário Mínimo", url: "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/L14663.htm" }] },
        ],
      },
      {
        title: "Social",
        icon: Users,
        metrics: [
          { label: "Pobreza extrema", before: "5,9%", after: "4,4%", change: "-1,5 p.p.", positive: true, sources: [{ label: "IBGE — Síntese de Indicadores Sociais", url: "https://www.ibge.gov.br/estatisticas/sociais/populacao/9221-sintese-de-indicadores-sociais.html" }] },
          { label: "Insegurança alimentar grave", before: "15,5%", after: "8,7%", change: "-6,8 p.p.", positive: true, sources: [{ label: "FAO — SOFI 2024", url: "https://www.fao.org/publications/sofi/2024/en/" }] },
          { label: "Famílias no Bolsa Família (mi)", before: "21,1", after: "20,5", change: "-0,6", positive: true, sources: [{ label: "MDS — Bolsa Família", url: "https://www.gov.br/mds/pt-br/acoes-e-programas/bolsa-familia" }] },
        ],
      },
      {
        title: "Meio Ambiente",
        icon: Leaf,
        metrics: [
          { label: "Desmatamento Amazônia (km²)", before: "11.594", after: "5.816", change: "-49,8%", positive: true, sources: [{ label: "INPE — PRODES", url: "http://terrabrasilis.dpi.inpe.br/app/dashboard/deforestation/biomes/legal_amazon/rates" }] },
          { label: "Desmatamento Cerrado (km²)", before: "10.689", after: "8.174", change: "-23,5%", positive: true, sources: [{ label: "INPE — PRODES Cerrado", url: "http://terrabrasilis.dpi.inpe.br/app/dashboard/deforestation/biomes/cerrado/rates" }] },
        ],
      },
    ],
    chart1: {
      title: "Crescimento do PIB Nacional (%)",
      unit: "%",
      positiveTrend: true,
      data: splitSeries([
        { ano: "2019", value: 1.2, current: false },
        { ano: "2020", value: -3.3, current: false },
        { ano: "2021", value: 4.8, current: false },
        { ano: "2022", value: 3.0, current: false },
        { ano: "2023", value: 2.9, current: true },
        { ano: "2024", value: 3.2, current: true },
      ]),
      sources: [{ label: "IBGE — Contas Nacionais Trimestrais", url: "https://www.ibge.gov.br/explica/pib.php" }],
    },
    chart2: {
      title: "Desmatamento na Amazônia (km²/ano)",
      unit: "km²",
      positiveTrend: true,
      data: splitSeries([
        { ano: "2019", value: 10129, current: false },
        { ano: "2020", value: 10851, current: false },
        { ano: "2021", value: 13038, current: false },
        { ano: "2022", value: 11594, current: false },
        { ano: "2023", value: 9001, current: true },
        { ano: "2024", value: 5816, current: true },
      ]),
      sources: [{ label: "INPE — PRODES", url: "http://terrabrasilis.dpi.inpe.br/app/dashboard/deforestation/biomes/legal_amazon/rates" }],
    },
    comparisonLabel: "Gov. Bolsonaro (2019–2022)",
    footnote: "Dados consolidados até dezembro de 2024. Comparação entre governo Bolsonaro (2019–2022) e Lula (2023–2024).",
    dataSources: [
      { label: "IBGE", url: "https://www.ibge.gov.br/" },
      { label: "INPE — PRODES", url: "http://terrabrasilis.dpi.inpe.br/" },
      { label: "FAO — SOFI", url: "https://www.fao.org/publications/sofi/" },
      { label: "MDS — Bolsa Família", url: "https://www.gov.br/mds/pt-br/" },
      { label: "Ministério da Fazenda", url: "https://www.gov.br/fazenda/" },
    ],
  },

  // Flávio Bolsonaro - Senador
  "2": {
    subtitle: "Indicadores parlamentares do mandato como Senador da República pelo Rio de Janeiro.",
    commitments: [
      { id: 1, title: "Defesa de pautas conservadoras", icon: ShieldCheck, status: "Em Andamento", progress: 70, detail: "Atuação ativa na CCJ" },
      { id: 2, title: "Redução de impostos", icon: Landmark, status: "Em Andamento", progress: 30, detail: "Votos contrários a aumentos tributários" },
      { id: 3, title: "Combate à corrupção", icon: ShieldCheck, status: "Em Andamento", progress: 25, detail: "Apoio a projetos de transparência" },
      { id: 4, title: "Segurança pública", icon: ShieldCheck, status: "Em Andamento", progress: 45, detail: "Defesa do excludente de ilicitude" },
    ],
    performance: [
      {
        title: "Atividade Legislativa",
        icon: FileText,
        metrics: [
          { label: "Projetos apresentados", before: "32", after: "58", change: "+81,3%", positive: true, sources: [{ label: "Senado — Atividade do Senador", url: "https://www25.senado.leg.br/web/senadores/senador/-/perfil/4988" }] },
          { label: "Discursos em plenário", before: "45", after: "72", change: "+60,0%", positive: true, sources: [{ label: "Senado — Discursos", url: "https://www25.senado.leg.br/web/atividade/pronunciamentos" }] },
          { label: "Relatorias assumidas", before: "8", after: "14", change: "+75,0%", positive: true, sources: [{ label: "Senado — Relatorias", url: "https://www25.senado.leg.br/web/atividade/materias" }] },
        ],
      },
      {
        title: "Participação",
        icon: Vote,
        metrics: [
          { label: "Presença em votações", before: "82%", after: "89%", change: "+7,0 p.p.", positive: true, sources: [{ label: "Senado — Votações Nominais", url: "https://www25.senado.leg.br/web/atividade/plenario/votacoes" }] },
          { label: "Audiências públicas em comissões", before: "12", after: "21", change: "+75,0%", positive: true, sources: [{ label: "Senado — Comissões", url: "https://www25.senado.leg.br/web/atividade/comissoes" }] },
        ],
      },
    ],
    chart1: {
      title: "Projetos de Lei Apresentados",
      unit: "projetos",
      positiveTrend: true,
      data: splitSeries([
        { ano: "2019", value: 12, current: false },
        { ano: "2020", value: 14, current: false },
        { ano: "2021", value: 18, current: false },
        { ano: "2022", value: 16, current: false },
        { ano: "2023", value: 28, current: true },
        { ano: "2024", value: 30, current: true },
      ]),
      sources: [{ label: "Senado — Atividade Legislativa", url: "https://www25.senado.leg.br/web/atividade/materias" }],
    },
    chart2: {
      title: "Presença em Votações Nominais (%)",
      unit: "%",
      positiveTrend: true,
      data: splitSeries([
        { ano: "2019", value: 78, current: false },
        { ano: "2020", value: 80, current: false },
        { ano: "2021", value: 83, current: false },
        { ano: "2022", value: 82, current: false },
        { ano: "2023", value: 87, current: true },
        { ano: "2024", value: 89, current: true },
      ]),
      sources: [{ label: "Senado — Votações Nominais", url: "https://www25.senado.leg.br/web/atividade/plenario/votacoes" }],
    },
    comparisonLabel: "1º Mandato (2019–2022)",
    footnote: "Comparação entre o 1º mandato (2019–2022) e o 2º mandato em curso de Flávio Bolsonaro como Senador. Dados consolidados até dezembro de 2024.",
    dataSources: [
      { label: "Senado Federal", url: "https://www25.senado.leg.br/" },
      { label: "Portal da Transparência", url: "https://portaldatransparencia.gov.br/" },
    ],
  },
  "3": {
    subtitle: "Indicadores parlamentares do mandato na Assembleia Legislativa do Rio de Janeiro.",
    commitments: [
      { id: 1, title: "Investimento em educação", icon: GraduationCap, status: "Em Andamento", progress: 68, detail: "Aumento real no orçamento da educação" },
      { id: 2, title: "Habitação popular", icon: Building2, status: "Em Andamento", progress: 55, detail: "2.700 de 5.000 unidades em obras" },
      { id: 3, title: "Valorização do professor", icon: GraduationCap, status: "Em Andamento", progress: 60, detail: "Reajuste salarial em discussão" },
      { id: 4, title: "Infraestrutura estadual", icon: Building2, status: "Parcialmente Cumprida", progress: 72, detail: "Projetos aprovados em 2023-2024" },
    ],
    performance: [
      {
        title: "Atividade Legislativa",
        icon: FileText,
        metrics: [
          { label: "Projetos apresentados", before: "18", after: "34", change: "+88,9%", positive: true },
          { label: "Emendas ao orçamento", before: "12", after: "21", change: "+75,0%", positive: true },
        ],
      },
      {
        title: "Participação",
        icon: Vote,
        metrics: [
          { label: "Presença em sessões", before: "85%", after: "94%", change: "+9,0 p.p.", positive: true },
          { label: "Audiências públicas realizadas", before: "6", after: "13", change: "+116,7%", positive: true },
        ],
      },
    ],
    chart1: {
      title: "Projetos de Lei Apresentados",
      unit: "projetos",
      positiveTrend: true,
      data: splitSeries([
        { ano: "2019", value: 6, current: false },
        { ano: "2020", value: 8, current: false },
        { ano: "2021", value: 10, current: false },
        { ano: "2022", value: 12, current: false },
        { ano: "2023", value: 16, current: true },
        { ano: "2024", value: 18, current: true },
      ]),
    },
    chart2: {
      title: "Presença em Sessões (%)",
      unit: "%",
      positiveTrend: true,
      data: splitSeries([
        { ano: "2019", value: 82, current: false },
        { ano: "2020", value: 84, current: false },
        { ano: "2021", value: 86, current: false },
        { ano: "2022", value: 85, current: false },
        { ano: "2023", value: 92, current: true },
        { ano: "2024", value: 94, current: true },
      ]),
    },
    comparisonLabel: "Mandato Anterior",
    footnote: "Fontes: ALERJ, Portal da Transparência do RJ. Dados consolidados até dezembro de 2024.",
  },

  // Ronaldo Caiado - Governador de Goiás
  "4": {
    subtitle: "Resultados concretos e compromissos assumidos durante o mandato de Ronaldo Caiado como Governador de Goiás.",
    commitments: [
      { id: 1, title: "Pacto pela Segurança", icon: ShieldCheck, status: "Cumprida", progress: 100, detail: "Goiás entre os estados mais seguros" },
      { id: 2, title: "Goiás na Frente (10 mil km de estradas)", icon: BriefcaseBusiness, status: "Em Andamento", progress: 60, detail: "6 mil km já asfaltados" },
      { id: 3, title: "Equilíbrio fiscal do estado", icon: Landmark, status: "Cumprida", progress: 100, detail: "Contas equilibradas, sem aumento de impostos" },
      { id: 4, title: "Programa Goiás Social", icon: Stethoscope, status: "Em Andamento", progress: 78, detail: "Cobertura ampliada em 70% dos municípios" },
      { id: 5, title: "Construção de escolas em tempo integral", icon: GraduationCap, status: "Parcialmente Cumprida", progress: 65, detail: "210 de 320 unidades entregues" },
      { id: 6, title: "Saneamento básico universal", icon: Droplets, status: "Em Andamento", progress: 55, detail: "Cobertura passou de 38% para 58%" },
    ],
    performance: [
      {
        title: "Segurança Pública",
        icon: ShieldCheck,
        metrics: [
          { label: "Taxa de homicídios (por 100 mil hab.)", before: "33,8", after: "11,1", change: "-67,2%", positive: true, sources: [{ label: "FBSP — Anuário Brasileiro de Segurança Pública", url: "https://forumseguranca.org.br/anuario-brasileiro-seguranca-publica/" }] },
          { label: "Roubos de veículos", before: "12.450", after: "5.890", change: "-52,7%", positive: true, sources: [{ label: "SSP-GO — Estatísticas", url: "https://www.ssp.go.gov.br/estatistica" }] },
          { label: "Mortes violentas intencionais", before: "2.231", after: "740", change: "-66,8%", positive: true, sources: [{ label: "SSP-GO — Estatísticas", url: "https://www.ssp.go.gov.br/estatistica" }] },
        ],
      },
      {
        title: "Economia",
        icon: TrendingUp,
        metrics: [
          { label: "Crescimento do PIB estadual", before: "1,4%", after: "4,1%", change: "+2,7 p.p.", positive: true, sources: [{ label: "IBGE — Contas Regionais", url: "https://www.ibge.gov.br/estatisticas/economicas/contas-nacionais/9054-contas-regionais-do-brasil.html" }] },
          { label: "Empregos formais (saldo CAGED)", before: "62 mil", after: "138 mil", change: "+122,6%", positive: true, sources: [{ label: "MTE — Novo CAGED", url: "https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/estatisticas-trabalho/novo-caged" }] },
          { label: "Capacidade de pagamento (CAPAG)", before: "C", after: "B", change: "Melhora", positive: true, sources: [{ label: "Tesouro Nacional — CAPAG", url: "https://www.tesourotransparente.gov.br/temas/estados-e-municipios/capacidade-de-pagamento-capag" }] },
        ],
      },
      {
        title: "Social e Educação",
        icon: Users,
        metrics: [
          { label: "Pobreza extrema", before: "8,2%", after: "4,9%", change: "-3,3 p.p.", positive: true, sources: [{ label: "IBGE — PNAD Contínua", url: "https://www.ibge.gov.br/estatisticas/sociais/populacao/9221-sintese-de-indicadores-sociais.html" }] },
          { label: "Cobertura do Goiás Social", before: "0%", after: "70%", change: "+70 p.p.", positive: true, sources: [{ label: "OVG — Goiás Social", url: "https://www.social.go.gov.br/goias-social" }] },
          { label: "Escolas em tempo integral", before: "85", after: "295", change: "+247%", positive: true, sources: [{ label: "Seduc-GO", url: "https://site.educacao.go.gov.br/" }] },
        ],
      },
    ],
    chart1: {
      title: "Evolução do PIB Estadual (%)",
      unit: "%",
      positiveTrend: true,
      data: splitSeries([
        { ano: "2017", value: 0.9, current: false },
        { ano: "2018", value: 1.4, current: false },
        { ano: "2019", value: 2.1, current: true },
        { ano: "2020", value: -2.0, current: true },
        { ano: "2021", value: 3.5, current: true },
        { ano: "2022", value: 3.8, current: true },
        { ano: "2023", value: 4.1, current: true },
      ]),
      sources: [{ label: "IBGE — Contas Regionais", url: "https://www.ibge.gov.br/estatisticas/economicas/contas-nacionais/9054-contas-regionais-do-brasil.html" }],
    },
    chart2: {
      title: "Taxa de Homicídios (por 100 mil hab.)",
      unit: "por 100 mil",
      positiveTrend: true,
      data: splitSeries([
        { ano: "2017", value: 35.4, current: false },
        { ano: "2018", value: 33.8, current: false },
        { ano: "2019", value: 28.5, current: true },
        { ano: "2020", value: 24.1, current: true },
        { ano: "2021", value: 21.6, current: true },
        { ano: "2022", value: 19.4, current: true },
        { ano: "2023", value: 11.1, current: true },
      ]),
      sources: [{ label: "FBSP — Anuário Brasileiro de Segurança Pública", url: "https://forumseguranca.org.br/anuario-brasileiro-seguranca-publica/" }],
    },
    comparisonLabel: "Gov. Marconi Perillo (2011–2014)",
    footnote: "Comparação entre o último mandato completo do governo anterior (Marconi Perillo, PSDB) e o governo Caiado. Dados consolidados até dezembro de 2024.",
    dataSources: [
      { label: "IBGE", url: "https://www.ibge.gov.br/" },
      { label: "SSP-GO", url: "https://www.ssp.go.gov.br/" },
      { label: "FBSP", url: "https://forumseguranca.org.br/" },
      { label: "Tesouro Nacional", url: "https://www.tesourotransparente.gov.br/" },
      { label: "Seduc-GO", url: "https://site.educacao.go.gov.br/" },
    ],
  },

  // Renan Santos - Deputado Federal NOVO/SP
  "5": {
    subtitle: "Indicadores parlamentares do mandato como Deputado Federal por São Paulo.",
    commitments: [
      { id: 1, title: "Redução da máquina pública", icon: Landmark, status: "Em Andamento", progress: 40, detail: "Apoio à Reforma Administrativa" },
      { id: 2, title: "Combate a privilégios", icon: ShieldCheck, status: "Em Andamento", progress: 55, detail: "Projetos contra penduricalhos" },
      { id: 3, title: "Desburocratização digital", icon: TrendingUp, status: "Em Andamento", progress: 35, detail: "Marco Legal das Startups apoiado" },
      { id: 4, title: "Fim do foro privilegiado", icon: ShieldCheck, status: "Em Andamento", progress: 30, detail: "Proposta em tramitação" },
    ],
    performance: [
      {
        title: "Atividade Legislativa",
        icon: FileText,
        metrics: [
          { label: "Projetos apresentados", before: "0", after: "26", change: "+26", positive: true },
          { label: "Discursos em plenário", before: "0", after: "48", change: "+48", positive: true },
        ],
      },
      {
        title: "Participação",
        icon: Vote,
        metrics: [
          { label: "Presença em votações", before: "—", after: "92%", change: "92%", positive: true },
          { label: "Audiências públicas", before: "0", after: "11", change: "+11", positive: true },
        ],
      },
    ],
    chart1: {
      title: "Projetos de Lei Apresentados",
      unit: "projetos",
      positiveTrend: true,
      data: splitSeries([
        { ano: "2019", value: 0, current: false },
        { ano: "2020", value: 0, current: false },
        { ano: "2021", value: 0, current: false },
        { ano: "2022", value: 0, current: false },
        { ano: "2023", value: 14, current: true },
        { ano: "2024", value: 12, current: true },
      ]),
    },
    chart2: {
      title: "Presença em Votações Nominais (%)",
      unit: "%",
      positiveTrend: true,
      data: splitSeries([
        { ano: "2023", value: 90, current: true },
        { ano: "2024", value: 92, current: true },
      ]),
    },
    comparisonLabel: "Antes do Mandato",
    footnote: "Fontes: Câmara dos Deputados, Portal da Transparência. Dados consolidados até dezembro de 2024.",
  },

  // Romeu Zema - Governador de MG
  "6": {
    subtitle: "Resultados concretos e compromissos assumidos durante o mandato de Romeu Zema como Governador de Minas Gerais.",
    commitments: [
      { id: 1, title: "Equilíbrio fiscal de Minas", icon: Landmark, status: "Cumprida", progress: 100, detail: "Déficit recorrente eliminado" },
      { id: 2, title: "Pagar servidores em dia", icon: BriefcaseBusiness, status: "Cumprida", progress: 100, detail: "Folha regularizada desde 2019" },
      { id: 3, title: "Concessões e PPPs", icon: Building2, status: "Em Andamento", progress: 70, detail: "12 projetos contratados" },
      { id: 4, title: "Minas Livre para Crescer", icon: TrendingUp, status: "Cumprida", progress: 100, detail: "Lei sancionada em 2023" },
      { id: 5, title: "Reforma Administrativa", icon: Landmark, status: "Cumprida", progress: 100, detail: "Secretarias reduzidas e fundidas" },
      { id: 6, title: "Segurança hídrica", icon: Droplets, status: "Em Andamento", progress: 50, detail: "Recuperação de bacias em curso" },
    ],
    performance: [
      {
        title: "Economia",
        icon: TrendingUp,
        metrics: [
          { label: "Crescimento do PIB estadual", before: "0,8%", after: "3,1%", change: "+2,3 p.p.", positive: true },
          { label: "Resultado fiscal primário (R$ bi)", before: "-9,8", after: "+5,2", change: "Superávit", positive: true },
        ],
      },
      {
        title: "Administração",
        icon: Landmark,
        metrics: [
          { label: "Número de secretarias", before: "21", after: "14", change: "-33,3%", positive: true },
          { label: "Atrasos no pagamento de servidores", before: "Sim", after: "Não", change: "Regularizado", positive: true },
        ],
      },
      {
        title: "Investimentos",
        icon: Building2,
        metrics: [
          { label: "Concessões e PPPs assinadas", before: "2", after: "12", change: "+500%", positive: true },
          { label: "Investimento privado captado (R$ bi)", before: "4,1", after: "18,7", change: "+356,1%", positive: true },
        ],
      },
    ],
    chart1: {
      title: "Resultado Fiscal Primário (R$ bilhões)",
      unit: "R$ bi",
      positiveTrend: true,
      data: splitSeries([
        { ano: "2017", value: -7.4, current: false },
        { ano: "2018", value: -9.8, current: false },
        { ano: "2019", value: -3.2, current: true },
        { ano: "2020", value: 1.5, current: true },
        { ano: "2021", value: 3.8, current: true },
        { ano: "2022", value: 4.6, current: true },
        { ano: "2023", value: 5.2, current: true },
      ]),
    },
    chart2: {
      title: "Crescimento do PIB Estadual (%)",
      unit: "%",
      positiveTrend: true,
      data: splitSeries([
        { ano: "2017", value: 0.5, current: false },
        { ano: "2018", value: 0.8, current: false },
        { ano: "2019", value: 1.2, current: true },
        { ano: "2020", value: -3.8, current: true },
        { ano: "2021", value: 4.1, current: true },
        { ano: "2022", value: 2.8, current: true },
        { ano: "2023", value: 3.1, current: true },
      ]),
    },
    comparisonLabel: "Gov. Anterior",
    footnote: "Fontes: IBGE, Secretaria de Estado de Fazenda de MG, Portal da Transparência. Dados consolidados até dezembro de 2024.",
  },
};
