import AdminLayout from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Eye, Check, X, MapPin } from "lucide-react";

const stores = [
  { id: "1", name: "Fashion Hub", logo: "FH", city: "New York", category: "Fashion", status: "Active", joined: "Dec 1, 2024" },
  { id: "2", name: "Gourmet Delights", logo: "GD", city: "Chicago", category: "Dining", status: "Active", joined: "Nov 15, 2024" },
  { id: "3", name: "Home Decor Plus", logo: "HD", city: "Seattle", category: "Home", status: "Active", joined: "Nov 10, 2024" },
  { id: "4", name: "Sports Arena", logo: "SA", city: "Miami", category: "Sports", status: "Pending", joined: "Dec 5, 2024" },
  { id: "5", name: "Beauty Essentials", logo: "BE", city: "Los Angeles", category: "Beauty", status: "Pending", joined: "Dec 7, 2024" },
];

const NetworkStores = () => {
  return (
    <AdminLayout role="network-admin" title="Network Stores">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search stores..." className="pl-10" />
        </div>
        <Button variant="accent">
          <Plus className="h-4 w-4 mr-2" />
          Invite Store
        </Button>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Store</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Location</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Category</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Joined</th>
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
                  <td className="px-6 py-4 text-muted-foreground">{store.joined}</td>
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
                      {store.status === "Pending" && (
                        <>
                          <Button variant="ghost" size="icon-sm" className="text-emerald-600">
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon-sm" className="text-destructive">
                            <X className="h-4 w-4" />
                          </Button>
                        </>
                      )}
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

export default NetworkStores;
