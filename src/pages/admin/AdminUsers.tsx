import AdminLayout from "@/components/layout/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, Edit, Trash2, Shield, Mail } from "lucide-react";

const users = [
  { id: "1", name: "John Doe", email: "john@example.com", role: "User", cards: 5, spent: "$1,250", status: "Active" },
  { id: "2", name: "Sarah Smith", email: "sarah@example.com", role: "User", cards: 3, spent: "$890", status: "Active" },
  { id: "3", name: "Mike Wilson", email: "mike@example.com", role: "Store Admin", cards: 0, spent: "$0", status: "Active" },
  { id: "4", name: "Emily Brown", email: "emily@example.com", role: "Network Admin", cards: 2, spent: "$450", status: "Suspended" },
  { id: "5", name: "David Lee", email: "david@example.com", role: "Super Admin", cards: 0, spent: "$0", status: "Active" },
];

const AdminUsers = () => {
  return (
    <AdminLayout role="super-admin" title="Users & Roles">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search users..." className="pl-10" />
        </div>
        <Button variant="accent">
          <Plus className="h-4 w-4 mr-2" />
          Add User
        </Button>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">User</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Role</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Cards</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Total Spent</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Status</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground font-semibold text-sm">
                        {user.name.split(" ").map(n => n[0]).join("")}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{user.name}</p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <Mail className="h-3 w-3" />
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`flex items-center gap-1 ${user.role.includes("Admin") ? "text-accent" : "text-foreground"}`}>
                      {user.role.includes("Admin") && <Shield className="h-4 w-4" />}
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-foreground">{user.cards}</td>
                  <td className="px-6 py-4 text-foreground">{user.spent}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user.status === "Active" ? "status-active" : "status-blocked"
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon-sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon-sm" className="text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
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

export default AdminUsers;
