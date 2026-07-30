import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { listCommitments } from "../politicians";

export default defineTool({
  name: "list_commitments",
  title: "Promessas e propostas",
  description:
    "Lista promessas e propostas monitoradas pela Polis, com status (cumprida, em andamento, quebrada, etc.), progresso, categoria e fontes oficiais.",
  inputSchema: {
    politician: z
      .string()
      .optional()
      .describe("ID ou nome (parcial) do político. Sem valor, retorna de todos."),
    status: z
      .string()
      .optional()
      .describe("Filtrar por status exato: Fulfilled, In Progress, Broken, Expired, Active, Passed, Failed, Withdrawn."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ politician, status }) => {
    const items = listCommitments(politician, status);
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { commitments: items },
    };
  },
});
