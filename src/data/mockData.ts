import type { Customer, Invoice, Payment } from "../types";

export const mockCustomers: Customer[] = [
  {
    id: "1",
    name: "John Doe",
    phone: "+1234567890",
    address: "123 Main St, City",
    createdAt: new Date("2024-01-01"),
    totalAmount: 5000,
    remainingAmount: 3000,
    status: "active",
  },
  {
    id: "2",
    name: "Jane Smith",
    phone: "+1987654321",
    address: "456 Oak Ave, Town",
    createdAt: new Date("2024-01-15"),
    totalAmount: 3000,
    remainingAmount: 0,
    status: "completed",
  },
  {
    id: "3",
    name: "Bob Wilson",
    phone: "+1122334455",
    address: "789 Pine Rd, Village",
    createdAt: new Date("2024-02-01"),
    totalAmount: 4000,
    remainingAmount: 4000,
    status: "active",
  },
];

export const mockInvoices: Invoice[] = [
  {
    id: "1",
    customerId: "1",
    amount: 1000,
    dueDate: new Date("2024-03-01"),
    status: "pending",
    payments: [],
    createdAt: new Date("2024-02-01"),
  },
  {
    id: "2",
    customerId: "2",
    amount: 1000,
    dueDate: new Date("2024-02-15"),
    status: "paid",
    payments: [
      {
        id: "1",
        customerId: "2",
        amount: 1000,
        date: new Date("2024-02-10"),
        paymentMethod: "cash",
      },
    ],
    createdAt: new Date("2024-01-15"),
  },
];

export const mockPayments: Payment[] = [
  {
    id: "1",
    customerId: "2",
    amount: 1000,
    date: new Date("2024-02-10"),
    paymentMethod: "cash",
  },
  {
    id: "2",
    customerId: "1",
    amount: 500,
    date: new Date("2024-02-15"),
    paymentMethod: "bank transfer",
  },
];
