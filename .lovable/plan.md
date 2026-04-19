
## Plano

Três mudanças nos perfis dos políticos:

### 1. Adicionar fotos reais para todos os políticos
Substituir as URLs placeholder/genéricas em `imageUrl` por fotos reais. Como não tenho acesso a APIs de imagem em modo plan, a melhor abordagem é:
- **Opção A (recomendada)**: Você anexa as fotos de cada político no chat, e eu salvo em `src/assets/politicians/` e atualizo o `imageUrl` de cada um.
- **Opção B**: Uso URLs públicas (ex: Wikipedia/sites oficiais) diretamente no `imageUrl`. Risco: links podem quebrar e fogem do padrão de assets locais do projeto.

### 2. Remover telefone, adicionar Instagram
- **`src/types/politician.ts`**: trocar campo `phone: string` por `instagram: string` (handle ou URL completa).
- **`src/data/mockData.ts`**: remover `phone` de cada político e adicionar `instagram` com o @ oficial de cada um (ex: `@ratinhojunior`, `@romeuzemape`, etc.).
- **`src/pages/PoliticianProfile.tsx`**: substituir o bloco que renderiza o telefone (com ícone `Phone`) por um bloco com ícone `Instagram` (lucide-react) que abre `https://instagram.com/{handle}` em nova aba.
- **`src/lib/translations.ts`**: se houver label "Telefone", trocar por "Instagram".

### 3. Arquivos afetados
- `src/types/politician.ts`
- `src/data/mockData.ts`
- `src/pages/PoliticianProfile.tsx`
- `src/components/PoliticianCard.tsx` (se exibir telefone)
- `src/assets/politicians/*.jpg` (novos arquivos, se opção A)

### Pergunta
Qual opção você prefere para as fotos — **A) anexar imagens** uma a uma no chat, ou **B) usar URLs públicas** diretamente? E você já tem os @ do Instagram de cada político ou quer que eu pesquise/sugira os handles oficiais conhecidos?
