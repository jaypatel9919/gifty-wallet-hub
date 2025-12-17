import PublicLayout from "@/components/layout/PublicLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Wallet, Gift, Share2, ArrowRightLeft, Shield, QrCode, 
  Target, Bell, Smartphone, CreditCard, Users, Store,
  Network, TrendingUp, FileText, Zap
} from "lucide-react";

const customerFeatures = [
  {
    icon: Wallet,
    title: "Digital Wallet",
    description: "All your gift cards in one secure place. No more lost plastic cards or forgotten balances. Access everything from your phone.",
  },
  {
    icon: Gift,
    title: "Instant Gifting",
    description: "Send gift cards to anyone instantly. Pick a store, choose an amount, add a personal message, and deliver joy in seconds.",
  },
  {
    icon: Share2,
    title: "Temporary Access",
    description: "Share your card with family or friends temporarily. Set expiry times and spending limits. Perfect for team lunches or family outings.",
  },
  {
    icon: ArrowRightLeft,
    title: "Card Transfer",
    description: "Permanently transfer ownership of a card to someone else. Full balance moves to their account securely.",
  },
  {
    icon: Shield,
    title: "OTP Security",
    description: "Every transaction requires OTP verification. Your cards are protected with bank-grade security measures.",
  },
  {
    icon: Target,
    title: "Milestone Rewards",
    description: "Earn rewards as you spend. Reach milestones to unlock free top-ups and bonus value. The more you use, the more you save.",
  },
  {
    icon: QrCode,
    title: "Easy Redemption",
    description: "Show your QR code at checkout for instant redemption. Works at any participating store in seconds.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Stay updated with balance alerts, new offers, expiry reminders, and milestone progress notifications.",
  },
];

const businessFeatures = [
  {
    icon: Store,
    title: "Store Dashboard",
    description: "Complete control over your gift card program. Create plans, track sales, manage redemptions all in one place.",
  },
  {
    icon: CreditCard,
    title: "Custom Plans",
    description: "Design gift card plans that match your brand. Set prices, bonus values, and milestone rewards that drive loyalty.",
  },
  {
    icon: Zap,
    title: "Smart Terminal",
    description: "Purpose-built POS interface for your staff. Large buttons, clear display, OTP verification - designed for busy stores.",
  },
  {
    icon: Network,
    title: "Network Integration",
    description: "Join or create a network to accept cards across multiple stores. Increase foot traffic and customer reach.",
  },
  {
    icon: TrendingUp,
    title: "Analytics & Insights",
    description: "Track sales, redemptions, and customer behavior. Make data-driven decisions to grow your business.",
  },
  {
    icon: FileText,
    title: "Automated Settlements",
    description: "Clear bill book and automatic settlement calculations. Focus on your business while we handle the paperwork.",
  },
];

const Features = () => {
  return (
    <PublicLayout>
      {/* Hero */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Powerful Features for{" "}
              <span className="text-gradient-gift">Everyone</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're a customer looking to manage gift cards or a business wanting to boost sales,
              GoToGifty has the tools you need.
            </p>
          </div>
        </div>
      </section>

      {/* Customer Features */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <Users className="h-5 w-5 text-accent" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">For Customers</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {customerFeatures.map((feature) => (
              <div key={feature.title} className="bg-card border border-border rounded-2xl p-6 card-hover">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Features */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl gift-gradient-soft flex items-center justify-center">
              <Store className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground">For Businesses</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessFeatures.map((feature) => (
              <div key={feature.title} className="bg-card border border-border rounded-2xl p-6 card-hover">
                <div className="w-12 h-12 rounded-xl gift-gradient-soft flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="gift-gradient rounded-3xl p-8 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/10 -translate-x-1/2 -translate-y-1/2" />
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Experience These Features?
              </h2>
              <p className="text-white/80 mb-8 max-w-lg mx-auto">
                Sign up free and start exploring all that GoToGifty has to offer.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/signup">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    Get Started Free
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button size="lg" variant="ghost" className="text-white border-2 border-white/30 hover:bg-white/10">
                    See How It Works
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

export default Features;
