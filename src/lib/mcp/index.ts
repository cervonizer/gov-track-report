import { defineMcp } from "@lovable.dev/mcp-js";
import listPoliticiansTool from "./tools/list-politicians";
import getPoliticianTool from "./tools/get-politician";
import listCommitmentsTool from "./tools/list-commitments";
import getPlatformStatsTool from "./tools/get-platform-stats";

export default defineMcp({
  name: "polis",
  title: "Polis",
  version: "0.1.0",
  instructions:
    "Ferramentas públicas da Polis, plataforma brasileira de transparência política. Use `list_politicians` para descobrir os políticos monitorados, `get_politician` para o perfil completo (votações, promessas e propostas com fontes), `list_commitments` para promessas e propostas com status e progresso, e `get_platform_stats` para os números agregados da plataforma. Todos os dados citam fontes oficiais brasileiras.",
  tools: [listPoliticiansTool, getPoliticianTool, listCommitmentsTool, getPlatformStatsTool],
});
