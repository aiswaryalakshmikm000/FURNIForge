import { APP_ROUTES } from "../config/constants/routes.constants";
import { UserRole } from "../../types/enums/user-role.enum";

export const getDashboardRoute = (role: UserRole) => {
  switch (role) {
    case UserRole.ADMIN:
      return APP_ROUTES.ADMIN.ROOT;

    case UserRole.CLIENT:
      return APP_ROUTES.CLIENT.ROOT;

    case UserRole.DESIGNER:
      return APP_ROUTES.DESIGNER.ROOT;

    default:
      return APP_ROUTES.COMMON.ROOT;
  }
};