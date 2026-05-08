import { useState } from "react";
import { motion } from "framer-motion";

import {
  DollarSign,
  Package,
  UserPlus,
  CreditCard,
  AlertTriangle,
  TrendingUp,
  Star,
} from "lucide-react";

import { StatCard } from "../components/dashboard/stat-card";
import { SectionCard } from "../components/dashboard/section-card";
import { RevenueChart } from "../components/dashboard/revenue-chart";
import { BestDesigners } from "../components/dashboard/best-designers";
import { TopClients } from "../components/dashboard/top-clients";
import { PendingPayments } from "../components/dashboard/pending-payments";
import { TargetProgress } from "../components/dashboard/target-progress";

export const stats = [
  {
    label: "Total Revenue",
    value: "₹28,60,000",
    icon: DollarSign,
    color: "text-accent",
  },

  {
    label: "Active Projects",
    value: "18",
    icon: Package,
    color: "text-accent",
  },

  {
    label: "Open Leads",
    value: "12",
    icon: UserPlus,
    color: "text-accent",
  },

  {
    label: "Pending Payments",
    value: "₹6,45,000",
    icon: CreditCard,
    color: "text-[hsl(var(--mustard))]",
  },

  {
    label: "Overdue Alerts",
    value: "2",
    icon: AlertTriangle,
    color: "text-destructive",
  },
];

export const weeklyData = [
  { name: "Mon", revenue: 25000 },
  { name: "Tue", revenue: 42000 },
  { name: "Wed", revenue: 18000 },
  { name: "Thu", revenue: 51000 },
  { name: "Fri", revenue: 35000 },
  { name: "Sat", revenue: 62000 },
  { name: "Sun", revenue: 20000 },
];

export const monthlyData = [
  { name: "Sep", revenue: 220000 },
  { name: "Oct", revenue: 380000 },
  { name: "Nov", revenue: 410000 },
  { name: "Dec", revenue: 340000 },
  { name: "Jan", revenue: 520000 },
  { name: "Feb", revenue: 690000 },
];

export const yearlyData = [
  { name: "2023", revenue: 1800000 },
  { name: "2024", revenue: 3200000 },
  { name: "2025", revenue: 4600000 },
  { name: "2026", revenue: 2860000 },
];

export const bestDesigners = [
  {
    name: "Arun Mehta",
    projects: 8,
    revenue: "₹8,50,000",
    rating: 4.8,
  },

  {
    name: "Sneha Kulkarni",
    projects: 6,
    revenue: "₹6,20,000",
    rating: 4.6,
  },

  {
    name: "Rahul Desai",
    projects: 5,
    revenue: "₹5,80,000",
    rating: 4.5,
  },
];

export const topClients = [
  {
    name: "John Doe",
    totalSpent: "₹2,85,000",
    projects: 2,
    type: "Wardrobe + TV Unit",
  },

  {
    name: "Priya Sharma",
    totalSpent: "₹1,85,000",
    projects: 1,
    type: "Wardrobe",
  },

  {
    name: "Amit Joshi",
    totalSpent: "₹1,45,000",
    projects: 1,
    type: "Sofa",
  },
];

export const pendingPayments = [
  {
    client: "John Doe",
    project: "Sliding Wardrobe",
    amount: "₹62,500",
    dueDate: "Mar 10, 2026",
    stage: "40% Before Installation",
    overdue: false,
  },

  {
    client: "Priya Sharma",
    project: "Walk-in Wardrobe",
    amount: "₹1,11,000",
    dueDate: "Mar 15, 2026",
    stage: "60% Advance",
    overdue: false,
  },

  {
    client: "Amit Joshi",
    project: "L-Shape Sofa",
    amount: "₹87,000",
    dueDate: "Feb 10, 2026",
    stage: "60% Advance",
    overdue: true,
  },
];

const AdminDashboardPage = () => {
  const [period, setPeriod] = useState<
    "weekly" | "monthly" | "yearly"
  >("monthly");

  const dataMap = {
    weekly: weeklyData,
    monthly: monthlyData,
    yearly: yearlyData,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-foreground font-display mb-2">
          Admin Dashboard
        </h1>

        <p className="text-muted-foreground font-sans">
          Overview of INTERIOForge operations
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {stats.map((s, i) => (
          <StatCard
            key={i}
            {...s}
            delay={i * 0.03}
          />
        ))}
      </div>

      {/* TARGET */}
      <TargetProgress
        achieved={690000}
        target={1000000}
      />

      {/* REVENUE */}
     <SectionCard
  title="Revenue"
  action={
    <div className="flex gap-1">
      {(
        ["weekly", "monthly", "yearly"] as const
      ).map((p) => (
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
          <BestDesigners
            data={bestDesigners}
          />
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
        <PendingPayments
          data={pendingPayments}
        />
      </SectionCard>
    </motion.div>
  );
};

export default AdminDashboardPage;