import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import HomeImprovement from "./pages/services/HomeImprovement";
import KitchenRemodeling from "./pages/services/KitchenRemodeling";
import BathroomRemodeling from "./pages/services/BathroomRemodeling";
import WindowReplacement from "./pages/services/WindowReplacement";
import PaintingServices from "./pages/services/PaintingServices";
import JunkRemoval from "./pages/services/JunkRemoval";
import StructuralConstruction from "./pages/services/StructuralConstruction";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>

          <Route path="/" element={<Index />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/contacto" element={<Contact />} />
          
          {/* Service Pages */}
          <Route path="/servicios/home-improvement" element={<HomeImprovement />} />
          <Route path="/servicios/kitchen-remodeling" element={<KitchenRemodeling />} />
          <Route path="/servicios/bathroom-remodeling" element={<BathroomRemodeling />} />
          <Route path="/servicios/window-replacement" element={<WindowReplacement />} />
          <Route path="/servicios/painting-services" element={<PaintingServices />} />
          <Route path="/servicios/junk-removal" element={<JunkRemoval />} />
          <Route path="/servicios/structural-construction" element={<StructuralConstruction />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
