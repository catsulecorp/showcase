import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import URLCleaner from "./components/URLCleaner";
import MetaHandler from "./components/MetaHandler";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <URLCleaner />
      <BrowserRouter>
        <MetaHandler />
        <Routes>
          {/* Main English Route */}
          <Route path="/" element={<Index />} />

          {/* Main Spanish Route */}
          <Route path="/es" element={<Index />} />

          {/* Fallback to NotFound */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
