import PublicLayout from "@/components/layout/PublicLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy, Share2, Gift, Users, DollarSign, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Invite = () => {
  const [copied, setCopied] = useState(false);
  const referralCode = "GTGF-USER123";
  const referralLink = `https://gotogifty.com/signup?ref=${referralCode}`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinks = [
    { name: "WhatsApp", color: "bg-green-500", url: `https://wa.me/?text=Join%20GoToGifty%20${referralLink}` },
    { name: "Twitter", color: "bg-sky-500", url: `https://twitter.com/intent/tweet?text=Join%20GoToGifty&url=${referralLink}` },
    { name: "Facebook", color: "bg-blue-600", url: `https://www.facebook.com/sharer/sharer.php?u=${referralLink}` },
    { name: "Email", color: "bg-gray-500", url: `mailto:?subject=Join%20GoToGifty&body=${referralLink}` },
  ];

  return (
    <PublicLayout isLoggedIn={true}>
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 rounded-2xl gift-gradient mx-auto mb-6 flex items-center justify-center">
              <Gift className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Invite Friends & Family
            </h1>
            <p className="text-muted-foreground">
              Share GoToGifty with your loved ones and help them discover smarter gift cards
            </p>
          </div>

          {/* Referral Code */}
          <div className="bg-card border border-border rounded-2xl p-6 mb-8">
            <h3 className="font-semibold text-foreground mb-4">Your Referral Code</h3>
            <div className="flex gap-3">
              <Input
                value={referralCode}
                readOnly
                className="font-mono text-center text-lg"
              />
              <Button variant="accent" onClick={() => copyToClipboard(referralCode)}>
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {/* Referral Link */}
          <div className="bg-card border border-border rounded-2xl p-6 mb-8">
            <h3 className="font-semibold text-foreground mb-4">Share Your Link</h3>
            <div className="flex gap-3 mb-4">
              <Input
                value={referralLink}
                readOnly
                className="text-sm"
              />
              <Button variant="outline" onClick={() => copyToClipboard(referralLink)}>
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-3">
              {shareLinks.map((link) => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="gap-2">
                    <div className={`w-4 h-4 rounded-full ${link.color}`} />
                    {link.name}
                  </Button>
                </a>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-muted/50 rounded-2xl p-6 mb-8">
            <h3 className="font-semibold text-foreground mb-6 text-center">How It Works</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/10 mx-auto mb-3 flex items-center justify-center">
                  <Share2 className="h-6 w-6 text-accent" />
                </div>
                <p className="font-medium text-foreground mb-1">1. Share</p>
                <p className="text-sm text-muted-foreground">Send your link to friends</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/10 mx-auto mb-3 flex items-center justify-center">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <p className="font-medium text-foreground mb-1">2. They Join</p>
                <p className="text-sm text-muted-foreground">Friends sign up using your link</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-accent/10 mx-auto mb-3 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-accent" />
                </div>
                <p className="font-medium text-foreground mb-1">3. Enjoy</p>
                <p className="text-sm text-muted-foreground">Both get exclusive benefits</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="font-semibold text-foreground mb-4">Your Referral Stats</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-muted/50 rounded-xl">
                <p className="text-2xl font-bold text-foreground">5</p>
                <p className="text-sm text-muted-foreground">Friends Invited</p>
              </div>
              <div className="text-center p-4 bg-muted/50 rounded-xl">
                <p className="text-2xl font-bold text-foreground">3</p>
                <p className="text-sm text-muted-foreground">Joined</p>
              </div>
              <div className="text-center p-4 bg-accent/10 rounded-xl">
                <p className="text-2xl font-bold text-accent">$15</p>
                <p className="text-sm text-muted-foreground">Bonus Earned</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default Invite;
