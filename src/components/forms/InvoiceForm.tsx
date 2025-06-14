import { useForm } from "react-hook-form";
import type { Customer } from "../../types";

interface InvoiceFormProps {
  customers: Customer[];
  onSubmit: (data: InvoiceFormData) => void;
}

interface InvoiceFormData {
  customerId: string;
  amount: number;
  totalInstallments: number;
}

export default function InvoiceForm({ customers, onSubmit }: InvoiceFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InvoiceFormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label
          htmlFor="customerId"
          className="block text-sm font-medium text-gray-700"
        >
          Customer
        </label>
        <select
          id="customerId"
          {...register("customerId", { required: "Customer is required" })}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
        >
          <option value="">Select a customer</option>
          {customers.map((customer) => (
            <option key={customer.id} value={customer.id}>
              {customer.name}
            </option>
          ))}
        </select>
        {errors.customerId && (
          <p className="mt-2 text-sm text-red-600">
            {errors.customerId.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="amount"
          className="block text-sm font-medium text-gray-700"
        >
          Amount
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div>
          <input
            type="number"
            id="amount"
            {...register("amount", {
              required: "Amount is required",
              min: { value: 0, message: "Amount must be positive" },
            })}
            className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
            placeholder="0.00"
            step="0.01"
          />
        </div>
        {errors.amount && (
          <p className="mt-2 text-sm text-red-600">{errors.amount.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="totalInstallments"
          className="block text-sm font-medium text-gray-700"
        >
          Number of Installments
        </label>
        <input
          type="number"
          id="totalInstallments"
          {...register("totalInstallments", {
            required: "Number of installments is required",
            min: { value: 1, message: "Must have at least 1 installment" },
            max: { value: 36, message: "Maximum 36 installments allowed" },
          })}
          className="mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
        {errors.totalInstallments && (
          <p className="mt-2 text-sm text-red-600">
            {errors.totalInstallments.message}
          </p>
        )}
      </div>

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          Create Invoice
        </button>
      </div>
    </form>
  );
}
