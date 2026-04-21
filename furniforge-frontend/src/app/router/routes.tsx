import LoginPage from "../../features/auth/pages/login.page";
import RegisterPage from "../../features/auth/pages/register.page";

export const routes = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  }
];