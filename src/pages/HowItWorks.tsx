import PublicLayout from "@/components/layout/PublicLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Store, Gift, QrCode, Wallet, Shield, Users, CreditCard, Smartphone } from "lucide-react";

const steps = [
  {
    icon: Store,
    title: "Find a Store or Network",
    description: "Browse our collection of participating stores and networks. Filter by location, category, or perks to find the perfect match for your gifting needs.",
  },
  {
    icon: Gift,
    title: "Choose Your Gift Card Plan",
    description: "Each store offers multiple plans with different value tiers and bonus perks. The more you load, the more bonus value you get. It's that simple.",
  },
  {
    icon: Wallet,
    title: "Load & Personalize",
    description: "Add funds to your digital gift card. Send it as a gift with a personal message, or keep it for yourself. Share temporary access with family or transfer permanently.",
  },
  {
    icon: QrCode,
    title: "Redeem Anywhere",
    description: "Show your QR code at checkout. Network cards work at any store in the network. Every transaction is OTP-secured for your peace of mind.",
  },
];

const features = [
  { icon: CreditCard, title: "Digital Wallet", desc: "All your cards in one place" },
  { icon: Shield, title: "OTP Security", desc: "Every transaction protected" },
  { icon: Users, title: "Easy Sharing", desc: "Gift or share access instantly" },
  { icon: Smartphone, title: "Mobile Ready", desc: "Works on any device" },
];

const HowItWorks = () => {
  return (
    <PublicLayout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How <span className="text-gradient-gift">GoToGifty</span> Works
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Smart digital gift cards that work across stores and networks. Load once, redeem everywhere, earn perks along the way.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-3xl gift-gradient flex items-center justify-center shadow-gift-card">
                    <step.icon className="h-16 w-16 lg:h-20 lg:w-20 text-white" />
                  </div>
                </div>
                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    Step {index + 1}
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    {step.title}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Built for Everyone
            </h2>
            <p className="text-muted-foreground">Smart features that make gifting effortless</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-card border border-border rounded-2xl p-6 text-center card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Ready to start?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Create your free account and explore hundreds of stores and networks offering smart gift cards.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/signup">
              <Button variant="hero" size="xl">
                Create Free Account
              </Button>
            </Link>
            <Link to="/stores">
              <Button variant="hero-outline" size="xl">
                Browse Stores
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
};

export default HowItWorks;
