import { SidebarTrigger } from "../../shared/components/ui/sidebar";
import { Bell } from "lucide-react";

export const AdminHeader = () => {
  return (
    <header className="sticky top-0 z-40 bg-card/90 backdrop-blur-lg border-b border-border h-14 flex items-center justify-between px-4">

      <div className="flex items-center gap-2">
        <SidebarTrigger className="text-muted-foreground" />
        <span className="text-sm font-medium text-muted-foreground font-sans hidden sm:block">
          Admin Portal
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg hover:bg-muted">
          <Bell size={20} className="text-muted-foreground" />
        </div>

        <div className="w-8 h-8 rounded-full gradient-copper flex items-center justify-center text-accent-foreground text-xs font-bold">
          AD
        </div>
      </div>
    </header>
  );
};