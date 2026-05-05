import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const LandingPage = lazy(() => import("../../../features/landing/pages/landing.page"));
const AboutPage = lazy(() => import("../../../features/landing/pages/about.page"));
const HowItWorksPage = lazy(() => import("../../../features/landing/pages/how-it-works.page"));
const OurWorkPage = lazy(() => import("../../../features/landing/pages/our-work.page"));

export const publicRoutes: RouteObject[] = [
  { path: "/", element: <LandingPage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/how-it-works", element: <HowItWorksPage /> },
  { path: "/our-work", element: <OurWorkPage /> },
];