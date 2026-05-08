import { motion } from "framer-motion";

import {
  Users,
  FileText,
  UserPlus,
  CalendarCheck,
  IndianRupee,
  Target,
} from "lucide-react";

import { StatCard } from "../components/dashboard/stat-card";
import { TargetProgress } from "../components/dashboard/target-progress";
import { RecentActivity } from "../components/dashboard/recent-activity";
import { UpcomingSchedule } from "../components/dashboard/upcoming-schedule";

const DesignerDashboardPage = () => {

  const businessStats = [
    {
      title: "Closed Business",
      value: "₹12,50,000",
      icon: IndianRupee,
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Monthly Target",
      value: "₹18,00,000",
      icon: Target,
      color: "bg-primary/10 text-primary",
    },
  ];

  const stats = [
    {
      title: "Active Customers",
      value: "8",
      icon: Users,
      color: "bg-primary/10 text-primary",
    },
    {
      title: "Pending Quotations",
      value: "4",
      icon: FileText,
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      title: "New Leads",
      value: "3",
      icon: UserPlus,
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Upcoming Visits",
      value: "2",
      icon: CalendarCheck,
      color: "bg-green-100 text-green-700",
    },
  ];

  const targetData = {
    percentage: 69,
    currentAmount: "₹12,50,000",
    targetAmount: "₹18,00,000",
  };

  const recentActivities = [
    {
      text: "New lead assigned: Rohit Mehta — Wardrobe",
      time: "10 min ago",
    },
    {
      text: "Quotation confirmed: QT-003 by John Doe — TV Unit",
      time: "1 hour ago",
    },
    {
      text: "Site visit completed: MEP Marking — Priya S. — Sofa",
      time: "3 hours ago",
    },
    {
      text: "Revision requested: QT-004 by John Doe — Wardrobe",
      time: "5 hours ago",
    },
    {
      text: "New customer registration: Anita K. — Bed",
      time: "Yesterday",
    },
  ];

  const upcomingSchedule = [
    {
      customer: "John Doe",
      type: "Installation",
      date: "Feb 19, 2026",
      time: "9:00 AM",
      deliverable: "Wardrobe",
    },
    {
      customer: "Priya Sharma",
      type: "Initial Visit",
      date: "Feb 20, 2026",
      time: "11:00 AM",
      deliverable: "TV Unit",
    },
    {
      customer: "Rohit Mehta",
      type: "MEP Marking",
      date: "Feb 21, 2026",
      time: "10:00 AM",
      deliverable: "Sofa",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground font-display mb-2">
          Dashboard
        </h1>

        <p className="text-muted-foreground font-sans mb-8">
          Welcome back, Neha! Here's your overview.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">

        {businessStats.map((item) => (
          <StatCard
            key={item.title}
            title={item.title}
            value={item.value}
            icon={item.icon}
            color={item.color}
          />
        ))}

        <TargetProgress target={targetData} />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((item) => (
          <StatCard
            key={item.title}
            title={item.title}
            value={item.value}
            icon={item.icon}
            color={item.color}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity activities={recentActivities} />

        <UpcomingSchedule schedules={upcomingSchedule} />
      </div>
    </motion.div>
  );
};

export default DesignerDashboardPage;