import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import StoreSwitcher from "@/components/StoreSwitcher";
import {
  LayoutDashboard,
  Building2,
  Store,
  Users,
  CreditCard,
  FileText,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  LogOut,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

const mockStores = [
  { id: "1", name: "Fashion Hub", city: "New York" },
  { id: "2", name: "Fashion Hub - Brooklyn", city: "Brooklyn" },
  { id: "3", name: "Fashion Hub - Queens", city: "Queens" },
];

interface AdminLayoutProps {
  children: ReactNode;
  role: "super-admin" | "network-admin" | "store-admin";
  title: string;
}

const superAdminMenu = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/admin" },
  { icon: Building2, label: "Networks", path: "/admin/networks" },
  { icon: Store, label: "Stores", path: "/admin/stores" },
  { icon: Users, label: "Users & Roles", path: "/admin/users" },
  { icon: CreditCard, label: "Transactions", path: "/admin/transactions" },
  { icon: FileText, label: "Bill Book", path: "/admin/billbook" },
  { icon: FileText, label: "Settlements", path: "/admin/settlements" },
  { icon: Settings, label: "Settings", path: "/admin/settings" },
  { icon: FileText, label: "Audit Logs", path: "/admin/logs" },
];

const networkAdminMenu = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/network-admin" },
  { icon: Building2, label: "Network Profile", path: "/network-admin/profile" },
  { icon: Store, label: "Stores", path: "/network-admin/stores" },
  { icon: CreditCard, label: "Offers", path: "/network-admin/offers" },
  { icon: FileText, label: "Bill Book", path: "/network-admin/billbook" },
  { icon: Users, label: "Admins", path: "/network-admin/admins" },
  { icon: FileText, label: "Logs", path: "/network-admin/logs" },
];

const storeAdminMenu = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/store-admin" },
  { icon: Store, label: "Store Profile", path: "/store-admin/profile" },
  { icon: CreditCard, label: "Gift Card Plans", path: "/store-admin/plans" },
  { icon: LayoutDashboard, label: "Smart Terminal", path: "/store-admin/terminal" },
  { icon: FileText, label: "Transactions", path: "/store-admin/transactions" },
  { icon: FileText, label: "Bill Book", path: "/store-admin/billbook" },
  { icon: FileText, label: "Offers", path: "/store-admin/offers" },
  { icon: FileText, label: "Activity Logs", path: "/store-admin/logs" },
];

const AdminLayout = ({ children, role, title }: AdminLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentStore, setCurrentStore] = useState(mockStores[0]);
  const location = useLocation();

  const menu = role === "super-admin" 
    ? superAdminMenu 
    : role === "network-admin" 
    ? networkAdminMenu 
    : storeAdminMenu;

  const roleLabel = role === "super-admin" 
    ? "Super Admin" 
    : role === "network-admin" 
    ? "Network Admin" 
    : "Store Admin";

  return (
    <div className="min-h-screen flex bg-muted/30">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-sidebar text-sidebar-foreground transform transition-transform duration-300 lg:relative lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-4 border-b border-sidebar-border">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="GoToGifty" className="h-8 brightness-0 invert" />
            </Link>
            <p className="text-xs text-sidebar-foreground/60 mt-2">{roleLabel} Panel</p>
          </div>

          {/* Store Switcher for Store Admin */}
          {role === "store-admin" && (
            <div className="p-4 border-b border-sidebar-border">
              <StoreSwitcher
                stores={mockStores}
                currentStore={currentStore}
                onStoreChange={setCurrentStore}
              />
            </div>
          )}

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {menu.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* User */}
          <div className="p-4 border-t border-sidebar-border">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sidebar-accent flex items-center justify-center">
                <span className="text-sm font-medium">AD</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">Admin User</p>
                <p className="text-xs text-sidebar-foreground/60 truncate">admin@gotogifty.com</p>
              </div>
            </div>
            <Button
              variant="ghost"
              className="w-full mt-3 justify-start text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent"
              size="sm"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top Bar */}
        <header className="h-16 bg-card border-b border-border flex items-center justify-between px-4 lg:px-8 sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
            <h1 className="text-lg font-semibold text-foreground">{title}</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-10 w-64" />
            </div>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
            </Button>
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
              <span className="text-xs font-medium">AD</span>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-8">{children}</main>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AdminLayout;
