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
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
            >
              <dt>
                <div className="absolute rounded-md bg-primary-500 p-3">
                  <stat.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <p className="ml-16 truncate text-sm font-medium text-gray-500">
                  {stat.name}
                </p>
              </dt>
              <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                <p className="text-2xl font-semibold text-gray-900">
                  {stat.value}
                </p>
                <p
                  className={`ml-2 flex items-baseline text-sm font-semibold ${
                    stat.changeType === "increase"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {stat.change}
                </p>
              </dd>
            </div>
          ))}
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {/* Recent Customers */}
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="p-6">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                Recent Customers
              </h3>
              <div className="mt-6 flow-root">
                <ul role="list" className="-my-5 divide-y divide-gray-200">
                  {recentCustomers.map((customer) => (
                    <li key={customer.id} className="py-4">
                      <div className="flex items-center space-x-4">
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-gray-900">
                            {customer.name}
                          </p>
                          <p className="truncate text-sm text-gray-500">
                            {customer.phone}
                          </p>
                        </div>
                        <div>
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              customer.status === "active"
                                ? "bg-green-100 text-green-800"
                                : "bg-gray-100 text-gray-800"
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
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <div className="p-6">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                Recent Invoices
              </h3>
              <div className="mt-6 flow-root">
                <ul role="list" className="-my-5 divide-y divide-gray-200">
                  {recentInvoices.map((invoice) => (
                    <li key={invoice.id} className="py-4">
                      <div className="flex items-center space-x-4">
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-gray-900">
                            Invoice #{invoice.id}
                          </p>
                          <p className="truncate text-sm text-gray-500">
                            Due: {invoice.dueDate.toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex flex-col items-end">
                          <p className="text-sm font-medium text-gray-900">
                            ${invoice.amount}
                          </p>
                          <span
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              invoice.status === "paid"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
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
