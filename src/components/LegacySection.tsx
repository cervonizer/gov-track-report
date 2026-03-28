import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  GraduationCap,
  Stethoscope,
  ShieldCheck,
  Landmark,
  Droplets,
  BriefcaseBusiness,
  TrendingUp,
  TrendingDown,
  CheckCircle2,
  Clock,
  XCircle,
  AlertTriangle,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const commitments = [
  {
    id: 1,
    title: "Construção de 50 escolas técnicas",
    icon: GraduationCap,
    status: "Cumprida" as const,
    progress: 100,
    detail: "52 escolas entregues em 48 meses",
  },
  {
    id: 2,
    title: "Ampliação do saneamento básico",
    icon: Droplets,
    status: "Cumprida" as const,
    progress: 100,
    detail: "Cobertura passou de 42% para 71%",
  },
  {
    id: 3,
    title: "Programa Saúde na Porta",
    icon: Stethoscope,
    status: "Parcialmente Cumprida" as const,
    progress: 68,
    detail: "218 de 320 UBS reformadas",
  },
  {
    id: 4,
    title: "Pacto pela Segurança",
    icon: ShieldCheck,
    status: "Cumprida" as const,
    progress: 100,
    detail: "Redução de 34% nos homicídios",
  },
  {
    id: 5,
    title: "Reforma Administrativa",
    icon: Landmark,
    status: "Em Andamento" as const,
    progress: 45,
    detail: "Fase 2 de 4 concluída",
  },
  {
    id: 6,
    title: "Geração de 200 mil empregos",
    icon: BriefcaseBusiness,
    status: "Não Cumprida" as const,
    progress: 62,
    detail: "124 mil empregos gerados de 200 mil",
  },
];

const getStatusConfig = (status: string) => {
  switch (status) {
    case "Cumprida":
      return { icon: CheckCircle2, color: "bg-emerald-500/10 text-emerald-700 border-emerald-300" };
    case "Parcialmente Cumprida":
      return { icon: AlertTriangle, color: "bg-amber-500/10 text-amber-700 border-amber-300" };
    case "Em Andamento":
      return { icon: Clock, color: "bg-sky-500/10 text-sky-700 border-sky-300" };
    case "Não Cumprida":
      return { icon: XCircle, color: "bg-red-500/10 text-red-700 border-red-300" };
    default:
      return { icon: Clock, color: "bg-muted text-muted-foreground" };
  }
};

const performanceData = {
  economia: {
    title: "Economia",
    icon: TrendingUp,
    metrics: [
      { label: "Crescimento do PIB estadual", before: "1,2%", after: "3,8%", change: "+2,6 p.p.", positive: true },
      { label: "Empregos formais gerados (acumulado)", before: "85 mil", after: "124 mil", change: "+45,9%", positive: true },
    ],
  },
  seguranca: {
    title: "Segurança Pública",
    icon: ShieldCheck,
    metrics: [
      { label: "Taxa de homicídios (por 100 mil hab.)", before: "38,4", after: "25,3", change: "-34,1%", positive: true },
      { label: "Crimes violentos (total/ano)", before: "142.600", after: "98.200", change: "-31,1%", positive: true },
    ],
  },
  social: {
    title: "Social",
    icon: Stethoscope,
    metrics: [
      { label: "Taxa de pobreza extrema", before: "14,7%", after: "9,1%", change: "-5,6 p.p.", positive: true },
      { label: "Insegurança alimentar (fome)", before: "11,3%", after: "6,8%", change: "-4,5 p.p.", positive: true },
    ],
  },
};

const chartDataPIB = [
  { ano: "2019", "Gov. Anterior": 0.8, "Roberto Almeida": null },
  { ano: "2020", "Gov. Anterior": -1.2, "Roberto Almeida": null },
  { ano: "2021", "Gov. Anterior": 1.2, "Roberto Almeida": null },
  { ano: "2022", "Gov. Anterior": null, "Roberto Almeida": 2.1 },
  { ano: "2023", "Gov. Anterior": null, "Roberto Almeida": 3.2 },
  { ano: "2024", "Gov. Anterior": null, "Roberto Almeida": 3.8 },
];

const chartDataHomicidios = [
  { ano: "2019", "Gov. Anterior": 42.1, "Roberto Almeida": null },
  { ano: "2020", "Gov. Anterior": 40.3, "Roberto Almeida": null },
  { ano: "2021", "Gov. Anterior": 38.4, "Roberto Almeida": null },
  { ano: "2022", "Gov. Anterior": null, "Roberto Almeida": 34.7 },
  { ano: "2023", "Gov. Anterior": null, "Roberto Almeida": 29.1 },
  { ano: "2024", "Gov. Anterior": null, "Roberto Almeida": 25.3 },
];

