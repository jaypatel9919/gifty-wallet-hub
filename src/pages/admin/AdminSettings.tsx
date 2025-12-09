import AdminLayout from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Save, Shield, Bell, Database } from "lucide-react";

const AdminSettings = () => {
  return (
    <AdminLayout role="super-admin" title="Settings">
      <div className="max-w-3xl space-y-6">
        {/* Platform Settings */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <Database className="h-5 w-5 text-accent" />
            </div>
            <div>
              <h2 className="font-semibold text-foreground">Platform Settings</h2>
              <p className="text-sm text-muted-foreground">Configure global platform settings</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="platform-name">Platform Name</Label>
                <Input id="platform-name" defaultValue="GoToGifty" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="support-email">Support Email</Label>
                <Input id="support-email" type="email" defaultValue="support@gotogifty.com" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="default-commission">Default Commission (%)</Label>
                <Input id="default-commission" type="number" defaultValue="2.5" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="min-load">Minimum Load Amount</Label>
                <Input id="min-load" type="number" defaultValue="10" />
              </div>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl gift-gradient flex items-center justify-center">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="font-semibold text-foreground">Security</h2>
              <p className="text-sm text-muted-foreground">Manage security and verification settings</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-border">
              <div>
                <p className="font-medium text-foreground">Require OTP for all transactions</p>
                <p className="text-sm text-muted-foreground">Force OTP verification globally</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between py-3 border-b border-border">
              <div>
                <p className="font-medium text-foreground">Two-Factor Authentication for Admins</p>
                <p className="text-sm text-muted-foreground">Require 2FA for admin accounts</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium text-foreground">Session Timeout</p>
                <p className="text-sm text-muted-foreground">Auto logout after inactivity</p>
              </div>
              <Input type="number" defaultValue="30" className="w-20" />
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
              <Bell className="h-5 w-5 text-foreground" />
            </div>
            <div>
              <h2 className="font-semibold text-foreground">Notifications</h2>
              <p className="text-sm text-muted-foreground">Configure system notifications</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-border">
              <div>
                <p className="font-medium text-foreground">High-value transaction alerts</p>
                <p className="text-sm text-muted-foreground">Notify on transactions over $500</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium text-foreground">Daily summary emails</p>
                <p className="text-sm text-muted-foreground">Send daily activity reports</p>
              </div>
              <Switch />
            </div>
          </div>
        </div>

        <Button variant="accent" size="lg">
          <Save className="h-4 w-4 mr-2" />
          Save All Changes
        </Button>
      </div>
    </AdminLayout>
  );
};

export default AdminSettings;
