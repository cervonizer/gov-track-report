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
import { legacyDataMap, type CommitmentStatus } from "@/data/legacyData";
import { SourceCitation } from "@/components/SourceCitation";

interface LegacySectionProps {
  politicianId: string;
  politicianName: string;
}

const getStatusConfig = (status: CommitmentStatus) => {
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

export function LegacySection({ politicianId, politicianName }: LegacySectionProps) {
  const data = legacyDataMap[politicianId];
  if (!data) return null;

  const { commitments, performance, chart1, chart2, comparisonLabel, footnote, subtitle, dataSources } = data;

  return (
    <section className="mt-10 space-y-10">
      {/* Section Title */}
      <div className="border-l-4 border-[hsl(210,70%,30%)] pl-4">
        <h2 className="text-3xl font-bold tracking-tight" style={{ color: "hsl(210, 70%, 20%)" }}>
          Legado
        </h2>
        <p className="text-muted-foreground mt-1">{subtitle}</p>
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
                  <SourceCitation sources={c.sources} />
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
          Comparação de indicadores-chave entre o período anterior e o mandato de {politicianName}.
        </p>

        <div className="space-y-6">
          {performance.map((category) => {
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
                          {comparisonLabel}
                        </TableHead>
                        <TableHead className="text-center font-semibold text-xs" style={{ color: "hsl(210, 70%, 20%)" }}>
                          {politicianName}
                        </TableHead>
                        <TableHead className="text-center font-semibold text-xs" style={{ color: "hsl(210, 70%, 20%)" }}>
                          Variação
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {category.metrics.map((m) => (
                        <TableRow key={m.label}>
                          <TableCell className="text-sm font-medium">
                            <div>{m.label}</div>
                            <SourceCitation sources={m.sources} className="mt-1" />
                          </TableCell>
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
              {chart1.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={chart1.data} barCategoryGap="20%">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(210, 20%, 90%)" />
                <XAxis dataKey="ano" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend formatter={(value) => (value === "Atual" ? politicianName : comparisonLabel)} />
                <Bar dataKey="Anterior" name="Anterior" fill="hsl(210, 15%, 65%)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Atual" name="Atual" fill="hsl(210, 70%, 30%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card style={{ borderColor: "hsl(210, 30%, 85%)" }}>
          <CardHeader>
            <CardTitle className="text-base" style={{ color: "hsl(210, 70%, 20%)" }}>
              {chart2.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={chart2.data} barCategoryGap="20%">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(210, 20%, 90%)" />
                <XAxis dataKey="ano" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend formatter={(value) => (value === "Atual" ? politicianName : comparisonLabel)} />
                <Bar dataKey="Anterior" name="Anterior" fill="hsl(210, 15%, 65%)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Atual" name="Atual" fill="hsl(145, 60%, 36%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Footnote */}
      <div className="border-t pt-4" style={{ borderColor: "hsl(210, 30%, 85%)" }}>
        <p className="text-xs text-muted-foreground italic">{footnote}</p>
      </div>
    </section>
  );
}
