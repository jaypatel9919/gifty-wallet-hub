import AdminLayout from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Camera, Save, MapPin, Phone, Globe, Clock } from "lucide-react";

const StoreProfile = () => {
  return (
    <AdminLayout role="store-admin" title="Store Profile">
      <div className="max-w-4xl">
        {/* Banner & Logo */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden mb-6">
          <div className="h-40 bg-gradient-to-r from-gray-200 to-gray-300 relative">
            <button className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-background transition-colors">
              <Camera className="h-4 w-4" />
              Change Banner
            </button>
          </div>
          <div className="p-6 -mt-12 relative">
            <div className="flex items-end gap-6">
              <div className="w-24 h-24 rounded-xl bg-card border-4 border-card shadow-lg flex items-center justify-center relative">
                <span className="text-2xl font-bold text-foreground">FH</span>
                <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-lg">
                  <Camera className="h-4 w-4" />
                </button>
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground">Fashion Hub</h2>
                <p className="text-muted-foreground">Part of ShopLocal Network</p>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Form */}
        <div className="bg-card border border-border rounded-2xl p-6 space-y-6">
          <h3 className="font-semibold text-foreground">Store Information</h3>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Store Name</Label>
              <Input id="name" defaultValue="Fashion Hub" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Input id="category" defaultValue="Fashion" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea 
              id="description" 
              rows={4}
              defaultValue="Fashion Hub is your premier destination for contemporary fashion. We offer curated collections from top designers and emerging brands."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">
              <MapPin className="h-4 w-4 inline mr-1" />
              Address
            </Label>
            <Input id="address" defaultValue="123 Fashion Ave, Manhattan, NY 10001" />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">
                <Phone className="h-4 w-4 inline mr-1" />
                Phone
              </Label>
              <Input id="phone" defaultValue="+1 (555) 123-4567" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">
                <Globe className="h-4 w-4 inline mr-1" />
                Website
              </Label>
              <Input id="website" defaultValue="www.fashionhub.com" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="hours">
              <Clock className="h-4 w-4 inline mr-1" />
              Business Hours
            </Label>
            <Input id="hours" defaultValue="Mon-Sat: 10AM-9PM, Sun: 11AM-7PM" />
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

export default StoreProfile;
