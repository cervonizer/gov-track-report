## Objetivo

Reorganizar e enriquecer a página do Lula (`/politician/1`) com três mudanças:

1. Mover a aba "Legado" para o final da navegação por abas.
2. Ampliar o "Legado" para abranger os três mandatos (2003–2006, 2007–2010, 2023–presente), não apenas o atual.
3. Incluir indicadores negativos e promessas descumpridas no Legado, com fontes oficiais.

---

## 1. Reordenar abas — "Legado" por último

Em `src/pages/PoliticianProfile.tsx`:

- Atualmente o `<LegacySection>` é renderizado FORA das abas, abaixo do bloco `<Tabs>` (linha 352). Vamos integrá-lo como uma quarta aba.
- Mudar `TabsList` para `grid-cols-4` e adicionar `<TabsTrigger value="legacy">Legado</TabsTrigger>` como ÚLTIMO item.
- Adicionar `<TabsContent value="legacy">` envolvendo `<LegacySection>` no final dos `TabsContent`.
- Remover a renderização do `<LegacySection>` fora das abas (linha 352).

Ordem final das abas: Histórico de Votos → Promessas de Campanha → Propostas → **Legado**.

---

## 2. Ampliar o Legado para os 3 mandatos do Lula

Em `src/data/legacyData.ts`, na entrada `"1"`:

### 2.1. Subtitle e estrutura
- Atualizar `subtitle` para refletir os 3 mandatos: "Indicadores nacionais consolidados ao longo dos três mandatos presidenciais de Lula (2003–2010 e 2023–presente)."
- Atualizar `comparisonLabel` para distinguir as comparações por mandato (ver abaixo).
- Atualizar `footnote` mencionando o escopo dos 3 mandatos e a comparação com antecessores (FHC II como base do 1º mandato; Bolsonaro como base do 3º).

### 2.2. Categorias de performance (positivos + negativos por mandato)

Reestruturar `performance` em categorias temáticas que listem métricas dos 3 mandatos lado a lado, marcando cada métrica com seu mandato no `label` (ex.: "Pobreza extrema (1º mandato 2003–2006)").

Categorias a incluir (cada uma com mix de `positive: true` e `positive: false`):

- **Economia (1º e 2º mandatos — 2003–2010)**
  - Positivos: PIB médio +4,0% a.a.; desemprego 12,3% → 6,7%; criação de ~15 mi empregos formais; reservas internacionais US$ 38 bi → US$ 288 bi; classe C cresce ~40 mi pessoas; salário mínimo real +53,7%.
  - Negativos: dívida pública nominal cresce em valores absolutos; carga tributária sobe ~32% → ~33,5% PIB; inflação 2010 fecha em 5,9% (acima do centro da meta).
- **Economia (3º mandato — 2023–presente)**
  - Positivos: PIB 2,9% (2023) e 3,2% (2024); desemprego 8,5% → 6,2%; salário mínimo +25,2%.
  - Negativos: Dívida Bruta 71,7% → 76,5% PIB; Selic 13,75% → 15,00%; resultado primário +R$ 54 bi → −R$ 230 bi; câmbio R$ 5,16 → R$ 5,39.
- **Social (1º e 2º mandatos)**
  - Positivos: pobreza extrema cai ~50%; Bolsa Família consolidado (~12 mi famílias em 2010); IDH 0,710 → 0,727; mortalidade infantil 27,4 → 16,2 por mil.
  - Negativos: homicídios 28,5 → 27,4 por 100 mil (queda modesta); desigualdade ainda alta (Gini 0,533).
- **Social (3º mandato)**
  - Positivos: insegurança alimentar grave 15,5% → 8,7%; pobreza extrema 5,9% → 4,4%.
  - Negativos: aprovação do governo 38% → 24%; homicídios 22,8 → 23,4.
- **Meio Ambiente (3 mandatos)**
  - Positivos (1º/2º): desmatamento Amazônia cai de 27.772 km² (2004) para 7.000 km² (2009) — queda histórica de ~75%.
  - Positivos (3º): Amazônia 11.594 → 5.816 km² (-49,8%); Cerrado -23,5%.
  - Negativos (3º): Pantanal +53,8% focos; área queimada Brasil +89%.

