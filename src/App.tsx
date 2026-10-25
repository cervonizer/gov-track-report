import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PoliticianProfile from "./pages/PoliticianProfile";
import AllPoliticians from "./pages/AllPoliticians";
import { AuthProvider } from "@/hooks/use-auth";
import Promises from "./pages/Promises";
import PromiseDetail from "./pages/PromiseDetail";
import PromiseAuth, {ResetPassword} from "./pages/PromiseAuth";
import PromiseReview from "./pages/PromiseReview";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider><TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/politician/:id" element={<PoliticianProfile />} />
          <Route path="/politicians" element={<AllPoliticians />} />
          <Route path="/promessas" element={<Promises />} />
          <Route path="/promessas/:id" element={<PromiseDetail />} />
          <Route path="/entrar" element={<PromiseAuth />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/revisao" element={<PromiseReview />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider></AuthProvider>
  </QueryClientProvider>
);

export default App;
