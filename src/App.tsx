import { ThemeProvider } from "./components/theme-provider";
import { LoginForm } from "./components/login-form";
import { SignUpForm } from "./components/signup-form";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Dashboard from "./app/dashboard/Dashboard";
import LoginLayout from "./components/layouts/LoginLayout";

function AppRoutes() {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {isAuthenticated ? (
        <Route element={<Dashboard />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<div>Dashboard Content</div>} />
          <Route path="/customers" element={<div>Customers Page</div>} />
          <Route path="/invoices" element={<div>Invoices Page</div>} />
          <Route path="/reports" element={<div>Reports Page</div>} />
        </Route>
      ) : (
        <>
          <Route
            path="/login"
            element={
              <LoginLayout>
                <LoginForm />
              </LoginLayout>
            }
          />
          <Route
            path="/signup"
            element={
              <LoginLayout>
                <SignUpForm />
              </LoginLayout>
            }
          />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </>
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
