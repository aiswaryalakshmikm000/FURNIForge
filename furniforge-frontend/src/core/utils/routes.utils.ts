import { APP_ROUTES } from "../config/constants/routes.constants";
import { UserRole } from "../../types/enums/user-role.enum";

export const getDashboardRoute = (role: UserRole) => {
  switch (role) {
    case UserRole.ADMIN:
      return APP_ROUTES.ADMIN.DASHBOARD;

    case UserRole.CLIENT:
      return APP_ROUTES.CLIENT.DASHBOARD;

    case UserRole.DESIGNER:
      return APP_ROUTES.DESIGNER.DASHBOARD;

    default:
      return APP_ROUTES.COMMON.ROOT;
  }
};