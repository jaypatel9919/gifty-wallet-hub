import AdminLayout from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Camera, Save } from "lucide-react";

const NetworkProfile = () => {
  return (
    <AdminLayout role="network-admin" title="Network Profile">
      <div className="max-w-4xl">
        {/* Banner & Logo */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden mb-6">
          <div className="h-40 gift-gradient relative">
            <button className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-background transition-colors">
              <Camera className="h-4 w-4" />
              Change Banner
            </button>
          </div>
          <div className="p-6 -mt-12 relative">
            <div className="flex items-end gap-6">
              <div className="w-24 h-24 rounded-xl bg-card border-4 border-card shadow-lg flex items-center justify-center relative">
                <span className="text-2xl font-bold text-foreground">SL</span>
                <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-lg">
                  <Camera className="h-4 w-4" />
                </button>
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">ShopLocal Network</h2>
                <p className="text-muted-foreground">25 participating stores</p>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Form */}
        <div className="bg-card border border-border rounded-2xl p-6 space-y-6">
          <h3 className="font-semibold text-foreground">Network Information</h3>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Network Name</Label>
              <Input id="name" defaultValue="ShopLocal Network" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Contact Email</Label>
              <Input id="email" type="email" defaultValue="admin@shoplocal.com" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea 
              id="description" 
              rows={4}
              defaultValue="ShopLocal Network connects you with the best local businesses in your community. Use your gift cards at any participating store and earn cashback on every purchase."
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="commission">Commission Rate (%)</Label>
              <Input id="commission" type="number" defaultValue="2.5" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cashback">Default Cashback (%)</Label>
              <Input id="cashback" type="number" defaultValue="5" />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button variant="accent">
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </Button>
            <Button variant="outline">Cancel</Button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default NetworkProfile;
