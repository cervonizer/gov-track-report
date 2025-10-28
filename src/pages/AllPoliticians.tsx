import { useState, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PoliticianCard } from "@/components/PoliticianCard";
import { mockPoliticians } from "@/data/mockData";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

const AllPoliticians = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [partyFilter, setPartyFilter] = useState(searchParams.get("party") || "all");
  const [stateFilter, setStateFilter] = useState(searchParams.get("state") || "all");

  const handleViewDetails = (id: string) => {
    navigate(`/politician/${id}`);
  };

  const filteredPoliticians = useMemo(() => {
    return mockPoliticians.filter((politician) => {
      const matchesSearch = 
        politician.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        politician.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
        politician.state.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesParty = partyFilter === "all" || politician.party === partyFilter;
      const matchesState = stateFilter === "all" || politician.state === stateFilter;

      return matchesSearch && matchesParty && matchesState;
    });
  }, [searchQuery, partyFilter, stateFilter]);

  const uniqueParties = Array.from(new Set(mockPoliticians.map(p => p.party)));
  const uniqueStates = Array.from(new Set(mockPoliticians.map(p => p.state)));

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("q", value);
    } else {
      params.delete("q");
    }
    setSearchParams(params);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header searchQuery={searchQuery} onSearchChange={handleSearchChange} />
      
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            All Representatives
          </h1>
          <p className="text-lg text-muted-foreground">
            Browse and search through all elected officials
          </p>
        </div>

        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search by name, position, or location..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={partyFilter} onValueChange={setPartyFilter}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Filter by party" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Parties</SelectItem>
              {uniqueParties.map((party) => (
                <SelectItem key={party} value={party}>
                  {party}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={stateFilter} onValueChange={setStateFilter}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Filter by state" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All States</SelectItem>
              {uniqueStates.map((state) => (
                <SelectItem key={state} value={state}>
                  {state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="mb-4">
          <p className="text-muted-foreground">
            Showing {filteredPoliticians.length} of {mockPoliticians.length} representatives
          </p>
        </div>

        {filteredPoliticians.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPoliticians.map((politician) => (
              <PoliticianCard
                key={politician.id}
                politician={politician}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No representatives found matching your search criteria.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default AllPoliticians;
