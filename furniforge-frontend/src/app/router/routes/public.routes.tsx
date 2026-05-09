import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import { APP_ROUTES } from "../../../core/config/constants/routes.constants";

const LandingPage = lazy(() => import("../../../features/landing/pages/landing.page"));
const AboutPage = lazy(() => import("../../../features/landing/pages/about.page"));
const HowItWorksPage = lazy(() => import("../../../features/landing/pages/how-it-works.page"));
const OurWorkPage = lazy(() => import("../../../features/landing/pages/our-work.page"));

export const publicRoutes: RouteObject[] = [
  { path: APP_ROUTES.COMMON.ROOT, element: <LandingPage /> },
  { path: APP_ROUTES.COMMON.ABOUT, element: <AboutPage /> },
  { path: APP_ROUTES.COMMON.HOW_IT_WORKS, element: <HowItWorksPage /> },
  { path: APP_ROUTES.COMMON.OUR_WORK, element: <OurWorkPage /> },
];