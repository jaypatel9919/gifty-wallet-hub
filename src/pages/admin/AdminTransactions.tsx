import AdminLayout from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, Download, ArrowUpRight, ArrowDownRight } from "lucide-react";

const transactions = [
  { id: "1", card: "•••• 4521", user: "John Doe", store: "Fashion Hub", network: "ShopLocal", type: "Load", amount: "+$50.00", time: "2 min ago" },
  { id: "2", card: "•••• 8847", user: "Sarah Smith", store: "Gourmet Delights", network: "Dine & Discover", type: "Redeem", amount: "-$32.50", time: "15 min ago" },
  { id: "3", card: "•••• 2233", user: "Mike Wilson", store: "Tech Zone", network: "-", type: "Load", amount: "+$100.00", time: "1 hour ago" },
  { id: "4", card: "•••• 1234", user: "Emily Brown", store: "Fashion Hub", network: "ShopLocal", type: "Transfer", amount: "$75.00", time: "2 hours ago" },
  { id: "5", card: "•••• 5678", user: "David Lee", store: "Beauty Lounge", network: "-", type: "Refund", amount: "+$25.00", time: "3 hours ago" },
];

const AdminTransactions = () => {
  return (
    <AdminLayout role="super-admin" title="Global Transactions">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search transactions..." className="pl-10" />
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Card</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">User</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Store</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Network</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Type</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Amount</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {transactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 font-mono text-foreground">{tx.card}</td>
                  <td className="px-6 py-4 text-foreground">{tx.user}</td>
                  <td className="px-6 py-4 text-foreground">{tx.store}</td>
                  <td className="px-6 py-4 text-muted-foreground">{tx.network}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      tx.type === "Load" ? "bg-emerald-100 text-emerald-700" :
                      tx.type === "Redeem" ? "bg-red-100 text-red-700" :
                      tx.type === "Refund" ? "bg-blue-100 text-blue-700" :
                      "bg-purple-100 text-purple-700"
                    }`}>
                      {tx.type}
                    </span>
                  </td>
                  <td className={`px-6 py-4 font-semibold ${
                    tx.amount.startsWith("+") ? "text-emerald-600" : 
                    tx.amount.startsWith("-") ? "text-red-600" : "text-foreground"
                  }`}>
                    {tx.amount}
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{tx.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminTransactions;
