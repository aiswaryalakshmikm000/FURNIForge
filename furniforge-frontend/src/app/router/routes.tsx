import { authRoutes } from "./routes/auth.routes";
import { adminRoutes } from "./routes/admin.routes";
import { clientRoutes } from "./routes/client.routes";
import { designerRoutes } from "./routes/designer.routes";
import { publicRoutes } from "./routes/public.routes";
import RootLayout from "./root.layout";
import NotFoundPage from "../../pages/not-found.page";

export const routes = [
  {
    element: <RootLayout />,
    children: [
      ...publicRoutes,
      ...authRoutes,
      ...adminRoutes,
      ...designerRoutes,
      ...clientRoutes,
      { path: "*", element: <NotFoundPage /> },
    ],
  },
];
