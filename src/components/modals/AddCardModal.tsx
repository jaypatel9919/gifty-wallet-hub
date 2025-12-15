import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, CreditCard, Check, Gift } from "lucide-react";

interface AddCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  storeName?: string;
  plans?: Array<{
    id: string;
    name: string;
    price: string;
    perks: string[];
  }>;
}

const defaultPlans = [
  {
    id: "1",
    name: "Basic Card",
    price: "$25",
    perks: ["5% Cashback on purchases", "Birthday bonus"],
  },
  {
    id: "2",
    name: "Gold Member",
    price: "$50",
    perks: ["10% Cashback on purchases", "Early access to sales", "Free gift wrapping"],
  },
  {
    id: "3",
    name: "Platinum Elite",
    price: "$100",
    perks: ["15% Cashback", "Priority support", "Exclusive offers", "VIP events access"],
  },
];

const AddCardModal = ({
  isOpen,
  onClose,
  storeName = "Fashion Hub",
  plans = defaultPlans,
}: AddCardModalProps) => {
  const [step, setStep] = useState<"select" | "confirm" | "success">("select");
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const selectedPlanData = plans.find((p) => p.id === selectedPlan);

  const handleConfirm = () => {
    setStep("success");
  };

  const handleClose = () => {
    setStep("select");
    setSelectedPlan(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative bg-card border border-border rounded-2xl shadow-xl w-full max-w-lg mx-4 animate-scale-in max-h-[90vh] overflow-y-auto">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground z-10"
        >
          <X className="h-5 w-5" />
        </button>

        {step === "select" && (
          <div className="p-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full gift-gradient mx-auto mb-4 flex items-center justify-center">
                <CreditCard className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">Get a Card</h2>
              <p className="text-sm text-muted-foreground mt-1">Choose a plan from {storeName}</p>
            </div>

            <div className="space-y-4">
              {plans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    selectedPlan === plan.id
                      ? "border-accent bg-accent/5 ring-2 ring-accent/20"
                      : "border-border hover:border-accent/50"
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-foreground">{plan.name}</h4>
                      <p className="text-lg font-bold text-accent">{plan.price}</p>
                    </div>
                    {selectedPlan === plan.id && (
                      <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </div>
                  <ul className="space-y-1">
                    {plan.perks.map((perk, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <Gift className="h-3 w-3 text-accent flex-shrink-0" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                </button>
              ))}
            </div>

            <Button
              variant="accent"
              className="w-full mt-6"
              size="lg"
              disabled={!selectedPlan}
              onClick={() => setStep("confirm")}
            >
              Continue
            </Button>
          </div>
        )}

        {step === "confirm" && selectedPlanData && (
          <div className="p-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-accent/10 mx-auto mb-4 flex items-center justify-center">
                <Check className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">Confirm Purchase</h2>
              <p className="text-sm text-muted-foreground mt-1">Review your card selection</p>
            </div>

            {/* Card Preview */}
            <div className="gift-card w-full h-40 p-5 flex flex-col justify-between mb-6">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <p className="text-white/80 text-sm">{storeName}</p>
                <h3 className="text-white font-bold text-lg">{selectedPlanData.name}</h3>
              </div>
              <div className="relative z-10 flex justify-between items-end">
                <div>
                  <p className="text-white/60 text-xs">Balance</p>
                  <p className="text-white font-bold text-xl">{selectedPlanData.price}</p>
                </div>
                <p className="text-white/60 text-sm font-mono">•••• NEW</p>
              </div>
            </div>

            {/* Summary */}
            <div className="bg-muted/50 rounded-xl p-4 mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Plan</span>
                <span className="text-foreground font-medium">{selectedPlanData.name}</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Store</span>
                <span className="text-foreground">{storeName}</span>
              </div>
              <div className="border-t border-border pt-2 mt-2 flex justify-between font-semibold">
                <span className="text-foreground">Total</span>
                <span className="text-accent">{selectedPlanData.price}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="ghost" className="flex-1" onClick={() => setStep("select")}>
                Back
              </Button>
              <Button variant="accent" className="flex-1" onClick={handleConfirm}>
                Purchase Card
              </Button>
            </div>
          </div>
        )}

        {step === "success" && selectedPlanData && (
          <div className="p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 mx-auto mb-4 flex items-center justify-center">
              <Check className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-2">Card Added!</h2>
            <p className="text-muted-foreground mb-6">
              Your <span className="font-semibold text-foreground">{selectedPlanData.name}</span> card
              from {storeName} is now in your wallet.
            </p>
            <div className="flex gap-3 justify-center">
              <Button variant="outline" onClick={handleClose}>
                Done
              </Button>
              <Button variant="accent" onClick={handleClose}>
                View Card
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddCardModal;