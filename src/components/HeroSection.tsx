import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Users, FileText, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import heroImage from "@/assets/hero-government.jpg";

export const HeroSection = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <section className="relative bg-gradient-hero text-primary-foreground py-20">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-6">
          Government Transparency Made Simple
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-foreground/90">
          Track your representatives' voting records, campaign promises, and policy proposals. 
          All data sourced directly from official government records.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Find your representative..."
              className="pl-12 h-14 text-lg bg-background"
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
            className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary h-14"
            onClick={() => navigate("/politicians")}
          >
            Browse All
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-primary-foreground/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">500+ Politicians Tracked</h3>
            <p className="text-primary-foreground/80">Complete profiles with voting history and promises</p>
          </div>
          
          <div className="text-center">
            <div className="bg-primary-foreground/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Official Data Only</h3>
            <p className="text-primary-foreground/80">Sourced directly from government websites and records</p>
          </div>
          
          <div className="text-center">
            <div className="bg-primary-foreground/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <BarChart3 className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Real-time Updates</h3>
            <p className="text-primary-foreground/80">Stay informed with the latest votes and proposals</p>
          </div>
        </div>
      </div>
    </section>
  );
};