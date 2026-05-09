import { SidebarProvider } from "../../shared/components/ui/sidebar";
import { AdminSidebar } from "./admin.sidebar";
import { AdminHeader } from "./admin.header";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <SidebarProvider>
      <div className="flex w-full min-h-screen bg-background">
        
        <AdminSidebar />

        <div className="flex-1 flex flex-col">
          <AdminHeader />

          <main className="flex-1 p-4 md:p-6 overflow-auto">
            <Outlet />
          </main>
        </div>

      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;