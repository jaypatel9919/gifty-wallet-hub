import PublicLayout from "@/components/layout/PublicLayout";
import NetworkCard from "@/components/cards/NetworkCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

// Demo data
const allNetworks = [
  { id: "1", name: "ShopLocal Network", logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop", storeCount: 25, perks: "5% cashback" },
  { id: "2", name: "Dine & Discover", logo: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=100&h=100&fit=crop", storeCount: 18, perks: "Free desserts" },
  { id: "3", name: "Style Collective", logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop", storeCount: 32, perks: "Exclusive deals" },
  { id: "4", name: "Tech Alliance", logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=100&h=100&fit=crop", storeCount: 15, perks: "Extended warranty" },
  { id: "5", name: "Wellness Circle", logo: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=100&h=100&fit=crop", storeCount: 22, perks: "Member discounts" },
  { id: "6", name: "Entertainment Zone", logo: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=100&h=100&fit=crop", storeCount: 12, perks: "Priority booking" },
];

const Networks = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredNetworks = allNetworks.filter((network) =>
    network.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <PublicLayout>
      {/* Header */}
      <section className="bg-muted/50 py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Gift Card Networks
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Join a network and use your gift cards across multiple stores. Extra perks, more flexibility.
          </p>
        </div>
      </section>

      {/* Search */}
      <section className="py-6 border-b border-border bg-card sticky top-16 lg:top-20 z-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search networks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </section>

      {/* Network Grid */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          {filteredNetworks.length > 0 ? (
            <>
              <p className="text-muted-foreground mb-6">
                Showing {filteredNetworks.length} network{filteredNetworks.length !== 1 ? "s" : ""}
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNetworks.map((network) => (
                  <NetworkCard key={network.id} {...network} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">No networks found</h3>
              <p className="text-muted-foreground">Try a different search term</p>
            </div>
          )}
        </div>
      </section>
    </PublicLayout>
  );
};

export default Networks;
