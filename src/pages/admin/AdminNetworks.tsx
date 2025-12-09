import AdminLayout from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, MoreHorizontal, Eye, Edit, Trash2 } from "lucide-react";

const networks = [
  { id: "1", name: "ShopLocal Network", logo: "SL", stores: 25, loaded: "$125,000", redeemed: "$98,500", status: "Active" },
  { id: "2", name: "Dine & Discover", logo: "DD", stores: 18, loaded: "$89,000", redeemed: "$72,300", status: "Active" },
  { id: "3", name: "Style Collective", logo: "SC", stores: 32, loaded: "$156,000", redeemed: "$134,200", status: "Active" },
  { id: "4", name: "Tech Alliance", logo: "TA", stores: 15, loaded: "$67,000", redeemed: "$45,100", status: "Pending" },
  { id: "5", name: "Wellness Circle", logo: "WC", stores: 22, loaded: "$78,000", redeemed: "$61,500", status: "Active" },
];

const AdminNetworks = () => {
  return (
    <AdminLayout role="super-admin" title="Networks Management">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search networks..." className="pl-10" />
        </div>
        <Button variant="accent">
          <Plus className="h-4 w-4 mr-2" />
          Add Network
        </Button>
      </div>

      {/* Table */}
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Network</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Stores</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Total Loaded</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Total Redeemed</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Status</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {networks.map((network) => (
                <tr key={network.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg gift-gradient flex items-center justify-center text-white font-semibold text-sm">
                        {network.logo}
                      </div>
                      <span className="font-medium text-foreground">{network.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-foreground">{network.stores}</td>
                  <td className="px-6 py-4 text-foreground">{network.loaded}</td>
                  <td className="px-6 py-4 text-foreground">{network.redeemed}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      network.status === "Active" ? "status-active" : "status-pending"
                    }`}>
                      {network.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon-sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon-sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon-sm" className="text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminNetworks;
