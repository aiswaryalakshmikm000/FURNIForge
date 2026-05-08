import { Outlet } from "react-router-dom";
import { SidebarProvider} from "../../shared/components/ui/sidebar";

import { DesignerSidebar } from "./designer.sidebar";
import { DesignerHeader } from "./designer.header";

export const DesignerLayout = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <DesignerSidebar />

        <div className="flex-1 flex flex-col min-w-0">
          <DesignerHeader />

          <main className="flex-1 p-4 md:p-6 overflow-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};