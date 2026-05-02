import { authRoutes } from "./routes/auth.routes";
import { adminRoutes } from "./routes/admin.routes";
import { clientRoutes } from "./routes/client.routes";
import { designerRoutes } from "./routes/designer.routes";

export const routes = [
  ...authRoutes,
  ...adminRoutes,
  ...clientRoutes,
  ...designerRoutes
];