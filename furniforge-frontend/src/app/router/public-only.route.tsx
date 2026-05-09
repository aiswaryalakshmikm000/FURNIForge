import type { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { getDashboardRoute } from "../../core/utils/routes.utils";
import type { RootState } from "../store/store.types";

type PublicOnlyRouteProps = {
  children: ReactNode;
};

export const PublicOnlyRoute = ({ children }: PublicOnlyRouteProps) => {
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

  if (isAuthenticated && user) {
    return <Navigate to={getDashboardRoute(user.role)} replace />;
  }

  return children;
};