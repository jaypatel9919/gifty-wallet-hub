import AdminLayout from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Download, ArrowUpRight, ArrowDownRight } from "lucide-react";

const billBookData = [
  { period: "Dec 1-7", sold: 4500, redeemed: 3200, net: 1300, status: "Settled" },
  { period: "Dec 8-14", sold: 5200, redeemed: 4800, net: 400, status: "Pending" },
  { period: "Nov 24-30", sold: 3800, redeemed: 4200, net: -400, status: "Settled" },
  { period: "Nov 17-23", sold: 4100, redeemed: 3500, net: 600, status: "Settled" },
];

const StoreBillBook = () => {
  return (
    <AdminLayout role="store-admin" title="Bill Book">
      {/* Summary Cards */}
      <div className="grid sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <ArrowUpRight className="h-5 w-5 text-emerald-600" />
            <span className="text-sm text-muted-foreground">Cards Sold (This Month)</span>
          </div>
          <p className="text-2xl font-bold text-foreground">$12,500</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <ArrowDownRight className="h-5 w-5 text-gift-pink" />
            <span className="text-sm text-muted-foreground">Cards Redeemed</span>
          </div>
          <p className="text-2xl font-bold text-foreground">$9,800</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-sm text-muted-foreground">Net to Network</span>
          </div>
          <p className="text-2xl font-bold text-emerald-600">+$2,700</p>
        </div>
      </div>

      <div className="flex justify-end mb-4">
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export CSV
        </Button>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Period</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Cards Sold</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Redeemed at Store</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Net Position</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {billBookData.map((row, i) => (
                <tr key={i} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 font-medium text-foreground">{row.period}</td>
                  <td className="px-6 py-4 text-foreground">${row.sold.toLocaleString()}</td>
                  <td className="px-6 py-4 text-foreground">${row.redeemed.toLocaleString()}</td>
                  <td className={`px-6 py-4 font-semibold ${row.net >= 0 ? "text-emerald-600" : "text-red-600"}`}>
                    {row.net >= 0 ? "+" : ""}${row.net.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      row.status === "Settled" ? "bg-gray-100 text-gray-700" : "status-pending"
                    }`}>
                      {row.status}
                    </span>
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

export default StoreBillBook;
