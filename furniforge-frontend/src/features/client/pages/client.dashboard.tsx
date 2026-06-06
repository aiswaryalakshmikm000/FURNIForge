import { Send, FileText, CreditCard, Shirt, Tv } from "lucide-react";

import { QuickActions } from "../../dashboard/components/client-quick-actions";
import { ActiveProjects } from "../../dashboard/components/client-active-projects";
import { SummaryCard } from "../../dashboard/components/client-summary-card";

import { PageHeader } from "../../../shared/components/common/page-header";
import { AnimatedContainer } from "../../../shared/components/common/animated-container";
import { APP_ROUTES } from "../../../core/config/constants/routes.constants";

const ClientDashboardPage = () => {
  const quickActions = [
    { icon: Send, label: "Submit Requirement", description: "Submit a new furniture requirement", href: APP_ROUTES.CLIENT.REQUIREMENTS, color: "bg-accent/10 text-accent" },
    { icon: FileText, label: "Quotations", description: "Review your quotations", href:  APP_ROUTES.CLIENT.QUOTATIONS, color: "bg-accent/10 text-accent" },
    { icon: CreditCard, label: "Payments", description: "View payment history", href: APP_ROUTES.CLIENT.PAYMENTS, color: "bg-accent/10 text-accent" },
  ];

  const activeProjects = [
    { id: "wardrobe-1", title: "Sliding Wardrobe — Master Bedroom", type: "Wardrobe", status: "In Progress", progress: 65, icon: Shirt },
    { id: "tvunit-1", title: "Wall Mounted TV Unit — Living Room", type: "TV Unit", status: "Designing", progress: 30, icon: Tv },
  ];

  const summary = [
    { label: "Total Projects", value: "2" },
    { label: "In Progress", value: "2" },
    { label: "Total Amount", value: "₹2.85L" },
    { label: "Paid", value: "₹1.20L" },
  ];

  return (
    <div className="space-y-8">
      <AnimatedContainer>
        <PageHeader
          title="Welcome back, John 👋"
          description="Here's an overview of your interior projects."
        />
      </AnimatedContainer>

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
