import { defineTool } from "@lovable.dev/mcp-js";
import { platformStats } from "../politicians";

export default defineTool({
  name: "get_platform_stats",
  title: "Estatísticas da plataforma",
  description:
    "Retorna os números atuais da Polis: políticos monitorados, votações registradas, promessas e propostas acompanhadas.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const stats = platformStats();
    return {
      content: [{ type: "text", text: JSON.stringify(stats, null, 2) }],
      structuredContent: stats,
    };
  },
});
