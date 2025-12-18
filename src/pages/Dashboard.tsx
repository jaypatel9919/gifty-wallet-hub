import { useState } from "react";
import PublicLayout from "@/components/layout/PublicLayout";
import EnhancedGiftCard from "@/components/cards/EnhancedGiftCard";
import MilestoneProgress, { Milestone } from "@/components/MilestoneProgress";
import UpdatesFeed from "@/components/UpdatesFeed";
import { Update } from "@/components/UpdateCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plus, ArrowUpRight, ArrowDownLeft, Bell, CreditCard, TrendingUp, Gift, Target, Newspaper, Wallet, Sparkles, Crown, Users, ChevronRight, Zap } from "lucide-react";
import GiftCardModal from "@/components/modals/GiftCardModal";
import LoadBalanceModal from "@/components/modals/LoadBalanceModal";

// Demo data with ownership types
const userCards = [
  { 
    id: "1", 
    storeName: "Fashion Hub", 
    planName: "Gold Member", 
    balance: "$250.00", 
    cardNumber: "•••• 4521", 
    networkName: "ShopLocal Network", 
    storeLogo: "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=100&h=100&fit=crop",
    ownership: "primary" as const,
    milestoneProgress: 67
  },
  { 
    id: "2", 
    storeName: "ShopLocal Network", 
    planName: "Network Plus", 
    balance: "$115.00", 
    cardNumber: "•••• 8472", 
    networkLogo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop",
    ownership: "shared" as const,
    sharedBy: "Sarah M.",
    expiresAt: "Dec 25"
  },
  { 
    id: "3", 
    storeName: "Tech Zone", 
    planName: "Premium Card", 
    balance: "$75.50", 
    cardNumber: "•••• 1234", 
    storeLogo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=100&h=100&fit=crop",
    ownership: "gifted" as const,
    giftedBy: "John D."
  },
];

const recentTransactions = [
  { id: "1", type: "spend", label: "Spent at Fashion Hub", amount: "-$45.00", date: "Today, 2:30 PM", store: "Fashion Hub" },
  { id: "2", type: "load", label: "Loaded ShopLocal Card", amount: "+$100.00", date: "Yesterday", store: "ShopLocal" },
  { id: "3", type: "gift", label: "Gift Received from John", amount: "+$75.50", date: "Dec 5, 2024", store: "Tech Zone" },
];

const activeMilestone: Milestone = {
  id: "1",
  title: "Monthly Spender",
  description: "Spend $100 this month",
  type: "spend",
  target: 100,
  current: 67,
  period: "this month",
  reward: "+$5 FREE",
  rewardValue: 5,
  daysRemaining: 14,
  isCompleted: false,
};

const latestUpdates: Update[] = [
  { id: "1", sourceType: "network", sourceId: "1", sourceName: "ShopLocal Network", title: "Holiday Sale - 20% Extra!", content: "Load any card this December for extra value.", type: "offer", publishedAt: "2h ago" },
  { id: "2", sourceType: "store", sourceId: "1", sourceName: "Fashion Hub", title: "New Winter Collection", content: "Early access for card holders.", type: "announcement", publishedAt: "5h ago" },
];

