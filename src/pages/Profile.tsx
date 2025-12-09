import PublicLayout from "@/components/layout/PublicLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Mail, Phone, MapPin, Shield, Camera } from "lucide-react";

const Profile = () => {
  return (
    <PublicLayout isLoggedIn={true}>
      <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-12">
        <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">My Profile</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-2xl p-6 text-center">
              <div className="relative inline-block mb-4">
                <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center">
                  <User className="h-10 w-10 text-muted-foreground" />
                </div>
                <button className="absolute bottom-0 right-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-lg">
                  <Camera className="h-4 w-4" />
                </button>
              </div>
              <h2 className="text-xl font-semibold text-foreground">John Doe</h2>
              <p className="text-muted-foreground">john.doe@example.com</p>
              <div className="mt-4 flex items-center justify-center gap-2 text-sm">
                <Shield className="h-4 w-4 text-accent" />
                <span className="text-accent">Verified Account</span>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 mt-6">
              <h3 className="font-semibold text-foreground mb-4">Account Stats</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Member Since</span>
                  <span className="text-foreground">Dec 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Cards</span>
                  <span className="text-foreground">5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Spent</span>
                  <span className="text-foreground">$1,250.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Perks Earned</span>
                  <span className="text-accent">$87.50</span>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Form */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-semibold text-foreground mb-6">Personal Information</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="firstName" defaultValue="John" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="email" type="email" defaultValue="john.doe@example.com" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="phone" defaultValue="+1 (555) 123-4567" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="country">Country</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input id="country" defaultValue="United States" className="pl-10" />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex gap-3">
                <Button variant="accent">Save Changes</Button>
                <Button variant="outline">Cancel</Button>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Phone Verification</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Verify your phone number to enable OTP-secured transactions
              </p>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <Input defaultValue="+1 (555) 123-4567" disabled />
                </div>
                <Button variant="accent">Verify Phone</Button>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Danger Zone</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Permanently delete your account and all associated data
              </p>
              <Button variant="destructive">Delete Account</Button>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default Profile;
