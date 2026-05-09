import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

import { APP_ROUTES } from "../../core/config/constants/routes.constants";
import type { RootState } from "../store/store.types";

type ProtectedRouteProps = {
  children: ReactNode;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  
  if (!isAuthenticated) return <Navigate to={APP_ROUTES.AUTH.LOGIN} replace />;

  return children;
};