export function LegacySection() {
  return (
    <section className="mt-10 space-y-10">
      {/* Section Title */}
      <div className="border-l-4 border-[hsl(210,70%,30%)] pl-4">
        <h2 className="text-3xl font-bold tracking-tight" style={{ color: "hsl(210, 70%, 20%)" }}>
          Legado
        </h2>
        <p className="text-muted-foreground mt-1">
          Resultados concretos e compromissos assumidos durante o mandato de Roberto Almeida como Governador da Bahia.
        </p>
      </div>

      {/* Dashboard de Compromissos */}
      <div>
        <h3 className="text-xl font-semibold mb-4" style={{ color: "hsl(210, 70%, 20%)" }}>
          Dashboard de Compromissos
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {commitments.map((c) => {
            const statusConfig = getStatusConfig(c.status);
            const StatusIcon = statusConfig.icon;
            const MainIcon = c.icon;
            return (
              <Card
                key={c.id}
                className="border hover:shadow-md transition-shadow duration-200"
                style={{ borderColor: "hsl(210, 30%, 85%)" }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <div
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: "hsl(210, 70%, 95%)" }}
                      >
                        <MainIcon className="w-5 h-5" style={{ color: "hsl(210, 70%, 30%)" }} />
                      </div>
                      <CardTitle className="text-sm font-semibold leading-tight">
                        {c.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className={statusConfig.color}>
                      <StatusIcon className="w-3 h-3 mr-1" />
                      {c.status}
                    </Badge>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-muted-foreground mb-1">
                      <span>Progresso</span>
                      <span className="font-semibold">{c.progress}%</span>
                    </div>
                    <Progress value={c.progress} className="h-2" />
                  </div>
                  <p className="text-xs text-muted-foreground">{c.detail}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Tabela Comparativa */}
      <div>
        <h3 className="text-xl font-semibold mb-4" style={{ color: "hsl(210, 70%, 20%)" }}>
          Tabela Comparativa de Performance
        </h3>
        <p className="text-sm text-muted-foreground mb-6">
          Comparação de indicadores-chave entre o governo anterior e o mandato de Roberto Almeida.
        </p>

        <div className="space-y-6">
          {Object.values(performanceData).map((category) => {
            const CatIcon = category.icon;
            return (
              <Card key={category.title} className="overflow-hidden" style={{ borderColor: "hsl(210, 30%, 85%)" }}>
                <CardHeader
                  className="py-3 px-4"
                  style={{ background: "linear-gradient(135deg, hsl(210, 70%, 20%), hsl(210, 60%, 30%))" }}
                >
                  <div className="flex items-center gap-2">
                    <CatIcon className="w-5 h-5 text-white" />
                    <CardTitle className="text-base text-white font-semibold">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow style={{ backgroundColor: "hsl(210, 40%, 96%)" }}>
                        <TableHead className="font-semibold text-xs" style={{ color: "hsl(210, 70%, 20%)" }}>
                          Indicador
                        </TableHead>
                        <TableHead className="text-center font-semibold text-xs" style={{ color: "hsl(210, 70%, 20%)" }}>
                          Gov. Anterior
                        </TableHead>
                        <TableHead className="text-center font-semibold text-xs" style={{ color: "hsl(210, 70%, 20%)" }}>
                          Roberto Almeida
                        </TableHead>
                        <TableHead className="text-center font-semibold text-xs" style={{ color: "hsl(210, 70%, 20%)" }}>
                          Variação
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {category.metrics.map((m) => (
                        <TableRow key={m.label}>
                          <TableCell className="text-sm font-medium">{m.label}</TableCell>
                          <TableCell className="text-center text-sm text-muted-foreground">
                            {m.before}
                          </TableCell>
                          <TableCell className="text-center text-sm font-semibold" style={{ color: "hsl(210, 70%, 25%)" }}>
                            {m.after}
                          </TableCell>
                          <TableCell className="text-center">
                            <span
                              className="inline-flex items-center gap-1 text-sm font-bold"
                              style={{ color: m.positive ? "hsl(145, 60%, 36%)" : "hsl(0, 72%, 51%)" }}
                            >
                              {m.positive ? (
                                <TrendingUp className="w-4 h-4" />
                              ) : (
                                <TrendingDown className="w-4 h-4" />
                              )}
                              {m.change}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card style={{ borderColor: "hsl(210, 30%, 85%)" }}>
          <CardHeader>
            <CardTitle className="text-base" style={{ color: "hsl(210, 70%, 20%)" }}>
              Evolução do PIB Estadual (%)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={chartDataPIB} barCategoryGap="20%">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(210, 20%, 90%)" />
                <XAxis dataKey="ano" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="Gov. Anterior" fill="hsl(210, 15%, 65%)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Roberto Almeida" fill="hsl(210, 70%, 30%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card style={{ borderColor: "hsl(210, 30%, 85%)" }}>
          <CardHeader>
            <CardTitle className="text-base" style={{ color: "hsl(210, 70%, 20%)" }}>
              Taxa de Homicídios (por 100 mil hab.)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={chartDataHomicidios} barCategoryGap="20%">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(210, 20%, 90%)" />
                <XAxis dataKey="ano" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="Gov. Anterior" fill="hsl(210, 15%, 65%)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Roberto Almeida" fill="hsl(145, 60%, 36%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Footnote */}
      <div className="border-t pt-4" style={{ borderColor: "hsl(210, 30%, 85%)" }}>
        <p className="text-xs text-muted-foreground italic">
          Fontes Oficiais: IBGE, Secretarias de Segurança Pública, Institutos de Pesquisa Estaduais e Federais. 
          Dados consolidados até dezembro de 2024. Os valores apresentados são ilustrativos e baseados em indicadores públicos de transparência.
        </p>
      </div>
    </section>
  );
}