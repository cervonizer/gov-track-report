## Plano

Tornar as estatísticas da seção "Estatísticas da Plataforma" dinâmicas, calculadas a partir dos dados reais em `mockData.ts`.

### Mudanças

`**src/components/StatsSection.tsx**`

- Importar `politicians` de `@/data/mockData`.
- Calcular em tempo real:
  - **Políticos Monitorados**: `politicians.length`
  - **Promessas Acompanhadas**: soma de `p.promises.length` em todos os políticos
  - **Votações Registradas**: soma de `p.voteRecords.length` em todos os políticos
  - **Apagar o quarto card, de atualizaçoes 24/7**
- Formatar números com separador de milhar PT-BR (`toLocaleString('pt-BR')`).

### Comportamento automático

Como os números são derivados diretamente do array `politicians` em cada render, qualquer político/promessa/votação/proposta nova adicionada ao mock (ou futuramente ao Supabase) atualiza os contadores automaticamente — sem hardcode.

### Arquivos

- `src/components/StatsSection.tsx` — substituir valores fixos por cálculos derivados de `politicians`.