Cada métrica deve ter `sources[]` com link oficial (IBGE, IPEA, BCB, INPE, IPEADATA, FBSP, Datafolha, MapBiomas).

### 2.3. Compromissos (`commitments`)
Manter os atuais (3º mandato) e adicionar marcadores históricos com `status: "Cumprida"` para promessas emblemáticas dos 1º/2º mandatos:
- "Bolsa Família (1º mandato)" — Cumprida
- "Pré-sal e exploração nacional (2º mandato)" — Cumprida
- "ProUni e expansão de universidades federais (1º/2º)" — Cumprida
- "Minha Casa Minha Vida — versão original (2º mandato)" — Cumprida

E adicionar promessas **Não Cumpridas / Parcialmente Cumpridas** do 3º mandato (ver seção 3).

### 2.4. Gráficos
- `chart1`: estender série de PIB para incluir pontos médios dos mandatos: 2003, 2006, 2010, 2014 (FHC/Lula/Dilma como referência), depois 2019–2024. Marcar `current: true` para anos Lula.
- `chart2`: estender série de desmatamento Amazônia: 2004 (27.772), 2008 (12.911), 2010 (7.000), 2014, 2019–2024.

---

## 3. Promessas descumpridas / parciais do 3º mandato

Adicionar em `commitments` (em `legacyData.ts`) com `status: "Não Cumprida"` ou `"Parcialmente Cumprida"`:

- **Isenção de IR até R$ 5.000** — `status: "Não Cumprida"`, `progress: 40`. Detalhe: "Faixa de isenção subiu para ~R$ 2.824 (2 SM) em 2024, mas R$ 5.000 ainda não foi atingido (até maio/2026)." Fontes: Receita Federal, MP de reajuste IRPF.
- **Picanha e cervejinha** — `status: "Parcialmente Cumprida"`, `progress: 50`. Detalhe: "Carne caiu 9–11% no IPCA de 2023 e poder de compra subiu, mas a 'fartura' prometida ficou no campo simbólico." Fontes: IBGE — IPCA.
- **Zerar fila do SUS** — `status: "Não Cumprida"`, `progress: 25`. Fontes: CONASS / Ministério da Saúde.
- **Meta fiscal de déficit zero em 2024** — `status: "Não Cumprida"`, `progress: 10`. Fonte: Tesouro Nacional.
- **Não privatizar Petrobras / Eletrobras / Correios** — `status: "Parcialmente Cumprida"`, `progress: 60`. Detalhe: "Reversão da privatização da Eletrobras não concretizada; manteve estatais existentes." Fonte: BNDES / Planalto.

Esses itens reforçam os já existentes em `mockData.ts` (`promises` com `status: 'Broken'`), mas aparecem visualmente no Legado.

---

## Detalhes técnicos

- **Componente afetado**: `LegacySection` já trata `positive: false` (cor vermelha — confirmado em `LegacySection.tsx:182`) e os 4 status de `commitments`, então não precisa de mudança de código — apenas dados.
- **Tipo `Commitment`**: já suporta `"Não Cumprida"` e `"Parcialmente Cumprida"` (`legacyData.ts:17`).
- **Arquivos a editar**:
  - `src/pages/PoliticianProfile.tsx` — reordenar abas, mover Legado para dentro de `<Tabs>` como 4ª aba.
  - `src/data/legacyData.ts` — expandir entrada `"1"` (Lula) com dados dos 3 mandatos, mais negativos e promessas descumpridas; manter as demais entradas intactas.
- **Fontes**: cada métrica/promessa nova traz `sources[]` apontando para portais oficiais (IBGE, IPEA, BCB, Tesouro, INPE, Receita Federal, Ministério da Saúde, Datafolha).

## Escopo

Esta entrega altera apenas o perfil do **Lula** (id `"1"`). Os demais perfis permanecem inalterados, mas a reordenação das abas se aplica a todos (Legado vira a 4ª aba para qualquer político).
