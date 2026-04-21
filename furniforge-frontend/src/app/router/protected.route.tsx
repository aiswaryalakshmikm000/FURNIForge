import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: any) => {
  const isAuth = useSelector((state: any) => state.auth.isAuthenticated);

  if (!isAuth) return <Navigate to="/login" replace />;

  return children;
};