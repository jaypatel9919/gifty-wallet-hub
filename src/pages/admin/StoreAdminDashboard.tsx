import AdminLayout from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, CreditCard, ArrowUpRight, ArrowDownRight, Terminal, Plus, FileText } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const weeklyData = [
  { name: "Mon", loads: 1200, redeems: 900 },
  { name: "Tue", loads: 800, redeems: 650 },
  { name: "Wed", loads: 1500, redeems: 1200 },
  { name: "Thu", loads: 1800, redeems: 1400 },
  { name: "Fri", loads: 2200, redeems: 1900 },
  { name: "Sat", loads: 2800, redeems: 2400 },
  { name: "Sun", loads: 1600, redeems: 1300 },
];

const recentTransactions = [
  { id: "1", card: "•••• 4521", type: "Load", amount: "+$50.00", time: "2 min ago" },
  { id: "2", card: "•••• 8847", type: "Redeem", amount: "-$32.50", time: "15 min ago" },
  { id: "3", card: "•••• 2233", type: "Load", amount: "+$100.00", time: "1 hour ago" },
  { id: "4", card: "•••• 1234", type: "Redeem", amount: "-$45.00", time: "2 hours ago" },
];

const StoreAdminDashboard = () => {
  return (
    <AdminLayout role="store-admin" title="Store Dashboard">
      {/* Quick Actions */}
      <div className="flex flex-wrap gap-3 mb-8">
        <Link to="/store-admin/terminal">
          <Button variant="accent" size="lg">
            <Terminal className="h-5 w-5 mr-2" />
            Open Terminal
          </Button>
        </Link>
        <Link to="/store-admin/plans">
          <Button variant="outline" size="lg">
            <Plus className="h-5 w-5 mr-2" />
            Create Plan
          </Button>
        </Link>
        <Button variant="outline" size="lg">
          <FileText className="h-5 w-5 mr-2" />
          View Bill Book
        </Button>
      </div>

      {/* Metrics */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
              <ArrowUpRight className="h-5 w-5 text-emerald-600" />
            </div>
            <span className="flex items-center text-xs text-emerald-600">
              <ArrowUpRight className="h-3 w-3" />
              12%
            </span>
          </div>
          <p className="text-2xl font-bold text-foreground">$1,250</p>
          <p className="text-sm text-muted-foreground">Today's Loads</p>
        </div>

        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl gift-gradient flex items-center justify-center">
              <ArrowDownRight className="h-5 w-5 text-white" />
            </div>
          </div>
          <p className="text-2xl font-bold text-foreground">$890</p>
          <p className="text-sm text-muted-foreground">Today's Redeems</p>
        </div>

        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <CreditCard className="h-5 w-5 text-accent" />
            </div>
          </div>
          <p className="text-2xl font-bold text-foreground">456</p>
          <p className="text-sm text-muted-foreground">Active Cards</p>
        </div>

        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-blue-600" />
            </div>
          </div>
          <p className="text-2xl font-bold text-foreground">$12,500</p>
          <p className="text-sm text-muted-foreground">This Week</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Chart */}
        <div className="lg:col-span-2 bg-card border border-border rounded-xl p-6">
          <h3 className="font-semibold text-foreground mb-6">Last 7 Days Activity</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="loads"
                  stroke="hsl(174, 62%, 47%)"
                  fill="hsl(174, 62%, 47%, 0.2)"
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="redeems"
                  stroke="hsl(340, 80%, 55%)"
                  fill="hsl(340, 80%, 55%, 0.2)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="font-semibold text-foreground mb-4">Recent Transactions</h3>
          <div className="space-y-3">
            {recentTransactions.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <div>
                  <p className="font-medium text-foreground font-mono text-sm">{tx.card}</p>
                  <p className="text-xs text-muted-foreground">{tx.type} • {tx.time}</p>
                </div>
                <span className={`font-semibold ${tx.type === "Load" ? "text-emerald-600" : "text-foreground"}`}>
                  {tx.amount}
                </span>
              </div>
            ))}
          </div>
          <Button variant="ghost" className="w-full mt-4" size="sm">
            View All Transactions
          </Button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default StoreAdminDashboard;
