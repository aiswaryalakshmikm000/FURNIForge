import { LayoutDashboard, Users, UsersRound, Settings, UserPlus, Wrench, Package, ListChecks, MessageSquare} from "lucide-react";
import { APP_ROUTES } from "../../core/config/constants/routes.constants";
import type { LucideIcon } from "lucide-react";

export type AdminNavItem = {
  title: string;
  path: string;
  icon: LucideIcon;
};

export type AdminNavSection = {
  label: string;
  items: AdminNavItem[];
};

export const ADMIN_NAV: AdminNavSection[] = [
  {
    label: "Overview",
    items: [
      { title: "Dashboard", path: APP_ROUTES.ADMIN.ROOT, icon: LayoutDashboard },
    ],
  },
  {
    label: "Sales",
    items: [
      { title: "Leads", path: APP_ROUTES.ADMIN.LEADS, icon: UserPlus },
      { title: "Customers", path: APP_ROUTES.ADMIN.CUSTOMERS, icon: UsersRound },

    ],
  },
  {
    label: "Team",
    items: [
      { title: "Designers", path: APP_ROUTES.ADMIN.DESIGNERS, icon: Users },
      { title: "Technicians", path: APP_ROUTES.ADMIN.TECHNICIANS, icon: Wrench },

    ],
  },
  {
    label: "Platform Configuration",
    items: [
      { title: "Deliverables", path: APP_ROUTES.ADMIN.DELIVERABLES, icon: Package },
      { title: "Requirement Fileds", path: APP_ROUTES.ADMIN.REQUIREMENT_FIELDS, icon: ListChecks },

    ],
  },
  {
    label: "Communication",
    items: [
      { title: "Messages", path: APP_ROUTES.ADMIN.MESSAGES, icon: MessageSquare },
    ],
  },
  {
    label: "System",
    items: [
      { title: "Settings", path: "/admin/settings", icon: Settings },
    ],
  },
];