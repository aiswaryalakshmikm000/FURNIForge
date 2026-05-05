import { Navigate } from "react-router-dom";
import { sessionManager } from "../../core/auth/session-manager";
import { APP_ROUTES } from "../../core/config/constants/routes.constants";

export const AuthFlowRoute = ({ children, type }: any) => {
  // example checks
  if (type === "verify-otp") {
    const tempUser = sessionManager.getTempUserId();

    if (!tempUser) {
      return <Navigate to={APP_ROUTES.AUTH.REGISTER} replace />;
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