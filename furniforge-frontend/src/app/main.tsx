import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import App from "./App";
import { Toaster } from "sonner";
import { ErrorBoundary } from "../core/error/error-boundary";
import "../core/api/interceptors"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
    <Toaster richColors position="bottom-right" />
  </StrictMode>
);