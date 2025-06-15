import { ThemeProvider } from "./components/theme-provider";
import { LoginForm } from "./components/login-form";
import { Card } from "./components/ui/card";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider, useAuth } from "./contexts/AuthContext";

function AppRoutes() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {isAuthenticated ? (
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customers" element={<div>Customers Page</div>} />
          <Route path="/invoices" element={<div>Invoices Page</div>} />
          <Route path="/reports" element={<div>Reports Page</div>} />
        </Route>
      ) : (
        <Route
          path="*"
          element={
            <div className="min-h-svh bg-background">
              <div className="w-full flex h-svh flex-col items-center justify-center">
                <Card className="w-full max-w-md p-6">
                  <LoginForm />
                </Card>
              </div>
            </div>
          }
        />
      )}
    </Routes>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
