import PublicLayout from "@/components/layout/PublicLayout";
import UpdatesFeed from "@/components/UpdatesFeed";
import { Update } from "@/components/UpdateCard";

const updates: Update[] = [
  {
    id: "1",
    sourceType: "network",
    sourceId: "1",
    sourceName: "ShopLocal Network",
    sourceLogo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop",
    title: "Holiday Season Sale - 20% Extra Value!",
    content: "Load any ShopLocal card this December and get 20% extra value. Perfect for holiday shopping across all 25 network stores.",
    type: "offer",
    publishedAt: "2 hours ago",
  },
  {
    id: "2",
    sourceType: "store",
    sourceId: "1",
    sourceName: "Fashion Hub",
    sourceLogo: "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=100&h=100&fit=crop",
    title: "New Winter Collection Arrived",
    content: "Check out our latest winter collection! Gift card holders get early access and free gift wrapping on all purchases.",
    type: "announcement",
    publishedAt: "5 hours ago",
  },
  {
    id: "3",
    sourceType: "store",
    sourceId: "2",
    sourceName: "Tech Zone",
    sourceLogo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=100&h=100&fit=crop",
    title: "Flash Sale This Weekend",
    content: "48-hour flash sale on all electronics! Use your Tech Zone gift card for additional 5% off all purchases over $200.",
    type: "offer",
    publishedAt: "1 day ago",
  },
  {
    id: "4",
    sourceType: "network",
    sourceId: "2",
    sourceName: "Dine & Discover",
    sourceLogo: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=100&h=100&fit=crop",
    title: "New Restaurant Partner: Bella Italia",
    content: "Welcome Bella Italia to our network! Your Dine & Discover cards are now accepted at their downtown and uptown locations.",
    type: "news",
    publishedAt: "2 days ago",
  },
  {
    id: "5",
    sourceType: "store",
    sourceId: "3",
    sourceName: "Beauty Lounge",
    sourceLogo: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=100&h=100&fit=crop",
    title: "Spa Day Event - January 15th",
    content: "Join us for an exclusive spa day event! Card members get priority booking and complimentary refreshments.",
    type: "event",
    publishedAt: "3 days ago",
  },
  {
    id: "6",
    sourceType: "network",
    sourceId: "3",
    sourceName: "Style Collective",
    sourceLogo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=100&h=100&fit=crop",
    title: "Milestone Rewards Program Launch",
    content: "Introducing milestone rewards across all Style Collective stores! Spend and earn free top-ups as you shop.",
    type: "announcement",
    publishedAt: "4 days ago",
  },
];

const Updates = () => {
  return (
    <PublicLayout isLoggedIn={true}>
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
              Updates & Announcements
            </h1>
            <p className="text-muted-foreground">
              Latest news and offers from your stores and networks
            </p>
          </div>

          <UpdatesFeed updates={updates} showFilters />
        </div>
      </div>
    </PublicLayout>
  );
};

export default Updates;
