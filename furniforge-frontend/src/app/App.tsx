import { AppRouter } from "./router";
import { AppProviders } from "./providers/app.providers";
 
function App() {
  return (
    <AppProviders>
      <AppRouter />
    </AppProviders>
  );
}

export default App;