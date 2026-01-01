import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">λ Polis</h3>
            <p className="text-primary-foreground/80 text-sm">
              Sua fonte confiável para transparência governamental e prestação de contas política. 
              Todos os dados são obtidos de registros oficiais do governo.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Navegar</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Todos os Políticos</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Por Estado</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Por Partido</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Por Cargo</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Dados</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Registros de Votação</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Promessas de Campanha</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Propostas de Lei</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Fontes de Dados</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Sobre</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Nossa Missão</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Fale Conosco</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Termos de Uso</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-primary-foreground/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/80">
          <p>&copy; 2024 λ Polis. Todos os direitos reservados.</p>
          <p>Dados atualizados diariamente de fontes oficiais do governo</p>
        </div>
      </div>
    </footer>
  );
};
