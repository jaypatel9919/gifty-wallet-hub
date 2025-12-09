import AdminLayout from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Edit, Trash2, Percent, Gift, Star } from "lucide-react";

const offers = [
  { id: "1", title: "5% Network Cashback", type: "Cashback", status: "Active", stores: "All", expires: "Ongoing" },
  { id: "2", title: "Double Points Tuesday", type: "Points", status: "Active", stores: "All", expires: "Ongoing" },
  { id: "3", title: "Birthday Bonus 20%", type: "Discount", status: "Active", stores: "All", expires: "Ongoing" },
  { id: "4", title: "Holiday Special 15%", type: "Discount", status: "Scheduled", stores: "Selected", expires: "Dec 31, 2024" },
];

const NetworkOffers = () => {
  return (
    <AdminLayout role="network-admin" title="Network Offers">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search offers..." className="pl-10" />
        </div>
        <Button variant="accent">
          <Plus className="h-4 w-4 mr-2" />
          Create Offer
        </Button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {offers.map((offer) => (
          <div key={offer.id} className="bg-card border border-border rounded-xl p-5 card-hover">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl gift-gradient flex items-center justify-center">
                {offer.type === "Cashback" ? (
                  <Percent className="h-6 w-6 text-white" />
                ) : offer.type === "Points" ? (
                  <Star className="h-6 w-6 text-white" />
                ) : (
                  <Gift className="h-6 w-6 text-white" />
                )}
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                offer.status === "Active" ? "status-active" : "status-pending"
              }`}>
                {offer.status}
              </span>
            </div>
            <h3 className="font-semibold text-foreground mb-2">{offer.title}</h3>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Type: {offer.type}</p>
              <p>Stores: {offer.stores}</p>
              <p>Expires: {offer.expires}</p>
            </div>
            <div className="flex gap-2 mt-4 pt-4 border-t border-border">
              <Button variant="outline" size="sm" className="flex-1">
                <Edit className="h-3.5 w-3.5 mr-1" />
                Edit
              </Button>
              <Button variant="ghost" size="sm" className="text-destructive">
                <Trash2 className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
};

export default NetworkOffers;
