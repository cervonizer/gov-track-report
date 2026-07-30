import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { listPoliticians } from "../politicians";

export default defineTool({
  name: "list_politicians",
  title: "Listar políticos",
  description:
    "Lista todos os políticos monitorados na plataforma Polis, com partido, cargo, estado, mandato e contagem de votos, promessas e propostas.",
  inputSchema: {
    party: z.string().optional().describe("Filtrar por sigla do partido (ex.: PT, PL)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ party }) => {
    const all = listPoliticians();
    const items = party
      ? all.filter((p) => p.party.toLowerCase() === party.trim().toLowerCase())
      : all;
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { politicians: items },
    };
  },
});
