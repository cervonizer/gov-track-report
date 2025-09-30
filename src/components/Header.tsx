import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import polisLogo from "@/assets/polis-logo.png";

export const Header = () => {
  return (
    <header className="bg-gradient-primary shadow-medium">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <img src={polisLogo} alt="Polis Logo" className="h-8 w-auto" />
              <h1 className="text-2xl font-bold text-primary-foreground">Polis</h1>
            </div>
            <p className="text-primary-foreground/80 hidden md:block">You run the city</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search politicians..." 
                className="pl-10 w-64 bg-background"
              />
            </div>
            <Button variant="secondary" size="sm">
              Advanced Search
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};