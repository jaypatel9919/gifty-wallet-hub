import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Stores from "./pages/Stores";
import StoreDetail from "./pages/StoreDetail";
import Networks from "./pages/Networks";
import NetworkDetail from "./pages/NetworkDetail";
import HowItWorks from "./pages/HowItWorks";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import CardDetail from "./pages/CardDetail";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Support from "./pages/Support";
import SuperAdminDashboard from "./pages/admin/SuperAdminDashboard";
import AdminNetworks from "./pages/admin/AdminNetworks";
import AdminStores from "./pages/admin/AdminStores";
import NetworkAdminDashboard from "./pages/admin/NetworkAdminDashboard";
import StoreAdminDashboard from "./pages/admin/StoreAdminDashboard";
import SmartTerminal from "./pages/admin/SmartTerminal";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Pages */}
          <Route path="/" element={<Index />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/stores/:id" element={<StoreDetail />} />
          <Route path="/networks" element={<Networks />} />
          <Route path="/networks/:id" element={<NetworkDetail />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/support" element={<Support />} />
          
          {/* User Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/cards/:id" element={<CardDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
          
          {/* Super Admin */}
          <Route path="/admin" element={<SuperAdminDashboard />} />
          <Route path="/admin/networks" element={<AdminNetworks />} />
          <Route path="/admin/stores" element={<AdminStores />} />
          
          {/* Network Admin */}
          <Route path="/network-admin" element={<NetworkAdminDashboard />} />
          
          {/* Store Admin */}
          <Route path="/store-admin" element={<StoreAdminDashboard />} />
          <Route path="/store-admin/terminal" element={<SmartTerminal />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
