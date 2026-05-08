import { motion } from "framer-motion";
import { Send, FileText, CreditCard, Shirt, Tv } from "lucide-react";

import { QuickActions } from "../components/dashboard/quick-actions";
import { ActiveProjects } from "../components/dashboard/active-projects";
import { SummaryCard } from "../components/dashboard/summary-card";

const ClientDashboardPage = () => {

  const quickActions = [
    {
      icon: Send,
      label: "Submit Requirement",
      description: "Submit a new furniture requirement",
      href: "/client/requirements",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: FileText,
      label: "Quotations",
      description: "Review your quotations",
      href: "/client/quotations",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: CreditCard,
      label: "Payments",
      description: "View payment history",
      href: "/client/payments",
      color: "bg-accent/10 text-accent",
    },
  ];

  const activeProjects = [
    {
      id: "wardrobe-1",
      title: "Sliding Wardrobe — Master Bedroom",
      type: "Wardrobe",
      status: "In Progress",
      progress: 65,
      icon: Shirt,
    },
    {
      id: "tvunit-1",
      title: "Wall Mounted TV Unit — Living Room",
      type: "TV Unit",
      status: "Designing",
      progress: 30,
      icon: Tv,
    },
  ];

  const summary = [
    { label: "Total Projects", value: "2" },
    { label: "In Progress", value: "2" },
    { label: "Total Amount", value: "₹2.85L" },
    { label: "Paid", value: "₹1.20L" },
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold">
          Welcome back, John 👋
        </h1>

        <p className="text-muted-foreground font-sans mt-1">
          Here's an overview of your interior projects.
        </p>
      </motion.div>

      <QuickActions actions={quickActions} />

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ActiveProjects projects={activeProjects} />
        </div>

        <SummaryCard summary={summary} />
      </div>
    </div>
  );
};

export default ClientDashboardPage;