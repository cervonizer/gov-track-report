## Plano

Adicionar as fotos enviadas aos perfis dos 5 políticos reais. Esta é uma mudança isolada de fotos — não inclui Instagram nem remoção de telefone (esses ficam para um próximo passo, conforme você indicar).

### Mapeamento foto → político

| Político | ID | Arquivo enviado | Destino no projeto |
|---|---|---|---|
| Luiz Inácio Lula da Silva | 1 | `96552159-9119-4796-a708-dd841d8deae2-780x520.jpeg` | `src/assets/politicians/lula.jpg` |
| Flávio Bolsonaro | 2 | `5894.jpeg` | `src/assets/politicians/flavio-bolsonaro.jpg` |
| Ronaldo Caiado | 4 | `2022_RONALDO_CAIADO_CANDIDATO_GOVERNADOR_GO_TSE_90001646326.jpg` | `src/assets/politicians/ronaldo-caiado.jpg` |
| Renan Santos | 5 | `MBL-372x372.jpg` | `src/assets/politicians/renan-santos.jpg` |
| Romeu Zema | 6 | `images.jpeg` | `src/assets/politicians/romeu-zema.jpg` |

> Ana Beatriz Costa (id 3) é fictícia e fica com a imagem placeholder atual.

### Mudanças técnicas

**`src/data/mockData.ts`**
- Adicionar 5 imports no topo:
  ```ts
  import lulaImg from '@/assets/politicians/lula.jpg';
  import flavioImg from '@/assets/politicians/flavio-bolsonaro.jpg';
  import caiadoImg from '@/assets/politicians/ronaldo-caiado.jpg';
  import renanImg from '@/assets/politicians/renan-santos.jpg';
  import zemaImg from '@/assets/politicians/romeu-zema.jpg';
  ```
- Substituir o valor de `imageUrl` de cada um dos 5 políticos pela variável importada correspondente (linhas 20, 154, 345, 446, 548).

**Novos arquivos** (copiados do upload):
- `src/assets/politicians/lula.jpg`
- `src/assets/politicians/flavio-bolsonaro.jpg`
- `src/assets/politicians/ronaldo-caiado.jpg`
- `src/assets/politicians/renan-santos.jpg`
- `src/assets/politicians/romeu-zema.jpg`

### Resultado

As fotos reais aparecerão automaticamente em:
- Cards da home (`PoliticianGrid` / `PoliticianCard`)
- Página `/politician/:id` (`PoliticianProfile`)
- Listagem `AllPoliticians`

Sem mudanças de layout — apenas troca de origem da imagem para arquivos locais com bundling otimizado pelo Vite.
