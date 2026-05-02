import { Outlet } from "react-router-dom";
import { Navbar } from "../shared/components/layout/navbar";

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default AppLayout;