import PublicLayout from "@/components/layout/PublicLayout";
import GiftCardPreview from "@/components/cards/GiftCardPreview";
import MilestoneProgress, { Milestone } from "@/components/MilestoneProgress";
import AffiliateInfo from "@/components/AffiliateInfo";
import { Button } from "@/components/ui/button";
import { useParams, Link } from "react-router-dom";
import { QrCode, Share2, ArrowRightLeft, Gift, Wallet, Shield, ChevronLeft, Lock, Plus } from "lucide-react";
import { useState } from "react";
import GiftCardModal from "@/components/modals/GiftCardModal";
import ShareAccessModal from "@/components/modals/ShareAccessModal";
import TransferCardModal from "@/components/modals/TransferCardModal";
import LoadBalanceModal from "@/components/modals/LoadBalanceModal";

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
  networkId: "1",
  networkName: "ShopLocal Network",
  networkLogo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop",
  storeId: "1",
  storeLogo: "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=100&h=100&fit=crop",
  storeLocation: "Manhattan, NYC",
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

const milestones: Milestone[] = [
  { id: "1", title: "Monthly Spender", description: "Spend $100 this month to earn $5 free", type: "spend", target: 100, current: 67, period: "this month", reward: "+$5 FREE", rewardValue: 5, daysRemaining: 14, isCompleted: false },
  { id: "2", title: "Loyal Customer", description: "Spend $500 total to unlock Gold perks", type: "spend", target: 500, current: 277, period: "all time", reward: "Gold Status", rewardValue: 0, isCompleted: false },
  { id: "3", title: "First Month Bonus", description: "Completed! You earned $5", type: "spend", target: 50, current: 50, period: "first month", reward: "+$5 FREE", rewardValue: 5, isCompleted: true, completedAt: "Dec 5, 2024" },
];

const CardDetail = () => {
  const { id } = useParams();
  const [showQR, setShowQR] = useState(false);
  const [showGift, setShowGift] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [showTransfer, setShowTransfer] = useState(false);
  const [showLoad, setShowLoad] = useState(false);
  const [activeTab, setActiveTab] = useState<"transactions" | "milestones" | "perks" | "security">("transactions");

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

              {/* Affiliate Info */}
              <AffiliateInfo
                type="store"
                id={cardData.storeId}
                name={cardData.storeName}
                logo={cardData.storeLogo}
                location={cardData.storeLocation}
              />

              {cardData.isNetwork && (
                <AffiliateInfo
                  type="network"
                  id={cardData.networkId}
                  name={cardData.networkName}
                  logo={cardData.networkLogo}
                  storeCount={25}
                  perks={["5% cashback", "Cross-store redemption"]}
                />
              )}

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
              <Button variant="accent" onClick={() => setShowLoad(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Load Balance
              </Button>
              <Button variant="gift" onClick={() => setShowGift(true)}>
                <Gift className="h-4 w-4 mr-2" />
                Gift This Card
              </Button>
              <Button variant="outline" onClick={() => setShowShare(true)}>
                <Share2 className="h-4 w-4 mr-2" />
                Share Access
              </Button>
              <Button variant="outline" onClick={() => setShowTransfer(true)}>
                <ArrowRightLeft className="h-4 w-4 mr-2" />
                Transfer Card
              </Button>
            </div>

            {/* Tabs */}
            <div className="border-b border-border">
              <div className="flex gap-6 overflow-x-auto">
                {[
                  { id: "transactions", label: "Transactions" },
                  { id: "milestones", label: "Milestones" },
                  { id: "perks", label: "Perks & Conditions" },
                  { id: "security", label: "Security" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as typeof activeTab)}
                    className={`pb-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
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
                    <div key={tx.id} className="flex items-center justify-between p-4 bg-card border border-border rounded-xl">
                      <div>
                        <p className="font-medium text-foreground">{tx.label}</p>
                        <p className="text-sm text-muted-foreground">{tx.date}</p>
                      </div>
                      <span className={`font-semibold ${tx.type === "load" ? "text-emerald-600" : "text-foreground"}`}>
                        {tx.amount}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "milestones" && (
                <div className="space-y-4">
                  {milestones.map((milestone) => (
                    <MilestoneProgress key={milestone.id} milestone={milestone} />
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

      {/* Modals */}
      <GiftCardModal isOpen={showGift} onClose={() => setShowGift(false)} cardName={cardData.planName} storeName={cardData.storeName} />
      <ShareAccessModal isOpen={showShare} onClose={() => setShowShare(false)} cardName={cardData.planName} />
      <TransferCardModal isOpen={showTransfer} onClose={() => setShowTransfer(false)} cardName={cardData.planName} balance={cardData.balance} />
      <LoadBalanceModal isOpen={showLoad} onClose={() => setShowLoad(false)} cardName={cardData.planName} storeName={cardData.storeName} />
    </PublicLayout>
  );
};

export default CardDetail;
