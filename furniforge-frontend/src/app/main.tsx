import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import App from "./App";
import { Toaster } from "sonner";
import { ErrorBoundary } from "../core/error/error-boundary";
import "../core/api/http-client"
import { GoogleOAuthProvider } from "@react-oauth/google";
import { env } from "../core/config/env";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={env.GOOGLE_CLIENT_ID}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
    <Toaster richColors position="bottom-right" />
    </GoogleOAuthProvider>
  </StrictMode>
);