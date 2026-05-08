import { SidebarProvider, SidebarInset } from "../../shared/components/ui/sidebar";
import { ClientSidebar } from "./client.sidebar";
import { ClientHeader } from "./client.header";
import { Outlet } from "react-router-dom";

export const ClientLayout = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <ClientSidebar />

        <SidebarInset>
          <ClientHeader />
          <main className="p-4 md:p-6">
            <Outlet />
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};