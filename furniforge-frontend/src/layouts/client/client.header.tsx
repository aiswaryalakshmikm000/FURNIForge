import { SidebarTrigger } from "../../shared/components/ui/sidebar";
import { Bell } from "lucide-react";
import { Link } from "react-router-dom";

export const ClientHeader = () => {
  return (
    <header className="h-14 sticky top-0 z-40 bg-card border-b flex items-center justify-between px-4">
      
      {/* LEFT */}
      <div className="flex items-center gap-3">
        <SidebarTrigger />
        <span className="text-sm font-medium text-muted-foreground hidden sm:block">
          Client Portal
        </span>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        
        {/* Notifications */}
        <button className="relative p-2 rounded-lg hover:bg-muted">
          <Bell size={18} />
          <span className="absolute -top-1 -right-1 w-4 h-4 text-[10px] bg-red-500 text-white rounded-full flex items-center justify-center">
            3
          </span>
        </button>

        {/* Profile */}
        <Link
          to="/client/profile"
          className="w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center text-xs font-bold"
        >
          JD
        </Link>
      </div>
    </header>
  );
};