import AppRoutes from "./routes/AppRoutes";
import "./index.css";
import { AuthProvider } from "./auth/auth.context";

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
