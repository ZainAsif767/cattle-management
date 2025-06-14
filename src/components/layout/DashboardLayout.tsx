import type { ReactNode } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  HomeIcon,
  UserGroupIcon,
  DocumentTextIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import { useAuth } from "../../contexts/AuthContext";

interface DashboardLayoutProps {
  children: ReactNode;
}

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
  { name: "Customers", href: "/customers", icon: UserGroupIcon },
  { name: "Invoices", href: "/invoices", icon: DocumentTextIcon },
  { name: "Reports", href: "/reports", icon: ChartBarIcon },
];

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex w-full">
      {/* Sidebar */}
      <aside className="hidden md:flex md:w-64 md:flex-col bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
        <div className="flex flex-col flex-grow pt-5 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4 mb-6">
            <h1 className="text-lg font-bold text-primary-600 dark:text-primary-400">
              Cattle Manager
            </h1>
          </div>
          <nav className="flex-1 px-2 pb-4 space-y-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors
                    ${
                      isActive
                        ? "bg-primary-100 text-primary-900 dark:bg-primary-700 dark:text-primary-50"
                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white"
                    }`}
                >
                  <item.icon
                    className={`mr-3 flex-shrink-0 h-6 w-6 transition-colors
                      ${
                        isActive
                          ? "text-primary-600 dark:text-primary-200"
                          : "text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-200"
                      }`}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <div className="px-2 pb-4 mt-auto">
            <button
              onClick={handleSignOut}
              className="w-full flex items-center px-2 py-2 text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-800 transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </aside>
      {/* Main content */}
      <main className="flex-1">
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
