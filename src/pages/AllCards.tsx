import PublicLayout from "@/components/layout/PublicLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Search, Filter, Plus, CreditCard } from "lucide-react";
import GiftCardPreview from "@/components/cards/GiftCardPreview";

const mockCards = [
  {
    id: "1",
    storeName: "Fashion Hub",
    planName: "Gold Member",
    balance: "$250.00",
    cardNumber: "GTGF-4521-8847-2233",
    status: "Active",
  },
  {
    id: "2",
    storeName: "Tech Zone",
    planName: "Premium",
    balance: "$500.00",
    cardNumber: "GTGF-7823-1156-9944",
    status: "Active",
  },
  {
    id: "3",
    storeName: "Coffee Corner",
    planName: "Loyalty Card",
    balance: "$45.50",
    cardNumber: "GTGF-3344-5566-7788",
    status: "Active",
  },
  {
    id: "4",
    storeName: "Book Haven",
    planName: "Reader's Club",
    balance: "$120.00",
    cardNumber: "GTGF-9988-7766-5544",
    status: "Active",
  },
  {
    id: "5",
    storeName: "Sports Arena",
    planName: "Athlete Pass",
    balance: "$75.00",
    cardNumber: "GTGF-1122-3344-5566",
    status: "Blocked",
  },
  {
    id: "6",
    storeName: "Beauty Essentials",
    planName: "VIP Member",
    balance: "$180.00",
    cardNumber: "GTGF-6677-8899-0011",
    status: "Active",
  },
];

const AllCards = () => {
  return (
    <PublicLayout isLoggedIn={true}>
      <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-foreground">My Cards</h1>
            <p className="text-muted-foreground mt-1">
              {mockCards.length} cards in your wallet
            </p>
          </div>
          <Link to="/stores">
            <Button variant="accent">
              <Plus className="h-4 w-4 mr-2" />
              Get New Card
            </Button>
          </Link>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search cards..." className="pl-10" />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>

        {/* Cards Grid */}
        {mockCards.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockCards.map((card) => (
              <Link key={card.id} to={`/card/${card.id}`} className="block">
                <div className="transition-transform hover:scale-[1.02]">
                  <GiftCardPreview
                    storeName={card.storeName}
                    planName={card.planName}
                    balance={card.balance}
                    cardNumber={card.cardNumber.slice(-9)}
                  />
                  <div className="mt-2 flex items-center justify-between px-1">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      card.status === "Active" ? "status-active" : "status-blocked"
                    }`}>
                      {card.status}
                    </span>
                    <span className="text-xs text-muted-foreground font-mono">{card.cardNumber.slice(-9)}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-20 h-20 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
              <CreditCard className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">No Cards Yet</h3>
            <p className="text-muted-foreground mb-6">
              Start building your wallet by getting your first gift card.
            </p>
            <Link to="/stores">
              <Button variant="accent">Browse Stores</Button>
            </Link>
          </div>
        )}
      </div>
    </PublicLayout>
  );
};

export default AllCards;
