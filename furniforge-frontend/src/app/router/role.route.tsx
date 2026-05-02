import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { APP_ROUTES } from "../../core/config/constants/routes.constants";

export const RoleRoute = ({ children, allowedRoles }: any) => {
  const { user } = useSelector((state: any) => state.auth);

  if (!allowedRoles.includes(user?.role)) {
    return <Navigate to={APP_ROUTES.AUTH.LOGIN} replace />;
  }

  return children;
};