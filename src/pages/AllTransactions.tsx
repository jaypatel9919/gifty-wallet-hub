import PublicLayout from "@/components/layout/PublicLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, Download, ArrowUpRight, ArrowDownLeft, Gift } from "lucide-react";

const mockTransactions = [
  {
    id: "1",
    type: "load",
    storeName: "Fashion Hub",
    amount: "+$100.00",
    date: "Dec 10, 2024",
    time: "2:30 PM",
    reference: "TXN-001234",
  },
  {
    id: "2",
    type: "spend",
    storeName: "Fashion Hub",
    amount: "-$45.00",
    date: "Dec 9, 2024",
    time: "11:15 AM",
    reference: "TXN-001233",
  },
  {
    id: "3",
    type: "gift",
    storeName: "Tech Zone",
    amount: "+$200.00",
    date: "Dec 8, 2024",
    time: "4:00 PM",
    reference: "TXN-001232",
  },
  {
    id: "4",
    type: "spend",
    storeName: "Coffee Corner",
    amount: "-$12.50",
    date: "Dec 7, 2024",
    time: "9:30 AM",
    reference: "TXN-001231",
  },
  {
    id: "5",
    type: "load",
    storeName: "Book Haven",
    amount: "+$50.00",
    date: "Dec 6, 2024",
    time: "3:45 PM",
    reference: "TXN-001230",
  },
  {
    id: "6",
    type: "spend",
    storeName: "Tech Zone",
    amount: "-$89.99",
    date: "Dec 5, 2024",
    time: "1:20 PM",
    reference: "TXN-001229",
  },
  {
    id: "7",
    type: "gift",
    storeName: "Beauty Essentials",
    amount: "+$75.00",
    date: "Dec 4, 2024",
    time: "6:00 PM",
    reference: "TXN-001228",
  },
  {
    id: "8",
    type: "spend",
    storeName: "Sports Arena",
    amount: "-$35.00",
    date: "Dec 3, 2024",
    time: "10:00 AM",
    reference: "TXN-001227",
  },
];

const getIcon = (type: string) => {
  switch (type) {
    case "load":
      return <ArrowDownLeft className="h-4 w-4 text-emerald-600" />;
    case "spend":
      return <ArrowUpRight className="h-4 w-4 text-foreground" />;
    case "gift":
      return <Gift className="h-4 w-4 text-accent" />;
    default:
      return null;
  }
};

const getIconBg = (type: string) => {
  switch (type) {
    case "load":
      return "bg-emerald-100 dark:bg-emerald-900/30";
    case "spend":
      return "bg-muted";
    case "gift":
      return "bg-accent/10";
    default:
      return "bg-muted";
  }
};

const AllTransactions = () => {
  return (
    <PublicLayout isLoggedIn={true}>
      <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-foreground">
              Transaction History
            </h1>
            <p className="text-muted-foreground mt-1">
              View all your card transactions
            </p>
          </div>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search transactions..." className="pl-10" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="load">Loads</SelectItem>
              <SelectItem value="spend">Spends</SelectItem>
              <SelectItem value="gift">Gifts</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Date Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Time</SelectItem>
              <SelectItem value="7days">Last 7 Days</SelectItem>
              <SelectItem value="30days">Last 30 Days</SelectItem>
              <SelectItem value="90days">Last 90 Days</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Transactions List */}
        <div className="bg-card border border-border rounded-2xl overflow-hidden">
          <div className="divide-y divide-border">
            {mockTransactions.map((tx) => (
              <div
                key={tx.id}
                className="flex items-center justify-between p-4 hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${getIconBg(
                      tx.type
                    )}`}
                  >
                    {getIcon(tx.type)}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{tx.storeName}</p>
                    <p className="text-sm text-muted-foreground">
                      {tx.date} at {tx.time}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className={`font-semibold ${
                      tx.type === "spend" ? "text-foreground" : "text-emerald-600"
                    }`}
                  >
                    {tx.amount}
                  </p>
                  <p className="text-xs text-muted-foreground font-mono">
                    {tx.reference}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-6">
          <Button variant="outline">Load More</Button>
        </div>
      </div>
    </PublicLayout>
  );
};

export default AllTransactions;
