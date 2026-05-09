import { Home, Users, UserPlus, CalendarCheck, Image as ImageIcon, User, MessageSquare, Calculator, FileText, CreditCard} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { APP_ROUTES } from "../../core/config/constants/routes.constants";

export type DesignerNavItem  = {
  title: string;
  path: string;
  icon: LucideIcon;
};

export type DesignerNavSection  = {
  label: string;
  items: DesignerNavItem[];
};

export const DESIGNER_NAV: DesignerNavSection[] = [
  {
    label: "Overview",
    items: [
      {title: "Dashboard", path: APP_ROUTES.DESIGNER.ROOT, icon: Home},
    ],
  },
  {
    label: "Requests",
    items: [
      { title: "Leads", path: APP_ROUTES.DESIGNER.LEADS, icon: UserPlus},
      { title: "Customers", path: APP_ROUTES.DESIGNER.CUSTOMERS, icon: Users},
    ],
  },

  {
    label: "Work",
    items: [
      { title: "Design Calculator", path: APP_ROUTES.DESIGNER.CALCULATOR, icon: Calculator},
      { title: "Schedules", path: APP_ROUTES.DESIGNER.SCHEDULES, icon: CalendarCheck},
    ],
  },

  {
    label: "Deliverables",
    items: [
      { title: "Quotations", path: APP_ROUTES.DESIGNER.QUOTATIONS, icon: FileText},
      { title: "Designs", path: APP_ROUTES.DESIGNER.DESIGNS, icon: ImageIcon},
      { title: "Payments", path: APP_ROUTES.DESIGNER.PAYMENTS, icon: CreditCard},
      { title: "Portfolio", path: APP_ROUTES.DESIGNER.PORTFOLIO, icon: ImageIcon},
    ],
  },

  {
    label: "Communication",
    items: [
      { title: "Messages", path: APP_ROUTES.DESIGNER.MESSAGES, icon: MessageSquare},
    ],
  },

  {
    label: "Account",
    items: [
      { title: "Profile", path: APP_ROUTES.DESIGNER.PROFILE, icon: User},
    ],
  },
];