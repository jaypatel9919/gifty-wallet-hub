import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Public Pages
import Index from "./pages/Index";
import Stores from "./pages/Stores";
import StoreDetail from "./pages/StoreDetail";
import Networks from "./pages/Networks";
import NetworkDetail from "./pages/NetworkDetail";
import HowItWorks from "./pages/HowItWorks";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Support from "./pages/Support";

// User Pages
import Dashboard from "./pages/Dashboard";
import CardDetail from "./pages/CardDetail";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import AllCards from "./pages/AllCards";
import AllTransactions from "./pages/AllTransactions";
import ForgotPassword from "./pages/ForgotPassword";

// Super Admin Pages
import SuperAdminDashboard from "./pages/admin/SuperAdminDashboard";
import AdminNetworks from "./pages/admin/AdminNetworks";
import AdminStores from "./pages/admin/AdminStores";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminTransactions from "./pages/admin/AdminTransactions";
import AdminBillBook from "./pages/admin/DetailedBillBook";
import AdminSettlements from "./pages/admin/AdminSettlements";
import AdminSettings from "./pages/admin/AdminSettings";
import AdminLogs from "./pages/admin/AdminLogs";

// Claim Page
import ClaimInvitation from "./pages/ClaimInvitation";

// Network Admin Pages
import NetworkAdminDashboard from "./pages/admin/NetworkAdminDashboard";
import NetworkProfile from "./pages/admin/NetworkProfile";
import NetworkStores from "./pages/admin/NetworkStores";
import NetworkOffers from "./pages/admin/NetworkOffers";
import NetworkBillBook from "./pages/admin/NetworkBillBook";
import NetworkAdmins from "./pages/admin/NetworkAdmins";
import NetworkLogs from "./pages/admin/NetworkLogs";
import StoreApprovals from "./pages/admin/StoreApprovals";

// Store Admin Pages
import StoreAdminDashboard from "./pages/admin/StoreAdminDashboard";
import StoreProfile from "./pages/admin/StoreProfile";
import StorePlans from "./pages/admin/StorePlans";
import SmartTerminal from "./pages/admin/SmartTerminal";
import StoreTransactions from "./pages/admin/StoreTransactions";
import StoreBillBook from "./pages/admin/StoreBillBook";
import StoreOffers from "./pages/admin/StoreOffers";
import StoreLogs from "./pages/admin/StoreLogs";

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
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/support" element={<Support />} />
          <Route path="/claim/:token" element={<ClaimInvitation />} />
          
          {/* User Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/cards" element={<AllCards />} />
          <Route path="/dashboard/transactions" element={<AllTransactions />} />
          <Route path="/card/:id" element={<CardDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
          
          {/* Super Admin */}
          <Route path="/admin" element={<SuperAdminDashboard />} />
          <Route path="/admin/networks" element={<AdminNetworks />} />
          <Route path="/admin/stores" element={<AdminStores />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/transactions" element={<AdminTransactions />} />
          <Route path="/admin/billbook" element={<AdminBillBook role="super-admin" />} />
          <Route path="/admin/settlements" element={<AdminSettlements />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
          <Route path="/admin/logs" element={<AdminLogs />} />
          
          {/* Network Admin */}
          <Route path="/network-admin" element={<NetworkAdminDashboard />} />
          <Route path="/network-admin/profile" element={<NetworkProfile />} />
          <Route path="/network-admin/stores" element={<NetworkStores />} />
          <Route path="/network-admin/offers" element={<NetworkOffers />} />
          <Route path="/network-admin/billbook" element={<NetworkBillBook />} />
          <Route path="/network-admin/admins" element={<NetworkAdmins />} />
          <Route path="/network-admin/logs" element={<NetworkLogs />} />
          <Route path="/network-admin/approvals" element={<StoreApprovals />} />
          
          {/* Store Admin */}
          <Route path="/store-admin" element={<StoreAdminDashboard />} />
          <Route path="/store-admin/profile" element={<StoreProfile />} />
          <Route path="/store-admin/plans" element={<StorePlans />} />
          <Route path="/store-admin/terminal" element={<SmartTerminal />} />
          <Route path="/store-admin/transactions" element={<StoreTransactions />} />
          <Route path="/store-admin/billbook" element={<StoreBillBook />} />
          <Route path="/store-admin/offers" element={<StoreOffers />} />
          <Route path="/store-admin/logs" element={<StoreLogs />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
