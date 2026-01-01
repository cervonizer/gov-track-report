import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Wallet, Vote, Scale } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import heroImage from "@/assets/hero-government.jpg";

export const HeroSection = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <section className="relative bg-gradient-hero text-primary-foreground py-20">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Transparência política em linguagem simples
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-foreground/90">
            Busque qualquer político e veja seus gastos, votações e promessas, 
            tudo traduzido para uma linguagem que você entende.
          </p>
          
          <p className="text-sm text-primary-foreground/70 mb-4">
            Comece digitando o nome de um político, cidade ou cargo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 mx-auto">
            <div className="relative w-full sm:w-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Busque por nome, cidade ou cargo…"
                className="pl-12 h-14 text-black bg-background sm:w-96"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && searchQuery.trim()) {
                    navigate(`/politicians?q=${searchQuery}`);
                  }
                }}
              />
            </div>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary-foreground text-black bg-primary-foreground/90 hover:bg-primary-foreground/80 transition-colors h-14"
              onClick={() => navigate("/politicians")}
            >
              Ver Todos
            </Button>
          </div>
        </div>
      </section>

      {/* Nova seção: O que você consegue ver aqui */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              O que você consegue ver aqui
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-background rounded-xl p-6 shadow-sm border">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Wallet className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Acompanhe os gastos</h3>
              <p className="text-muted-foreground text-center">
                Veja quanto cada político gasta por mês com viagens, assessores, divulgação e outras despesas, usando dados oficiais de transparência.
              </p>
            </div>
            
            <div className="bg-background rounded-xl p-6 shadow-sm border">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Vote className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Entenda as votações</h3>
              <p className="text-muted-foreground text-center">
                Confira como ele votou nos principais projetos e se costuma acompanhar o governo, a oposição ou suas promessas de campanha.
              </p>
            </div>
            
            <div className="bg-background rounded-xl p-6 shadow-sm border">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Scale className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Compare políticos</h3>
              <p className="text-muted-foreground text-center">
                Coloque dois políticos lado a lado e compare gastos, histórico de votação e atuação para decidir seu voto com mais clareza.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
