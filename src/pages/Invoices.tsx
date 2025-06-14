import DashboardLayout from "../components/layout/DashboardLayout";
import { mockInvoices, mockCustomers } from "../data/mockData";

export default function Invoices() {
  return (
    <DashboardLayout>
      <div className="py-8 px-2 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-left">
          Invoices
        </h1>
        <div className="overflow-x-auto rounded-lg shadow border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Invoice #
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Due Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {mockInvoices.map((invoice) => {
                const customer = mockCustomers.find(
                  (c) => c.id === invoice.customerId
                );
                return (
                  <tr key={invoice.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                      #{invoice.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                      {customer?.name || "Unknown"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                      ${invoice.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                      {invoice.dueDate.toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          invoice.status === "paid"
                            ? "bg-green-100 text-green-800 dark:bg-green-700 dark:text-green-100"
                            : "bg-yellow-100 text-yellow-800 dark:bg-yellow-700 dark:text-yellow-100"
                        }`}
                      >
                        {invoice.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
