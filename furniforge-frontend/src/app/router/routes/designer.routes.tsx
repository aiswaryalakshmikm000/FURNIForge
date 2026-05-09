import type { RouteObject } from "react-router-dom";
import { APP_ROUTES } from "../../../core/config/constants/routes.constants";
import ErrorPage from "../../../features/auth/pages/error.page";
import DesignerDashboardPage from "../../../features/designer/pages/designer.dashboard";
import { DesignerLayout } from "../../../layouts/designer/designer.layout";
import { UserRole } from "../../../types/enums/user-role.enum";
import { ProtectedRoute } from "../protected.route";
import { RoleRoute } from "../role.route";

export const designerRoutes: RouteObject[] = [
  {
    path: APP_ROUTES.DESIGNER.ROOT,
    element: (
      <ProtectedRoute>
        <RoleRoute allowedRoles={[UserRole.DESIGNER]}>
          <DesignerLayout />
        </RoleRoute>
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <DesignerDashboardPage /> },
    ],
  },
];
