# Acompanhamento de promessas

## Uso

- `/promessas`: busca e filtros por pessoa, categoria, situação, prazo e origem. Filtros ficam na URL.
- `/promessas/:id`: fontes, trechos, calendário, critérios, evidências, versões de avaliação e material antigo para auditoria.
- `/entrar`: autenticação por email; leitores não precisam de conta.
- `/revisao`: contribuições próprias ou fila de revisão, conforme o papel autorizado no servidor.

Origem oficial/não oficial/desconhecida não equivale a verificação. Prazo encerrado não implica descumprimento. Percentual desconhecido permanece nulo, nunca zero. “Sem prazo confirmado” é independente da situação de cumprimento.

## Acervo importado

93 registros anteriores e 56 URLs foram preservados. Todos entram sem avaliação aprovada, percentual ou datas confirmadas. A descrição pública indica atribuição pendente; afirmações, datas, percentuais e links originais ficam no campo de auditoria `legacy_assertion`. Há registros semelhantes de origens distintas (`profile:*` e `legacy:*`), preservados separadamente para reconciliação editorial. Não representam 93 compromissos únicos já confirmados.

`0002_promise_integrity.sql` e `0003_legacy_promises.sql` foram aplicados ao banco conectado pela API de consultas. Ambos podem ser reaplicados sem duplicar os registros. Os registros de teste do ciclo de revisão foram revertidos integralmente.

## Revisores

Nenhum papel de revisor foi atribuído automaticamente. Depois que a pessoa criar e confirmar sua conta, um administrador deve conferir seu UUID e atribuir o papel em um ambiente administrativo seguro:

```sql
INSERT INTO public.user_roles(user_id,role)
VALUES ('UUID_DA_CONTA_CONFIRMADA','reviewer')
ON CONFLICT(user_id,role) DO NOTHING;
```

O cliente não pode executar essa atribuição. Não usar metadados de cadastro como autorização. A conta autora pode propor avaliação; apenas o revisor autorizado aprova, com justificativa, evidências aprovadas da mesma promessa, UUID e horário registrados no servidor. Revisões geram novas versões imutáveis. Revogar uma evidência invalida a conclusão atual, sem ressuscitar uma versão antiga.

## Autenticação e publicação

Login/cadastro e recuperação usam Supabase Auth. Na hospedagem definitiva, conferir a URL do site e a lista de redirecionamentos permitidos para confirmação por email e `/reset-password`. Entrega de email real e login de uma pessoa revisora não foram testados nesta execução. Nunca enviar credenciais pelo chat.

As alterações do código precisam sincronizar pelo GitHub para aparecer na prévia do Lovable. Não foi solicitada publicação em produção. A função MCP também precisa ser implantada pelo fluxo normal de funções do projeto para expor as novas respostas no endpoint remoto.

## Verificações

- `npm test`: regras civis de datas, horário de Brasília, limite de prazo, intervalos inválidos, status/percentuais, filtros, evidência pendente/revogada e vínculo com a promessa.
- `npm run typecheck` e `npm run build`.
- `tests/promise-permissions.sql`: teste transacional de papéis, escrita direta, autoria, RLS de pendências, revisão, percentuais inconsistentes, revisão duplicada, datas futuras e revogação. Executar como administrador; termina com ROLLBACK.
- `node scripts/check-public-catalog.mjs`: leitura anônima real, sem chave administrativa; não imprime chaves.
- Navegador: busca, filtros combinados e URL, nenhum resultado, detalhe, fontes, calendário desconhecido, acesso à revisão sem conta, formulário de login e largura de 390px sem transbordamento horizontal.

O lint global ainda aponta erros anteriores nos componentes `ui/command`, `ui/textarea`, na configuração Tailwind e no bundle MCP gerado; a checagem TypeScript e o build passam.

O build já tinha avisos sobre tamanho de bundle e Browserslist antigo; atualização de dependências fica fora desta alteração.

## Pesquisa documental (25/10/2026)

A migração 0004 foi autorizada e aplicada: um dossiê público aguardando revisão e cinco fontes, sem avaliação de cumprimento. O catálogo anônimo expõe o dossiê pela mesma RLS da página de detalhe. Pesquisa imutável; correções devem gerar outra revisão. O revisor usa o fluxo separado de evidências e avaliações, sem botão de aprovação automática do dossiê. A conta confirmada do responsável recebeu papel reviewer por administração privilegiada; login foi confirmado pelo usuário. A hospedagem definitiva e seus redirecionamentos ainda precisam de validação.
