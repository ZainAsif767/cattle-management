import DashboardLayout from "../components/layout/DashboardLayout";
import { mockCustomers, mockInvoices, mockPayments } from "../data/mockData";
import {
  UserGroupIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

export default function Dashboard() {
  const stats = [
    {
      name: "Total Customers",
      value: mockCustomers.length,
      icon: UserGroupIcon,
      change: "+12%",
      changeType: "increase",
    },
    {
      name: "Total Invoices",
      value: mockInvoices.length,
      icon: DocumentTextIcon,
      change: "+8%",
      changeType: "increase",
    },
    {
      name: "Total Revenue",
      value: `$${mockPayments
        .reduce((sum, payment) => sum + payment.amount, 0)
        .toLocaleString()}`,
      icon: CurrencyDollarIcon,
      change: "+23%",
      changeType: "increase",
    },
    {
      name: "Pending Payments",
      value: mockInvoices.filter((inv) => inv.status === "pending").length,
      icon: ChartBarIcon,
      change: "-2%",
      changeType: "decrease",
    },
  ];

  const recentCustomers = mockCustomers.slice(0, 5);
  const recentInvoices = mockInvoices.slice(0, 5);

  return (
    <DashboardLayout>
      <div className="w-full py-8 px-2 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-left">
          Dashboard
        </h1>
        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="relative flex flex-col justify-between h-36 overflow-hidden rounded-lg bg-white dark:bg-gray-800 px-6 pt-5 pb-6 shadow border border-gray-100 dark:border-gray-700"
            >
              <dt>
                <div className="absolute rounded-md bg-primary-500 p-3 -top-3 -left-3">
                  <stat.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <p className="ml-12 truncate text-sm font-medium text-gray-500 dark:text-gray-300 mt-2">
                  {stat.name}
                </p>
              </dt>
              <dd className="ml-12 flex items-baseline pb-2">
                <p className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                  {stat.value}
                </p>
                <p
                  className={`ml-2 flex items-baseline text-sm font-semibold ${
                    stat.changeType === "increase"
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {stat.change}
                </p>
              </dd>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Recent Customers */}
          <div className="overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow border border-gray-100 dark:border-gray-700 flex flex-col h-full">
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold leading-6 text-gray-900 dark:text-gray-100 mb-4 text-left">
                Recent Customers
              </h3>
              <div className="flex-1">
                <ul
                  role="list"
                  className="-my-5 divide-y divide-gray-200 dark:divide-gray-700"
                >
                  {recentCustomers.map((customer) => (
                    <li key={customer.id} className="py-4">
                      <div className="flex items-center space-x-4">
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-gray-900 dark:text-gray-100">
                            {customer.name}
                          </p>
                          <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                            {customer.phone}
                          </p>
                        </div>
                        <div>
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              customer.status === "active"
                                ? "bg-primary-100 text-primary-800 dark:bg-primary-700 dark:text-primary-100"
                                : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                            }`}
                          >
                            {customer.status}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Recent Invoices */}
          <div className="overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow border border-gray-100 dark:border-gray-700 flex flex-col h-full">
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold leading-6 text-gray-900 dark:text-gray-100 mb-4 text-left">
                Recent Invoices
              </h3>
              <div className="flex-1">
                <ul
                  role="list"
                  className="-my-5 divide-y divide-gray-200 dark:divide-gray-700"
                >
                  {recentInvoices.map((invoice) => (
                    <li key={invoice.id} className="py-4">
                      <div className="flex items-center space-x-4">
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-gray-900 dark:text-gray-100">
                            Invoice #{invoice.id}
                          </p>
                          <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                            Due: {invoice.dueDate.toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex flex-col items-end">
                          <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                            ${invoice.amount}
                          </p>
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              invoice.status === "paid"
                                ? "bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100"
                                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-100"
                            }`}
                          >
                            {invoice.status}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
