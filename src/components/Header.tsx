import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  searchQuery?: string;
  onSearchChange?: (value: string) => void;
}

export const Header = ({ searchQuery = "", onSearchChange }: HeaderProps) => {
  const navigate = useNavigate();
  return (
    <header className="bg-gradient-primary shadow-medium">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 cursor-pointer" onClick={() => navigate("/")}>
            <h1 className="text-2xl font-bold text-primary-foreground">λ Polis</h1>
            <p className="text-primary-foreground/80 hidden md:block">You run the city</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search politicians..." 
                className="pl-10 w-64 bg-background"
                value={searchQuery}
                onChange={(e) => {
                  if (onSearchChange) {
                    onSearchChange(e.target.value);
                  } else {
                    navigate(`/politicians?q=${e.target.value}`);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !onSearchChange) {
                    navigate(`/politicians?q=${searchQuery}`);
                  }
                }}
              />
            </div>
            <Button 
              variant="secondary" 
              size="sm"
              onClick={() => navigate("/politicians")}
            >
              Browse All
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};