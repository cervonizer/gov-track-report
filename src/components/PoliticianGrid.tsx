import { useNavigate } from "react-router-dom";
import { PoliticianCard } from "./PoliticianCard";
import { mockPoliticians } from "@/data/mockData";

export const PoliticianGrid = () => {
  const navigate = useNavigate();
  
  const handleViewDetails = (id: string) => {
    navigate(`/politician/${id}`);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Seus Representantes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Acompanhe o desempenho e a prestação de contas dos eleitos com dados abrangentes de fontes oficiais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockPoliticians.map((politician) => (
            <PoliticianCard
              key={politician.id}
              politician={politician}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Procurando um representante específico ou quer ver mais?
          </p>
          <div className="space-x-4">
            <button 
              onClick={() => navigate("/politicians")}
              className="text-primary hover:text-primary-dark font-medium"
            >
              Ver Todos os Representantes →
            </button>
            <button 
              onClick={() => navigate("/politicians")}
              className="text-primary hover:text-primary-dark font-medium"
            >
              Buscar por Localização →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
