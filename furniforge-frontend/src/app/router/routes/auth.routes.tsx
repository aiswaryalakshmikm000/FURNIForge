import ErrorPage from "../../../features/auth/pages/error.page";
import ForgotPasswordPage from "../../../features/auth/pages/forgot-password.page";
import LoginPage from "../../../features/auth/pages/login.page";
import RegisterPage from "../../../features/auth/pages/register.page";
import VerifyOtpPage from "../../../features/auth/pages/verify-otp.page";
import ResetPasswordPage from "../../../features/auth/pages/ResetPasswordPage";
import VerifyResetOtpPage from "../../../features/auth/pages/verify-reset-otp.page";
import AuthLayout from "../../../layouts/auth.layout";

export const authRoutes = [
  {
    path: "/",
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <LoginPage /> },

      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "verify-otp", element: <VerifyOtpPage /> },
      { path: "forgot-password", element: <ForgotPasswordPage /> },
      { path: "verify-reset-otp", element: <VerifyResetOtpPage/>},
      { path: "reset-password", element: <ResetPasswordPage /> },
    ],
  },
];