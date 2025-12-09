import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Gift, CreditCard, Store, User } from "lucide-react";

const ClaimInvitation = () => {
  // Mock invitation data
  const invitation = {
    senderName: "Sarah Johnson",
    cardPlan: "Gold Member",
    storeName: "Fashion Hub",
    networkName: "ShopLocal Network",
    value: "$50.00",
    message: "Happy Birthday! Enjoy this gift card 🎉",
    expiresAt: "Dec 15, 2024",
  };

  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <img src={logo} alt="GoToGifty" className="h-10 mx-auto" />
        </div>

        {/* Invitation Card */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-xl">
          {/* Header */}
          <div className="gift-gradient p-6 text-center text-white">
            <Gift className="h-12 w-12 mx-auto mb-3 opacity-90" />
            <h1 className="text-2xl font-bold">You've Received a Gift!</h1>
            <p className="text-white/80 mt-1">From {invitation.senderName}</p>
          </div>

          {/* Card Preview (Blurred) */}
          <div className="p-6">
            <div className="relative mb-6">
              <div className="gift-card p-4 blur-[2px]">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <p className="text-white/80 text-sm">{invitation.storeName}</p>
                    <p className="text-white font-bold">{invitation.cardPlan}</p>
                  </div>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-white/60 text-xs">Value</p>
                    <p className="text-white font-bold text-xl">{invitation.value}</p>
                  </div>
                  <p className="text-white/60 font-mono text-sm">•••• ••••</p>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-background/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-foreground">
                  Claim to reveal
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm">
                <Store className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Store:</span>
                <span className="font-medium text-foreground">{invitation.storeName}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <CreditCard className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Plan:</span>
                <span className="font-medium text-foreground">{invitation.cardPlan}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">From:</span>
                <span className="font-medium text-foreground">{invitation.senderName}</span>
              </div>
            </div>

            {/* Message */}
            {invitation.message && (
              <div className="bg-muted/50 rounded-lg p-4 mb-6">
                <p className="text-sm text-muted-foreground italic">"{invitation.message}"</p>
              </div>
            )}

            {/* Expiry Notice */}
            <p className="text-xs text-center text-muted-foreground mb-6">
              This invitation expires on {invitation.expiresAt}
            </p>

            {/* Actions */}
            <div className="space-y-3">
              <Link to="/signup" className="block">
                <Button variant="accent" className="w-full" size="lg">
                  Sign Up & Claim Gift
                </Button>
              </Link>
              <Link to="/login" className="block">
                <Button variant="outline" className="w-full" size="lg">
                  Login to Claim
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-muted-foreground mt-6">
          By claiming, you agree to our{" "}
          <Link to="/terms" className="text-accent hover:underline">Terms</Link>
          {" "}and{" "}
          <Link to="/privacy" className="text-accent hover:underline">Privacy Policy</Link>
        </p>
      </div>
    </div>
  );
};

export default ClaimInvitation;
