import PublicLayout from "@/components/layout/PublicLayout";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Bell, Mail, Phone, MessageSquare, Shield, Moon, Sun, Smartphone } from "lucide-react";
import { useState } from "react";

const Settings = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: true,
    whatsapp: false,
    push: true,
  });

  const [security, setSecurity] = useState({
    otpRequired: true,
    loginAlerts: true,
  });

  return (
    <PublicLayout isLoggedIn={true}>
      <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-12 max-w-3xl">
        <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">Settings</h1>

        <div className="space-y-6">
          {/* Notification Preferences */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Bell className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h2 className="font-semibold text-foreground">Notification Preferences</h2>
                <p className="text-sm text-muted-foreground">Choose how you want to be notified</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-border">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-foreground">Email Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive updates via email</p>
                  </div>
                </div>
                <Switch
                  checked={notifications.email}
                  onCheckedChange={(checked) =>
                    setNotifications({ ...notifications, email: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between py-3 border-b border-border">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-foreground">SMS Notifications</p>
                    <p className="text-sm text-muted-foreground">Get text message alerts</p>
                  </div>
                </div>
                <Switch
                  checked={notifications.sms}
                  onCheckedChange={(checked) =>
                    setNotifications({ ...notifications, sms: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between py-3 border-b border-border">
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-foreground">WhatsApp Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive updates on WhatsApp</p>
                  </div>
                </div>
                <Switch
                  checked={notifications.whatsapp}
                  onCheckedChange={(checked) =>
                    setNotifications({ ...notifications, whatsapp: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <Smartphone className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-foreground">Push Notifications</p>
                    <p className="text-sm text-muted-foreground">Browser push notifications</p>
                  </div>
                </div>
                <Switch
                  checked={notifications.push}
                  onCheckedChange={(checked) =>
                    setNotifications({ ...notifications, push: checked })
                  }
                />
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
                <p className="text-sm text-muted-foreground">Manage your account security</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-border">
                <div>
                  <p className="font-medium text-foreground">Require OTP for Redemptions</p>
                  <p className="text-sm text-muted-foreground">
                    Extra security for all transactions
                  </p>
                </div>
                <Switch
                  checked={security.otpRequired}
                  onCheckedChange={(checked) =>
                    setSecurity({ ...security, otpRequired: checked })
                  }
                />
              </div>

              <div className="flex items-center justify-between py-3">
                <div>
                  <p className="font-medium text-foreground">Login Alerts</p>
                  <p className="text-sm text-muted-foreground">
                    Get notified of new login attempts
                  </p>
                </div>
                <Switch
                  checked={security.loginAlerts}
                  onCheckedChange={(checked) =>
                    setSecurity({ ...security, loginAlerts: checked })
                  }
                />
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <Button variant="outline">Change Password</Button>
            </div>
          </div>

          {/* Appearance */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                <Sun className="h-5 w-5 text-foreground" />
              </div>
              <div>
                <h2 className="font-semibold text-foreground">Appearance</h2>
                <p className="text-sm text-muted-foreground">Customize your experience</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" className="flex-1 justify-center gap-2">
                <Sun className="h-4 w-4" />
                Light
              </Button>
              <Button variant="outline" className="flex-1 justify-center gap-2">
                <Moon className="h-4 w-4" />
                Dark
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default Settings;
