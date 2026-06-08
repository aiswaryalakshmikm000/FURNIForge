import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import { APP_ROUTES } from "../../../core/config/constants/routes.constants";

const LandingPage = lazy(() => import("../../../features/public/pages/landing.page"));
const AboutPage = lazy(() => import("../../../features/public/pages/about.page"));
const HowItWorksPage = lazy(() => import("../../../features/public/pages/how-it-works.page"));
const OurWorkPage = lazy(() => import("../../../features/public/pages/our-work.page"));

export const publicRoutes: RouteObject[] = [
  { path: APP_ROUTES.COMMON.ROOT, element: <LandingPage /> },
  { path: APP_ROUTES.COMMON.ABOUT, element: <AboutPage /> },
  { path: APP_ROUTES.COMMON.HOW_IT_WORKS, element: <HowItWorksPage /> },
  { path: APP_ROUTES.COMMON.OUR_WORK, element: <OurWorkPage /> },
];