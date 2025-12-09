import PublicLayout from "@/components/layout/PublicLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import GiftCardPreview from "@/components/cards/GiftCardPreview";
import StoreCard from "@/components/cards/StoreCard";
import NetworkCard from "@/components/cards/NetworkCard";
import { ArrowRight, Gift, Store, QrCode, Wallet, Shield, Users, TrendingUp, Zap } from "lucide-react";

// Demo data
const featuredStores = [
  { id: "1", name: "Fashion Hub", logo: "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=100&h=100&fit=crop", city: "New York", category: "Fashion", isNetwork: true },
  { id: "2", name: "Tech Zone", logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=100&h=100&fit=crop", city: "San Francisco", category: "Electronics", isNetwork: false },
  { id: "3", name: "Gourmet Delights", logo: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=100&h=100&fit=crop", city: "Chicago", category: "Dining", isNetwork: true },
  { id: "4", name: "Beauty Lounge", logo: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=100&h=100&fit=crop", city: "Los Angeles", category: "Beauty", isNetwork: false },
];

const featuredNetworks = [
  { id: "1", name: "ShopLocal Network", logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop", storeCount: 25, perks: "5% cashback" },
  { id: "2", name: "Dine & Discover", logo: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=100&h=100&fit=crop", storeCount: 18, perks: "Free desserts" },
  { id: "3", name: "Style Collective", logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop", storeCount: 32, perks: "Exclusive deals" },
];

const steps = [
  { icon: Store, title: "Find a Store", desc: "Browse stores or networks near you" },
  { icon: Gift, title: "Choose a Plan", desc: "Pick a gift card that fits your needs" },
  { icon: Wallet, title: "Load & Share", desc: "Add funds and gift to friends" },
  { icon: QrCode, title: "Redeem Anywhere", desc: "Use at any participating store" },
];

const userBenefits = [
  { icon: Wallet, title: "Multiple Cards", desc: "Manage all your gift cards in one wallet" },
  { icon: Gift, title: "Smart Perks", desc: "Earn cashback and exclusive rewards" },
  { icon: Shield, title: "OTP Secured", desc: "Every transaction is protected" },
];

const businessBenefits = [
  { icon: TrendingUp, title: "Boost Sales", desc: "Increase revenue with gift card programs" },
  { icon: Users, title: "Network Redemptions", desc: "Cross-store transactions drive traffic" },
  { icon: Zap, title: "Easy Settlement", desc: "Automated dashboard for payouts" },
];

const Index = () => {
  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-gift-pink/10 blur-3xl" />
        
        <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="animate-fade-up">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-foreground leading-tight mb-6">
                Your Smart Way to{" "}
                <span className="text-gradient-gift">Gift, Save & Spend</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-lg">
                Digital gift cards that work across stores and networks. Load once, redeem everywhere. Smart perks, instant access, totally secure.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/stores">
                  <Button variant="hero" size="xl">
                    Explore Stores
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="hero-outline" size="xl">
                    Sign Up & Get Started
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right: Card Stack */}
            <div className="relative animate-fade-up-delay-1">
              <div className="relative flex justify-center lg:justify-end">
                {/* Background cards */}
                <div className="absolute top-8 -left-4 lg:left-8 transform rotate-[-8deg] opacity-60">
                  <GiftCardPreview
                    storeName="Tech Zone"
                    planName="Premium Card"
                    balance="$150"
                    size="md"
                    className="shadow-xl"
                  />
                </div>
                <div className="absolute top-4 left-4 lg:left-16 transform rotate-[-4deg] opacity-80">
                  <GiftCardPreview
                    storeName="Fashion Hub"
                    planName="Gold Member"
                    balance="$250"
                    size="md"
                    className="shadow-xl"
                  />
                </div>
                {/* Front card */}
                <div className="relative z-10 animate-float">
                  <GiftCardPreview
                    storeName="ShopLocal Network"
                    planName="Silver Saver"
                    balance="$500"
                    cardNumber="•••• 8472"
                    size="lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get started in minutes. It's simple, secure, and smart.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 rounded-2xl gift-gradient mx-auto mb-4 flex items-center justify-center shadow-gift-card">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-sm text-accent font-semibold mb-2">Step {index + 1}</div>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Networks */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Featured Networks
              </h2>
              <p className="text-muted-foreground">
                Join networks for extra perks across multiple stores
              </p>
            </div>
            <Link to="/networks" className="hidden lg:block">
              <Button variant="ghost">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredNetworks.map((network) => (
              <NetworkCard key={network.id} {...network} />
            ))}
          </div>

          <Link to="/networks" className="lg:hidden flex justify-center mt-8">
            <Button variant="outline">
              View All Networks <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Stores */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Featured Stores
              </h2>
              <p className="text-muted-foreground">
                Discover stores offering digital gift cards
              </p>
            </div>
            <Link to="/stores" className="hidden lg:block">
              <Button variant="ghost">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredStores.map((store) => (
              <StoreCard key={store.id} {...store} />
            ))}
          </div>

          <Link to="/stores" className="lg:hidden flex justify-center mt-8">
            <Button variant="outline">
              View All Stores <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* For Users */}
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Users className="h-4 w-4" />
                For Users
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
                Smarter gifting, better savings
              </h3>
              <div className="space-y-6">
                {userBenefits.map((benefit) => (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                      <p className="text-muted-foreground text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* For Business */}
            <div>
              <div className="inline-flex items-center gap-2 bg-gift-pink/10 text-gift-pink px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Store className="h-4 w-4" />
                For Stores
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">
                Grow your business with gift cards
              </h3>
              <div className="space-y-6">
                {businessBenefits.map((benefit) => (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl gift-gradient-soft flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                      <p className="text-muted-foreground text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden gift-gradient p-8 lg:p-16 text-center">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/10 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-white/10 translate-x-1/2 translate-y-1/2" />
            
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to get started?
              </h2>
              <p className="text-white/80 mb-8 max-w-lg mx-auto">
                Join thousands of users enjoying smarter gift cards. Sign up now and get your first card with bonus perks.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/signup">
                  <Button size="xl" className="bg-white text-primary hover:bg-white/90 shadow-xl">
                    Create Free Account
                  </Button>
                </Link>
                <Link to="/business">
                  <Button size="xl" variant="ghost" className="text-white border-2 border-white/30 hover:bg-white/10">
                    Partner with Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default Index;
