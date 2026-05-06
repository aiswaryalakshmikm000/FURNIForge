import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

import { PublicOnlyRoute } from "../public-only.route";
import { AuthFlowRoute } from "../auth-flow.route";
import { APP_ROUTES } from "../../../core/config/constants/routes.constants";

const ErrorPage = lazy(() => import("../../../features/auth/pages/error.page"));
const LoginPage = lazy(() => import("../../../features/auth/pages/login.page"));
const RegisterPage = lazy(() => import("../../../features/auth/pages/register.page"));
const VerifyOtpPage = lazy(() => import("../../../features/auth/pages/verify-otp.page"));
const ForgotPasswordPage = lazy(() => import("../../../features/auth/pages/forgot-password.page"));
const VerifyResetOtpPage = lazy(() => import("../../../features/auth/pages/verify-reset-otp.page"));
const ResetPasswordPage = lazy(() => import("../../../features/auth/pages/ResetPasswordPage"),);
const AuthLayout = lazy(() => import("../../../layouts/auth.layout"));

export const authRoutes: RouteObject[] = [
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: APP_ROUTES.AUTH.LOGIN,
        element: (
          <PublicOnlyRoute>
            <LoginPage />
          </PublicOnlyRoute>
        ),
      },
      {
        path: APP_ROUTES.AUTH.REGISTER,
        element: (
          <PublicOnlyRoute>
            <RegisterPage />
          </PublicOnlyRoute>
        ),
      },
      {
        path: APP_ROUTES.AUTH.VERIFY_OTP,
        element: (
          <AuthFlowRoute type="verify-otp">
            <VerifyOtpPage />
          </AuthFlowRoute>
        ),
      },
      {
        path: APP_ROUTES.AUTH.FORGOT_PASSWORD,
        element: (
          <PublicOnlyRoute>
            <ForgotPasswordPage />
          </PublicOnlyRoute>
        ),
      },
      {
        path: APP_ROUTES.AUTH.VERIFY_RESET_OTP,
        element: (
          <AuthFlowRoute type="verify-otp">
            <VerifyResetOtpPage />
          </AuthFlowRoute>
        ),
      },
      {
        path: APP_ROUTES.AUTH.RESET_PASSWORD,
        element: (
          <AuthFlowRoute type="reset-password">
            <ResetPasswordPage />
          </AuthFlowRoute>
        ),
      },
    ],
  },
];
