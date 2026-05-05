import { Outlet } from "react-router-dom";
import ScrollToTop from "../../shared/components/common/scroll-to-top";

const RootLayout = () => {
  return (
    <>
      <ScrollToTop />   
      <Outlet />
    </>
  );
};

export default RootLayout;