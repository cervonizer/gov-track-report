import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, FileCheck, Clock } from "lucide-react";

export const StatsSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Estatísticas da Plataforma
          </h2>
          <p className="text-lg text-muted-foreground">
            Dados em tempo real sobre transparência e prestação de contas governamental
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">523</div>
              <div className="text-muted-foreground">Políticos Monitorados</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-success/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FileCheck className="w-8 h-8 text-success" />
              </div>
              <div className="text-3xl font-bold text-success mb-2">1.247</div>
              <div className="text-muted-foreground">Promessas Acompanhadas</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-warning/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-warning" />
              </div>
              <div className="text-3xl font-bold text-warning mb-2">8.932</div>
              <div className="text-muted-foreground">Votações Registradas</div>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Atualizações em Tempo Real</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
