import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const ErrorPage = lazy(() => import("../../../features/auth/pages/error.page"));
const LoginPage = lazy(() => import("../../../features/auth/pages/login.page"));
const RegisterPage = lazy(() => import("../../../features/auth/pages/register.page"));
const VerifyOtpPage = lazy(() => import("../../../features/auth/pages/verify-otp.page"));
const ForgotPasswordPage = lazy(() => import("../../../features/auth/pages/forgot-password.page"));
const VerifyResetOtpPage = lazy(() => import("../../../features/auth/pages/verify-reset-otp.page"));
const ResetPasswordPage = lazy(() => import("../../../features/auth/pages/ResetPasswordPage"),);
const AuthLayout = lazy(() => import("../../../layouts/auth.layout"));
import { PublicOnlyRoute } from "../public-only.route";
import { AuthFlowRoute } from "../auth-flow.route";

export const authRoutes: RouteObject[] = [
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: (
          <PublicOnlyRoute>
            <LoginPage />
          </PublicOnlyRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <PublicOnlyRoute>
            <RegisterPage />
          </PublicOnlyRoute>
        ),
      },
      {
        path: "/verify-otp",
        element: (
          <AuthFlowRoute type="verify-otp">
            <VerifyOtpPage />
          </AuthFlowRoute>
        ),
      },
      {
        path: "/forgot-password",
        element: (
          <PublicOnlyRoute>
            <ForgotPasswordPage />
          </PublicOnlyRoute>
        ),
      },
      {
        path: "/verify-reset-otp",
        element: (
          <AuthFlowRoute type="verify-otp">
            <VerifyResetOtpPage />
          </AuthFlowRoute>
        ),
      },
      {
        path: "/reset-password",
        element: (
          <AuthFlowRoute type="reset-password">
            <ResetPasswordPage />
          </AuthFlowRoute>
        ),
      },
    ],
  },
];
