import AdminLayout from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Search,
  Filter,
  CheckCircle,
  XCircle,
  Store,
  MapPin,
  Calendar,
  Eye,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const pendingStores = [
  {
    id: "1",
    name: "New Fashion Outlet",
    city: "Brooklyn",
    address: "123 Fashion St, Brooklyn, NY 11201",
    email: "contact@newfashion.com",
    phone: "+1 234 567 890",
    submittedDate: "Dec 10, 2024",
    description: "Modern fashion retailer specializing in contemporary streetwear.",
  },
  {
    id: "2",
    name: "Tech Gadgets Plus",
    city: "Manhattan",
    address: "456 Tech Ave, Manhattan, NY 10001",
    email: "info@techgadgets.com",
    phone: "+1 234 567 891",
    submittedDate: "Dec 9, 2024",
    description: "Electronics and gadgets store with the latest tech products.",
  },
  {
    id: "3",
    name: "Home Decor Hub",
    city: "Queens",
    address: "789 Home Lane, Queens, NY 11375",
    email: "hello@homedecor.com",
    phone: "+1 234 567 892",
    submittedDate: "Dec 8, 2024",
    description: "Interior design and home decor products.",
  },
  {
    id: "4",
    name: "Organic Grocery",
    city: "Bronx",
    address: "321 Green St, Bronx, NY 10451",
    email: "shop@organicgrocery.com",
    phone: "+1 234 567 893",
    submittedDate: "Dec 7, 2024",
    description: "Fresh organic produce and healthy food options.",
  },
  {
    id: "5",
    name: "Fitness Zone",
    city: "Staten Island",
    address: "654 Fit Blvd, Staten Island, NY 10301",
    email: "train@fitnesszone.com",
    phone: "+1 234 567 894",
    submittedDate: "Dec 6, 2024",
    description: "Gym equipment and fitness accessories retailer.",
  },
];

const StoreApprovals = () => {
  const [stores, setStores] = useState(pendingStores);
  const [expandedStore, setExpandedStore] = useState<string | null>(null);

  const handleApprove = (storeId: string, storeName: string) => {
    setStores(stores.filter((s) => s.id !== storeId));
    toast.success(`${storeName} has been approved`);
  };

  const handleReject = (storeId: string, storeName: string) => {
    setStores(stores.filter((s) => s.id !== storeId));
    toast.error(`${storeName} has been rejected`);
  };

  return (
    <AdminLayout role="network-admin" title="Store Approvals">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <p className="text-muted-foreground">
              {stores.length} stores pending approval
            </p>
          </div>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search stores..." className="pl-10 w-64" />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>

        {/* Store Cards */}
        {stores.length > 0 ? (
          <div className="space-y-4">
            {stores.map((store) => (
              <div
                key={store.id}
                className="bg-card border border-border rounded-xl overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center">
                        <Store className="h-7 w-7 text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-lg">
                          {store.name}
                        </h3>
                        <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {store.city}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {store.submittedDate}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          setExpandedStore(
                            expandedStore === store.id ? null : store.id
                          )
                        }
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        {expandedStore === store.id ? "Hide" : "View"} Details
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-emerald-600 border-emerald-200 hover:bg-emerald-50"
                        onClick={() => handleApprove(store.id, store.name)}
                      >
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Approve
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-destructive border-destructive/20 hover:bg-destructive/10"
                        onClick={() => handleReject(store.id, store.name)}
                      >
                        <XCircle className="h-4 w-4 mr-2" />
                        Reject
                      </Button>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {expandedStore === store.id && (
                    <div className="mt-6 pt-6 border-t border-border grid sm:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-muted-foreground">Address</p>
                          <p className="font-medium text-foreground">{store.address}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Email</p>
                          <p className="font-medium text-foreground">{store.email}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Phone</p>
                          <p className="font-medium text-foreground">{store.phone}</p>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Description</p>
                        <p className="text-foreground">{store.description}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-card border border-border rounded-xl">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 mx-auto mb-4 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              All Caught Up!
            </h3>
            <p className="text-muted-foreground">
              No pending store approvals at the moment.
            </p>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default StoreApprovals;
