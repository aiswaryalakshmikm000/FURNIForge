import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { APP_ROUTES } from "../../core/config/constants/routes.constants";
import type { ReactNode } from "react";
import type { RootState } from "../store/store.types";

type RoleRouteProps = {
  children: ReactNode;
  allowedRoles: string[];
};

export const RoleRoute = ({ children, allowedRoles }: RoleRouteProps) => {
  const { user, isAuthenticated } = useSelector((state: RootState) => state.auth);

  if (!user || !isAuthenticated) {
    return <Navigate to={APP_ROUTES.AUTH.LOGIN} replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to={APP_ROUTES.COMMON.ROOT} replace />;
  }

  return children;
};