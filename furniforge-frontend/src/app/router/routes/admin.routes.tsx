import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

import { ProtectedRoute } from "../protected.route";
import { RoleRoute } from "../role.route";
import { APP_ROUTES } from "../../../core/config/constants/routes.constants";

import { UserRole } from "../../../types/enums/user-role.enum";
import AdminLayout from "../../../layouts/admin/admin.layout";
import ErrorPage from "../../../features/auth/pages/error.page";

const AdminDashboard = lazy(() => import("../../../features/admin/pages/admin.dashboard.page"));
const LeadsPage = lazy(() => import("../../../features/admin/pages/admin.leads.page"));
const DesignerPage = lazy(() => import("../../../features/admin/pages/admin.designers.page"));
const DeliverablePage = lazy(() => import("../../../features/admin/pages/admin.deliverables.pages"));

export const adminRoutes: RouteObject[] = [
  {
    path: APP_ROUTES.ADMIN.ROOT,
    element: (
      <ProtectedRoute>
        <RoleRoute allowedRoles={[UserRole.ADMIN]}>
          <AdminLayout />
        </RoleRoute>
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
        {index: true, element: <AdminDashboard/>},
        {path: APP_ROUTES.ADMIN.LEADS, element: <LeadsPage/>},
        {path: APP_ROUTES.ADMIN.DESIGNERS, element: <DesignerPage/>},
        {path: APP_ROUTES.ADMIN.DELIVERABLES, element: <DeliverablePage/>},
    ],
  },
];