const Dashboard = () => {
  const [showGiftModal, setShowGiftModal] = useState(false);
  const [showLoadModal, setShowLoadModal] = useState(false);
  
  const totalBalance = userCards.reduce((sum, card) => {
    return sum + parseFloat(card.balance.replace("$", "").replace(",", ""));
  }, 0);

  const primaryCards = userCards.filter(c => c.ownership === "primary");
  const sharedCards = userCards.filter(c => c.ownership === "shared");
  const giftedCards = userCards.filter(c => c.ownership === "gifted");

  return (
    <PublicLayout isLoggedIn={true}>
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
        <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-12">
          {/* Hero Header */}
          <div className="relative mb-10">
            <div className="absolute inset-0 bg-gradient-to-r from-gift-orange/10 via-gift-pink/10 to-gift-magenta/10 rounded-3xl blur-3xl" />
            <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                <div>
                  <p className="text-sm text-accent font-medium mb-2 flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    Welcome back
                  </p>
                  <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">My Digital Wallet</h1>
                  <p className="text-muted-foreground">Manage your gift cards, track rewards, and discover offers</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link to="/stores">
                    <Button variant="accent" size="lg" className="shadow-lg shadow-accent/20">
                      <Plus className="h-5 w-5 mr-2" />
                      Add Card
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" onClick={() => setShowGiftModal(true)}>
                    <Gift className="h-5 w-5 mr-2" />
                    Send Gift
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <div className="group bg-card border border-border rounded-2xl p-5 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-1">Total Balance</p>
              <p className="text-3xl font-bold text-foreground">${totalBalance.toFixed(2)}</p>
            </div>
            
            <div className="group bg-card border border-border rounded-2xl p-5 hover:shadow-lg hover:shadow-gift-pink/5 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gift-orange to-gift-pink flex items-center justify-center shadow-lg shadow-gift-pink/20">
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-1">Active Cards</p>
              <p className="text-3xl font-bold text-foreground">{userCards.length}</p>
            </div>

            <div className="group bg-card border border-border rounded-2xl p-5 hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
                  <Crown className="h-6 w-6 text-white" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-1">Owned Cards</p>
              <p className="text-3xl font-bold text-foreground">{primaryCards.length}</p>
            </div>

            <div className="group bg-card border border-border rounded-2xl p-5 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <Users className="h-6 w-6 text-white" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-1">Shared Access</p>
              <p className="text-3xl font-bold text-foreground">{sharedCards.length}</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Milestone Progress - Prominent */}
              {activeMilestone && (
                <section className="bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 rounded-3xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                        <Zap className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h2 className="font-semibold text-foreground">Active Milestone</h2>
                        <p className="text-sm text-muted-foreground">You're making progress!</p>
                      </div>
                    </div>
                    <Link to="/dashboard/cards/1" className="text-accent hover:underline text-sm font-medium flex items-center gap-1">
                      View All <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <MilestoneProgress milestone={activeMilestone} />
                </section>
              )}

              {/* My Cards - Owned */}
              {primaryCards.length > 0 && (
                <section>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <Crown className="h-5 w-5 text-amber-500" />
                      <h2 className="text-xl font-semibold text-foreground">My Cards</h2>
                    </div>
                    <Link to="/dashboard/cards">
                      <Button variant="ghost" size="sm">View All</Button>
                    </Link>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {primaryCards.map((card) => (
                      <Link key={card.id} to={`/dashboard/cards/${card.id}`}>
                        <EnhancedGiftCard
                          storeName={card.storeName}
                          planName={card.planName}
                          balance={card.balance}
                          cardNumber={card.cardNumber}
                          storeLogo={card.storeLogo}
                          networkName={card.networkName}
                          ownership={card.ownership}
                          milestoneProgress={card.milestoneProgress}
                          size="md"
                        />
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* Shared Access Cards */}
              {sharedCards.length > 0 && (
                <section>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-blue-500" />
                      <h2 className="text-xl font-semibold text-foreground">Shared With Me</h2>
                      <span className="px-2 py-0.5 bg-blue-500/10 text-blue-600 text-xs font-medium rounded-full">Temporary Access</span>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {sharedCards.map((card) => (
                      <Link key={card.id} to={`/dashboard/cards/${card.id}`}>
                        <EnhancedGiftCard
                          storeName={card.storeName}
                          planName={card.planName}
                          balance={card.balance}
                          cardNumber={card.cardNumber}
                          networkLogo={card.networkLogo}
                          ownership={card.ownership}
                          sharedBy={card.sharedBy}
                          expiresAt={card.expiresAt}
                          size="md"
                        />
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* Gifted Cards */}
              {giftedCards.length > 0 && (
                <section>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <Sparkles className="h-5 w-5 text-gift-pink" />
                      <h2 className="text-xl font-semibold text-foreground">Received Gifts</h2>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {giftedCards.map((card) => (
                      <Link key={card.id} to={`/dashboard/cards/${card.id}`}>
                        <EnhancedGiftCard
                          storeName={card.storeName}
                          planName={card.planName}
                          balance={card.balance}
                          cardNumber={card.cardNumber}
                          storeLogo={card.storeLogo}
                          ownership={card.ownership}
                          giftedBy={card.giftedBy}
                          size="md"
                        />
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {/* Empty State */}
              {userCards.length === 0 && (
                <div className="text-center py-16 bg-card border border-border rounded-3xl">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-gift-orange to-gift-pink mx-auto mb-6 flex items-center justify-center">
                    <Wallet className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Your wallet is empty</h3>
                  <p className="text-muted-foreground mb-6">Start by adding your first gift card</p>
                  <Link to="/stores">
                    <Button variant="accent" size="lg">
                      <Plus className="h-5 w-5 mr-2" />
                      Browse Stores
                    </Button>
                  </Link>
                </div>
              )}

              {/* Recent Transactions */}
              <section>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-foreground">Recent Activity</h2>
                  <Link to="/dashboard/transactions">
                    <Button variant="ghost" size="sm">View All</Button>
                  </Link>
                </div>
                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  {recentTransactions.map((tx, index) => (
                    <div 
                      key={tx.id} 
                      className={`p-4 flex items-center gap-4 hover:bg-muted/50 transition-colors ${
                        index !== recentTransactions.length - 1 ? 'border-b border-border' : ''
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                        tx.type === "load" ? "bg-emerald-100 dark:bg-emerald-900/30" :
                        tx.type === "gift" ? "bg-gift-pink/20" :
                        "bg-red-100 dark:bg-red-900/30"
                      }`}>
                        {tx.type === "load" ? (
                          <ArrowDownLeft className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                        ) : tx.type === "gift" ? (
                          <Gift className="h-5 w-5 text-gift-pink" />
                        ) : (
                          <ArrowUpRight className="h-5 w-5 text-red-600 dark:text-red-400" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground truncate">{tx.label}</p>
                        <p className="text-sm text-muted-foreground">{tx.date}</p>
                      </div>
                      <span className={`font-semibold whitespace-nowrap ${
                        tx.type === "load" || tx.type === "gift"
                          ? "text-emerald-600 dark:text-emerald-400" 
                          : "text-foreground"
                      }`}>
                        {tx.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Wallet Passes CTA */}
              <section className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-6 text-white">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Wallet className="h-5 w-5" />
                  Add to Wallet
                </h3>
                <p className="text-sm text-zinc-400 mb-4">Quick access from your phone</p>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white">
                    <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                    </svg>
                    Apple Wallet
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white">
                    <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 7H13V13H11V7ZM11 15H13V17H11V15Z"/>
                    </svg>
                    Google Wallet
                  </Button>
                </div>
              </section>

              {/* Updates */}
              <section className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground flex items-center gap-2">
                    <Newspaper className="h-4 w-4" />
                    Latest Updates
                  </h3>
                </div>
                <UpdatesFeed updates={latestUpdates} maxItems={2} compact />
                <Link to="/updates">
                  <Button variant="ghost" className="w-full mt-4" size="sm">
                    View All Updates
                  </Button>
                </Link>
              </section>

              {/* Notifications */}
              <section className="bg-card border border-border rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-foreground flex items-center gap-2">
                    <Bell className="h-4 w-4" />
                    Notifications
                  </h3>
                  <span className="bg-accent text-accent-foreground text-xs px-2 py-0.5 rounded-full">3</span>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="border-l-2 border-gift-pink pl-3 py-1">
                    <p className="font-medium text-foreground">Gift Received!</p>
                    <p className="text-xs text-muted-foreground">John sent you a $75.50 gift card</p>
                  </div>
                  <div className="border-l-2 border-accent pl-3 py-1">
                    <p className="font-medium text-foreground">Milestone Progress</p>
                    <p className="text-xs text-muted-foreground">$33 away from earning $5 free!</p>
                  </div>
                  <div className="border-l-2 border-blue-500 pl-3 py-1">
                    <p className="font-medium text-foreground">Shared Access</p>
                    <p className="text-xs text-muted-foreground">Sarah shared a card with you</p>
                  </div>
                </div>
                <Link to="/notifications">
                  <Button variant="ghost" className="w-full mt-4" size="sm">
                    View All Notifications
                  </Button>
                </Link>
              </section>

              {/* Quick Actions */}
              <section className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-semibold text-foreground mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start" onClick={() => setShowGiftModal(true)}>
                    <Gift className="h-4 w-4 mr-2 text-gift-pink" />
                    Send a Gift
                  </Button>
                  <Button variant="outline" className="w-full justify-start" onClick={() => setShowLoadModal(true)}>
                    <CreditCard className="h-4 w-4 mr-2 text-accent" />
                    Load a Card
                  </Button>
                  <Link to="/invite" className="block">
                    <Button variant="outline" className="w-full justify-start">
                      <Users className="h-4 w-4 mr-2 text-blue-500" />
                      Invite Friends
                    </Button>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <GiftCardModal isOpen={showGiftModal} onClose={() => setShowGiftModal(false)} />
      <LoadBalanceModal isOpen={showLoadModal} onClose={() => setShowLoadModal(false)} />
    </PublicLayout>
  );
};

export default Dashboard;
