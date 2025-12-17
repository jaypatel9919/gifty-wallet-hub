import PublicLayout from "@/components/layout/PublicLayout";
import StatCounter from "@/components/StatCounter";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Store, CreditCard, DollarSign, Shield, Zap, Globe, Heart } from "lucide-react";

const stats = [
  { value: 50000, label: "Happy Users", suffix: "+", icon: Users },
  { value: 2000000, label: "Loaded & Gifted", prefix: "$", suffix: "+", icon: DollarSign },
  { value: 500, label: "Partner Stores", suffix: "+", icon: Store },
  { value: 50, label: "Networks", suffix: "+", icon: Globe },
];

const values = [
  { icon: Shield, title: "Security First", desc: "Every transaction protected with OTP verification and bank-grade encryption." },
  { icon: Zap, title: "Instant Access", desc: "Digital cards delivered instantly. No waiting, no shipping, no plastic waste." },
  { icon: Heart, title: "Customer Focused", desc: "Built around what users actually need. Simple, intuitive, and delightful." },
  { icon: Globe, title: "Local Impact", desc: "Supporting local businesses and communities through digital gift cards." },
];

const partners = [
  { name: "Fashion Hub", logo: "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=100&h=100&fit=crop" },
  { name: "Tech Zone", logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=100&h=100&fit=crop" },
  { name: "Gourmet Delights", logo: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=100&h=100&fit=crop" },
  { name: "Beauty Lounge", logo: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=100&h=100&fit=crop" },
  { name: "ShopLocal", logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop" },
  { name: "Style Collective", logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop" },
];

const About = () => {
  return (
    <PublicLayout>
      {/* Hero */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Reimagining Gift Cards for the{" "}
              <span className="text-gradient-gift">Digital Age</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              GoToGifty brings the joy of gifting into the modern era. No more plastic cards lost in drawers. 
              No more unused balances. Just smart, secure, and seamless digital gift cards that work everywhere.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/stores">
                <Button variant="accent" size="lg">Explore Stores</Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" size="lg">How It Works</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-muted-foreground">
              Join the growing community of users and businesses using GoToGifty
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What We Stand For
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built with purpose, designed with care
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-card border border-border rounded-2xl p-6 card-hover">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Partners
            </h2>
            <p className="text-muted-foreground">
              Trusted by leading stores and networks
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((partner) => (
              <div key={partner.name} className="flex flex-col items-center gap-2">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-16 h-16 rounded-xl object-cover grayscale hover:grayscale-0 transition-all"
                />
                <span className="text-sm text-muted-foreground">{partner.name}</span>
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
            <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-white/10 translate-x-1/2 translate-y-1/2" />
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-white/80 mb-8 max-w-lg mx-auto">
                Join thousands of users and businesses already using GoToGifty
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/signup">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    Create Account
                  </Button>
                </Link>
                <Link to="/support">
                  <Button size="lg" variant="ghost" className="text-white border-2 border-white/30 hover:bg-white/10">
                    Contact Sales
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

export default About;
