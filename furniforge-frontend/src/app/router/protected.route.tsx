import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { APP_ROUTES } from "../../core/config/constants/routes.constants";
import { useAuth } from "../../features/auth/hooks/use-auth";

export const ProtectedRoute = ({ children }: any) => {
  const { isAuthenticated } = useSelector((state: any) => state.auth);
  const { isLoading } = useAuth();

  if (isLoading) return null; 
  
  if (!isAuthenticated) return <Navigate to={APP_ROUTES.AUTH.LOGIN} replace />;

  return children;
};
