import AdminLayout from "@/components/layout/AdminLayout";
import { TrendingUp, Store, CreditCard, Users, ArrowUpRight } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const areaData = [
  { name: "Mon", loads: 2400, redeems: 1800 },
  { name: "Tue", loads: 1398, redeems: 1200 },
  { name: "Wed", loads: 3800, redeems: 2900 },
  { name: "Thu", loads: 3908, redeems: 3200 },
  { name: "Fri", loads: 4800, redeems: 4100 },
  { name: "Sat", loads: 5200, redeems: 4600 },
  { name: "Sun", loads: 4100, redeems: 3500 },
];

const storeComparison = [
  { name: "Fashion Hub", loads: 12500, redeems: 9800 },
  { name: "Gourmet Delights", loads: 9800, redeems: 7200 },
  { name: "Home Decor Plus", loads: 8700, redeems: 6500 },
  { name: "Sports Arena", loads: 6500, redeems: 5100 },
];

const NetworkAdminDashboard = () => {
  return (
    <AdminLayout role="network-admin" title="Network Dashboard">
      {/* Metrics */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl gift-gradient flex items-center justify-center">
              <CreditCard className="h-5 w-5 text-white" />
            </div>
            <span className="flex items-center text-xs text-emerald-600">
              <ArrowUpRight className="h-3 w-3" />
              15%
            </span>
          </div>
          <p className="text-2xl font-bold text-foreground">$125,000</p>
          <p className="text-sm text-muted-foreground">Total Loaded</p>
        </div>

        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-emerald-600" />
            </div>
          </div>
          <p className="text-2xl font-bold text-foreground">$98,500</p>
          <p className="text-sm text-muted-foreground">Total Redeemed</p>
        </div>

        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <CreditCard className="h-5 w-5 text-accent" />
            </div>
          </div>
          <p className="text-2xl font-bold text-foreground">1,234</p>
          <p className="text-sm text-muted-foreground">Active Cards</p>
        </div>

        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
              <Store className="h-5 w-5 text-blue-600" />
            </div>
          </div>
          <p className="text-2xl font-bold text-foreground">25</p>
          <p className="text-sm text-muted-foreground">Stores in Network</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="font-semibold text-foreground mb-6">Weekly Activity</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={areaData}>
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

        <div className="bg-card border border-border rounded-xl p-6">
          <h3 className="font-semibold text-foreground mb-6">Store Comparison</h3>
          <div className="space-y-4">
            {storeComparison.map((store, index) => (
              <div key={store.name}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-foreground font-medium">{store.name}</span>
                  <span className="text-muted-foreground">${store.loads.toLocaleString()}</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full gift-gradient rounded-full"
                    style={{ width: `${(store.loads / 12500) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bill Book Summary */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h3 className="font-semibold text-foreground mb-4">Payouts Summary</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 text-sm font-medium text-muted-foreground">Store</th>
                <th className="text-left py-3 text-sm font-medium text-muted-foreground">Cards Sold</th>
                <th className="text-left py-3 text-sm font-medium text-muted-foreground">Redeemed</th>
                <th className="text-left py-3 text-sm font-medium text-muted-foreground">Net Position</th>
                <th className="text-left py-3 text-sm font-medium text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {storeComparison.map((store) => {
                const net = store.loads - store.redeems;
                return (
                  <tr key={store.name}>
                    <td className="py-3 font-medium text-foreground">{store.name}</td>
                    <td className="py-3 text-foreground">${store.loads.toLocaleString()}</td>
                    <td className="py-3 text-foreground">${store.redeems.toLocaleString()}</td>
                    <td className={`py-3 font-medium ${net > 0 ? "text-emerald-600" : "text-red-600"}`}>
                      {net > 0 ? "+" : ""}${net.toLocaleString()}
                    </td>
                    <td className="py-3">
                      <span className="status-pending px-2 py-1 rounded-full text-xs font-medium">
                        Pending
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default NetworkAdminDashboard;
