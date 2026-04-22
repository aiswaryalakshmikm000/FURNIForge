import LoginPage from "../../features/auth/pages/login.page";
import RegisterPage from "../../features/auth/pages/register.page";
import VerifyOtpPage from "../../features/auth/pages/verify-otp.page";

export const routes = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/verify-otp",
    element: <VerifyOtpPage/>
  }
];