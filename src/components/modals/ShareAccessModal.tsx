import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X, Share2, Clock, DollarSign } from "lucide-react";
import OTPModal from "./OTPModal";

interface ShareAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  cardName?: string;
}

const ShareAccessModal = ({ isOpen, onClose, cardName = "Gold Member" }: ShareAccessModalProps) => {
  const [showOTP, setShowOTP] = useState(false);
  const [formData, setFormData] = useState({
    recipientContact: "",
    expiry: "1day",
    spendingLimit: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowOTP(true);
  };

  const handleVerify = (otp: string) => {
    console.log("Share verified with OTP:", otp);
    setShowOTP(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />
        <div className="relative bg-card border border-border rounded-2xl shadow-xl w-full max-w-md mx-4 animate-scale-in">
          <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
            <X className="h-5 w-5" />
          </button>

          <div className="p-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-accent/10 mx-auto mb-4 flex items-center justify-center">
                <Share2 className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">Share Temporary Access</h2>
              <p className="text-sm text-muted-foreground mt-1">Grant limited access to {cardName}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="contact">Recipient Email or Phone</Label>
                <Input
                  id="contact"
                  placeholder="email@example.com or +1234567890"
                  value={formData.recipientContact}
                  onChange={(e) => setFormData({ ...formData, recipientContact: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Access Duration
                </Label>
                <Select value={formData.expiry} onValueChange={(v) => setFormData({ ...formData, expiry: v })}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1hour">1 Hour</SelectItem>
                    <SelectItem value="1day">1 Day</SelectItem>
                    <SelectItem value="1week">1 Week</SelectItem>
                    <SelectItem value="custom">Custom</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="limit" className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Spending Limit (optional)
                </Label>
                <Input
                  id="limit"
                  type="number"
                  placeholder="No limit"
                  value={formData.spendingLimit}
                  onChange={(e) => setFormData({ ...formData, spendingLimit: e.target.value })}
                />
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm text-amber-800">
                <p>⚠️ OTP verification required to confirm share</p>
              </div>

              <Button variant="accent" className="w-full" size="lg" type="submit">
                Continue & Verify
              </Button>
            </form>
          </div>
        </div>
      </div>

      <OTPModal
        isOpen={showOTP}
        onClose={() => setShowOTP(false)}
        onVerify={handleVerify}
        title="Verify to Share"
        subtitle="Enter OTP to confirm sharing access"
      />
    </>
  );
};

export default ShareAccessModal;
