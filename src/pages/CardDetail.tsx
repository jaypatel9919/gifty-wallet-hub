import PublicLayout from "@/components/layout/PublicLayout";
import GiftCardPreview from "@/components/cards/GiftCardPreview";
import { Button } from "@/components/ui/button";
import { useParams, Link } from "react-router-dom";
import { QrCode, Share2, ArrowRightLeft, Gift, Wallet, Shield, Clock, ChevronLeft, Lock, Unlock } from "lucide-react";
import { useState } from "react";
import OTPModal from "@/components/modals/OTPModal";

// Demo card data
const cardData = {
  id: "1",
  storeName: "Fashion Hub",
  planName: "Gold Member",
  balance: "$250.00",
  cardNumber: "•••• 4521",
  fullNumber: "GTGF-4521-8847-2233",
  securityLevel: "High",
  status: "Active",
  issuedAt: "Dec 1, 2024",
  expiresAt: "Dec 1, 2025",
  isNetwork: true,
  networkName: "ShopLocal Network",
  transactions: [
    { id: "1", type: "spend", label: "Fashion Hub - Manhattan", amount: "-$45.00", date: "Dec 8, 2024" },
    { id: "2", type: "load", label: "Balance Load", amount: "+$100.00", date: "Dec 5, 2024" },
    { id: "3", type: "spend", label: "Fashion Hub - Brooklyn", amount: "-$32.50", date: "Dec 3, 2024" },
    { id: "4", type: "load", label: "Initial Load", amount: "+$200.00", date: "Dec 1, 2024" },
  ],
  perks: [
    "5% cashback on all purchases",
    "Free gift wrapping at checkout",
    "Early access to new collections",
    "Valid at all ShopLocal Network stores",
  ],
};

