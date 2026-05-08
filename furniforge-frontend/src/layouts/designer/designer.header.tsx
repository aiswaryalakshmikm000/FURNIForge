import { SidebarTrigger } from "../../shared/components/ui/sidebar";

import { Bell} from "lucide-react";

export const DesignerHeader = () => {
  return (
    <header className="sticky top-0 z-40 h-14 border-b bg-background/80 backdrop-blur-lg px-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <SidebarTrigger />

        <div>
          <p className="text-sm text-muted-foreground">
            Designer Portal
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-lg hover:bg-muted transition-colors">
          <Bell className="w-5 h-5 text-muted-foreground" />

          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500" />
        </button>

        <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
          NS
        </div>
      </div>
    </header>
  );
};