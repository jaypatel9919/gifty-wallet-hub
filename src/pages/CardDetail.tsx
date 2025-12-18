import PublicLayout from "@/components/layout/PublicLayout";
import EnhancedGiftCard from "@/components/cards/EnhancedGiftCard";
import WalletPassPreview from "@/components/cards/WalletPassPreview";
import MilestoneProgress, { Milestone } from "@/components/MilestoneProgress";
import AffiliateInfo from "@/components/AffiliateInfo";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useParams, Link } from "react-router-dom";
import { QrCode, Share2, ArrowRightLeft, Gift, Wallet, Shield, ChevronLeft, Lock, Plus, Crown, Users, Sparkles, Clock, CheckCircle2, AlertCircle } from "lucide-react";
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
  ownership: "primary" as "primary" | "shared" | "gifted",
  isNetwork: true,
  networkId: "1",
  networkName: "ShopLocal Network",
  networkLogo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop",
  storeId: "1",
  storeLogo: "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=100&h=100&fit=crop",
  storeLocation: "Manhattan, NYC",
  // Shared card info (if applicable)
  sharedBy: undefined as string | undefined,
  sharedExpiresAt: undefined as string | undefined,
  giftedBy: undefined as string | undefined,
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
  const [showWalletModal, setShowWalletModal] = useState(false);
  const [activeTab, setActiveTab] = useState<"transactions" | "milestones" | "perks" | "security">("transactions");

  const getOwnershipBanner = () => {
    switch (cardData.ownership) {
      case "shared":
        return (
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                <Users className="h-5 w-5 text-blue-500" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">Shared Access Card</p>
                <p className="text-sm text-muted-foreground">
                  Shared by {cardData.sharedBy} • Expires {cardData.sharedExpiresAt}
                </p>
              </div>
              <Clock className="h-5 w-5 text-blue-500" />
            </div>
          </div>
        );
      case "gifted":
        return (
          <div className="bg-gift-pink/10 border border-gift-pink/30 rounded-2xl p-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gift-pink/20 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-gift-pink" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">Received as Gift</p>
                <p className="text-sm text-muted-foreground">
                  From {cardData.giftedBy} • You now own this card
                </p>
              </div>
              <Gift className="h-5 w-5 text-gift-pink" />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <PublicLayout isLoggedIn={true}>
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
        <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-12">
          {/* Back Link */}
          <Link to="/dashboard" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
            <ChevronLeft className="h-4 w-4" />
            Back to Wallet
          </Link>

          {/* Ownership Banner */}
          {getOwnershipBanner()}

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Card Preview */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Enhanced Card */}
                <div className="flex justify-center">
                  <EnhancedGiftCard
                    storeName={cardData.storeName}
                    planName={cardData.planName}
                    balance={cardData.balance}
                    cardNumber={cardData.cardNumber}
                    storeLogo={cardData.storeLogo}
                    networkName={cardData.networkName}
                    ownership={cardData.ownership}
                    sharedBy={cardData.sharedBy}
                    giftedBy={cardData.giftedBy}
                    expiresAt={cardData.sharedExpiresAt}
                    size="lg"
                  />
                </div>

                {/* QR Code */}
                <div className="bg-card border border-border rounded-2xl p-6 text-center">
                  <div className="w-40 h-40 mx-auto bg-white rounded-xl p-3 mb-4 shadow-lg">
                    <div className="w-full h-full bg-gradient-to-br from-zinc-100 to-zinc-200 rounded-lg flex items-center justify-center">
                      <QrCode className="h-20 w-20 text-zinc-800" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Scan to redeem at store</p>
                  <Button variant="accent" onClick={() => setShowQR(true)} className="w-full">
                    <QrCode className="h-4 w-4 mr-2" />
                    Show Full QR
                  </Button>
                </div>

                {/* Wallet Passes */}
                <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-5">
                  <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <Wallet className="h-5 w-5" />
                    Digital Wallet
                  </h3>
                  <p className="text-zinc-400 text-sm mb-4">Add to your phone for quick access</p>
                  <div className="grid grid-cols-2 gap-3">
                    <Button 
                      variant="outline" 
                      className="h-auto py-3 flex-col gap-1.5 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white"
                      onClick={() => setShowWalletModal(true)}
                    >
                      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                      </svg>
                      <span className="text-xs">Apple</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      className="h-auto py-3 flex-col gap-1.5 bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white"
                      onClick={() => setShowWalletModal(true)}
                    >
                      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3H5C3.9 3 3 3.9 3 5ZM12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12ZM12 14C14.76 14 20 15.36 20 18V19H4V18C4 15.36 9.24 14 12 14Z"/>
                      </svg>
                      <span className="text-xs">Google</span>
                    </Button>
                  </div>
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
              </div>
            </div>

            {/* Card Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h1 className="text-2xl lg:text-3xl font-bold text-foreground">{cardData.planName}</h1>
                      {cardData.ownership === "primary" && (
                        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-amber-500/10 rounded-full">
                          <Crown className="h-4 w-4 text-amber-500" />
                          <span className="text-xs font-semibold text-amber-600">Owner</span>
                        </div>
                      )}
                      <span className="status-active px-3 py-1 rounded-full text-sm font-medium">
                        {cardData.status}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{cardData.storeName}</p>
                    {cardData.isNetwork && (
                      <p className="text-sm text-accent mt-1">Part of {cardData.networkName}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Current Balance</p>
                    <p className="text-3xl font-bold text-foreground">{cardData.balance}</p>
                  </div>
                </div>

                {/* Card Info Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-muted/50 rounded-xl p-4">
                    <p className="text-xs text-muted-foreground mb-1">Card Number</p>
                    <p className="font-mono font-medium text-foreground text-sm">{cardData.fullNumber}</p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <p className="text-xs text-muted-foreground mb-1">Security</p>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-accent" />
                      <span className="font-medium text-foreground text-sm">{cardData.securityLevel}</span>
                    </div>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <p className="text-xs text-muted-foreground mb-1">Issued</p>
                    <p className="font-medium text-foreground text-sm">{cardData.issuedAt}</p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <p className="text-xs text-muted-foreground mb-1">Expires</p>
                    <p className="font-medium text-foreground text-sm">{cardData.expiresAt}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <Button variant="accent" size="lg" onClick={() => setShowLoad(true)}>
                  <Plus className="h-5 w-5 mr-2" />
                  Load Balance
                </Button>
                <Button variant="gift" size="lg" onClick={() => setShowGift(true)}>
                  <Gift className="h-5 w-5 mr-2" />
                  Gift This Card
                </Button>
                {cardData.ownership === "primary" && (
                  <>
                    <Button variant="outline" size="lg" onClick={() => setShowShare(true)}>
                      <Share2 className="h-5 w-5 mr-2" />
                      Share Access
                    </Button>
                    <Button variant="outline" size="lg" onClick={() => setShowTransfer(true)}>
                      <ArrowRightLeft className="h-5 w-5 mr-2" />
                      Transfer Card
                    </Button>
                  </>
                )}
              </div>

              {/* Tabs */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="border-b border-border px-6">
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
                        className={`py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
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
                <div className="p-6">
                  {activeTab === "transactions" && (
                    <div className="space-y-3">
                      {cardData.transactions.map((tx) => (
                        <div key={tx.id} className="flex items-center justify-between p-4 bg-muted/30 hover:bg-muted/50 rounded-xl transition-colors">
                          <div className="flex items-center gap-4">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                              tx.type === "load" ? "bg-emerald-100 dark:bg-emerald-900/30" : "bg-red-100 dark:bg-red-900/30"
                            }`}>
                              {tx.type === "load" ? (
                                <Plus className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                              ) : (
                                <Gift className="h-5 w-5 text-red-600 dark:text-red-400" />
                              )}
                            </div>
                            <div>
                              <p className="font-medium text-foreground">{tx.label}</p>
                              <p className="text-sm text-muted-foreground">{tx.date}</p>
                            </div>
                          </div>
                          <span className={`font-semibold ${tx.type === "load" ? "text-emerald-600 dark:text-emerald-400" : "text-foreground"}`}>
                            {tx.amount}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === "milestones" && (
                    <div className="space-y-4">
                      {/* Active Milestones */}
                      <div className="mb-6">
                        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          In Progress
                        </h3>
                        <div className="space-y-4">
                          {milestones.filter(m => !m.isCompleted).map((milestone) => (
                            <MilestoneProgress key={milestone.id} milestone={milestone} />
                          ))}
                        </div>
                      </div>
                      
                      {/* Completed Milestones */}
                      <div>
                        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                          Completed
                        </h3>
                        <div className="space-y-4">
                          {milestones.filter(m => m.isCompleted).map((milestone) => (
                            <MilestoneProgress key={milestone.id} milestone={milestone} />
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "perks" && (
                    <div>
                      <h3 className="font-semibold text-foreground mb-4">Card Perks & Benefits</h3>
                      <ul className="space-y-3">
                        {cardData.perks.map((perk, index) => (
                          <li key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-xl">
                            <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <CheckCircle2 className="h-4 w-4 text-accent" />
                            </div>
                            <span className="text-foreground">{perk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {activeTab === "security" && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                            <Lock className="h-5 w-5 text-accent" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">OTP for Redemptions</p>
                            <p className="text-sm text-muted-foreground">Require OTP for all transactions</p>
                          </div>
                        </div>
                        <Button variant="accent" size="sm">
                          Enabled
                        </Button>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                            <Shield className="h-5 w-5 text-muted-foreground" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">Spending Limit</p>
                            <p className="text-sm text-muted-foreground">Set maximum per transaction</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">Configure</Button>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                            <AlertCircle className="h-5 w-5 text-red-500" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">Block Card</p>
                            <p className="text-sm text-muted-foreground">Temporarily disable this card</p>
                          </div>
                        </div>
                        <Button variant="destructive" size="sm">Block</Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* QR Modal */}
      {showQR && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-zinc-900" onClick={() => setShowQR(false)}>
          <div className="text-center">
            <div className="w-72 h-72 bg-white p-6 rounded-3xl shadow-2xl mb-6">
              <div className="w-full h-full bg-gradient-to-br from-zinc-100 to-zinc-200 rounded-2xl flex items-center justify-center">
                <QrCode className="h-40 w-40 text-zinc-800" />
              </div>
            </div>
            <p className="text-foreground font-medium text-lg mb-2">{cardData.fullNumber}</p>
            <p className="text-muted-foreground text-sm">Tap anywhere to close</p>
          </div>
        </div>
      )}

      {/* Wallet Pass Modal */}
      <Dialog open={showWalletModal} onOpenChange={setShowWalletModal}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Add to Digital Wallet</DialogTitle>
          </DialogHeader>
          <div className="grid sm:grid-cols-2 gap-6 py-6">
            <div className="space-y-4">
              <h4 className="font-medium text-foreground">Apple Wallet Preview</h4>
              <WalletPassPreview
                type="apple"
                storeName={cardData.storeName}
                planName={cardData.planName}
                balance={cardData.balance}
                cardNumber={cardData.fullNumber}
                storeLogo={cardData.storeLogo}
              />
              <Button className="w-full bg-black text-white hover:bg-zinc-800">
                Add to Apple Wallet
              </Button>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium text-foreground">Google Wallet Preview</h4>
              <WalletPassPreview
                type="google"
                storeName={cardData.storeName}
                planName={cardData.planName}
                balance={cardData.balance}
                cardNumber={cardData.fullNumber}
                storeLogo={cardData.storeLogo}
              />
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                Add to Google Wallet
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Modals */}
      <GiftCardModal isOpen={showGift} onClose={() => setShowGift(false)} cardName={cardData.planName} storeName={cardData.storeName} />
      <ShareAccessModal isOpen={showShare} onClose={() => setShowShare(false)} cardName={cardData.planName} />
      <TransferCardModal isOpen={showTransfer} onClose={() => setShowTransfer(false)} cardName={cardData.planName} balance={cardData.balance} />
      <LoadBalanceModal isOpen={showLoad} onClose={() => setShowLoad(false)} cardName={cardData.planName} storeName={cardData.storeName} />
    </PublicLayout>
  );
};

export default CardDetail;
