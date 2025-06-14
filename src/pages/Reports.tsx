import DashboardLayout from "../components/layout/DashboardLayout";

export default function Reports() {
  return (
    <DashboardLayout>
      <div className="py-8 px-2 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-left">
          Reports
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg bg-primary-100 dark:bg-primary-800 p-6 shadow border border-primary-200 dark:border-primary-700">
            <h2 className="text-xl font-semibold text-primary-900 dark:text-primary-100 mb-2">
              Analytics Coming Soon
            </h2>
            <p className="text-gray-700 dark:text-gray-200">
              This section will display analytics and reports about your cattle
              management, invoices, and customers. Stay tuned!
            </p>
          </div>
          <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow border border-gray-100 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Summary
            </h2>
            <ul className="text-gray-700 dark:text-gray-200 list-disc pl-5">
              <li>Customer growth</li>
              <li>Revenue trends</li>
              <li>Outstanding invoices</li>
              <li>And more...</li>
            </ul>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
