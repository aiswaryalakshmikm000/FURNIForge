import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { APP_ROUTES } from "../../core/config/constants/routes.constants";
import type { ReactNode } from "react";

type RoleRouteProps = {
  children: ReactNode;
  allowedRoles: string[];
};

export const RoleRoute = ({ children, allowedRoles }: RoleRouteProps) => {
  const { user } = useSelector((state: any) => state.auth);

  if (!user) {
    return <Navigate to={APP_ROUTES.AUTH.LOGIN} replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to={APP_ROUTES.AUTH.LOGIN} replace />;
  }

  return children;
};