const CardDetail = () => {
  const { id } = useParams();
  const [showQR, setShowQR] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [activeTab, setActiveTab] = useState<"transactions" | "perks" | "security">("transactions");

  return (
    <PublicLayout isLoggedIn={true}>
      <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-12">
        {/* Back Link */}
        <Link to="/dashboard" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6">
          <ChevronLeft className="h-4 w-4" />
          Back to Wallet
        </Link>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Card Preview */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Large Card */}
              <div className="flex justify-center">
                <GiftCardPreview
                  storeName={cardData.storeName}
                  planName={cardData.planName}
                  balance={cardData.balance}
                  cardNumber={cardData.cardNumber}
                  size="lg"
                />
              </div>

              {/* QR Code */}
              <div className="bg-card border border-border rounded-2xl p-6 text-center">
                <div className="w-40 h-40 mx-auto bg-white rounded-xl p-3 mb-4">
                  <div className="w-full h-full bg-muted rounded flex items-center justify-center">
                    <QrCode className="h-16 w-16 text-foreground" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-3">Scan to redeem at store</p>
                <Button variant="accent" onClick={() => setShowQR(true)} className="w-full">
                  <QrCode className="h-4 w-4 mr-2" />
                  Show Full QR
                </Button>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="h-auto py-3 flex-col gap-1">
                  <Wallet className="h-5 w-5" />
                  <span className="text-xs">Apple Wallet</span>
                </Button>
                <Button variant="outline" className="h-auto py-3 flex-col gap-1">
                  <Wallet className="h-5 w-5" />
                  <span className="text-xs">Google Wallet</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Card Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl lg:text-3xl font-bold text-foreground">{cardData.planName}</h1>
                <span className="status-active px-3 py-1 rounded-full text-sm font-medium">
                  {cardData.status}
                </span>
              </div>
              <p className="text-muted-foreground">{cardData.storeName}</p>
              {cardData.isNetwork && (
                <p className="text-sm text-accent mt-1">Part of {cardData.networkName}</p>
              )}
            </div>

            {/* Card Info Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-card border border-border rounded-xl p-4">
                <p className="text-sm text-muted-foreground mb-1">Card Number</p>
                <p className="font-mono font-medium text-foreground">{cardData.fullNumber}</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4">
                <p className="text-sm text-muted-foreground mb-1">Security Level</p>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-accent" />
                  <span className="font-medium text-foreground">{cardData.securityLevel}</span>
                </div>
              </div>
              <div className="bg-card border border-border rounded-xl p-4">
                <p className="text-sm text-muted-foreground mb-1">Issued</p>
                <p className="font-medium text-foreground">{cardData.issuedAt}</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4">
                <p className="text-sm text-muted-foreground mb-1">Expires</p>
                <p className="font-medium text-foreground">{cardData.expiresAt}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button variant="accent" onClick={() => setShowOTP(true)}>
                <Share2 className="h-4 w-4 mr-2" />
                Share Access
              </Button>
              <Button variant="outline" onClick={() => setShowOTP(true)}>
                <ArrowRightLeft className="h-4 w-4 mr-2" />
                Transfer Card
              </Button>
              <Button variant="outline">
                <Gift className="h-4 w-4 mr-2" />
                Gift Similar Card
              </Button>
            </div>

            {/* Tabs */}
            <div className="border-b border-border">
              <div className="flex gap-6">
                {[
                  { id: "transactions", label: "Transactions" },
                  { id: "perks", label: "Perks & Conditions" },
                  { id: "security", label: "Security & Settings" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as typeof activeTab)}
                    className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === tab.id
                        ? "border-accent text-accent"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div>
              {activeTab === "transactions" && (
                <div className="space-y-3">
                  {cardData.transactions.map((tx) => (
                    <div
                      key={tx.id}
                      className="flex items-center justify-between p-4 bg-card border border-border rounded-xl"
                    >
                      <div>
                        <p className="font-medium text-foreground">{tx.label}</p>
                        <p className="text-sm text-muted-foreground">{tx.date}</p>
                      </div>
                      <span
                        className={`font-semibold ${
                          tx.type === "load" ? "text-emerald-600" : "text-foreground"
                        }`}
                      >
                        {tx.amount}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "perks" && (
                <div className="bg-card border border-border rounded-xl p-6">
                  <h3 className="font-semibold text-foreground mb-4">Card Perks</h3>
                  <ul className="space-y-3">
                    {cardData.perks.map((perk, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-accent text-sm">✓</span>
                        </div>
                        <span className="text-muted-foreground">{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === "security" && (
                <div className="space-y-4">
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h3 className="font-semibold text-foreground mb-4">Security Settings</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-foreground">OTP for Redemptions</p>
                          <p className="text-sm text-muted-foreground">Require OTP for all transactions</p>
                        </div>
                        <Button variant="accent" size="sm">
                          <Lock className="h-4 w-4 mr-1" />
                          Enabled
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-foreground">Spending Limit</p>
                          <p className="text-sm text-muted-foreground">Set maximum per transaction</p>
                        </div>
                        <Button variant="outline" size="sm">Configure</Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-foreground">Block Card</p>
                          <p className="text-sm text-muted-foreground">Temporarily disable this card</p>
                        </div>
                        <Button variant="destructive" size="sm">Block</Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* QR Modal */}
      {showQR && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white" onClick={() => setShowQR(false)}>
          <div className="text-center">
            <div className="w-64 h-64 bg-white p-4 rounded-2xl shadow-2xl mb-4">
              <div className="w-full h-full bg-muted rounded-xl flex items-center justify-center">
                <QrCode className="h-32 w-32 text-foreground" />
              </div>
            </div>
            <p className="text-foreground font-medium">{cardData.fullNumber}</p>
            <p className="text-muted-foreground text-sm">Tap anywhere to close</p>
          </div>
        </div>
      )}

      {/* OTP Modal */}
      <OTPModal
        isOpen={showOTP}
        onClose={() => setShowOTP(false)}
        onVerify={(otp) => {
          console.log("OTP verified:", otp);
          setShowOTP(false);
        }}
        title="Verify Your Identity"
        subtitle="Enter the OTP sent to your phone to continue"
      />
    </PublicLayout>
  );
};

export default CardDetail;
