import PublicLayout from "@/components/layout/PublicLayout";
import { Button } from "@/components/ui/button";
import { Bell, Gift, CreditCard, Percent, Info, Check, Trash2 } from "lucide-react";
import { useState } from "react";

const notifications = [
  {
    id: "1",
    type: "gift",
    title: "Gift Received!",
    message: "Sarah sent you a $50 gift card for Fashion Hub",
    time: "2 hours ago",
    read: false,
  },
  {
    id: "2",
    type: "offer",
    title: "New Offer Available",
    message: "20% off at all ShopLocal Network stores this weekend",
    time: "5 hours ago",
    read: false,
  },
  {
    id: "3",
    type: "transaction",
    title: "Transaction Complete",
    message: "Payment of $45.00 at Fashion Hub confirmed",
    time: "1 day ago",
    read: true,
  },
  {
    id: "4",
    type: "system",
    title: "Security Alert",
    message: "New login detected from New York, NY",
    time: "2 days ago",
    read: true,
  },
  {
    id: "5",
    type: "offer",
    title: "Limited Time Offer",
    message: "Double cashback on all purchases until Friday",
    time: "3 days ago",
    read: true,
  },
];

const typeIcons = {
  gift: Gift,
  offer: Percent,
  transaction: CreditCard,
  system: Info,
};

const Notifications = () => {
  const [filter, setFilter] = useState("all");
  const [notifs, setNotifs] = useState(notifications);

  const filteredNotifs = filter === "all" 
    ? notifs 
    : notifs.filter((n) => n.type === filter);

  const unreadCount = notifs.filter((n) => !n.read).length;

  const markAllRead = () => {
    setNotifs(notifs.map((n) => ({ ...n, read: true })));
  };

  return (
    <PublicLayout isLoggedIn={true}>
      <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-foreground">Notifications</h1>
            <p className="text-muted-foreground">
              {unreadCount} unread notification{unreadCount !== 1 ? "s" : ""}
            </p>
          </div>
          <Button variant="outline" onClick={markAllRead}>
            <Check className="h-4 w-4 mr-2" />
            Mark All Read
          </Button>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {[
            { id: "all", label: "All" },
            { id: "gift", label: "Gifts" },
            { id: "offer", label: "Offers" },
            { id: "transaction", label: "Transactions" },
            { id: "system", label: "System" },
          ].map((f) => (
            <Button
              key={f.id}
              variant={filter === f.id ? "accent" : "outline"}
              size="sm"
              onClick={() => setFilter(f.id)}
              className="flex-shrink-0"
            >
              {f.label}
            </Button>
          ))}
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {filteredNotifs.map((notif) => {
            const Icon = typeIcons[notif.type as keyof typeof typeIcons];
            return (
              <div
                key={notif.id}
                className={`bg-card border rounded-xl p-4 flex gap-4 transition-colors ${
                  notif.read ? "border-border" : "border-accent bg-accent/5"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    notif.type === "gift"
                      ? "bg-pink-100 text-pink-600"
                      : notif.type === "offer"
                      ? "bg-amber-100 text-amber-600"
                      : notif.type === "transaction"
                      ? "bg-emerald-100 text-emerald-600"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-foreground">{notif.title}</h3>
                      <p className="text-sm text-muted-foreground">{notif.message}</p>
                    </div>
                    {!notif.read && (
                      <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0 mt-2" />
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">{notif.time}</p>
                </div>
                <button className="text-muted-foreground hover:text-destructive transition-colors p-2">
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            );
          })}
        </div>

        {filteredNotifs.length === 0 && (
          <div className="text-center py-16">
            <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-semibold text-foreground">No notifications</h3>
            <p className="text-muted-foreground">You're all caught up!</p>
          </div>
        )}
      </div>
    </PublicLayout>
  );
};

export default Notifications;
