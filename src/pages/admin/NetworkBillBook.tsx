import AdminLayout from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Download, ArrowUpRight, ArrowDownRight } from "lucide-react";

const billBookData = [
  { store: "Fashion Hub", sold: 12500, redeemed: 9800, net: 2700, status: "Receivable" },
  { store: "Gourmet Delights", sold: 8500, redeemed: 11200, net: -2700, status: "Due" },
  { store: "Home Decor Plus", sold: 6800, redeemed: 5100, net: 1700, status: "Receivable" },
  { store: "Sports Arena", sold: 4500, redeemed: 4500, net: 0, status: "Settled" },
];

const NetworkBillBook = () => {
  const totalReceivable = billBookData.filter(d => d.net > 0).reduce((sum, d) => sum + d.net, 0);
  const totalDue = billBookData.filter(d => d.net < 0).reduce((sum, d) => sum + Math.abs(d.net), 0);

  return (
    <AdminLayout role="network-admin" title="Bill Book">
      {/* Summary Cards */}
      <div className="grid sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <ArrowUpRight className="h-5 w-5 text-emerald-600" />
            <span className="text-sm text-muted-foreground">Total Receivable</span>
          </div>
          <p className="text-2xl font-bold text-emerald-600">${totalReceivable.toLocaleString()}</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <ArrowDownRight className="h-5 w-5 text-red-600" />
            <span className="text-sm text-muted-foreground">Total Due</span>
          </div>
          <p className="text-2xl font-bold text-red-600">${totalDue.toLocaleString()}</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-sm text-muted-foreground">Net Position</span>
          </div>
          <p className={`text-2xl font-bold ${totalReceivable - totalDue >= 0 ? "text-emerald-600" : "text-red-600"}`}>
            ${(totalReceivable - totalDue).toLocaleString()}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end mb-4">
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
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Cards Sold</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Cards Redeemed</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Net Position</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Status</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {billBookData.map((row, i) => (
                <tr key={i} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 font-medium text-foreground">{row.store}</td>
                  <td className="px-6 py-4 text-foreground">${row.sold.toLocaleString()}</td>
                  <td className="px-6 py-4 text-foreground">${row.redeemed.toLocaleString()}</td>
                  <td className={`px-6 py-4 font-semibold ${row.net >= 0 ? "text-emerald-600" : "text-red-600"}`}>
                    {row.net >= 0 ? "+" : ""}${row.net.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      row.status === "Receivable" ? "bg-emerald-100 text-emerald-700" :
                      row.status === "Due" ? "bg-red-100 text-red-700" :
                      "bg-gray-100 text-gray-700"
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Button variant="outline" size="sm">
                      {row.status === "Settled" ? "View" : "Settle"}
                    </Button>
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

export default NetworkBillBook;
