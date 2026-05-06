// import { APP_ROUTES } from "../../../core/config/constants/routes.constants";
// import { UserRole } from "../../../types/enums/user-role.enum";
// import { ProtectedRoute } from "../protected.route";
// import { RoleRoute } from "../role.route";

// export const designerRoutes = [
//   {
//     path: APP_ROUTES.DESIGNER.ROOT,
//     element: (
//       <ProtectedRoute>
//         <RoleRoute allowedRoles={[UserRole.DESIGNER]}>
//           <DesignerLayout />
//         </RoleRoute>
//       </ProtectedRoute>
//     ),
//     children: [
//       { index: true, element: <DashboardPage /> },
//       { path: "requirements", element: <RequirementPage /> },
//     ],
//   },
// ];
