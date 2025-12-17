import PublicLayout from "@/components/layout/PublicLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Users, Store, Network, HelpCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const faqData = {
  customers: [
    { q: "How do I purchase a gift card?", a: "Browse stores or networks, select a plan that suits you, and complete the purchase. Your digital card will be instantly added to your wallet." },
    { q: "Can I use my card at multiple stores?", a: "If you have a network card, yes! Network cards can be redeemed at any participating store within that network. Single-store cards work only at the issuing store." },
    { q: "How do I send a gift card to someone?", a: "Open any card in your wallet, tap 'Gift This Card', enter the recipient's details, and send. They'll receive an invitation to claim it." },
    { q: "What is temporary access sharing?", a: "You can share limited access to your card with family or friends. Set an expiry time and optional spending limit. They can use it without owning it." },
    { q: "How secure are my transactions?", a: "All redemptions require OTP verification sent to your registered phone/email. You can also set spending limits and block cards instantly." },
    { q: "What happens if my card expires?", a: "Card expiry dates are set by the store/network. Unused balance may be forfeited after expiry. Check your card details for specific terms." },
  ],
  stores: [
    { q: "How do I join GoToGifty as a store?", a: "Contact us through the Partner page. We'll set up your store profile, help you create gift card plans, and integrate with your POS." },
    { q: "What fees does GoToGifty charge?", a: "We charge a small commission on card sales and redemptions. Contact our sales team for detailed pricing based on your volume." },
    { q: "Can I create custom gift card plans?", a: "Absolutely! Create unlimited plans with custom prices, bonus values, and milestone rewards. You control all the perks and terms." },
    { q: "How do I receive payments?", a: "Settlements are processed regularly. View your bill book and pending settlements in your admin dashboard. Payouts go to your registered bank account." },
    { q: "Can I join a network?", a: "Yes! Networks allow cross-store redemptions. Apply to join an existing network or contact us to create your own network." },
  ],
  networks: [
    { q: "What is a network?", a: "A network is a group of stores that accept each other's gift cards. Customers get more flexibility, and stores get more traffic." },
    { q: "How are network settlements handled?", a: "When a card is redeemed at a different store than where it was purchased, we handle the settlement between stores automatically." },
    { q: "Can I manage which stores join my network?", a: "Yes! As a network admin, you approve or reject store applications. You set the standards for your network." },
    { q: "How do network-wide offers work?", a: "Create offers that apply across all network stores. Great for seasonal promotions and driving customer engagement." },
  ],
};

const FAQs = () => {
  const [search, setSearch] = useState("");
  const [activeSection, setActiveSection] = useState<"customers" | "stores" | "networks">("customers");

  const sections = [
    { id: "customers", label: "For Customers", icon: Users },
    { id: "stores", label: "For Stores", icon: Store },
    { id: "networks", label: "For Networks", icon: Network },
  ];

  const currentFaqs = faqData[activeSection].filter(
    faq => search === "" || 
    faq.q.toLowerCase().includes(search.toLowerCase()) || 
    faq.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <PublicLayout>
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground mb-8">
            Find answers to common questions about GoToGifty
          </p>
          
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search FAQs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-12 h-12"
            />
          </div>
        </div>

        {/* Section Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {sections.map((section) => (
            <Button
              key={section.id}
              variant={activeSection === section.id ? "accent" : "outline"}
              onClick={() => setActiveSection(section.id as typeof activeSection)}
              className="gap-2"
            >
              <section.icon className="h-4 w-4" />
              {section.label}
            </Button>
          ))}
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          {currentFaqs.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              No FAQs match your search. Try a different term.
            </div>
          ) : (
            <Accordion type="single" collapsible className="space-y-4">
              {currentFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>

        {/* Still need help */}
        <div className="mt-16 text-center">
          <div className="bg-muted/50 rounded-2xl p-8 max-w-xl mx-auto">
            <HelpCircle className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Still have questions?</h3>
            <p className="text-muted-foreground mb-4">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <Link to="/support">
              <Button variant="accent">Contact Support</Button>
            </Link>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default FAQs;
