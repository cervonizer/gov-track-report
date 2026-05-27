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
    subtitle: "Indicadores nacionais consolidados ao longo dos três mandatos presidenciais de Lula (2003–2010 e 2023–presente). Inclui avanços e retrocessos com fontes oficiais.",
    commitments: [
      // 1º e 2º mandatos (2003–2010) — promessas históricas cumpridas
      { id: 101, title: "Bolsa Família (1º mandato)", icon: Users, status: "Cumprida", progress: 100, detail: "Programa criado em 2003, unificou benefícios sociais e atendeu ~12 mi de famílias até 2010.", sources: [{ label: "MDS — Histórico do Bolsa Família", url: "https://www.gov.br/mds/pt-br/acoes-e-programas/bolsa-familia" }] },
      { id: 102, title: "Pré-sal e exploração nacional (2º mandato)", icon: Droplets, status: "Cumprida", progress: 100, detail: "Modelo de partilha aprovado (Lei 12.351/2010); criação da PPSA.", sources: [{ label: "Planalto — Lei 12.351/2010", url: "https://www.planalto.gov.br/ccivil_03/_ato2007-2010/2010/lei/l12351.htm" }] },
      { id: 103, title: "ProUni e expansão das universidades federais", icon: GraduationCap, status: "Cumprida", progress: 100, detail: "ProUni criado em 2004 (Lei 11.096/2005); REUNI ampliou vagas em IFES a partir de 2007.", sources: [{ label: "Planalto — Lei 11.096/2005 (ProUni)", url: "https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2005/lei/l11096.htm" }] },
      { id: 104, title: "Minha Casa Minha Vida — versão original (2º mandato)", icon: Building2, status: "Cumprida", progress: 100, detail: "Programa lançado em 2009; mais de 1 mi de unidades contratadas até 2010.", sources: [{ label: "Caixa — Histórico MCMV", url: "https://www.caixa.gov.br/voce/habitacao/minha-casa-minha-vida/Paginas/default.aspx" }] },
      // 3º mandato (2023–) — em andamento / cumpridas
      { id: 1, title: "Brasil Sem Fome (3º mandato)", icon: Stethoscope, status: "Em Andamento", progress: 55, detail: "Saída do Mapa da Fome da FAO em curso; insegurança alimentar grave caiu para 8,7%.", sources: [{ label: "FAO — SOFI 2024", url: "https://www.fao.org/publications/sofi/2024/en/" }] },
      { id: 2, title: "Desmatamento Zero — Amazônia (3º mandato)", icon: Leaf, status: "Em Andamento", progress: 50, detail: "Queda de ~50% no desmatamento da Amazônia entre 2022 e 2024.", sources: [{ label: "INPE — PRODES", url: "http://terrabrasilis.dpi.inpe.br/app/dashboard/deforestation/biomes/legal_amazon/rates" }] },
      { id: 3, title: "Reajuste real do salário mínimo (3º mandato)", icon: BriefcaseBusiness, status: "Cumprida", progress: 100, detail: "Política de valorização restabelecida (Lei 14.663/2023). Mínimo: R$ 1.212 → R$ 1.518.", sources: [{ label: "Planalto — Lei 14.663/2023", url: "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/L14663.htm" }] },
      { id: 5, title: "Reforma Tributária (3º mandato)", icon: Landmark, status: "Cumprida", progress: 100, detail: "Emenda Constitucional 132/2023 promulgada — unifica tributos sobre consumo.", sources: [{ label: "Planalto — EC 132/2023", url: "https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc132.htm" }] },
      { id: 6, title: "Novo PAC (3º mandato)", icon: BriefcaseBusiness, status: "Em Andamento", progress: 35, detail: "R$ 1,7 trilhão em investimentos previstos até 2026.", sources: [{ label: "Gov.br — Novo PAC", url: "https://www.gov.br/casacivil/pt-br/novopac" }] },
      // 3º mandato — promessas descumpridas / parciais
      { id: 201, title: "Isenção de IR até R$ 5.000 (3º mandato)", icon: Landmark, status: "Não Cumprida", progress: 40, detail: "Faixa de isenção subiu para ~R$ 2.824 (2 SM) em 2024 com ajustes graduais, mas R$ 5.000 ainda não foi atingido até maio/2026 devido ao alto custo fiscal.", sources: [{ label: "Receita Federal — IRPF", url: "https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda" }, { label: "MP 1.171/2023 — reajuste IRPF", url: "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/mpv/mpv1171.htm" }] },
      { id: 202, title: "Picanha e cervejinha na mesa (3º mandato)", icon: Users, status: "Parcialmente Cumprida", progress: 50, detail: "Preço da carne caiu 9–11% no IPCA de 2023 e o poder de compra subiu com inflação controlada, mas a 'fartura' prometida ficou no campo simbólico — sem distribuição direta nem queda generalizada sustentada.", sources: [{ label: "IBGE — IPCA", url: "https://www.ibge.gov.br/explica/inflacao.php" }] },
      { id: 203, title: "Zerar a fila do SUS (3º mandato)", icon: Stethoscope, status: "Não Cumprida", progress: 25, detail: "Programa Agora Tem Especialistas lançado em 2024, mas filas para cirurgias eletivas e exames seguem em milhões de procedimentos.", sources: [{ label: "Ministério da Saúde", url: "https://www.gov.br/saude/pt-br" }, { label: "CONASS", url: "https://www.conass.org.br/" }] },
      { id: 204, title: "Déficit zero em 2024 (3º mandato)", icon: TrendingUp, status: "Não Cumprida", progress: 10, detail: "Meta fiscal revisada de zero para -0,25% PIB; resultado primário fechou 2024 em déficit de ~R$ 230 bi.", sources: [{ label: "Tesouro Nacional — RTN", url: "https://www.gov.br/tesouronacional/pt-br/estatisticas-fiscais-e-planejamento/resultado-do-tesouro-nacional" }] },
      { id: 205, title: "Reverter privatizações (Eletrobras/Petrobras/Correios)", icon: Landmark, status: "Parcialmente Cumprida", progress: 35, detail: "Reversão da privatização da Eletrobras não concretizada; Correios mantidos estatais; Petrobras com mudança de governança mas sem estatização adicional.", sources: [{ label: "BNDES — Desestatização", url: "https://www.bndes.gov.br/wps/portal/site/home/transparencia/desestatizacao" }] },
    ],
    performance: [
      {
        title: "Economia — 1º e 2º mandatos (2003–2010)",
        icon: TrendingUp,
        metrics: [
          { label: "Crescimento médio do PIB (a.a.)", before: "2,3%", after: "4,0%", change: "+1,7 p.p.", positive: true, sources: [{ label: "IBGE — Contas Nacionais", url: "https://www.ibge.gov.br/explica/pib.php" }, { label: "IPEADATA", url: "http://www.ipeadata.gov.br/" }] },
          { label: "Taxa de desemprego (PME)", before: "12,3%", after: "6,7%", change: "-5,6 p.p.", positive: true, sources: [{ label: "IBGE — Pesquisa Mensal de Emprego", url: "https://www.ibge.gov.br/estatisticas/sociais/trabalho/9180-pesquisa-mensal-de-emprego.html" }] },
          { label: "Empregos formais criados (CAGED, acumulado)", before: "—", after: "~15 milhões", change: "Recorde histórico", positive: true, sources: [{ label: "MTE — CAGED", url: "https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/estatisticas-trabalho/caged" }] },
          { label: "Reservas internacionais (US$ bi)", before: "37,8", after: "288,6", change: "+663%", positive: true, sources: [{ label: "BCB — Reservas Internacionais", url: "https://www.bcb.gov.br/estatisticas/reservas" }] },
          { label: "Salário mínimo real (ganho acumulado)", before: "—", after: "+53,7%", change: "+53,7%", positive: true, sources: [{ label: "DIEESE — Salário Mínimo", url: "https://www.dieese.org.br/analisecestabasica/salarioMinimo.html" }] },
          { label: "Carga tributária bruta (% PIB)", before: "32,0%", after: "33,5%", change: "+1,5 p.p.", positive: false, sources: [{ label: "Receita Federal — Carga Tributária", url: "https://www.gov.br/receitafederal/pt-br/centrais-de-conteudo/publicacoes/relatorios/carga-tributaria-no-brasil" }] },
          { label: "Inflação (IPCA, fim de 2010)", before: "5,69% (2002)", after: "5,91% (2010)", change: "Acima do centro da meta", positive: false, sources: [{ label: "IBGE — IPCA", url: "https://www.ibge.gov.br/explica/inflacao.php" }] },
          { label: "Dívida Líquida do Setor Público (% PIB)", before: "60,4%", after: "38,0%", change: "-22,4 p.p.", positive: true, sources: [{ label: "BCB — Estatísticas Fiscais", url: "https://www.bcb.gov.br/estatisticas/estatisticasfiscais" }] },
        ],
      },
      {
        title: "Social — 1º e 2º mandatos (2003–2010)",
        icon: Users,
        metrics: [
          { label: "Pobreza extrema (% pop.)", before: "12,0%", after: "5,2%", change: "-6,8 p.p.", positive: true, sources: [{ label: "IPEA — Pobreza e Desigualdade", url: "https://www.ipea.gov.br/portal/" }] },
          { label: "Famílias atendidas pelo Bolsa Família (mi)", before: "3,6", after: "12,8", change: "+255%", positive: true, sources: [{ label: "MDS — Bolsa Família", url: "https://www.gov.br/mds/pt-br/acoes-e-programas/bolsa-familia" }] },
          { label: "IDH (Brasil)", before: "0,710", after: "0,727", change: "+0,017", positive: true, sources: [{ label: "PNUD — IDH", url: "https://www.undp.org/pt/brazil" }] },
          { label: "Mortalidade infantil (por mil nasc.)", before: "27,4", after: "16,2", change: "-40,9%", positive: true, sources: [{ label: "DATASUS", url: "https://datasus.saude.gov.br/" }] },
          { label: "Índice de Gini", before: "0,583", after: "0,533", change: "-0,050", positive: true, sources: [{ label: "IBGE — PNAD", url: "https://www.ibge.gov.br/" }] },
          { label: "Taxa de homicídios (por 100 mil)", before: "28,5", after: "27,4", change: "-1,1", positive: false, sources: [{ label: "IPEA — Atlas da Violência", url: "https://www.ipea.gov.br/atlasviolencia/" }] },
        ],
      },
      {
        title: "Economia — 3º mandato (2023–presente)",
        icon: TrendingUp,
        metrics: [
          { label: "Crescimento do PIB", before: "2,9%", after: "3,2%", change: "+0,3 p.p.", positive: true, sources: [{ label: "IBGE — Contas Nacionais", url: "https://www.ibge.gov.br/explica/pib.php" }] },
          { label: "Taxa de desemprego", before: "8,5%", after: "6,2%", change: "-2,3 p.p.", positive: true, sources: [{ label: "IBGE — PNAD Contínua", url: "https://www.ibge.gov.br/estatisticas/sociais/trabalho/9173-pesquisa-nacional-por-amostra-de-domicilios-continua-trimestral.html" }] },
          { label: "Inflação (IPCA acumulado)", before: "5,79%", after: "4,83%", change: "-0,96 p.p.", positive: true, sources: [{ label: "IBGE — IPCA", url: "https://www.ibge.gov.br/explica/inflacao.php" }] },
          { label: "Salário Mínimo (R$)", before: "R$ 1.212", after: "R$ 1.518", change: "+25,2%", positive: true, sources: [{ label: "Planalto — Lei 14.663/2023", url: "https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2023/lei/L14663.htm" }] },
          { label: "Dívida Pública Bruta (% PIB)", before: "71,7%", after: "76,5%", change: "+4,8 p.p.", positive: false, sources: [{ label: "BCB — Estatísticas Fiscais", url: "https://www.bcb.gov.br/estatisticas/estatisticasfiscais" }] },
          { label: "Taxa Selic (a.a.)", before: "13,75%", after: "15,00%", change: "+1,25 p.p.", positive: false, sources: [{ label: "BCB — Histórico Selic / Copom", url: "https://www.bcb.gov.br/controleinflacao/historicotaxasjuros" }] },
          { label: "Resultado Primário (R$ bi)", before: "+54,1", after: "-230,5", change: "Reversão de superávit para déficit", positive: false, sources: [{ label: "Tesouro Nacional — RTN", url: "https://www.gov.br/tesouronacional/pt-br/estatisticas-fiscais-e-planejamento/resultado-do-tesouro-nacional" }] },
          { label: "Câmbio R$/US$ (média anual)", before: "R$ 5,16", after: "R$ 5,39", change: "+4,5%", positive: false, sources: [{ label: "BCB — PTAX", url: "https://www.bcb.gov.br/estabilidadefinanceira/historicocotacoes" }] },
        ],
      },
      {
        title: "Social — 3º mandato (2023–presente)",
        icon: Users,
        metrics: [
          { label: "Pobreza extrema", before: "5,9%", after: "4,4%", change: "-1,5 p.p.", positive: true, sources: [{ label: "IBGE — Síntese de Indicadores Sociais", url: "https://www.ibge.gov.br/estatisticas/sociais/populacao/9221-sintese-de-indicadores-sociais.html" }] },
          { label: "Insegurança alimentar grave", before: "15,5%", after: "8,7%", change: "-6,8 p.p.", positive: true, sources: [{ label: "FAO — SOFI 2024", url: "https://www.fao.org/publications/sofi/2024/en/" }] },
          { label: "Famílias no Bolsa Família (mi)", before: "21,1", after: "20,5", change: "-0,6", positive: true, sources: [{ label: "MDS — Bolsa Família", url: "https://www.gov.br/mds/pt-br/acoes-e-programas/bolsa-familia" }] },
          { label: "Aprovação do governo (ótimo/bom)", before: "38%", after: "24%", change: "-14 p.p.", positive: false, sources: [{ label: "Datafolha — Avaliação do Governo Lula", url: "https://datafolha.folha.uol.com.br/" }] },
          { label: "Homicídios (por 100 mil hab.)", before: "22,8", after: "23,4", change: "+0,6", positive: false, sources: [{ label: "FBSP — Anuário 2024", url: "https://forumseguranca.org.br/anuario-brasileiro-seguranca-publica/" }] },
        ],
      },
      {
        title: "Meio Ambiente — comparação histórica (1º/2º vs 3º mandato)",
        icon: Leaf,
        metrics: [
          { label: "Desmatamento Amazônia — 2º mandato (2004 → 2010)", before: "27.772 km²", after: "7.000 km²", change: "-74,8%", positive: true, sources: [{ label: "INPE — PRODES", url: "http://terrabrasilis.dpi.inpe.br/app/dashboard/deforestation/biomes/legal_amazon/rates" }] },
          { label: "Desmatamento Amazônia — 3º mandato (2022 → 2024)", before: "11.594 km²", after: "5.816 km²", change: "-49,8%", positive: true, sources: [{ label: "INPE — PRODES", url: "http://terrabrasilis.dpi.inpe.br/app/dashboard/deforestation/biomes/legal_amazon/rates" }] },
          { label: "Desmatamento Cerrado — 3º mandato", before: "10.689 km²", after: "8.174 km²", change: "-23,5%", positive: true, sources: [{ label: "INPE — PRODES Cerrado", url: "http://terrabrasilis.dpi.inpe.br/app/dashboard/deforestation/biomes/cerrado/rates" }] },
          { label: "Focos de queimada no Pantanal — 3º mandato", before: "8.182", after: "12.581", change: "+53,8%", positive: false, sources: [{ label: "INPE — Programa Queimadas", url: "https://terrabrasilis.dpi.inpe.br/queimadas/situacao-atual/" }] },
          { label: "Área queimada no Brasil — 3º mandato (mi ha)", before: "16,3", after: "30,8", change: "+89%", positive: false, sources: [{ label: "MapBiomas Fogo", url: "https://brasil.mapbiomas.org/" }] },
        ],
      },
    ],
    chart1: {
      title: "Crescimento do PIB Nacional ao longo dos 3 mandatos (%)",
      unit: "%",
      positiveTrend: true,
      data: splitSeries([
        { ano: "2002", value: 3.1, current: false },
        { ano: "2003", value: 1.1, current: true },
        { ano: "2004", value: 5.8, current: true },
        { ano: "2006", value: 4.0, current: true },
        { ano: "2008", value: 5.1, current: true },
        { ano: "2010", value: 7.5, current: true },
        { ano: "2014", value: 0.5, current: false },
        { ano: "2019", value: 1.2, current: false },
        { ano: "2022", value: 3.0, current: false },
        { ano: "2023", value: 2.9, current: true },
        { ano: "2024", value: 3.2, current: true },
      ]),
      sources: [{ label: "IBGE — Contas Nacionais Trimestrais", url: "https://www.ibge.gov.br/explica/pib.php" }, { label: "IPEADATA", url: "http://www.ipeadata.gov.br/" }],
    },
    chart2: {
      title: "Desmatamento na Amazônia ao longo dos 3 mandatos (km²/ano)",
      unit: "km²",
      positiveTrend: true,
      data: splitSeries([
        { ano: "2002", value: 21651, current: false },
        { ano: "2004", value: 27772, current: true },
        { ano: "2006", value: 14286, current: true },
        { ano: "2008", value: 12911, current: true },
        { ano: "2010", value: 7000, current: true },
        { ano: "2014", value: 5012, current: false },
        { ano: "2019", value: 10129, current: false },
        { ano: "2022", value: 11594, current: false },
        { ano: "2023", value: 9001, current: true },
        { ano: "2024", value: 5816, current: true },
      ]),
      sources: [{ label: "INPE — PRODES", url: "http://terrabrasilis.dpi.inpe.br/app/dashboard/deforestation/biomes/legal_amazon/rates" }],
    },
    comparisonLabel: "Antecessores (FHC II e Bolsonaro)",
    footnote: "Dados consolidados ao longo dos três mandatos presidenciais de Lula (2003–2010 e 2023–presente). Para o 1º/2º mandatos, a referência 'antes' é o final do governo FHC II (2002); para o 3º, o final do governo Bolsonaro (2022). Indicadores apresentados de forma equilibrada — incluem avanços e retrocessos. Atualizado até dezembro de 2024.",
    dataSources: [
      { label: "IBGE", url: "https://www.ibge.gov.br/" },
      { label: "IPEA / IPEADATA", url: "http://www.ipeadata.gov.br/" },
      { label: "INPE — PRODES e Queimadas", url: "http://terrabrasilis.dpi.inpe.br/" },
      { label: "FAO — SOFI", url: "https://www.fao.org/publications/sofi/" },
      { label: "MDS — Bolsa Família", url: "https://www.gov.br/mds/pt-br/" },
      { label: "Banco Central do Brasil", url: "https://www.bcb.gov.br/" },
      { label: "Tesouro Nacional", url: "https://www.gov.br/tesouronacional/" },
      { label: "Receita Federal", url: "https://www.gov.br/receitafederal/" },
      { label: "Ministério da Saúde / DATASUS", url: "https://datasus.saude.gov.br/" },
      { label: "Datafolha", url: "https://datafolha.folha.uol.com.br/" },
      { label: "FBSP — Anuário de Segurança Pública", url: "https://forumseguranca.org.br/" },
      { label: "MapBiomas", url: "https://brasil.mapbiomas.org/" },
      { label: "PNUD — IDH", url: "https://www.undp.org/pt/brazil" },
      { label: "DIEESE", url: "https://www.dieese.org.br/" },
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
      { id: 5, title: "Fim do foro privilegiado", icon: ShieldCheck, status: "Não Cumprida", progress: 10, detail: "PEC 333/2017 e correlatas seguem sem votação; senador não apresentou proposta própria sobre o tema" },
      { id: 6, title: "Aprovar lei de proteção a agentes de segurança", icon: ShieldCheck, status: "Não Cumprida", progress: 15, detail: "Projetos arquivados ao fim das legislaturas sem aprovação no plenário" },
      { id: 7, title: "Esclarecer caso das 'rachadinhas' do gabinete na ALERJ", icon: ShieldCheck, status: "Não Cumprida", progress: 0, detail: "Investigação do MP-RJ ainda em curso; STJ rejeitou suspensão em 2023" },
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
      {
        title: "Indicadores Críticos",
        icon: ShieldCheck,
        metrics: [
          { label: "Projetos aprovados pelo plenário (sancionados)", before: "4", after: "2", change: "-50,0%", positive: false, sources: [{ label: "Senado — Matérias do Senador", url: "https://www25.senado.leg.br/web/senadores/senador/-/perfil/4988" }] },
          { label: "Faltas em votações secretas", before: "6", after: "11", change: "+83,3%", positive: false, sources: [{ label: "Senado — Votações", url: "https://www25.senado.leg.br/web/atividade/plenario/votacoes" }] },
          { label: "Processos em investigação (MP-RJ — 'rachadinhas')", before: "1", after: "1 (ativo)", change: "Sem desfecho", positive: false, sources: [{ label: "MP-RJ — Notas Oficiais", url: "https://www.mprj.mp.br/" }, { label: "STJ — APn 989", url: "https://www.stj.jus.br/" }] },
          { label: "Alinhamento com pauta do governo eleito (2023–2024)", before: "—", after: "18%", change: "Oposição sistemática", positive: false, sources: [{ label: "DIAP — Radiografia do Congresso", url: "https://www.diap.org.br/" }] },
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
      { id: 5, title: "Reduzir letalidade policial no RJ", icon: ShieldCheck, status: "Não Cumprida", progress: 10, detail: "RJ segue como estado com maior número absoluto de mortes por intervenção policial (Anuário FBSP 2024)" },
      { id: 6, title: "Zerar fila da saúde estadual", icon: Stethoscope, status: "Não Cumprida", progress: 15, detail: "Fila por cirurgias eletivas e consultas especializadas cresceu em 2023–2024" },
      { id: 7, title: "Concluir obras paradas do estado", icon: Building2, status: "Parcialmente Cumprida", progress: 35, detail: "TCE-RJ aponta dezenas de obras com atraso superior a 24 meses" },
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
      {
        title: "Indicadores Críticos do Estado",
        icon: ShieldCheck,
        metrics: [
          { label: "Mortes por intervenção policial (RJ)", before: "1.245", after: "1.330", change: "+6,8%", positive: false, sources: [{ label: "ISP-RJ — Estatísticas", url: "http://www.ispdados.rj.gov.br/" }, { label: "FBSP — Anuário 2024", url: "https://forumseguranca.org.br/anuario-brasileiro-seguranca-publica/" }] },
          { label: "Fila por cirurgia eletiva no SUS-RJ", before: "62 mil", after: "84 mil", change: "+35,5%", positive: false, sources: [{ label: "SES-RJ — Painel SUS", url: "https://www.saude.rj.gov.br/" }] },
          { label: "Evasão no Ensino Médio (RJ)", before: "6,8%", after: "7,9%", change: "+1,1 p.p.", positive: false, sources: [{ label: "INEP — Censo Escolar", url: "https://www.gov.br/inep/pt-br/areas-de-atuacao/pesquisas-estatisticas-e-indicadores/censo-escolar" }] },
          { label: "Obras estaduais com atraso > 24 meses", before: "—", after: "47", change: "Crítico", positive: false, sources: [{ label: "TCE-RJ — Relatórios", url: "https://www.tce.rj.gov.br/" }] },
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
      { id: 7, title: "Zerar desmatamento ilegal no Cerrado goiano", icon: ShieldCheck, status: "Não Cumprida", progress: 10, detail: "GO segue entre os estados com maior alerta de desmatamento do Cerrado (MapBiomas/INPE 2024)" },
      { id: 8, title: "Universalizar atendimento básico de saúde", icon: Stethoscope, status: "Parcialmente Cumprida", progress: 50, detail: "Fila por consultas e cirurgias eletivas cresceu em 2023" },
      { id: 9, title: "Renegociar dívida do estado com a União", icon: Landmark, status: "Não Cumprida", progress: 20, detail: "GO ainda não aderiu ao RRF; estoque da dívida segue elevado" },
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
      {
        title: "Indicadores Críticos",
        icon: ShieldCheck,
        metrics: [
          { label: "Alertas de desmatamento no Cerrado (GO, km²)", before: "612", after: "1.034", change: "+68,9%", positive: false, sources: [{ label: "INPE — DETER Cerrado", url: "http://terrabrasilis.dpi.inpe.br/" }, { label: "MapBiomas Alerta", url: "https://alerta.mapbiomas.org/" }] },
          { label: "Estoque da dívida consolidada (R$ bi)", before: "16,4", after: "22,1", change: "+34,8%", positive: false, sources: [{ label: "Tesouro Nacional — Estados", url: "https://www.tesourotransparente.gov.br/temas/estados-e-municipios" }] },
          { label: "Fila por cirurgia eletiva no SUS-GO", before: "28 mil", after: "41 mil", change: "+46,4%", positive: false, sources: [{ label: "SES-GO — Painel Saúde", url: "https://www.saude.go.gov.br/" }] },
          { label: "Mortes por intervenção policial", before: "112", after: "168", change: "+50,0%", positive: false, sources: [{ label: "FBSP — Anuário 2024", url: "https://forumseguranca.org.br/anuario-brasileiro-seguranca-publica/" }] },
          { label: "Feminicídios consumados", before: "38", after: "57", change: "+50,0%", positive: false, sources: [{ label: "SSP-GO", url: "https://www.ssp.go.gov.br/estatistica" }] },
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
      { id: 5, title: "Aprovar Reforma Administrativa (PEC 32)", icon: Landmark, status: "Não Cumprida", progress: 5, detail: "PEC sequer foi pautada no plenário da Câmara em 2023–2024" },
      { id: 6, title: "Acabar com o fundão eleitoral", icon: ShieldCheck, status: "Não Cumprida", progress: 0, detail: "Fundo eleitoral atingiu R$ 4,9 bi em 2024, recorde histórico" },
      { id: 7, title: "Reduzir o número de ministérios", icon: Landmark, status: "Não Cumprida", progress: 0, detail: "Número de ministérios passou de 23 para 38 na atual gestão" },
      { id: 8, title: "Aprovar projetos de autoria própria", icon: FileText, status: "Não Cumprida", progress: 8, detail: "Nenhum PL de autoria do deputado foi sancionado até 2024" },
    ],
    performance: [
      {
        title: "Atividade Legislativa",
        icon: FileText,
        metrics: [
          { label: "Projetos apresentados", before: "0", after: "26", change: "+26", positive: true, sources: [{ label: "Câmara — Atividade do Deputado", url: "https://www.camara.leg.br/deputados/220552?ano=2024" }] },
          { label: "Discursos em plenário", before: "0", after: "48", change: "+48", positive: true, sources: [{ label: "Câmara — Discursos", url: "https://www.camara.leg.br/deputados/220552/discursos" }] },
          { label: "Requerimentos de informação", before: "0", after: "62", change: "+62", positive: true, sources: [{ label: "Câmara — Proposições", url: "https://www.camara.leg.br/deputados/220552?ano=2024" }] },
        ],
      },
      {
        title: "Participação",
        icon: Vote,
        metrics: [
          { label: "Presença em votações nominais", before: "—", after: "92%", change: "92%", positive: true, sources: [{ label: "Câmara — Votações", url: "https://www.camara.leg.br/presenca-comissoes/presenca-plenario" }] },
          { label: "Audiências públicas", before: "0", after: "11", change: "+11", positive: true, sources: [{ label: "Câmara — Comissões", url: "https://www.camara.leg.br/comissoes" }] },
          { label: "Comissões integradas", before: "0", after: "3", change: "+3", positive: true, sources: [{ label: "Câmara — Atividade do Deputado", url: "https://www.camara.leg.br/deputados/220552" }] },
        ],
      },
      {
        title: "Indicadores Críticos",
        icon: ShieldCheck,
        metrics: [
          { label: "Projetos de autoria aprovados pelo plenário", before: "0", after: "0", change: "Sem aprovação", positive: false, sources: [{ label: "Câmara — Proposições", url: "https://www.camara.leg.br/deputados/220552?ano=2024" }] },
          { label: "Alinhamento com pautas do governo (2023–2024)", before: "—", after: "12%", change: "Oposição quase total", positive: false, sources: [{ label: "DIAP — Radiografia do Congresso", url: "https://www.diap.org.br/" }] },
          { label: "Faltas em sessões deliberativas", before: "—", after: "34", change: "+34", positive: false, sources: [{ label: "Câmara — Presença", url: "https://www.camara.leg.br/presenca-comissoes/presenca-plenario" }] },
          { label: "Pautas do NOVO aprovadas em plenário (Reforma Adm.)", before: "—", after: "0", change: "Sem avanço", positive: false, sources: [{ label: "Câmara — Tramitação PEC 32/2020", url: "https://www.camara.leg.br/proposicoesWeb/fichadetramitacao?idProposicao=2262083" }] },
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
      sources: [{ label: "Câmara — Proposições do Deputado", url: "https://www.camara.leg.br/deputados/220552?ano=2024" }],
    },
    chart2: {
      title: "Presença em Votações Nominais (%)",
      unit: "%",
      positiveTrend: true,
      data: splitSeries([
        { ano: "2023", value: 90, current: true },
        { ano: "2024", value: 92, current: true },
      ]),
      sources: [{ label: "Câmara — Presença em Votações", url: "https://www.camara.leg.br/presenca-comissoes/presenca-plenario" }],
    },
    comparisonLabel: "Antes do Mandato",
    footnote: "Comparação com o período anterior ao primeiro mandato (sem atividade parlamentar). Dados consolidados até dezembro de 2024.",
    dataSources: [
      { label: "Câmara dos Deputados", url: "https://www.camara.leg.br/" },
      { label: "Portal da Transparência", url: "https://portaldatransparencia.gov.br/" },
    ],
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
          { label: "Crescimento do PIB estadual", before: "0,8%", after: "3,1%", change: "+2,3 p.p.", positive: true, sources: [{ label: "IBGE — Contas Regionais", url: "https://www.ibge.gov.br/estatisticas/economicas/contas-nacionais/9054-contas-regionais-do-brasil.html" }] },
          { label: "Resultado fiscal primário (R$ bi)", before: "-9,8", after: "+5,2", change: "Superávit", positive: true, sources: [{ label: "Tesouro Nacional — Estados", url: "https://www.tesourotransparente.gov.br/temas/estados-e-municipios" }] },
          { label: "Capacidade de pagamento (CAPAG)", before: "D", after: "C", change: "Melhora", positive: true, sources: [{ label: "Tesouro Nacional — CAPAG", url: "https://www.tesourotransparente.gov.br/temas/estados-e-municipios/capacidade-de-pagamento-capag" }] },
        ],
      },
      {
        title: "Administração",
        icon: Landmark,
        metrics: [
          { label: "Número de secretarias", before: "21", after: "14", change: "-33,3%", positive: true, sources: [{ label: "ALMG — Lei 24.313/2023", url: "https://www.almg.gov.br/legislacao-mineira/lei/24313/2023/" }] },
          { label: "Atrasos no pagamento de servidores", before: "Sim", after: "Não", change: "Regularizado", positive: true, sources: [{ label: "Portal da Transparência MG", url: "https://www.transparencia.mg.gov.br/" }] },
          { label: "Cargos comissionados", before: "8.230", after: "5.940", change: "-27,8%", positive: true, sources: [{ label: "Portal da Transparência MG", url: "https://www.transparencia.mg.gov.br/" }] },
        ],
      },
      {
        title: "Investimentos",
        icon: Building2,
        metrics: [
          { label: "Concessões e PPPs assinadas", before: "2", after: "12", change: "+500%", positive: true, sources: [{ label: "SEINFRA-MG", url: "https://www.infraestrutura.mg.gov.br/" }] },
          { label: "Investimento privado captado (R$ bi)", before: "4,1", after: "18,7", change: "+356,1%", positive: true, sources: [{ label: "Invest Minas", url: "https://www.investminas.mg.gov.br/" }] },
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
      sources: [{ label: "Tesouro Nacional — Estados e Municípios", url: "https://www.tesourotransparente.gov.br/temas/estados-e-municipios" }],
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
      sources: [{ label: "IBGE — Contas Regionais", url: "https://www.ibge.gov.br/estatisticas/economicas/contas-nacionais/9054-contas-regionais-do-brasil.html" }],
    },
    comparisonLabel: "Gov. Fernando Pimentel (2015–2018)",
    footnote: "Comparação entre o governo Pimentel (PT, 2015–2018) e o governo Zema (NOVO, 2019–). Dados consolidados até dezembro de 2024.",
    dataSources: [
      { label: "IBGE", url: "https://www.ibge.gov.br/" },
      { label: "Tesouro Nacional", url: "https://www.tesourotransparente.gov.br/" },
      { label: "Portal da Transparência MG", url: "https://www.transparencia.mg.gov.br/" },
      { label: "ALMG", url: "https://www.almg.gov.br/" },
    ],
  },
};
