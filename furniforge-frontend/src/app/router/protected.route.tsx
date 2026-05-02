import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { APP_ROUTES } from "../../core/config/constants/routes.constants";

export const ProtectedRoute = ({ children }: any) => {
  const { isAuthenticated } = useSelector((state: any) => state.auth);

  if (!isAuthenticated) return <Navigate to={APP_ROUTES.AUTH.LOGIN} replace />;

  return children;
};
