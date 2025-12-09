import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { X, Gift, Check } from "lucide-react";

interface GiftCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  cardName?: string;
  storeName?: string;
}

const GiftCardModal = ({ isOpen, onClose, cardName = "Gold Member", storeName = "Fashion Hub" }: GiftCardModalProps) => {
  const [step, setStep] = useState<"form" | "success">("form");
  const [formData, setFormData] = useState({
    recipientName: "",
    recipientEmail: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("success");
  };

  const handleClose = () => {
    setStep("form");
    setFormData({ recipientName: "", recipientEmail: "", message: "" });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative bg-card border border-border rounded-2xl shadow-xl w-full max-w-md mx-4 animate-scale-in">
        <button onClick={handleClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
          <X className="h-5 w-5" />
        </button>

        {step === "form" ? (
          <div className="p-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full gift-gradient mx-auto mb-4 flex items-center justify-center">
                <Gift className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">Gift a Card</h2>
              <p className="text-sm text-muted-foreground mt-1">Send {cardName} from {storeName}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="recipientName">Recipient Name</Label>
                <Input
                  id="recipientName"
                  placeholder="Enter recipient's name"
                  value={formData.recipientName}
                  onChange={(e) => setFormData({ ...formData, recipientName: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="recipientEmail">Email or Phone</Label>
                <Input
                  id="recipientEmail"
                  placeholder="email@example.com or +1234567890"
                  value={formData.recipientEmail}
                  onChange={(e) => setFormData({ ...formData, recipientEmail: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Personal Message (optional)</Label>
                <Textarea
                  id="message"
                  placeholder="Add a personal note..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={3}
                />
              </div>
              <div className="bg-muted/50 rounded-lg p-3 text-sm">
                <p className="text-muted-foreground">Recipient will receive an invitation to claim this gift card.</p>
              </div>
              <Button variant="gift" className="w-full" size="lg" type="submit">
                Send Gift Invitation
              </Button>
            </form>
          </div>
        ) : (
          <div className="p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 mx-auto mb-4 flex items-center justify-center">
              <Check className="h-8 w-8 text-emerald-600" />
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-2">Gift Sent!</h2>
            <p className="text-muted-foreground mb-6">
              We've sent an invitation to {formData.recipientEmail}. They'll receive instructions to claim their gift.
            </p>
            <Button variant="accent" onClick={handleClose}>Done</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GiftCardModal;
