import PublicLayout from "@/components/layout/PublicLayout";
import GiftCardPreview from "@/components/cards/GiftCardPreview";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plus, ArrowUpRight, ArrowDownLeft, Bell, CreditCard, TrendingUp, Gift } from "lucide-react";

// Demo data
const userCards = [
  { id: "1", storeName: "Fashion Hub", planName: "Gold Member", balance: "$250.00", cardNumber: "•••• 4521" },
  { id: "2", storeName: "ShopLocal Network", planName: "Network Plus", balance: "$115.00", cardNumber: "•••• 8472" },
  { id: "3", storeName: "Tech Zone", planName: "Premium Card", balance: "$75.50", cardNumber: "•••• 1234" },
];

const recentTransactions = [
  { id: "1", type: "spend", label: "Spent at Fashion Hub", amount: "-$45.00", date: "Today, 2:30 PM", store: "Fashion Hub" },
  { id: "2", type: "load", label: "Loaded ShopLocal Card", amount: "+$100.00", date: "Yesterday", store: "ShopLocal" },
  { id: "3", type: "spend", label: "Spent at Tech Zone", amount: "-$24.50", date: "Dec 5, 2024", store: "Tech Zone" },
  { id: "4", type: "gift", label: "Received gift from John", amount: "+$50.00", date: "Dec 4, 2024", store: "Network" },
];

const notifications = [
  { id: "1", title: "Gift Received!", message: "Sarah sent you a $50 gift card", time: "2h ago" },
  { id: "2", title: "New Offer", message: "20% off at Fashion Hub this weekend", time: "5h ago" },
  { id: "3", title: "Transaction Complete", message: "Payment of $45 confirmed", time: "1d ago" },
];

const Dashboard = () => {
  const totalBalance = userCards.reduce((sum, card) => {
    return sum + parseFloat(card.balance.replace("$", "").replace(",", ""));
  }, 0);

  return (
    <PublicLayout isLoggedIn={true}>
      <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-foreground">My Wallet</h1>
            <p className="text-muted-foreground">Manage your gift cards and transactions</p>
          </div>
          <Link to="/stores">
            <Button variant="accent">
              <Plus className="h-4 w-4 mr-2" />
              Add New Card
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview Cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-card border border-border rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-sm text-muted-foreground">Total Balance</span>
                </div>
                <p className="text-2xl font-bold text-foreground">${totalBalance.toFixed(2)}</p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gift-pink/10 flex items-center justify-center">
                    <CreditCard className="h-5 w-5 text-gift-pink" />
                  </div>
                  <span className="text-sm text-muted-foreground">Active Cards</span>
                </div>
                <p className="text-2xl font-bold text-foreground">{userCards.length}</p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl gift-gradient-soft flex items-center justify-center">
                    <Gift className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm text-muted-foreground">Perks Earned</span>
                </div>
                <p className="text-2xl font-bold text-foreground">$23.50</p>
              </div>
            </div>

            {/* My Cards */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-foreground">My Cards</h2>
                <Button variant="ghost" size="sm">View All</Button>
              </div>
              <div className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4 lg:mx-0 lg:px-0">
                {userCards.map((card) => (
                  <Link key={card.id} to={`/dashboard/cards/${card.id}`} className="flex-shrink-0">
                    <GiftCardPreview
                      storeName={card.storeName}
                      planName={card.planName}
                      balance={card.balance}
                      cardNumber={card.cardNumber}
                      size="md"
                      className="cursor-pointer hover:scale-[1.02] transition-transform"
                    />
                  </Link>
                ))}
                <Link
                  to="/stores"
                  className="flex-shrink-0 w-72 h-44 rounded-2xl border-2 border-dashed border-border flex items-center justify-center hover:border-accent hover:bg-accent/5 transition-colors cursor-pointer"
                >
                  <div className="text-center">
                    <Plus className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <span className="text-sm text-muted-foreground">Add New Card</span>
                  </div>
                </Link>
              </div>
            </section>

            {/* Recent Transactions */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-foreground">Recent Transactions</h2>
                <Button variant="ghost" size="sm">View All</Button>
              </div>
              <div className="bg-card border border-border rounded-2xl divide-y divide-border">
                {recentTransactions.map((tx) => (
                  <div key={tx.id} className="p-4 flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      tx.type === "load" || tx.type === "gift" 
                        ? "bg-emerald-100 text-emerald-600" 
                        : "bg-red-100 text-red-600"
                    }`}>
                      {tx.type === "load" || tx.type === "gift" ? (
                        <ArrowDownLeft className="h-5 w-5" />
                      ) : (
                        <ArrowUpRight className="h-5 w-5" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground">{tx.label}</p>
                      <p className="text-sm text-muted-foreground">{tx.date}</p>
                    </div>
                    <span className={`font-semibold ${
                      tx.type === "load" || tx.type === "gift" 
                        ? "text-emerald-600" 
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
            {/* Notifications */}
            <section className="bg-card border border-border rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Bell className="h-4 w-4" />
                  Notifications
                </h3>
                <span className="bg-accent text-accent-foreground text-xs px-2 py-0.5 rounded-full">
                  {notifications.length}
                </span>
              </div>
              <div className="space-y-4">
                {notifications.map((notif) => (
                  <div key={notif.id} className="border-l-2 border-accent pl-3">
                    <p className="font-medium text-sm text-foreground">{notif.title}</p>
                    <p className="text-xs text-muted-foreground">{notif.message}</p>
                    <p className="text-xs text-muted-foreground mt-1">{notif.time}</p>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full mt-4" size="sm">
                View All Notifications
              </Button>
            </section>

            {/* Quick Actions */}
            <section className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Gift className="h-4 w-4 mr-2" />
                  Send a Gift
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Load a Card
                </Button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default Dashboard;
