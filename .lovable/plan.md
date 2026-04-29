# Equilibrar o perfil do Lula com indicadores negativos

Hoje a página do Lula (`/politician/1`) mostra majoritariamente dados positivos. O objetivo é adicionar — sem remover o que já existe — indicadores críticos verificáveis, com fontes oficiais ou de imprensa de referência, em três áreas: **Legado**, **Promessas** e **Propostas/Votações**.

A infraestrutura já suporta tudo isso (campo `positive: false` renderiza em vermelho; `status: 'Broken'` para promessas; `sources[]` em todos os itens). Não precisa mexer em componentes nem em tipos.

## 1. Legado (`src/data/legacyData.ts`, entrada `"1"`)

### Adicionar nova categoria de performance "Fiscal e Segurança" com métricas negativas
- **Dívida Pública Bruta (% PIB)**: 71,7% (dez/2022) → 76,5% (dez/2024) — `positive: false`. Fonte: Banco Central — Estatísticas Fiscais.
- **Taxa Selic (a.a.)**: 13,75% (jan/2023) → 15,00% (2025) — `positive: false`. Fonte: BCB — Histórico Selic / Copom.
- **Déficit Primário do Governo Central (R$ bi)**: superávit 54,1 (2022) → déficit 230,5 (2024) — `positive: false`. Fonte: Tesouro Nacional — RTN.
- **Câmbio R$/US$ (média anual)**: 5,16 (2022) → 5,39 (2024); pico > 6,00 em dez/2024 — `positive: false`. Fonte: BCB — PTAX.
- **Homicídios por 100 mil hab.**: leve alta em estados-chave; usar dado nacional do Anuário FBSP 2024 — `positive: false`. Fonte: Fórum Brasileiro de Segurança Pública.

### Adicionar métricas negativas em categorias existentes
- **Social → Aprovação do governo (Datafolha)**: 38% ótimo/bom (mar/2023) → 24% (out/2024) — `positive: false`. Fonte: Datafolha.
- **Meio Ambiente → Queimadas no Pantanal (focos)**: forte alta em 2024 (ano recorde) — `positive: false`. Fonte: INPE — BDQueimadas.

### Atualizar o `footnote` e `dataSources`
Incluir BCB, Tesouro Nacional, FBSP, Datafolha e nota explicando que indicadores são apresentados de forma equilibrada (positivos e negativos).

### Opcional (3º gráfico não suportado hoje)
Manter os 2 gráficos existentes; trocar `chart2` não é desejável. Em vez disso, adicionar a Selic como métrica de tabela (acima).

## 2. Promessas (`src/data/mockData.ts`, array `promises` do id `'1'`)

Adicionar 4–5 promessas com `status: 'Broken'` ou `'In Progress'` com baixo progresso:

- **"Não privatizar a Petrobras nem a Eletrobras"** — `Broken` parcial: Eletrobras seguiu privatizada; governo não reverteu. Fonte: Agência Câmara / Folha.
- **"Revogar o Teto de Gastos sem aumentar a dívida"** — `In Progress` (progresso 30): novo arcabouço aprovado, mas dívida/PIB subiu. Fontes: Planalto LC 200/2023 + BCB.
- **"Zerar a fila do SUS para cirurgias eletivas"** — `In Progress` (progresso 25): meta não atingida; fila ainda cresce em vários estados. Fonte: CONASS / Ministério da Saúde.
- **"Reonerar a folha de pagamento de 17 setores"** — `Broken`: Congresso derrubou e governo recuou, mantendo desoneração até 2027. Fonte: Senado — PL 1847/2024 / Lei 14.973/2024.
- **"Cumprir meta fiscal de déficit zero em 2024"** — `Broken`: meta foi flexibilizada via LDO; resultado primário ficou negativo. Fonte: Tesouro Nacional / Ministério da Fazenda.

## 3. Propostas / Votações (`src/data/mockData.ts`, arrays `proposals` e `voteRecords` do id `'1'`)

Adicionar registros que mostrem derrotas e controvérsias:

- **Vetos derrubados pelo Congresso** (1 entrada agregada): vários vetos do governo Lula a projetos como Marco Temporal (Lei 14.701/2023) e desoneração foram derrubados. `status: 'Failed'`. Fonte: Congresso Nacional — sessões conjuntas.
- **MP 1.227/2024 (limite a créditos de PIS/Cofins)**: editada pelo governo, sofreu forte rejeição e teve trechos devolvidos pelo Congresso. `status: 'Withdrawn'`. Fonte: Senado — MP 1.227/2024.
- **PL da Reoneração da Folha (PL 1.847/2024)**: posição do governo derrotada. `voteRecords` com `vote: 'No'` e desfecho contrário. Fonte: Câmara dos Deputados.
- **PEC da Segurança Pública**: enviada ao Congresso mas sem avanço significativo até 2025. `status: 'Active'` com `supportLevel` baixo. Fonte: Câmara — PEC 18/2025.

Todos com `sources` apontando para Planalto, Câmara, Senado ou portais oficiais correspondentes.

## Detalhes técnicos

- Nenhum tipo, componente ou rota muda.
- Edições concentradas em 2 arquivos: `src/data/legacyData.ts` (entrada `"1"`) e `src/data/mockData.ts` (politician id `'1'`).
- Métricas negativas usam `positive: false` (já renderizado em vermelho pela `LegacySection`).
- Promessas descumpridas usam `status: 'Broken'` (já traduzido para "Quebrada" em `translations.ts`).
- Propostas derrotadas usam `'Failed'` ou `'Withdrawn'`.
- Cada item novo recebe `sources[]` com link oficial (Planalto, BCB, Tesouro, INPE, IBGE, Câmara, Senado) ou fonte de referência (Datafolha, FBSP).

## Fora de escopo

- Não alterar os outros 4 políticos nesta rodada (faremos em seguida, se quiser).
- Não adicionar novos gráficos (componente atual suporta apenas 2).
