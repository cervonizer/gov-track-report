import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { listCommitments } from "../politicians";

export default defineTool({
  name: "list_commitments",
  title: "Promessas publicadas",
  description:
    "Lista promessas publicadas, cumprimento baseado em avaliações aprovadas, calendário separado, fontes e material antigo identificado como não verificado.",
  inputSchema: {
    politician: z
      .string()
      .optional()
      .describe("ID ou nome (parcial) do político. Sem valor, retorna de todos."),
    status: z
      .string()
      .optional()
      .describe("Filtrar por situação: ainda não avaliável, em andamento, cumprida, parcialmente cumprida, não cumprida. Sem prazo é independente do cumprimento."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: async ({ politician, status }) => {
    const items = await listCommitments(politician, status);
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { commitments: items },
    };
  },
});
