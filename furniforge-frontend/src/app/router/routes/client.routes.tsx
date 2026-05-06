// import { APP_ROUTES } from "../../../core/config/constants/routes.constants";
// import { UserRole } from "../../../types/enums/user-role.enum";
// import { ProtectedRoute } from "../protected.route";
// import type { RouteObject } from "react-router-dom";
// import { RoleRoute } from "../role.route";

// export const clientRoutes: RouteObject[] = [
//   {
//     path: APP_ROUTES.CLIENT.ROOT, 
//     element: (
//       <ProtectedRoute>
//         <RoleRoute allowedRoles={[UserRole.CLIENT]}>
//           <ClientLayout />
//         </RoleRoute>
//       </ProtectedRoute>
//     ),
//     children: [
//       {
//         index: true, 
//         element: <ClientDashboard />, 
//       },
//       {
//         path: "requirements",
//         element: <RequirementsPage />,
//       },
//     ],
//   },
// ];