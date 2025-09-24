import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PolitiTracker</h3>
            <p className="text-primary-foreground/80 text-sm">
              Your trusted source for government transparency and political accountability. 
              All data sourced from official government records.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Browse</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">All Politicians</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">By State</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">By Party</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">By Position</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Data</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Voting Records</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Campaign Promises</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Policy Proposals</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Data Sources</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">About</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Our Mission</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-primary-foreground/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/80">
          <p>&copy; 2024 PolitiTracker. All rights reserved.</p>
          <p>Data updated daily from official government sources</p>
        </div>
      </div>
    </footer>
  );
};