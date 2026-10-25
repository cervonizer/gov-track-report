import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";
import { supabase } from "@/integrations/supabase/client";
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
  const {user} = useAuth();
  return (
    <header className="bg-primary shadow-medium">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <div className="flex items-end space-x-4 cursor-pointer" onClick={() => navigate("/")}>
            <h1 className="text-2xl font-bold text-primary-foreground">λ Polis</h1>
            <span className="hidden sm:inline text-sm text-primary-foreground/80 font-medium mb-0.5">Escolha quem governa</span>
          </div>
          
          <div className="flex flex-wrap gap-2 items-center">
            <Button asChild variant="secondary" size="sm"><Link to="/promessas">Promessas</Link></Button>
            {user?<Button variant="secondary" size="sm" onClick={()=>supabase.auth.signOut()}>Sair</Button>:<Button asChild variant="secondary" size="sm"><Link to="/entrar">Entrar</Link></Button>}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Buscar políticos..." 
                className="pl-10 w-40 sm:w-64 bg-background"
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
              className="rounded-3xl border-muted bg-muted text-secondary-foreground hover:bg-muted/80"
              onClick={() => navigate("/politicians")}
            >
              Ver Todos
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
