export interface Customer {
  id: number;
  name: string;
  email: string;
  phone: string;
  totalInvoices: number;
}

export interface Invoice {
  id: number;
  customerId: number;
  customerName: string;
  amount: string;
  status: "Paid" | "Pending" | "Overdue";
  date: string;
}

export const customers: Customer[] = [
  {
    id: 1,
    name: "SAAB Dynamics",
    email: "contact@saabdynamics.com",
    phone: "+46 010-137-3201",
    totalInvoices: 0, // Will be calculated dynamically
  },
  {
    id: 2,
    name: "Global Tech",
    email: "info@globaltech.com",
    phone: "+46 033-268-5498",
    totalInvoices: 0, // Will be calculated dynamically
  },
  {
    id: 3,
    name: "Lexicon AB",
    email: "hello@lexicon.com",
    phone: "+46 013-897-7603",
    totalInvoices: 0, // Will be calculated dynamically
  },
  {
    id: 4,
    name: "Motala Verkstad AB",
    email: "sales@motalaverkstad.com",
    phone: "+46 013-937-9624",
    totalInvoices: 0, // Will be calculated dynamically
  },
];

export const invoices: Invoice[] = [
  {
    id: 1,
    customerId: 1,
    customerName: "SAAB Dynamics",
    amount: "1,152,500 SEK",
    status: "Paid",
    date: "2025-11-01",
  },
  {
    id: 2,
    customerId: 2,
    customerName: "Global Tech",
    amount: "431,800 SEK",
    status: "Pending",
    date: "2025-11-05",
  },
  {
    id: 3,
    customerId: 3,
    customerName: "Lexicon AB",
    amount: "243,200 SEK",
    status: "Paid",
    date: "2025-11-08",
  },
  {
    id: 4,
    customerId: 4,
    customerName: "Motala Verkstad AB",
    amount: "674,100 SEK",
    status: "Overdue",
    date: "2025-10-30",
  },
  {
    id: 5,
    customerId: 1,
    customerName: "SAAB Dynamics",
    amount: "128,900 SEK",
    status: "Paid",
    date: "2025-11-03",
  },
  {
    id: 6,
    customerId: 2,
    customerName: "Global Tech",
    amount: "19,500 SEK",
    status: "Pending",
    date: "2025-11-09",
  },
  {
    id: 7,
    customerId: 3,
    customerName: "Lexicon AB",
    amount: "75,600 SEK",
    status: "Paid",
    date: "2025-11-07",
  },
  {
    id: 8,
    customerId: 4,
    customerName: "Motala Verkstad AB",
    amount: "461,200 SEK",
    status: "Paid",
    date: "2025-11-02",
  },
];

// Helper function to get customers with calculated invoice counts
export function getCustomersWithInvoiceCounts(): Customer[] {
  return customers.map((customer) => ({
    ...customer,
    totalInvoices: invoices.filter(
      (invoice) => invoice.customerId === customer.id
    ).length,
  }));
}
