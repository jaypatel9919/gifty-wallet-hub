import AdminLayout from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Plus, Edit, Trash2, Megaphone, Tag, Calendar, Newspaper } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

const updates = [
  { id: "1", title: "Holiday Season Network-Wide Sale", type: "offer", status: "Published", publishedAt: "Dec 10, 2024", stores: "All Stores" },
  { id: "2", title: "New Store Partner: Bella Italia", type: "news", status: "Published", publishedAt: "Dec 8, 2024", stores: "N/A" },
  { id: "3", title: "Milestone Rewards Program Launch", type: "announcement", status: "Published", publishedAt: "Dec 5, 2024", stores: "All Stores" },
  { id: "4", title: "Network Annual Meetup", type: "event", status: "Scheduled", publishedAt: "Jan 15, 2025", stores: "N/A" },
];

const typeIcons = {
  announcement: Megaphone,
  offer: Tag,
  event: Calendar,
  news: Newspaper,
};

const typeColors = {
  announcement: "bg-accent/10 text-accent",
  offer: "bg-gift-pink/10 text-gift-pink",
  event: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
  news: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
};

const NetworkUpdates = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AdminLayout role="network-admin" title="Network Updates">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search updates..." className="pl-10" />
        </div>
        
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button variant="accent">
              <Plus className="h-4 w-4 mr-2" />
              Create Network Update
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Create Network Update</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div className="space-y-2">
                <Label>Update Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="announcement">Announcement</SelectItem>
                    <SelectItem value="offer">Offer</SelectItem>
                    <SelectItem value="news">News</SelectItem>
                    <SelectItem value="event">Event</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Title</Label>
                <Input placeholder="Update title..." />
              </div>
              <div className="space-y-2">
                <Label>Content</Label>
                <Textarea placeholder="Write your update..." rows={4} />
              </div>
              <div className="space-y-2">
                <Label>Applicable Stores</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select stores" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Network Stores</SelectItem>
                    <SelectItem value="selected">Selected Stores Only</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-3 pt-4">
                <Button variant="outline" className="flex-1" onClick={() => setIsOpen(false)}>
                  Save as Draft
                </Button>
                <Button variant="accent" className="flex-1" onClick={() => setIsOpen(false)}>
                  Publish Now
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Update</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Type</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Stores</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Published</th>
              <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {updates.map((update) => {
              const Icon = typeIcons[update.type as keyof typeof typeIcons];
              return (
                <tr key={update.id} className="hover:bg-muted/30">
                  <td className="py-3 px-4">
                    <span className="font-medium text-foreground">{update.title}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs font-medium ${typeColors[update.type as keyof typeof typeColors]}`}>
                      <Icon className="h-3 w-3" />
                      {update.type.charAt(0).toUpperCase() + update.type.slice(1)}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{update.stores}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      update.status === "Published" ? "status-active" :
                      update.status === "Draft" ? "bg-muted text-muted-foreground" :
                      "status-pending"
                    }`}>
                      {update.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-muted-foreground">{update.publishedAt}</td>
                  <td className="py-3 px-4">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default NetworkUpdates;
