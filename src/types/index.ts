export interface Customer {
  id: string;
  name: string;
  phone: string;
  address: string;
  createdAt: Date;
  totalAmount: number;
  remainingAmount: number;
  status: "active" | "completed" | "withdrawn";
}

export interface Invoice {
  id: string;
  customerId: string;
  amount: number;
  dueDate: Date;
  status: "pending" | "paid" | "overdue";
  payments: Payment[];
  createdAt: Date;
}

export interface Payment {
  id: string;
  customerId: string;
  amount: number;
  date: Date;
  paymentMethod: string;
  notes?: string;
}

export interface User {
  uid: string;
  email: string;
  displayName?: string;
}
