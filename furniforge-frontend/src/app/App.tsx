import { AppRouter } from "./router";
import { AppProviders } from "./providers/app.providers";
import { AuthInitializer } from "../features/auth/components/auth-initializer";

function App() {
  return (
    <AppProviders>
      <AuthInitializer />
      <AppRouter />
    </AppProviders>
  );
}

export default App;