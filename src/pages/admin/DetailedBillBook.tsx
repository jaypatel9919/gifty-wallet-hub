import AdminLayout from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Download, Filter, ArrowUpRight, ArrowDownRight, Calendar } from "lucide-react";
import { useState } from "react";

interface DetailedBillBookProps {
  role: "super-admin" | "network-admin";
}

const billBookData = [
  { id: "1", store: "Fashion Hub", network: "ShopLocal", cardsSold: 12500, cardsRedeemed: 9800, netPosition: 2700, status: "Receivable", period: "Dec 2024" },
  { id: "2", store: "Gourmet Delights", network: "Dine & Discover", cardsSold: 8900, cardsRedeemed: 11200, netPosition: -2300, status: "Due", period: "Dec 2024" },
  { id: "3", store: "Tech Zone", network: "-", cardsSold: 15600, cardsRedeemed: 12100, netPosition: 3500, status: "Receivable", period: "Dec 2024" },
  { id: "4", store: "Home Decor Plus", network: "ShopLocal", cardsSold: 6700, cardsRedeemed: 5900, netPosition: 800, status: "Settled", period: "Nov 2024" },
  { id: "5", store: "Sports Arena", network: "ShopLocal", cardsSold: 9200, cardsRedeemed: 8400, netPosition: 800, status: "Pending", period: "Dec 2024" },
  { id: "6", store: "Beauty Lounge", network: "-", cardsSold: 4500, cardsRedeemed: 5100, netPosition: -600, status: "Due", period: "Dec 2024" },
];

const DetailedBillBook = ({ role }: DetailedBillBookProps) => {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filteredData = billBookData.filter((item) => {
    if (filter !== "all" && item.status.toLowerCase() !== filter) return false;
    if (search && !item.store.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const totals = filteredData.reduce(
    (acc, item) => ({
      sold: acc.sold + item.cardsSold,
      redeemed: acc.redeemed + item.cardsRedeemed,
      net: acc.net + item.netPosition,
    }),
    { sold: 0, redeemed: 0, net: 0 }
  );

  return (
    <AdminLayout role={role} title="Detailed Bill Book">
      {/* Summary Cards */}
      <div className="grid sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <ArrowUpRight className="h-5 w-5 text-emerald-600" />
            <span className="text-sm text-muted-foreground">Total Cards Sold</span>
          </div>
          <p className="text-2xl font-bold text-foreground">${totals.sold.toLocaleString()}</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <ArrowDownRight className="h-5 w-5 text-rose-600" />
            <span className="text-sm text-muted-foreground">Total Redeemed</span>
          </div>
          <p className="text-2xl font-bold text-foreground">${totals.redeemed.toLocaleString()}</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="h-5 w-5 text-accent" />
            <span className="text-sm text-muted-foreground">Net Position</span>
          </div>
          <p className={`text-2xl font-bold ${totals.net >= 0 ? "text-emerald-600" : "text-rose-600"}`}>
            {totals.net >= 0 ? "+" : ""}${totals.net.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search stores..."
            className="pl-10"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-40">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="receivable">Receivable</SelectItem>
            <SelectItem value="due">Due</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="settled">Settled</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export CSV
        </Button>
      </div>

      {/* Table */}
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Store</th>
                {role === "super-admin" && (
                  <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Network</th>
                )}
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Period</th>
                <th className="text-right px-6 py-4 text-sm font-medium text-muted-foreground">Cards Sold</th>
                <th className="text-right px-6 py-4 text-sm font-medium text-muted-foreground">Cards Redeemed</th>
                <th className="text-right px-6 py-4 text-sm font-medium text-muted-foreground">Net Position</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Status</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredData.map((row) => (
                <tr key={row.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 font-medium text-foreground">{row.store}</td>
                  {role === "super-admin" && (
                    <td className="px-6 py-4 text-muted-foreground">{row.network}</td>
                  )}
                  <td className="px-6 py-4 text-muted-foreground">{row.period}</td>
                  <td className="px-6 py-4 text-right text-foreground">${row.cardsSold.toLocaleString()}</td>
                  <td className="px-6 py-4 text-right text-foreground">${row.cardsRedeemed.toLocaleString()}</td>
                  <td className={`px-6 py-4 text-right font-semibold ${row.netPosition >= 0 ? "text-emerald-600" : "text-rose-600"}`}>
                    {row.netPosition >= 0 ? "+" : ""}${row.netPosition.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      row.status === "Receivable" ? "bg-emerald-100 text-emerald-700" :
                      row.status === "Due" ? "bg-rose-100 text-rose-700" :
                      row.status === "Settled" ? "bg-blue-100 text-blue-700" :
                      "status-pending"
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Button variant="ghost" size="sm">View Details</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default DetailedBillBook;
