import AdminLayout from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Download } from "lucide-react";

const logs = [
  { id: "1", action: "User login", actor: "john@example.com", ip: "192.168.1.1", details: "Successful login", time: "2 min ago" },
  { id: "2", action: "Network created", actor: "admin@gotogifty.com", ip: "192.168.1.2", details: "Created 'Tech Alliance'", time: "1 hour ago" },
  { id: "3", action: "Settlement processed", actor: "System", ip: "-", details: "$12,500 to ShopLocal Network", time: "3 hours ago" },
  { id: "4", action: "Store approved", actor: "admin@gotogifty.com", ip: "192.168.1.2", details: "Approved 'Beauty Essentials'", time: "5 hours ago" },
  { id: "5", action: "User role changed", actor: "admin@gotogifty.com", ip: "192.168.1.2", details: "Mike Wilson → Store Admin", time: "1 day ago" },
  { id: "6", action: "Failed login attempt", actor: "unknown@test.com", ip: "10.0.0.1", details: "Invalid credentials (3rd attempt)", time: "1 day ago" },
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

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Action</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Actor</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">IP Address</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Details</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {logs.map((log) => (
                <tr key={log.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4">
                    <span className={`font-medium ${
                      log.action.includes("Failed") ? "text-destructive" : "text-foreground"
                    }`}>
                      {log.action}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{log.actor}</td>
                  <td className="px-6 py-4 font-mono text-sm text-muted-foreground">{log.ip}</td>
                  <td className="px-6 py-4 text-foreground">{log.details}</td>
                  <td className="px-6 py-4 text-muted-foreground">{log.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminLogs;
