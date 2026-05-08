import { Home, Send, FolderOpen, FileText, CreditCard, MessageSquare, User} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { APP_ROUTES } from "../../core/config/constants/routes.constants";

export type ClientNavItem  = {
  title: string;
  path: string;
  icon: LucideIcon;
};

export type ClientNavSection  = {
  label: string;
  items: ClientNavItem[];
};

export const CLIENT_NAV: ClientNavSection[] = [
  {
    label: "Overview",
    items: [
      { title: "Dashboard", path: APP_ROUTES.CLIENT.ROOT, icon: Home },
    ],
  },
  {
    label: "Requests",
    items: [
      { title: "Submit Requirements", path: APP_ROUTES.CLIENT.REQUIREMENTS, icon: Send },
    ],
  },
  {
    label: "Projects",
    items: [
      { title: "My Projects", path: APP_ROUTES.CLIENT.PROJECTS, icon: FolderOpen },
      { title: "Site Progress", path: APP_ROUTES.CLIENT.SITE_PROGRESS, icon: FolderOpen },
      { title: "Designs", path: APP_ROUTES.CLIENT.DESIGNS, icon: FolderOpen },
      { title: "Bookings", path: APP_ROUTES.CLIENT.BOOKINGS, icon: FolderOpen },
    ],
  },
  {
    label: "Finance",
    items: [
      { title: "Quotations", path: APP_ROUTES.CLIENT.QUOTATIONS, icon: FileText },
      { title: "Payments", path: APP_ROUTES.CLIENT.PAYMENTS, icon: CreditCard },
    ],
  },
  {
    label: "Inspiration",
    items: [
      { title: "Saved Inspiration", path: APP_ROUTES.CLIENT.REFERENCES, icon: FileText },
    ],
  },
  {
    label: "Communication",
    items: [
      { title: "Messages", path: APP_ROUTES.CLIENT.MESSAGES, icon: MessageSquare },
      { title: "Review", path: APP_ROUTES.CLIENT.REVIEWS, icon: MessageSquare },
    ],
  },
  {
    label: "Account",
    items: [
      { title: "Profile", path: APP_ROUTES.CLIENT.PROFILE, icon: User },
    ],
  },
];