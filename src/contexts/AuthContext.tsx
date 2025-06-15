import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, name: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (_email: string, _password: string) => {
    console.log("Logging in with email:", _email, "and password:", _password);
    // TODO: Implement actual authentication logic
    // For now, we'll just simulate a successful login
    setIsAuthenticated(true);
  };

  const register = async (_email: string, _name: string, _password: string) => {
    console.log("Registering with email:", _email, "and password:", _password);
    // TODO: Implement actual registration logic
    // For now, we'll just simulate a successful registration
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
