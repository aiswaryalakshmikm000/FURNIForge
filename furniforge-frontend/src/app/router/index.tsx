import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { Suspense } from "react";
import { PremiumLoader } from "../../shared/components/common/loader";

const router = createBrowserRouter(routes);

export const AppRouter = () => {
  return (
    <Suspense
      fallback={
        <PremiumLoader />
      }
    >
      <RouterProvider router={router} />
    </Suspense>
  );
};
