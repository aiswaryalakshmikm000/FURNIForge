import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getDashboardRoute } from "../../core/utils/routes.utils";

export const PublicOnlyRoute = ({ children }: any) => {
  const { isAuthenticated, user } = useSelector((state: any) => state.auth);

  if (isAuthenticated && user) {
    return <Navigate to={getDashboardRoute(user.role)} replace />;
  }

  return children;
};