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

export const PoliticianCard = ({ politician, onViewDetails }: PoliticianCardProps) => {
  const fulfilledPromises = politician.promises.filter(p => p.status === 'Fulfilled').length;
  const totalPromises = politician.promises.length;
  const promiseFulfillmentRate = totalPromises > 0 ? (fulfilledPromises / totalPromises) * 100 : 0;

  const getPartyColor = (party: string) => {
    switch (party.toLowerCase()) {
      case 'democratic':
        return 'bg-blue-100 text-blue-800';
      case 'republican':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

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
              <div className="flex items-center space-x-2 mt-1">
                <Badge className={getPartyColor(politician.party)}>
                  {politician.party}
                </Badge>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground font-medium">{politician.position}</span>
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
            Term: {new Date(politician.termStart).getFullYear()} - {new Date(politician.termEnd).getFullYear()}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Promise Fulfillment</span>
            <span className="text-sm text-muted-foreground">
              {fulfilledPromises}/{totalPromises} fulfilled
            </span>
          </div>
          <Progress value={promiseFulfillmentRate} className="h-2" />
        </div>

        <div className="grid grid-cols-3 gap-4 text-center py-3 bg-muted/30 rounded-lg">
          <div>
            <div className="text-lg font-semibold text-primary">{politician.voteRecords.length}</div>
            <div className="text-xs text-muted-foreground">Votes</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-primary">{politician.promises.length}</div>
            <div className="text-xs text-muted-foreground">Promises</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-primary">{politician.proposals.length}</div>
            <div className="text-xs text-muted-foreground">Proposals</div>
          </div>
        </div>

        <Button 
          onClick={() => onViewDetails(politician.id)}
          className="w-full bg-primary hover:bg-primary-dark transition-colors"
        >
          View Full Profile
          <ExternalLink className="ml-2 w-4 h-4" />
        </Button>
      </CardContent>
    </Card>
  );
};