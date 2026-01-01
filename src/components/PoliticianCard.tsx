import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { User, MapPin, Calendar, ExternalLink } from "lucide-react";
import { Politician } from "@/types/politician";

interface PoliticianCardProps {
  politician: Politician;
  onViewDetails: (id: string) => void;
}

type PartyTendency = {
  tendency: string;
  color: string;
};

const getPartyInfo = (party: string): PartyTendency => {
  const partyMap: Record<string, PartyTendency> = {
    'PT': { tendency: 'esquerda', color: 'bg-red-100 text-red-800' },
    'PSOL': { tendency: 'esquerda', color: 'bg-red-100 text-red-800' },
    'PL': { tendency: 'direita', color: 'bg-blue-100 text-blue-800' },
    'NOVO': { tendency: 'direita liberal', color: 'bg-orange-100 text-orange-800' },
    'MDB': { tendency: 'centro', color: 'bg-green-100 text-green-800' },
    'PSD': { tendency: 'centro-direita', color: 'bg-teal-100 text-teal-800' },
  };
  
  return partyMap[party] || { tendency: 'não definida', color: 'bg-gray-100 text-gray-800' };
};

export const PoliticianCard = ({ politician, onViewDetails }: PoliticianCardProps) => {
  const fulfilledPromises = politician.promises.filter(p => p.status === 'Fulfilled').length;
  const totalPromises = politician.promises.length;
  const promiseFulfillmentRate = totalPromises > 0 ? (fulfilledPromises / totalPromises) * 100 : 0;

  const partyInfo = getPartyInfo(politician.party);

  return (
    <Card className="hover:shadow-medium transition-all duration-300 bg-gradient-card">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-card-foreground">{politician.name}</h3>
              <div className="flex flex-col gap-1 mt-1">
                <div className="flex items-center space-x-2">
                  <Badge className={partyInfo.color}>
                    {politician.party}
                  </Badge>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground font-medium">{politician.position}</span>
                </div>
                <span className="text-xs text-muted-foreground">
                  Tendência: {partyInfo.tendency}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-3">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            {politician.district ? `${politician.district}, ` : ''}{politician.state}
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            Mandato: {new Date(politician.termStart).getFullYear()} - {new Date(politician.termEnd).getFullYear()}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Cumprimento de Promessas</span>
            <span className="text-sm text-muted-foreground">
              {fulfilledPromises}/{totalPromises} cumpridas
            </span>
          </div>
          <Progress value={promiseFulfillmentRate} className="h-2" />
        </div>

        <div className="grid grid-cols-3 gap-4 text-center py-3 bg-muted/30 rounded-lg">
          <div>
            <div className="text-lg font-semibold text-primary">{politician.voteRecords.length}</div>
            <div className="text-xs text-muted-foreground">Votações</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-primary">{politician.promises.length}</div>
            <div className="text-xs text-muted-foreground">Promessas</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-primary">{politician.proposals.length}</div>
            <div className="text-xs text-muted-foreground">Propostas</div>
          </div>
        </div>

        <Button 
          onClick={() => onViewDetails(politician.id)}
          className="w-full bg-primary hover:bg-primary-dark transition-colors"
        >
          Ver Perfil Completo
          <ExternalLink className="ml-2 w-4 h-4" />
        </Button>
      </CardContent>
    </Card>
  );
};
