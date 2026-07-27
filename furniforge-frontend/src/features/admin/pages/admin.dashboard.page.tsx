import { useState } from "react";
import { CreditCard, TrendingUp, Star} from "lucide-react";
import { StatCard } from "../../dashboard/components/admin-stat-card";
import { SectionCard } from "../../../shared/components/common/section-card";
import { RevenueChart } from "../../dashboard/components/admin-revenue-chart";
import { BestDesigners } from "../../dashboard/components/admin-best-designers";
import { TopClients } from "../../dashboard/components/admin-top-clients";
import { PendingPayments } from "../../dashboard/components/admin-pending-payments";
import { TargetProgress } from "../../dashboard/components/admin-target-progress";
import { PageHeader } from "../../../shared/components/common/page-header";
import { AnimatedContainer } from "../../../shared/components/common/animated-container";
import { stats, weeklyData, monthlyData, yearlyData, bestDesigners, topClients, pendingPayments } from "../../dashboard/components/admin-dashboard-data";

const AdminDashboardPage = () => {
  const [period, setPeriod] = useState<"weekly" | "monthly" | "yearly">(
    "monthly",
  );

  const dataMap = {
    weekly: weeklyData,
    monthly: monthlyData,
    yearly: yearlyData,
  };

  return (
    <AnimatedContainer className="space-y-8" >

      {/* HEADER */}
      <PageHeader title="Admin Dashboard" description="Overview of FURNIForge operations"/>

      {/* STATS */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-4">
        {stats.map((s, i) => (
          <StatCard key={i} {...s} delay={i * 0.03} />
        ))}
      </div>

      {/* TARGET */}
      <TargetProgress achieved={690000} target={1000000} />

      {/* REVENUE */}
      <SectionCard
        title="Revenue"
        action={
          <div className="flex gap-1">
            {(["weekly", "monthly", "yearly"] as const).map((p) => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`px-3 py-1 rounded-lg text-xs font-sans font-medium capitalize transition-colors ${
                  period === p
                    ? "gradient-copper text-accent-foreground"
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        }
      >
        <RevenueChart data={dataMap[period]} />
      </SectionCard>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SectionCard
          title="Best Designers"
          icon={Star}
          iconColor="text-[hsl(var(--mustard))]"
        >
          <BestDesigners data={bestDesigners} />
        </SectionCard>

        <SectionCard
          title="Top Clients by Spend"
          icon={TrendingUp}
          iconColor="text-accent"
        >
          <TopClients data={topClients} />
        </SectionCard>
      </div>

      {/* PAYMENTS */}
      <SectionCard
        title="Pending Payments"
        icon={CreditCard}
        iconColor="text-accent"
      >
        <PendingPayments data={pendingPayments} />
      </SectionCard>
    </AnimatedContainer>
  );
};

export default AdminDashboardPage;
