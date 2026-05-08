import { APP_ROUTES } from "../../../core/config/constants/routes.constants";
import { UserRole } from "../../../types/enums/user-role.enum";
import { ProtectedRoute } from "../protected.route";
import type { RouteObject } from "react-router-dom";
import { RoleRoute } from "../role.route";
import { ClientLayout } from "../../../layouts/client/client.layout";
import ClientDashboardPage from "../../../features/client/pages/client.dashboard";

export const clientRoutes: RouteObject[] = [
  {
    path: APP_ROUTES.CLIENT.ROOT, 
    element: (
      <ProtectedRoute>
        <RoleRoute allowedRoles={[UserRole.CLIENT]}>
          <ClientLayout />
        </RoleRoute>
      </ProtectedRoute>
    ),
    children: [
      {
        index: true, 
        element: <ClientDashboardPage />, 
      },
    //   {
    //     path: "requirements",
    //     element: <RequirementsPage />,
    //   },
    ],
  },
];