import AdminLayout from "@/components/layout/AdminLayout";
import { TrendingUp, Users, Store, Building2, CreditCard, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const areaData = [
  { name: "Jan", loads: 4000, redeems: 2400 },
  { name: "Feb", loads: 3000, redeems: 1398 },
  { name: "Mar", loads: 5000, redeems: 3800 },
  { name: "Apr", loads: 4780, redeems: 3908 },
  { name: "May", loads: 5890, redeems: 4800 },
  { name: "Jun", loads: 6390, redeems: 5200 },
  { name: "Jul", loads: 7490, redeems: 6100 },
];

const barData = [
  { name: "ShopLocal", value: 12500 },
  { name: "Dine & Discover", value: 9800 },
  { name: "Style Collective", value: 8700 },
  { name: "Tech Alliance", value: 6500 },
  { name: "Wellness Circle", value: 5200 },
];

const recentEvents = [
  { id: "1", event: "Store ABC joined Network XYZ", time: "2 min ago" },
  { id: "2", event: "High-value transaction: $500 at Fashion Hub", time: "15 min ago" },
  { id: "3", event: "New network admin added to ShopLocal", time: "1 hour ago" },
  { id: "4", event: "Settlement completed for Dine & Discover", time: "3 hours ago" },
];

const SuperAdminDashboard = () => {
  return (
    <AdminLayout role="super-admin" title="Dashboard">
      {/* Metrics */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <Users className="h-5 w-5 text-accent" />
            </div>
            <span className="flex items-center text-xs text-emerald-600">
              <ArrowUpRight className="h-3 w-3" />
              12%
            </span>
          </div>
          <p className="text-2xl font-bold text-foreground">24,521</p>
          <p className="text-sm text-muted-foreground">Total Users</p>
        </div>

        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl gift-gradient flex items-center justify-center">
              <CreditCard className="h-5 w-5 text-white" />
            </div>
            <span className="flex items-center text-xs text-emerald-600">
              <ArrowUpRight className="h-3 w-3" />
              8%
            </span>
          </div>
          <p className="text-2xl font-bold text-foreground">$1.2M</p>
          <p className="text-sm text-muted-foreground">Total Loaded</p>
        </div>

        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-emerald-600" />
            </div>
            <span className="flex items-center text-xs text-red-600">
              <ArrowDownRight className="h-3 w-3" />
              3%
            </span>
          </div>
          <p className="text-2xl font-bold text-foreground">$890K</p>
          <p className="text-sm text-muted-foreground">Total Redeemed</p>
        </div>

        <div className="bg-card border border-border rounded-xl p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
              <Building2 className="h-5 w-5 text-blue-600" />
            </div>
          </div>
          <p className="text-2xl font-bold text-foreground">12 / 156</p>
          <p className="text-sm text-muted-foreground">Networks / Stores</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-card border border-border rounded-xl p-6">
          <h3 className="font-semibold text-foreground mb-6">Loads vs Redemptions</h3>
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
          <h3 className="font-semibold text-foreground mb-6">Top Networks</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis dataKey="name" type="category" stroke="hsl(var(--muted-foreground))" fontSize={10} width={80} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="value" fill="hsl(174, 62%, 47%)" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Events */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h3 className="font-semibold text-foreground mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {recentEvents.map((event) => (
            <div key={event.id} className="flex items-center justify-between py-3 border-b border-border last:border-0">
              <p className="text-foreground">{event.event}</p>
              <span className="text-sm text-muted-foreground">{event.time}</span>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default SuperAdminDashboard;
