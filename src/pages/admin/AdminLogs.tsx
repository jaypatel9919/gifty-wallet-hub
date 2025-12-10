import AdminLayout from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Download } from "lucide-react";
import ActivityTimeline from "@/components/ActivityTimeline";

const logs = [
  { id: "1", action: "User login", actor: "john@example.com", details: "Successful login from 192.168.1.1", time: "2 min ago", type: "success" as const },
  { id: "2", action: "Network created", actor: "admin@gotogifty.com", details: "Created 'Tech Alliance' network", time: "1 hour ago", type: "success" as const },
  { id: "3", action: "Settlement processed", actor: "System", details: "$12,500 paid to ShopLocal Network", time: "3 hours ago", type: "info" as const },
  { id: "4", action: "Store approved", actor: "admin@gotogifty.com", details: "Approved 'Beauty Essentials' store", time: "5 hours ago", type: "success" as const },
  { id: "5", action: "User role changed", actor: "admin@gotogifty.com", details: "Mike Wilson promoted to Store Admin", time: "1 day ago", type: "info" as const },
  { id: "6", action: "Failed login attempt", actor: "unknown@test.com", details: "Invalid credentials (3rd attempt) from 10.0.0.1", time: "1 day ago", type: "error" as const },
  { id: "7", action: "Card blocked", actor: "security@gotogifty.com", details: "Card GTGF-9988-7766-5544 blocked due to suspicious activity", time: "2 days ago", type: "warning" as const },
  { id: "8", action: "Store deactivated", actor: "admin@gotogifty.com", details: "Deactivated 'Old Store' due to inactivity", time: "3 days ago", type: "warning" as const },
];

const AdminLogs = () => {
  return (
    <AdminLayout role="super-admin" title="Audit Logs">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search logs..." className="pl-10" />
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl p-6">
        <ActivityTimeline logs={logs} />
      </div>
    </AdminLayout>
  );
};

export default AdminLogs;
