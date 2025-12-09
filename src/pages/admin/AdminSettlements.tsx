import AdminLayout from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Download, ArrowUpRight, ArrowDownRight, Check, Clock } from "lucide-react";

const settlements = [
  { id: "1", network: "ShopLocal Network", period: "Dec 1-7", amount: 12500, status: "Completed", date: "Dec 8, 2024" },
  { id: "2", network: "Dine & Discover", period: "Dec 1-7", amount: 8900, status: "Processing", date: "Dec 8, 2024" },
  { id: "3", network: "Style Collective", period: "Dec 1-7", amount: 15600, status: "Pending", date: "Dec 8, 2024" },
  { id: "4", network: "ShopLocal Network", period: "Nov 24-30", amount: 11200, status: "Completed", date: "Dec 1, 2024" },
  { id: "5", network: "Tech Alliance", period: "Nov 24-30", amount: 6700, status: "Completed", date: "Dec 1, 2024" },
];

const AdminSettlements = () => {
  const totalProcessed = settlements.filter(s => s.status === "Completed").reduce((sum, s) => sum + s.amount, 0);
  const totalPending = settlements.filter(s => s.status !== "Completed").reduce((sum, s) => sum + s.amount, 0);

  return (
    <AdminLayout role="super-admin" title="Settlements">
      {/* Summary Cards */}
      <div className="grid sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <Check className="h-5 w-5 text-emerald-600" />
            <span className="text-sm text-muted-foreground">Total Settled</span>
          </div>
          <p className="text-2xl font-bold text-emerald-600">${totalProcessed.toLocaleString()}</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="h-5 w-5 text-amber-600" />
            <span className="text-sm text-muted-foreground">Pending</span>
          </div>
          <p className="text-2xl font-bold text-amber-600">${totalPending.toLocaleString()}</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-sm text-muted-foreground">This Week</span>
          </div>
          <p className="text-2xl font-bold text-foreground">${(totalProcessed + totalPending).toLocaleString()}</p>
        </div>
      </div>

      <div className="flex justify-end mb-4">
        <Button variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </Button>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Network</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Period</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Amount</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Status</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Date</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {settlements.map((s) => (
                <tr key={s.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4 font-medium text-foreground">{s.network}</td>
                  <td className="px-6 py-4 text-muted-foreground">{s.period}</td>
                  <td className="px-6 py-4 font-semibold text-foreground">${s.amount.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      s.status === "Completed" ? "bg-emerald-100 text-emerald-700" :
                      s.status === "Processing" ? "bg-blue-100 text-blue-700" :
                      "status-pending"
                    }`}>
                      {s.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{s.date}</td>
                  <td className="px-6 py-4">
                    <Button variant="outline" size="sm">
                      {s.status === "Pending" ? "Process" : "View"}
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

export default AdminSettlements;
