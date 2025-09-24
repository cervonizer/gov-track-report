import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PoliticianGrid } from "@/components/PoliticianGrid";
import { StatsSection } from "@/components/StatsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <PoliticianGrid />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Index;
