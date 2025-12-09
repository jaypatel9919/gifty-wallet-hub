import AdminLayout from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Edit, Trash2, CreditCard } from "lucide-react";

const plans = [
  { id: "1", name: "Silver Saver", price: 50, value: 50, bonus: "+$2 credit", sales: 156, status: "Active" },
  { id: "2", name: "Gold Member", price: 100, value: 110, bonus: "+10% value", sales: 89, status: "Active" },
  { id: "3", name: "Platinum VIP", price: 200, value: 230, bonus: "+15% value", sales: 34, status: "Active" },
  { id: "4", name: "Holiday Special", price: 75, value: 90, bonus: "+20% value", sales: 0, status: "Draft" },
];

const StorePlans = () => {
  return (
    <AdminLayout role="store-admin" title="Gift Card Plans">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search plans..." className="pl-10" />
        </div>
        <Button variant="accent">
          <Plus className="h-4 w-4 mr-2" />
          Create Plan
        </Button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {plans.map((plan) => (
          <div key={plan.id} className="bg-card border border-border rounded-xl overflow-hidden card-hover">
            {/* Card Preview */}
            <div className="h-28 gift-gradient p-4 relative">
              <div className="absolute top-0 right-0 w-16 h-16 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2" />
              <p className="text-white/80 text-sm">Fashion Hub</p>
              <p className="text-white font-bold">{plan.name}</p>
            </div>
            
            <div className="p-4">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-2xl font-bold text-foreground">${plan.price}</span>
                {plan.value !== plan.price && (
                  <span className="text-accent text-sm">(${plan.value} value)</span>
                )}
              </div>
              <p className="text-sm text-muted-foreground mb-3">{plan.bonus}</p>
              
              <div className="flex items-center justify-between text-sm mb-4">
                <span className="text-muted-foreground">{plan.sales} sold</span>
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                  plan.status === "Active" ? "status-active" : "bg-muted text-muted-foreground"
                }`}>
                  {plan.status}
                </span>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit className="h-3.5 w-3.5 mr-1" />
                  Edit
                </Button>
                <Button variant="ghost" size="sm" className="text-destructive">
                  <Trash2 className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
};

export default StorePlans;
