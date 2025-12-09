import PublicLayout from "@/components/layout/PublicLayout";
import GiftCardPreview from "@/components/cards/GiftCardPreview";
import { Button } from "@/components/ui/button";
import { useParams, Link } from "react-router-dom";
import { MapPin, Star, Clock, Phone, Globe, Gift, Percent, ArrowRight } from "lucide-react";

// Demo store data
const storeData = {
  id: "1",
  name: "Fashion Hub",
  logo: "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=200&h=200&fit=crop",
  banner: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&h=400&fit=crop",
  city: "New York",
  address: "123 Fashion Ave, Manhattan, NY 10001",
  category: "Fashion",
  description: "Fashion Hub is your premier destination for contemporary fashion. We offer curated collections from top designers and emerging brands, bringing you the latest trends in clothing, accessories, and footwear.",
  phone: "+1 (555) 123-4567",
  website: "www.fashionhub.com",
  hours: "Mon-Sat: 10AM-9PM, Sun: 11AM-7PM",
  rating: 4.8,
  isNetwork: true,
  networkId: "1",
  networkName: "ShopLocal Network",
  offers: [
    { id: "1", title: "Extra 5% Cashback", desc: "On purchases over $100", icon: Percent },
    { id: "2", title: "Tuesday Treats", desc: "Double points every Tuesday", icon: Gift },
    { id: "3", title: "Birthday Bonus", desc: "20% off during your birthday month", icon: Star },
  ],
  plans: [
    { id: "1", name: "Silver Saver", price: 50, value: 50, perk: "+$2 bonus credit", color: "from-gray-400 to-gray-600" },
    { id: "2", name: "Gold Member", price: 100, value: 110, perk: "+10% extra value", color: "from-yellow-500 to-amber-600" },
    { id: "3", name: "Platinum VIP", price: 200, value: 230, perk: "+15% extra + priority access", color: "from-purple-500 to-indigo-600" },
  ],
};

const StoreDetail = () => {
  const { id } = useParams();

  return (
    <PublicLayout>
      {/* Banner */}
      <section className="relative h-64 lg:h-80">
        <img
          src={storeData.banner}
          alt={storeData.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </section>

      {/* Store Header */}
      <section className="container mx-auto px-4 lg:px-8 -mt-20 relative z-10">
        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-end">
          <div className="w-32 h-32 rounded-2xl bg-card border-4 border-background shadow-xl overflow-hidden flex-shrink-0">
            <img src={storeData.logo} alt={storeData.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground">{storeData.name}</h1>
              {storeData.isNetwork && (
                <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                  Network Store
                </span>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{storeData.city}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span>{storeData.rating}</span>
              </div>
              <span className="bg-secondary px-2 py-1 rounded text-sm">{storeData.category}</span>
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
              <h2 className="text-xl font-semibold text-foreground mb-4">About</h2>
              <p className="text-muted-foreground leading-relaxed">{storeData.description}</p>
            </section>

            {/* Active Offers */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-6">Active Offers & Perks</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {storeData.offers.map((offer) => (
                  <div
                    key={offer.id}
                    className="bg-card border border-border rounded-xl p-4 card-hover"
                  >
                    <div className="w-10 h-10 rounded-lg gift-gradient-soft flex items-center justify-center mb-3">
                      <offer.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{offer.title}</h3>
                    <p className="text-sm text-muted-foreground">{offer.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Gift Card Plans */}
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-6">Gift Card Plans</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {storeData.plans.map((plan) => (
                  <div
                    key={plan.id}
                    className="bg-card border border-border rounded-2xl overflow-hidden card-hover"
                  >
                    {/* Card Preview */}
                    <div className={`h-32 bg-gradient-to-br ${plan.color} p-4 relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2" />
                      <p className="text-white/80 text-sm">{storeData.name}</p>
                      <p className="text-white font-bold text-lg">{plan.name}</p>
                    </div>
                    {/* Details */}
                    <div className="p-4">
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-2xl font-bold text-foreground">${plan.price}</span>
                        {plan.value !== plan.price && (
                          <span className="text-accent font-medium">(${plan.value} value)</span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{plan.perk}</p>
                      <div className="flex gap-2">
                        <Button variant="accent" size="sm" className="flex-1">
                          Buy for Myself
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          Gift
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Network Info */}
            {storeData.isNetwork && (
              <section className="bg-accent/5 border border-accent/20 rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-accent font-medium mb-1">Part of Network</p>
                    <h3 className="text-lg font-semibold text-foreground">{storeData.networkName}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Use your card at any store in this network
                    </p>
                  </div>
                  <Link to={`/networks/${storeData.networkId}`}>
                    <Button variant="accent-outline">
                      View Network <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="font-semibold text-foreground mb-4">Store Information</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{storeData.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground">{storeData.hours}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <span className="text-muted-foreground">{storeData.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-muted-foreground" />
                  <a href="#" className="text-accent hover:underline">{storeData.website}</a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-muted rounded-2xl h-48 flex items-center justify-center">
              <span className="text-muted-foreground">Map Preview</span>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default StoreDetail;
