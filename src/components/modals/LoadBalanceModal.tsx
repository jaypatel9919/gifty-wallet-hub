import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X, CreditCard, Check, Wallet } from "lucide-react";

interface LoadBalanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  cardName?: string;
  storeName?: string;
}

const quickAmounts = [25, 50, 100, 200, 500];

const LoadBalanceModal = ({
  isOpen,
  onClose,
  cardName = "Gold Member",
  storeName = "Fashion Hub",
}: LoadBalanceModalProps) => {
  const [step, setStep] = useState<"amount" | "payment" | "success">("amount");
  const [amount, setAmount] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("card");

  const handleAmountSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (amount && parseFloat(amount) > 0) {
      setStep("payment");
    }
  };

  const handlePayment = () => {
    setStep("success");
  };

  const handleClose = () => {
    setStep("amount");
    setAmount("");
    setPaymentMethod("card");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative bg-card border border-border rounded-2xl shadow-xl w-full max-w-md mx-4 animate-scale-in">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
        >
          <X className="h-5 w-5" />
        </button>

        {step === "amount" && (
          <div className="p-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full teal-gradient mx-auto mb-4 flex items-center justify-center">
                <Wallet className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">Load Balance</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Add funds to {cardName} at {storeName}
              </p>
            </div>

            <form onSubmit={handleAmountSubmit} className="space-y-6">
              {/* Quick Amounts */}
              <div>
                <Label className="mb-3 block">Quick Select</Label>
                <div className="grid grid-cols-5 gap-2">
                  {quickAmounts.map((quickAmount) => (
                    <button
                      key={quickAmount}
                      type="button"
                      onClick={() => setAmount(quickAmount.toString())}
                      className={`py-2 px-3 rounded-lg border text-sm font-medium transition-colors ${
                        amount === quickAmount.toString()
                          ? "border-accent bg-accent/10 text-accent"
                          : "border-border hover:border-accent/50 text-foreground"
                      }`}
                    >
                      ${quickAmount}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Amount */}
              <div className="space-y-2">
                <Label htmlFor="amount">Custom Amount</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                  <Input
                    id="amount"
                    type="number"
                    min="1"
                    step="0.01"
                    placeholder="0.00"
                    className="pl-7 text-lg"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                  />
                </div>
              </div>

              <Button variant="accent" className="w-full" size="lg" type="submit">
                Continue to Payment
              </Button>
            </form>
          </div>
        )}

        {step === "payment" && (
          <div className="p-6">
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-accent/10 mx-auto mb-4 flex items-center justify-center">
                <CreditCard className="h-8 w-8 text-accent" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">Payment Method</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Loading <span className="font-semibold text-foreground">${parseFloat(amount).toFixed(2)}</span>
              </p>
            </div>

            <div className="space-y-4">
              {/* Payment Methods */}
              <div className="space-y-3">
                {[
                  { id: "card", label: "Credit/Debit Card", icon: CreditCard },
                  { id: "upi", label: "UPI", icon: Wallet },
                ].map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setPaymentMethod(method.id)}
                    className={`w-full flex items-center gap-3 p-4 rounded-xl border transition-colors ${
                      paymentMethod === method.id
                        ? "border-accent bg-accent/5"
                        : "border-border hover:border-accent/50"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      paymentMethod === method.id ? "bg-accent/10" : "bg-muted"
                    }`}>
                      <method.icon className={`h-5 w-5 ${
                        paymentMethod === method.id ? "text-accent" : "text-muted-foreground"
                      }`} />
                    </div>
                    <span className="font-medium text-foreground">{method.label}</span>
                    {paymentMethod === method.id && (
                      <Check className="h-5 w-5 text-accent ml-auto" />
                    )}
                  </button>
                ))}
              </div>

              {/* Card Form (simplified) */}
              {paymentMethod === "card" && (
                <div className="space-y-3 pt-2">
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry</Label>
                      <Input id="expiry" placeholder="MM/YY" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" type="password" />
                    </div>
                  </div>
                </div>
              )}

              {/* Summary */}
              <div className="bg-muted/50 rounded-lg p-4 mt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Amount</span>
                  <span className="text-foreground">${parseFloat(amount).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Service Fee</span>
                  <span className="text-foreground">$0.00</span>
                </div>
                <div className="border-t border-border pt-2 mt-2 flex justify-between font-semibold">
                  <span className="text-foreground">Total</span>
                  <span className="text-foreground">${parseFloat(amount).toFixed(2)}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="ghost" className="flex-1" onClick={() => setStep("amount")}>
                  Back
                </Button>
                <Button variant="accent" className="flex-1" onClick={handlePayment}>
                  Pay ${parseFloat(amount).toFixed(2)}
                </Button>
              </div>
            </div>
          </div>
        )}

        {step === "success" && (
          <div className="p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 mx-auto mb-4 flex items-center justify-center">
              <Check className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-2">Balance Added!</h2>
            <p className="text-muted-foreground mb-6">
              <span className="font-semibold text-foreground">${parseFloat(amount).toFixed(2)}</span> has been added to your {cardName} card.
            </p>
            <Button variant="accent" onClick={handleClose}>
              Done
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadBalanceModal;