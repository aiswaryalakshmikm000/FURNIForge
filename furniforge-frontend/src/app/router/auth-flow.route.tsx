import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

import { sessionManager } from "../../core/auth/session-manager";
import { APP_ROUTES } from "../../core/config/constants/routes.constants";

type AuthFlowRouteProps = {
  children: ReactNode;
  type: "verify-otp" |  "verify-reset-otp" | "reset-password";
};


export const AuthFlowRoute = ({ children, type }: AuthFlowRouteProps) => {

  if (type === "verify-otp") {
    const tempUser = sessionManager.getTempUserId();

    if (!tempUser) {
      return <Navigate to={APP_ROUTES.AUTH.REGISTER} replace />;
    }
  }

  if (type === "verify-reset-otp") {
    const email = sessionManager.getEmailId();

    if (!email) {
      return <Navigate to={APP_ROUTES.AUTH.FORGOT_PASSWORD} replace />;
    }
  }

  if (type === "reset-password") {
    const token = sessionManager.getResetToken();

    if (!token) {
      return <Navigate to={APP_ROUTES.AUTH.FORGOT_PASSWORD} replace />;
    }
  }

  return children;
};