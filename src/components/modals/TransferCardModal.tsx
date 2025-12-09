import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, ArrowRightLeft, AlertTriangle } from "lucide-react";
import OTPModal from "./OTPModal";

interface TransferCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  cardName?: string;
  balance?: string;
}

const TransferCardModal = ({ isOpen, onClose, cardName = "Gold Member", balance = "$250.00" }: TransferCardModalProps) => {
  const [showOTP, setShowOTP] = useState(false);
  const [recipientEmail, setRecipientEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowOTP(true);
  };

  const handleVerify = (otp: string) => {
    console.log("Transfer verified with OTP:", otp);
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
              <div className="w-16 h-16 rounded-full bg-destructive/10 mx-auto mb-4 flex items-center justify-center">
                <ArrowRightLeft className="h-8 w-8 text-destructive" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">Transfer Card</h2>
              <p className="text-sm text-muted-foreground mt-1">Permanently transfer {cardName}</p>
            </div>

            <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-4 mb-6">
              <div className="flex gap-3">
                <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-destructive mb-1">This action cannot be undone</p>
                  <p className="text-muted-foreground">
                    The full balance of <span className="font-semibold text-foreground">{balance}</span> and all ownership rights will be transferred permanently.
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="transferEmail">New Owner Email</Label>
                <Input
                  id="transferEmail"
                  type="email"
                  placeholder="email@example.com"
                  value={recipientEmail}
                  onChange={(e) => setRecipientEmail(e.target.value)}
                  required
                />
                <p className="text-xs text-muted-foreground">Must be an existing GoToGifty user</p>
              </div>

              <Button variant="destructive" className="w-full" size="lg" type="submit">
                Transfer Card Permanently
              </Button>
              <Button variant="ghost" className="w-full" onClick={onClose}>
                Cancel
              </Button>
            </form>
          </div>
        </div>
      </div>

      <OTPModal
        isOpen={showOTP}
        onClose={() => setShowOTP(false)}
        onVerify={handleVerify}
        title="Confirm Transfer"
        subtitle="Enter OTP to permanently transfer this card"
      />
    </>
  );
};

export default TransferCardModal;
