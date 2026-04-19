import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { mockPoliticians } from "@/data/mockData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, Mail, Instagram, Globe, Calendar, MapPin } from "lucide-react";
import { LegacySection } from "@/components/LegacySection";
import { translateVote, translatePromiseStatus, translateProposalStatus } from "@/lib/translations";

export default function PoliticianProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const politician = mockPoliticians.find((p) => p.id === id);

  if (!politician) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Politician Not Found</h1>
          <Button onClick={() => navigate("/")}>Return to Home</Button>
        </div>
        <Footer />
      </div>
    );
  }

  const getPartyColor = (party: string) => {
    switch (party.toLowerCase()) {
      case "democratic":
        return "bg-blue-500/10 text-blue-700 border-blue-300";
      case "republican":
        return "bg-red-500/10 text-red-700 border-red-300";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Fulfilled":
      case "Passed":
        return "bg-green-500/10 text-green-700 border-green-300";
      case "In Progress":
      case "Active":
        return "bg-yellow-500/10 text-yellow-700 border-yellow-300";
      case "Broken":
      case "Failed":
      case "Withdrawn":
        return "bg-red-500/10 text-red-700 border-red-300";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getVoteColor = (vote: string) => {
    switch (vote) {
      case "Yes":
        return "bg-green-500/10 text-green-700 border-green-300";
      case "No":
        return "bg-red-500/10 text-red-700 border-red-300";
      case "Abstain":
        return "bg-yellow-500/10 text-yellow-700 border-yellow-300";
      case "Absent":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const fulfilledPromises = politician.promises.filter((p) => p.status === "Fulfilled").length;
  const fulfillmentRate = ((fulfilledPromises / politician.promises.length) * 100).toFixed(0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to All Representatives
        </Button>

        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-6">
              <Avatar className="w-32 h-32">
                <AvatarImage src={politician.imageUrl} alt={politician.name} />
                <AvatarFallback>{politician.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex flex-wrap items-start gap-3 mb-4">
                  <h1 className="text-4xl font-bold my-0">{politician.name}</h1>
                  <Badge variant="outline" className={`${getPartyColor(politician.party)} px-[10px] mx-0 py-[5px] my-[8px]`}>
                    {politician.party}
                  </Badge>
                </div>
                
                <div className="space-y-2 mb-4">
                  <p className="text-xl text-muted-foreground my-0">
                    {politician.position}
                    {politician.district && ` - ${politician.district}`}
                  </p>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>Natural de: {politician.birthPlace}</span>
                  </div>
                  <div className="flex items-start gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4 mt-1" />
                    <div>
                      <span className="font-medium text-foreground">Mandatos:</span>
                      {politician.mandates.length === 0 ? (
                        <p className="text-sm">Sem mandato</p>
                      ) : (
                        <ul className="text-sm mt-1 space-y-0.5">
                          {politician.mandates.map((m, i) => (
                            <li key={i}>
                              • {m.position} — {m.start}–{m.end}
                              {m.current && <span className="ml-1 text-primary font-medium">(atual)</span>}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a href={`mailto:${politician.email}`} className="flex items-center gap-2 text-primary hover:underline">
                    <Mail className="w-4 h-4" />
                    {politician.email}
                  </a>
                  <a href={`https://instagram.com/${politician.instagram}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                    <Instagram className="w-4 h-4" />
                    @{politician.instagram}
                  </a>
                  <a href={politician.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                    <Globe className="w-4 h-4" />
                    Site Oficial
                  </a>
                </div>
              </div>

              <div className="md:w-64">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Cumprimento de Promessas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-2">
                      <span className="text-4xl font-bold">{fulfillmentRate}%</span>
                    </div>
                    <Progress value={Number(fulfillmentRate)} className="mb-2" />
                    <p className="text-sm text-muted-foreground text-center">
                      {fulfilledPromises} de {politician.promises.length} promessas cumpridas
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Biography */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Biografia</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">{politician.biography}</p>
            <div>
              <h3 className="font-semibold mb-2">Participação em Comissões</h3>
              <div className="flex flex-wrap gap-2">
                {politician.committeeMemberships.map((committee, index) => (
                  <Badge key={index} variant="secondary">
                    {committee}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs for detailed information */}
        <Tabs defaultValue="votes" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="votes">Histórico de Votos</TabsTrigger>
            <TabsTrigger value="promises">Promessas de Campanha</TabsTrigger>
            <TabsTrigger value="proposals">Propostas</TabsTrigger>
          </TabsList>

          <TabsContent value="votes" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Histórico de Votos</CardTitle>
                <CardDescription>
                  Votos recentes em legislações e projetos de lei
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Data</TableHead>
                      <TableHead>Projeto</TableHead>
                      <TableHead>Título</TableHead>
                      <TableHead>Categoria</TableHead>
                      <TableHead>Voto</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {politician.voteRecords.map((vote) => (
                      <TableRow key={vote.id}>
                        <TableCell>{new Date(vote.date).toLocaleDateString()}</TableCell>
                        <TableCell className="font-mono text-sm">{vote.billNumber}</TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{vote.title}</p>
                            <p className="text-sm text-muted-foreground">{vote.description}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{vote.category}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline" className={getVoteColor(vote.vote)}>
                            {translateVote(vote.vote)}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="promises" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Promessas de Campanha</CardTitle>
                <CardDescription>
                  Acompanhe o status dos compromissos de campanha
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {politician.promises.map((promise) => (
                    <Card key={promise.id}>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <CardTitle className="text-lg">{promise.title}</CardTitle>
                            <CardDescription>{promise.description}</CardDescription>
                          </div>
                          <Badge variant="outline" className={getStatusColor(promise.status)}>
                            {translatePromiseStatus(promise.status)}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Progresso</span>
                            <span className="font-medium">{promise.progress}%</span>
                          </div>
                          <Progress value={promise.progress} />
                          <div className="flex justify-between text-sm text-muted-foreground">
                            <span>Prometido em: {new Date(promise.datePromised).toLocaleDateString()}</span>
                            <span>Prazo: {new Date(promise.deadline).toLocaleDateString()}</span>
                          </div>
                          <Badge variant="secondary">{promise.category}</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="proposals" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Propostas Legislativas</CardTitle>
                <CardDescription>
                  Projetos de lei e iniciativas propostas por este representante
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {politician.proposals.map((proposal) => (
                    <Card key={proposal.id}>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <CardTitle className="text-lg">{proposal.title}</CardTitle>
                            <CardDescription>{proposal.description}</CardDescription>
                          </div>
                          <Badge variant="outline" className={getStatusColor(proposal.status)}>
                            {translateProposalStatus(proposal.status)}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Nível de Apoio</span>
                            <span className="font-medium">{proposal.supportLevel}%</span>
                          </div>
                          <Progress value={proposal.supportLevel} />
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-muted-foreground">
                              Proposto em: {new Date(proposal.dateProposed).toLocaleDateString()}
                            </span>
                            <Badge variant="secondary">{proposal.category}</Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Legacy Section - performance overview for all politicians */}
        <LegacySection politicianId={politician.id} politicianName={politician.name} />
      </main>

      <Footer />
    </div>
  );
}
