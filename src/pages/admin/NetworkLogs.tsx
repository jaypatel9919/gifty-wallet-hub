import AdminLayout from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Download } from "lucide-react";

const logs = [
  { id: "1", action: "Store joined network", actor: "Fashion Hub", details: "Approved by John Smith", time: "2 min ago" },
  { id: "2", action: "Offer created", actor: "Sarah Johnson", details: "Holiday Special 15% discount", time: "1 hour ago" },
  { id: "3", action: "Settlement processed", actor: "System", details: "$2,700 transferred to Fashion Hub", time: "3 hours ago" },
  { id: "4", action: "Admin added", actor: "John Smith", details: "Invited Mike Wilson as admin", time: "1 day ago" },
  { id: "5", action: "Store removed", actor: "John Smith", details: "Removed Electronics Plus from network", time: "2 days ago" },
  { id: "6", action: "Commission updated", actor: "Sarah Johnson", details: "Changed from 2% to 2.5%", time: "3 days ago" },
];

const NetworkLogs = () => {
  return (
    <AdminLayout role="network-admin" title="Activity Logs">
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
        <div className="space-y-0">
          {logs.map((log, index) => (
            <div key={log.id} className="relative pl-8 pb-8 last:pb-0">
              {/* Timeline line */}
              {index !== logs.length - 1 && (
                <div className="absolute left-[11px] top-6 bottom-0 w-0.5 bg-border" />
              )}
              {/* Timeline dot */}
              <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-accent" />
              </div>
              {/* Content */}
              <div>
                <p className="font-medium text-foreground">{log.action}</p>
                <p className="text-sm text-muted-foreground mt-0.5">{log.details}</p>
                <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                  <span className="font-medium">{log.actor}</span>
                  <span>•</span>
                  <span>{log.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default NetworkLogs;
