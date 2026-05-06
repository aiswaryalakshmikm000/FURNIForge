import { Outlet } from "react-router-dom";
import { AdminSidebar } from "./admin.sidebar";
import { AdminHeader } from "./admin.header";

const AdminLayout = () => {
  return (
    <div className="min-h-screen flex bg-background">
      <AdminSidebar />

      <div className="flex-1 flex flex-col">
        <AdminHeader />

        <main className="flex-1 p-4 md:p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;