import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import CookieConsent from "@/components/CookieConsent";
import Index from "./pages/Index.tsx";
import Knowledge from "./pages/Knowledge.tsx";
import Team from "./pages/Team.tsx";
import BlogAgenticMiddleware from "./pages/BlogAgenticMiddleware.tsx";
import BlogRLDecoders from "./pages/BlogRLDecoders.tsx";
import BlogPQCMigration from "./pages/BlogPQCMigration.tsx";
import BlogSurfaceCodes from "./pages/BlogSurfaceCodes.tsx";
import BlogQMLFinance from "./pages/BlogQMLFinance.tsx";
import BlogHybridArchitectures from "./pages/BlogHybridArchitectures.tsx";
import Privacy from "./pages/Privacy.tsx";
import CookieNoticePage from "./pages/CookieNoticePage.tsx";
import Terms from "./pages/Terms.tsx";
import Trademark from "./pages/Trademark.tsx";
import License from "./pages/License.tsx";
import Integrity from "./pages/Integrity.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/knowledge" element={<Knowledge />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog/agentic-middleware-quv-mcp" element={<BlogAgenticMiddleware />} />
          <Route path="/blog/rl-decoders-fault-tolerant-qc" element={<BlogRLDecoders />} />
          <Route path="/blog/pqc-migration-guide" element={<BlogPQCMigration />} />
          <Route path="/blog/surface-codes-fault-tolerance" element={<BlogSurfaceCodes />} />
          <Route path="/blog/quantum-ml-financial-risk" element={<BlogQMLFinance />} />
          <Route path="/blog/hybrid-quantum-classical" element={<BlogHybridArchitectures />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookie-notice" element={<CookieNoticePage />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/trademark" element={<Trademark />} />
          <Route path="/license" element={<License />} />
          <Route path="/integrity" element={<Integrity />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
