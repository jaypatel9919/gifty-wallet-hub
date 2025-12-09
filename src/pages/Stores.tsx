import PublicLayout from "@/components/layout/PublicLayout";
import StoreCard from "@/components/cards/StoreCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Filter } from "lucide-react";
import { useState } from "react";

// Demo data
const allStores = [
  { id: "1", name: "Fashion Hub", logo: "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=100&h=100&fit=crop", city: "New York", category: "Fashion", isNetwork: true },
  { id: "2", name: "Tech Zone", logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=100&h=100&fit=crop", city: "San Francisco", category: "Electronics", isNetwork: false },
  { id: "3", name: "Gourmet Delights", logo: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=100&h=100&fit=crop", city: "Chicago", category: "Dining", isNetwork: true },
  { id: "4", name: "Beauty Lounge", logo: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=100&h=100&fit=crop", city: "Los Angeles", category: "Beauty", isNetwork: false },
  { id: "5", name: "Sports Arena", logo: "https://images.unsplash.com/photo-1461896836934- voices?w=100&h=100&fit=crop", city: "Miami", category: "Sports", isNetwork: true },
  { id: "6", name: "Book Haven", logo: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=100&h=100&fit=crop", city: "Boston", category: "Books", isNetwork: false },
  { id: "7", name: "Home Decor Plus", logo: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=100&h=100&fit=crop", city: "Seattle", category: "Home", isNetwork: true },
  { id: "8", name: "Pet Paradise", logo: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=100&h=100&fit=crop", city: "Denver", category: "Pets", isNetwork: false },
];

const categories = ["All", "Fashion", "Electronics", "Dining", "Beauty", "Sports", "Books", "Home", "Pets"];

const Stores = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredStores = allStores.filter((store) => {
    const matchesSearch = store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         store.city.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || store.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <PublicLayout>
      {/* Header */}
      <section className="bg-muted/50 py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            All Stores
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Discover stores offering digital gift cards. Find your favorites and start saving.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 border-b border-border bg-card sticky top-16 lg:top-20 z-40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search stores by name or city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "accent" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="flex-shrink-0"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Store Grid */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          {filteredStores.length > 0 ? (
            <>
              <p className="text-muted-foreground mb-6">
                Showing {filteredStores.length} store{filteredStores.length !== 1 ? "s" : ""}
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredStores.map((store) => (
                  <StoreCard key={store.id} {...store} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">No stores found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>
    </PublicLayout>
  );
};

export default Stores;
