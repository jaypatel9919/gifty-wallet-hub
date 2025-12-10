import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import OTPModal from "@/components/modals/OTPModal";
import QRScanOverlay from "@/components/QRScanOverlay";
import { QrCode, Search, User, CreditCard, Clock, Shield, ArrowLeft, Check, X, Loader2 } from "lucide-react";

type CardData = {
  cardNumber: string;
  ownerName: string;
  balance: string;
  storeName: string;
  networkName: string;
  securityLevel: string;
  status: string;
  planName: string;
} | null;

const SmartTerminal = () => {
  const [cardLookup, setCardLookup] = useState("");
  const [activeTab, setActiveTab] = useState<"load" | "redeem" | "history">("load");
  const [amount, setAmount] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [showQRScanner, setShowQRScanner] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cardData, setCardData] = useState<CardData>(null);

  // Simulate card lookup
  const handleLookup = (lookupValue?: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setCardData({
        cardNumber: lookupValue || "GTGF-4521-8847-2233",
        ownerName: "John Doe",
        balance: "$250.00",
        storeName: "Fashion Hub",
        networkName: "ShopLocal Network",
        securityLevel: "High",
        status: "Active",
        planName: "Gold Member",
      });
      setIsLoading(false);
    }, 1000);
  };

  const handleQRScan = (code: string) => {
    setCardLookup(code);
    handleLookup(code);
  };

  const handleSendOTP = () => {
    setShowOTP(true);
  };

  const handleVerifyOTP = (otp: string) => {
    console.log("Verified OTP:", otp);
    setShowOTP(false);
    // Process transaction
  };

  const recentHistory = [
    { id: "1", type: "Load", amount: "+$50.00", time: "10:45 AM" },
    { id: "2", type: "Redeem", amount: "-$25.00", time: "10:30 AM" },
    { id: "3", type: "Load", amount: "+$100.00", time: "09:15 AM" },
    { id: "4", type: "Redeem", amount: "-$45.00", time: "Yesterday" },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="h-16 bg-primary text-primary-foreground flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <Link to="/store-admin">
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <img src={logo} alt="GoToGifty" className="h-8 brightness-0 invert" />
          <span className="text-lg font-semibold">Fashion Hub</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-sm">Terminal Ready</span>
        </div>
      </header>

      <div className="p-6 lg:p-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left: Card Lookup */}
          <div className="terminal-panel p-6">
            <h2 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-accent" />
              Card Lookup
            </h2>

            {/* Scan Button */}
            <button
              onClick={() => setShowQRScanner(true)}
              className="w-full py-8 border-2 border-dashed border-accent/50 rounded-xl mb-6 hover:bg-accent/5 transition-colors group"
            >
              <QrCode className="h-16 w-16 mx-auto mb-3 text-accent group-hover:scale-110 transition-transform" />
              <span className="text-lg font-medium text-foreground">Scan QR Code</span>
              <p className="text-sm text-muted-foreground mt-1">Click to activate camera</p>
            </button>

            {/* Manual Entry */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Card Number or Token"
                value={cardLookup}
                onChange={(e) => setCardLookup(e.target.value)}
                className="pl-12 h-14 text-lg"
              />
            </div>
            <Button
              variant="accent"
              className="w-full mt-4 h-12 text-lg"
              onClick={() => handleLookup()}
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                "Lookup Card"
              )}
            </Button>
          </div>

          {/* Middle: Card Summary */}
          <div className="terminal-panel p-6">
            <h2 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
              <User className="h-5 w-5 text-accent" />
              Card Summary
            </h2>

            {cardData ? (
              <>
                {/* Mini Card Preview */}
                <div className="gift-card p-4 mb-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-white/80 text-sm">{cardData.storeName}</p>
                      <p className="text-white font-bold">{cardData.planName}</p>
                    </div>
                    <span className="bg-white/20 px-2 py-1 rounded text-xs text-white">
                      {cardData.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-white/60 text-xs">Balance</p>
                      <p className="text-white font-bold text-2xl">{cardData.balance}</p>
                    </div>
                    <p className="text-white/60 font-mono text-sm">•••• 2233</p>
                  </div>
                </div>

                {/* Card Details */}
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Owner</span>
                    <span className="font-medium text-foreground">{cardData.ownerName}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Card Number</span>
                    <span className="font-mono text-foreground">{cardData.cardNumber}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Network</span>
                    <span className="text-accent">{cardData.networkName}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Security</span>
                    <span className="flex items-center gap-1 text-foreground">
                      <Shield className="h-4 w-4 text-accent" />
                      {cardData.securityLevel}
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                <CreditCard className="h-16 w-16 mx-auto mb-4 opacity-30" />
                <p>Scan or enter a card to view details</p>
              </div>
            )}
          </div>

          {/* Right: Actions */}
          <div className="terminal-panel p-6">
            {/* Tabs */}
            <div className="flex gap-2 mb-6">
              {[
                { id: "load", label: "Load Balance" },
                { id: "redeem", label: "Redeem" },
                { id: "history", label: "History" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {activeTab === "load" && (
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Amount</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-muted-foreground">$</span>
                    <Input
                      type="number"
                      placeholder="0.00"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="pl-10 h-16 text-3xl font-bold"
                    />
                  </div>
                </div>
                <Input placeholder="Reference/Comment (optional)" />
                <Button
                  variant="accent"
                  className="w-full h-14 text-lg"
                  disabled={!cardData || !amount}
                  onClick={handleSendOTP}
                >
                  Send OTP to Customer
                </Button>
              </div>
            )}

            {activeTab === "redeem" && (
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Amount to Redeem</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-muted-foreground">$</span>
                    <Input
                      type="number"
                      placeholder="0.00"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="pl-10 h-16 text-3xl font-bold"
                    />
                  </div>
                </div>
                {cardData && parseFloat(amount) > parseFloat(cardData.balance.replace("$", "")) && (
                  <p className="text-destructive text-sm flex items-center gap-1">
                    <X className="h-4 w-4" />
                    Insufficient balance
                  </p>
                )}
                <Button
                  variant="gift"
                  className="w-full h-14 text-lg"
                  disabled={!cardData || !amount}
                  onClick={handleSendOTP}
                >
                  Send OTP to Customer
                </Button>
              </div>
            )}

            {activeTab === "history" && (
              <div className="space-y-3">
                {recentHistory.map((tx) => (
                  <div key={tx.id} className="flex items-center justify-between py-3 border-b border-border last:border-0">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        tx.type === "Load" ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400" : "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                      }`}>
                        {tx.type === "Load" ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{tx.type}</p>
                        <p className="text-xs text-muted-foreground">{tx.time}</p>
                      </div>
                    </div>
                    <span className={`font-semibold ${tx.type === "Load" ? "text-emerald-600 dark:text-emerald-400" : "text-foreground"}`}>
                      {tx.amount}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* OTP Modal */}
      <OTPModal
        isOpen={showOTP}
        onClose={() => setShowOTP(false)}
        onVerify={handleVerifyOTP}
        title="Customer Verification"
        subtitle="Ask customer to enter their OTP"
      />

      {/* QR Scanner Overlay */}
      <QRScanOverlay
        isOpen={showQRScanner}
        onClose={() => setShowQRScanner(false)}
        onScan={handleQRScan}
      />
    </div>
  );
};

export default SmartTerminal;
