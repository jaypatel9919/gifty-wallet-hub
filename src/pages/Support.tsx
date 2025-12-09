import PublicLayout from "@/components/layout/PublicLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

const Support = () => (
  <PublicLayout>
    <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Help & Support</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">Have a question? We're here to help. Reach out and we'll respond as soon as possible.</p>
      </div>
      <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="lg:col-span-2 bg-card border border-border rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-foreground mb-6">Send us a message</h2>
          <form className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="How can we help?" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Describe your issue or question..." rows={5} />
            </div>
            <Button variant="accent" size="lg">Send Message</Button>
          </form>
        </div>
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-muted-foreground">support@gotogifty.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-muted-foreground">123 Gift Street, NY 10001</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </PublicLayout>
);

export default Support;
