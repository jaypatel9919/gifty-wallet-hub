import PublicLayout from "@/components/layout/PublicLayout";
import TestimonialCard, { Testimonial } from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Regular User",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    content: "Finally, a gift card app that actually makes sense! I love being able to manage all my cards in one place. The instant gifting feature saved me during last-minute birthday shopping.",
    rating: 5,
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Small Business Owner",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    content: "As a store owner, GoToGifty has been a game-changer. Our gift card sales increased 40% since joining. The milestone rewards keep customers coming back!",
    rating: 5,
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Network Admin - ShopLocal",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    content: "Managing our network of 25 stores used to be a nightmare. Now settlements are automatic, and our merchants are thrilled with the increased foot traffic.",
    rating: 5,
  },
  {
    id: "4",
    name: "David Kim",
    role: "Frequent Gifter",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    content: "The temporary access sharing is brilliant! I shared my coffee card with my team for a week. No more passing around physical cards or splitting bills.",
    rating: 4,
  },
  {
    id: "5",
    name: "Lisa Thompson",
    role: "Fashion Hub Owner",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
    content: "The Smart Terminal makes redemptions so easy. Our staff loves it - large buttons, clear display, and OTP verification gives us peace of mind.",
    rating: 5,
  },
  {
    id: "6",
    name: "James Wilson",
    role: "Tech Enthusiast",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    content: "Clean design, intuitive UX, and the security features are top-notch. This is how digital products should be built. Impressed!",
    rating: 5,
  },
];

const Testimonials = () => {
  const [filter, setFilter] = useState<"all" | "users" | "business">("all");

  const filteredTestimonials = testimonials.filter(t => {
    if (filter === "all") return true;
    if (filter === "users") return t.role.includes("User") || t.role.includes("Gifter") || t.role.includes("Enthusiast");
    return t.role.includes("Owner") || t.role.includes("Admin");
  });

  return (
    <PublicLayout>
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What People Are Saying
          </h1>
          <p className="text-muted-foreground">
            Hear from our community of users and business partners
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-10">
          <Button
            variant={filter === "all" ? "accent" : "outline"}
            onClick={() => setFilter("all")}
          >
            All Reviews
          </Button>
          <Button
            variant={filter === "users" ? "accent" : "outline"}
            onClick={() => setFilter("users")}
          >
            From Users
          </Button>
          <Button
            variant={filter === "business" ? "accent" : "outline"}
            onClick={() => setFilter("business")}
          >
            From Businesses
          </Button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* CTA */}
        <div className="bg-muted/50 rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Join Our Community
          </h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Experience the future of gift cards. Sign up today and see why thousands trust GoToGifty.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/signup">
              <Button variant="accent" size="lg">Get Started Free</Button>
            </Link>
            <Link to="/support">
              <Button variant="outline" size="lg">Partner With Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default Testimonials;
