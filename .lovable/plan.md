## Objetivo

1. Tornar a aba **Legado** a primeira aba do perfil (e a padrão ao abrir).
2. Padronizar a estrutura das abas para todos os candidatos.
3. Adicionar indicadores negativos balanceados (no estilo do Lula) ao legado de todos os outros políticos: Flávio Bolsonaro (2), Ronaldo Caiado (3), Renan Santos (4), Romeu Zema (5) e o 6º político da base.

## Mudanças

### 1. `src/pages/PoliticianProfile.tsx`
- Mudar `Tabs defaultValue="votes"` → `defaultValue="legacy"`.
- Reordenar `TabsList` para: **Legado → Histórico de Votos → Promessas → Propostas**.
- Reordenar os `TabsContent` na mesma ordem (apenas ordem visual; conteúdo já existe).

### 2. `src/data/legacyData.ts` — políticos 2 a 6
Para cada perfil (que hoje contém majoritariamente indicadores positivos / em andamento), adicionar:

- **Compromissos descumpridos / parcialmente cumpridos** (`status: "Não Cumprida"` ou `"Parcialmente Cumprida"`) com explicação detalhada e `sources` oficiais. Exemplos por perfil:
  - **Flávio Bolsonaro (Senador-RJ)**: promessas de combate ao "Foro Privilegiado" não aprovadas, projetos travados em comissões.
  - **Ronaldo Caiado (Gov. GO)**: metas de segurança pública não atingidas em municípios específicos, déficit em áreas sociais.
  - **Renan Santos (MBL)**: pautas legislativas derrotadas, propostas sem tramitação.
  - **Romeu Zema (Gov. MG)**: dívida estadual MG x União ainda não resolvida, indicadores de educação/saúde com retrocesso pontual.
  - **6º político**: aplicar mesma lógica com base em fontes oficiais.

- **Métricas negativas** em `performance` (`positive: false`) cobrindo:
  - Economia/finanças do estado (dívida, déficit primário, arrecadação real).
  - Social (homicídios, evasão escolar, fila do SUS estadual, IDH estadual).
  - Meio ambiente onde aplicável (focos de queimada, desmatamento Cerrado para GO/MG).
  - Aprovação/avaliação de governo quando houver pesquisa pública (Quaest, Datafolha, AtlasIntel).

- **Fontes oficiais** em cada métrica e em `dataSources`: IBGE, IPEA, INPE, Tesouro Nacional, BCB, Secretarias estaduais de Fazenda/Segurança, Tribunais de Contas estaduais, Câmara/Senado (para senadores e ex-deputados), Datafolha/Quaest.

- Atualizar `footnote` de cada perfil indicando que os dados são apresentados de forma equilibrada (avanços + retrocessos) e a data de corte.

### 3. Nada muda em
- `mockData.ts` (promessas/votos/propostas já foram balanceados em iterações anteriores).
- `LegacySection.tsx` / `SourceCitation.tsx` (já renderizam `positive: false` em vermelho e exibem fontes).

## Resultado
Ao abrir qualquer perfil, o usuário verá primeiro a aba **Legado** com indicadores positivos e negativos lado a lado, fontes oficiais clicáveis em cada métrica, e a mesma estrutura de 4 abas para todos os 6 políticos.
