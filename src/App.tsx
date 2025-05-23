
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CreateListing from "./pages/CreateListing";
import Listings from "./pages/Listings";
import Profile from "./pages/Profile";
import OptimizePattern from './pages/optimizePattern';
import ReviewDraft from "./pages/ReviewDraft";
import ListingGeneration from "./pages/ListingGeneration";
import EditProductImage from "./pages/EditProductImage";
import SeoKeywordAnalysis from "./pages/SeoKeywordAnalysis";
import NotFound from "./pages/NotFound";
import LandingPage from "./pages/LandingPage";
import ListingDetailPage from "./pages/ListingDetailPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Index />} />
          <Route path="/create" element={<CreateListing />} />
          <Route path="/optimize" element={<OptimizePattern />} />
          <Route path="/review" element={<ReviewDraft />} />
          <Route path="/listing-generation" element={<ListingGeneration />} />
          <Route path="/edit-image" element={<EditProductImage />} />
          <Route path="/seo-keywords" element={<SeoKeywordAnalysis />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/listings/:id" element={<ListingDetailPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
