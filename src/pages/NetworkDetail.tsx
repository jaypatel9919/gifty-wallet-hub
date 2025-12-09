import PublicLayout from "@/components/layout/PublicLayout";
import StoreCard from "@/components/cards/StoreCard";
import GiftCardPreview from "@/components/cards/GiftCardPreview";
import { Button } from "@/components/ui/button";
import { useParams, Link } from "react-router-dom";
import { Store, Gift, Users, Percent, Star, ArrowRight } from "lucide-react";

// Demo network data
const networkData = {
  id: "1",
  name: "ShopLocal Network",
  logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=200&fit=crop",
  banner: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=1200&h=400&fit=crop",
  description: "ShopLocal Network connects you with the best local businesses in your community. Use your gift cards at any participating store and earn cashback on every purchase.",
  storeCount: 25,
  perks: [
    { icon: Percent, title: "5% Cashback", desc: "On all purchases network-wide" },
    { icon: Gift, title: "Bonus Points", desc: "Earn points at every store" },
    { icon: Users, title: "Family Sharing", desc: "Share cards with family members" },
  ],
  stores: [
    { id: "1", name: "Fashion Hub", logo: "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=100&h=100&fit=crop", city: "New York", category: "Fashion", isNetwork: true },
    { id: "3", name: "Gourmet Delights", logo: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=100&h=100&fit=crop", city: "Chicago", category: "Dining", isNetwork: true },
    { id: "7", name: "Home Decor Plus", logo: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=100&h=100&fit=crop", city: "Seattle", category: "Home", isNetwork: true },
    { id: "5", name: "Sports Arena", logo: "https://images.unsplash.com/photo-1461896836934-fffceb092e?w=100&h=100&fit=crop", city: "Miami", category: "Sports", isNetwork: true },
  ],
  plans: [
    { id: "1", name: "Network Starter", price: 50, value: 55, perk: "5% extra value" },
    { id: "2", name: "Network Plus", price: 100, value: 115, perk: "15% extra + priority perks" },
    { id: "3", name: "Network Premium", price: 250, value: 300, perk: "20% extra + VIP access" },
  ],
};

const NetworkDetail = () => {
  const { id } = useParams();

  return (
    <PublicLayout>
      {/* Banner */}
      <section className="relative h-64 lg:h-80">
        <div className="absolute inset-0 gift-gradient opacity-90" />
        <img
          src={networkData.banner}
          alt={networkData.name}
          className="w-full h-full object-cover mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </section>

      {/* Network Header */}
      <section className="container mx-auto px-4 lg:px-8 -mt-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-end">
          <div className="w-32 h-32 rounded-2xl bg-card border-4 border-background shadow-xl overflow-hidden flex-shrink-0">
            <img src={networkData.logo} alt={networkData.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
              {networkData.name}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-1">
                <Store className="h-4 w-4" />
                <span>{networkData.storeCount}+ participating stores</span>
              </div>
              <span className="text-accent font-medium">5% cashback network-wide</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* About */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">About this Network</h2>
              <p className="text-muted-foreground leading-relaxed">{networkData.description}</p>
            </section>

            {/* Perks */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-6">Network Perks</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {networkData.perks.map((perk) => (
                  <div
                    key={perk.title}
                    className="bg-card border border-border rounded-xl p-4 text-center card-hover"
                  >
                    <div className="w-12 h-12 rounded-xl gift-gradient mx-auto mb-3 flex items-center justify-center">
                      <perk.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{perk.title}</h3>
                    <p className="text-sm text-muted-foreground">{perk.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Participating Stores */}
            <section>
              <div className="flex items-end justify-between mb-6">
                <h2 className="text-xl font-semibold text-foreground">Participating Stores</h2>
                <Link to="/stores">
                  <Button variant="ghost" size="sm">
                    View All <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {networkData.stores.map((store) => (
                  <StoreCard key={store.id} {...store} />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar - Network Plans */}
          <div>
            <div className="bg-card border border-border rounded-2xl p-6 sticky top-24">
              <h3 className="font-semibold text-foreground mb-6">Network Gift Cards</h3>
              <div className="space-y-4">
                {networkData.plans.map((plan) => (
                  <div
                    key={plan.id}
                    className="border border-border rounded-xl p-4 card-hover"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">{plan.name}</h4>
                      <span className="text-accent text-sm font-medium">{plan.perk}</span>
                    </div>
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-2xl font-bold text-foreground">${plan.price}</span>
                      <span className="text-muted-foreground">(${plan.value} value)</span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="accent" size="sm" className="flex-1">
                        Buy
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        Gift
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default NetworkDetail;
