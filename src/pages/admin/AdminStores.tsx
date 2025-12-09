import AdminLayout from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Eye, Edit, Trash2, MapPin } from "lucide-react";

const stores = [
  { id: "1", name: "Fashion Hub", logo: "FH", city: "New York", category: "Fashion", network: "ShopLocal", type: "Network", status: "Active" },
  { id: "2", name: "Tech Zone", logo: "TZ", city: "San Francisco", category: "Electronics", network: "-", type: "Single", status: "Active" },
  { id: "3", name: "Gourmet Delights", logo: "GD", city: "Chicago", category: "Dining", network: "Dine & Discover", type: "Network", status: "Active" },
  { id: "4", name: "Beauty Lounge", logo: "BL", city: "Los Angeles", category: "Beauty", network: "-", type: "Single", status: "Pending" },
  { id: "5", name: "Sports Arena", logo: "SA", city: "Miami", category: "Sports", network: "ShopLocal", type: "Network", status: "Active" },
];

const AdminStores = () => {
  return (
    <AdminLayout role="super-admin" title="Stores Management">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search stores..." className="pl-10" />
        </div>
        <Button variant="accent">
          <Plus className="h-4 w-4 mr-2" />
          Add Store
        </Button>
      </div>

      {/* Table */}
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Store</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Location</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Category</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Network</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Type</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Status</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {stores.map((store) => (
                <tr key={store.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-foreground font-semibold text-sm">
                        {store.logo}
                      </div>
                      <span className="font-medium text-foreground">{store.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" />
                      {store.city}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-secondary px-2 py-1 rounded text-xs text-secondary-foreground">
                      {store.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-foreground">{store.network}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      store.type === "Network" ? "bg-accent/10 text-accent" : "bg-muted text-muted-foreground"
                    }`}>
                      {store.type}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      store.status === "Active" ? "status-active" : "status-pending"
                    }`}>
                      {store.status}
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

export default AdminStores;
