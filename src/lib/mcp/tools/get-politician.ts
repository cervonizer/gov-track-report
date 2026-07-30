import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { politicianDetail } from "../politicians";

export default defineTool({
  name: "get_politician",
  title: "Perfil do político",
  description:
    "Retorna o perfil completo de um político da Polis: biografia, mandatos, votações, promessas e propostas, sempre com as fontes oficiais.",
  inputSchema: {
    politician: z.string().describe("ID ou nome (parcial) do político, ex.: 'Lula' ou '1'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ politician }) => {
    const data = politicianDetail(politician);
    if (!data) {
      return {
        content: [{ type: "text", text: `Nenhum político encontrado para "${politician}".` }],
        isError: true,
      };
    }
    return {
      content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      structuredContent: { politician: data },
    };
  },
});
