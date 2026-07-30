import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { politicianLegacy } from "../politicians";

export default defineTool({
  name: "get_politician_legacy",
  title: "Legado do político",
  description:
    "Retorna o legado de um político: compromissos (cumpridos, parciais e não cumpridos) e indicadores de desempenho positivos e negativos, com fontes oficiais.",
  inputSchema: {
    politician: z.string().describe("ID ou nome (parcial) do político."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ politician }) => {
    const data = politicianLegacy(politician);
    if (!data) {
      return {
        content: [{ type: "text", text: `Legado não encontrado para "${politician}".` }],
        isError: true,
      };
    }
    return {
      content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      structuredContent: { legacy: data },
    };
  },
});
