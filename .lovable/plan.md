## Plano

Enriquecer os perfis dos 5 políticos reais (Lula, Flávio Bolsonaro, Caiado, Renan Santos, Zema) com mais votos, promessas, propostas e comparações com antecessores — todos com **fonte oficial citada e linkada** em cada item. Ana Beatriz Costa (fictícia) fica de fora.

### 1. Adicionar campo de fontes no modelo de dados

`src/types/politician.ts` — adicionar campo opcional `source` em `VoteRecord`, `Promise`, `Proposal`:

```ts
export interface Source {
  label: string;   // ex: "Câmara dos Deputados — PL 2903/2023"
  url: string;     // link oficial direto
}
// adicionar `sources?: Source[]` em VoteRecord, Promise, Proposal
```

E em `legacyData.ts`, adicionar `sources?: Source[]` opcional em `Commitment` e `PerformanceMetric`, além de um campo geral `dataSources: Source[]` em `LegacyData` para a comparação com antecessores.

### 2. Renderizar legenda com link nos cards

`src/pages/PoliticianProfile.tsx` — em cada item (voto, promessa, proposta) renderizar abaixo do conteúdo:

```
Fonte: Senado Federal · Câmara dos Deputados
```
onde cada nome é um `<a target="_blank">` para a URL oficial. Estilo discreto: `text-xs text-muted-foreground`, ícone `ExternalLink` pequeno.

`src/components/LegacySection.tsx` — adicionar rodapé "Fontes dos dados" com lista de links ao final da seção comparativa.

### 3. Expandir dados em `src/data/mockData.ts` com fontes oficiais

Para cada um dos 5 políticos, expandir significativamente com base em fontes oficiais. Quantidade-alvo por político: **8–10 votos, 6–8 promessas, 4–6 propostas**. Cada item terá `sources` apontando para o portal oficial pertinente.

**Fontes oficiais por tipo de cargo:**

| Político | Cargo | Fontes principais |
|---|---|---|
| Lula | Presidente | Planalto (`gov.br/planalto`), Casa Civil, Diário Oficial da União, IBGE, Banco Central |
| Flávio Bolsonaro | Senador | Senado Federal (`senado.leg.br/senadores/...`), portal de Atividade Legislativa |
| Caiado | Governador GO | Governo de Goiás (`goias.gov.br`), Assembleia Legislativa de Goiás (`al.go.leg.br`), TCE-GO |
| Renan Santos | Deputado Federal | Câmara dos Deputados (`camara.leg.br/deputados/...`), portal de Votações |
| Zema | Governador MG | Governo de MG (`mg.gov.br`), ALMG (`almg.gov.br`), TCE-MG |

> Como o projeto não tem acesso ao web/Perplexity em modo build sem conector, eu vou: (a) usar URLs canônicas dos portais oficiais por categoria/PL conhecidos publicamente, e (b) marcar com clareza no texto sempre que uma data ou número precisar ser confirmado. Onde houver dúvida, prefiro **menos itens com fonte sólida** a inflar a lista.

### 4. Datas dos votos — corrigir e padronizar

Revisar todas as datas atuais que parecem aproximadas/imprecisas (ex: votos do Lula em PECs que ele sancionou), separando claramente:
- **Sanção presidencial** (Lula) — usa data de publicação no DOU
- **Votos em plenário** (Flávio, Renan) — data oficial do Senado/Câmara
- **Decretos/leis estaduais** (Caiado, Zema) — data de publicação no Diário Oficial estadual

### 5. Comparação com antecessores — expandir `legacyData.ts`

Para cada um dos 5, adicionar mais métricas comparativas com fontes:

| Político | Antecessor | Indicadores adicionais |
|---|---|---|
| Lula | Bolsonaro (2019–2022) | Taxa de desemprego (PNAD/IBGE), IPCA (IBGE), desmatamento (INPE), exportações (MDIC), Mapa da Fome (FAO) |
| Flávio Bolsonaro | — (1º mandato senador) | Comparar com média do Senado: presença, projetos apresentados (Senado) |
| Caiado | Marconi Perillo (2011–2014) | Homicídios (SSP-GO), dívida do estado (Tesouro Nacional), investimento em infraestrutura |
| Renan Santos | — (1º mandato) | Comparar com média da Câmara: presença, projetos (Câmara) |
| Zema | Fernando Pimentel (2015–2018) | Folha de pagamento em dia (Tesouro MG), arrecadação ICMS (SEF-MG), dívida estadual |

Cada métrica recebe `sources: [{label, url}]` apontando para o órgão oficial.

### 6. Componente reutilizável de fontes

Criar `src/components/SourceCitation.tsx`:

```tsx
<SourceCitation sources={sources} />
// renderiza: "Fonte: [Câmara dos Deputados ↗] · [DOU ↗]"
```

Usado em 3 lugares: votos, promessas, propostas, e métricas do `LegacySection`.

### Arquivos alterados

- `src/types/politician.ts` — novo tipo `Source`, campo `sources?` em 3 interfaces
- `src/data/legacyData.ts` — campo `sources?` em métricas, `dataSources` no objeto raiz, novas métricas
- `src/data/mockData.ts` — expansão massiva dos 5 políticos reais com fontes oficiais
- `src/components/SourceCitation.tsx` — novo componente
- `src/pages/PoliticianProfile.tsx` — renderizar `<SourceCitation>` em votos/promessas/propostas
- `src/components/LegacySection.tsx` — renderizar fontes nas métricas e rodapé

### Observação importante sobre veracidade

Vou usar URLs **canônicas dos portais oficiais** (Senado, Câmara, Planalto, governos estaduais). Para projetos de lei específicos cujo número eu já confirmo no código atual (PEC 45/2019, LC 200/2023, PL 2903/2023, etc.) os links irão direto para a página de tramitação. Para indicadores comparativos, os links vão para o portal do órgão (IBGE, INPE, TCE) — o usuário pode validar facilmente. Onde houver qualquer incerteza sobre uma estatística específica, prefiro omiti-la a inventar número.

### Pergunta antes de implementar

Você prefere que eu:
- **A)** Implemente já com as fontes oficiais que tenho confiança alta (links de portais + projetos de lei conhecidos), assumindo que algumas métricas comparativas vão ficar com link para o portal do órgão (ex: "ver no IBGE") em vez do indicador exato; **ou**
- **B)** Eu primeiro habilite o conector **Perplexity** (com sua aprovação) para pesquisar e validar cada número, data e fonte ao vivo antes de gravar — mais lento e usa créditos do conector, porém mais preciso?
