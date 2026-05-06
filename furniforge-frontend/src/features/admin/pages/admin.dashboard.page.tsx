import { DollarSign, Users, Package } from "lucide-react";
import { StatCard } from "../components/stat-card";
import { SectionCard } from "../components/section-card";
import { RevenueChart } from "../components/revenue-chart";

const AdminDashboardPage = () => {
  return (
    <div className="space-y-6">

      {/* Title */}
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground text-sm">
          Welcome back, Admin
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard label="Revenue" value="₹2,80,000" icon={DollarSign} />
        <StatCard label="Users" value="120" icon={Users} />
        <StatCard label="Projects" value="18" icon={Package} />
      </div>

      {/* Revenue Chart */}
      <SectionCard title="Revenue Overview">
        <RevenueChart />
      </SectionCard>

      {/* Example Section */}
      <SectionCard title="Recent Activity">
        <p className="text-sm text-muted-foreground">
          No recent activity
        </p>
      </SectionCard>

    </div>
  );
};

export default AdminDashboardPage;