import Link from "next/link";
import Image from "next/image";
import { invoices, getCustomersWithInvoiceCounts } from "./lib/data";
import Alert from "./components/Alert";

export default function Home() {
  const customers = getCustomersWithInvoiceCounts();
  const paidInvoices = invoices.filter((inv) => inv.status === "Paid").length;
  const pendingInvoices = invoices.filter(
    (inv) => inv.status === "Pending" || inv.status === "Overdue"
  ).length;

  return (
    <div
      className="min-h-screen bg-azure-100 dark:bg-zinc-900 py-12 px-4"
      style={{ backgroundColor: "#F0FFFF" }}
    >
      <main className="max-w-6xl mx-auto">
        {/* Header with Logo */}
        <div className="flex items-center gap-6 mb-8">
          <Image
            src="/logo.jpg"
            alt="Axelsson AB Logo"
            width={180}
            height={180}
            className="rounded-lg opacity-60 ml-12"
            priority
          />
          <div className="flex-1">
            <h1
              className="text-4xl font-bold text-center"
              style={{ fontFamily: "Garamond, serif" }}
            >
              <span className="text-yellow-600 dark:text-yellow-500">
                Axelsson AB
              </span>
              <span className="text-black dark:text-zinc-50 text-lg ml-6">
                Linköping
              </span>
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-200 mt-4 text-center">
              Transforming ideas into exceptional results !
            </p>
          </div>
        </div>

        {/* Alert Examples */}
        <Alert
          type="success"
          title="Welcome!"
          message="Dashboard is running smoothly. All systems operational."
        />

        {pendingInvoices > 0 && (
          <Alert
            type="warning"
            title="Attention Required"
            message={`You have ${pendingInvoices} pending invoice${
              pendingInvoices > 1 ? "s" : ""
            } that need attention.`}
          />
        )}

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-linear-to-br from-sky-200 to-blue-200 rounded-lg shadow-md p-6 transform hover:scale-105 transition-all duration-300">
            <div className="text-sm text-black mb-1">Total Customers</div>
            <div className="text-3xl font-bold text-black">
              {customers.length}
            </div>
          </div>

          <div className="bg-linear-to-br from-indigo-200 to-violet-200 rounded-lg shadow-md p-6 transform hover:scale-105 transition-all duration-300">
            <div className="text-sm text-black mb-1">Total Invoices</div>
            <div className="text-3xl font-bold text-black">
              {invoices.length}
            </div>
          </div>

          <div className="bg-linear-to-br from-emerald-200 to-green-200 rounded-lg shadow-md p-6 transform hover:scale-105 transition-all duration-300">
            <div className="text-sm text-black mb-1">Paid Invoices</div>
            <div className="text-3xl font-bold text-black">{paidInvoices}</div>
          </div>

          <div className="bg-linear-to-br from-amber-200 to-orange-200 rounded-lg shadow-md p-6 transform hover:scale-105 transition-all duration-300 animate-pulse-glow">
            <div className="text-sm text-black mb-1">Pending Invoices</div>
            <div className="text-3xl font-bold text-black">
              {pendingInvoices}
            </div>
          </div>
        </div>

        {/* Navigation Cards with Map */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column - Navigation cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/invoices"
              className="bg-white dark:bg-zinc-900 rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold mb-3 text-indigo-600 dark:text-indigo-200">
                Invoices
              </h2>
              <p className="text-zinc-600 dark:text-zinc-200 mb-4">
                View and manage all invoices. Filter by status and search by
                customer.
              </p>
              <div className="text-indigo-00 dark:text-indigo-200 font-medium">
                View Invoices →
              </div>
            </Link>

            <Link
              href="/customers"
              className="bg-white dark:bg-zinc-900 rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold mb-3 text-violet-600 dark:text-violet-200">
                Customers
              </h2>
              <p className="text-zinc-600 dark:text-zinc-200 mb-4">
                Browse your customer list with contact information and invoice
                counts.
              </p>
              <div className="text-violet-600 dark:text-violet-200 font-medium">
                View Customers →
              </div>
            </Link>
          </div>

          {/* Right column - Our Services */}
          <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-bold mb-6 text-zinc-800 dark:text-zinc-200">
              Our Services
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 dark:text-indigo-200 text-xl mt-1">
                  ✓
                </span>
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Software Development
                  </h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-200">
                    Custom solutions tailored to your needs
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 dark:text-indigo-200 text-xl mt-1">
                  ✓
                </span>
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">
                    IT Consulting
                  </h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-200">
                    Expert guidance for digital transformation
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 dark:text-indigo-200 text-xl mt-1">
                  ✓
                </span>
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Cloud Solutions
                  </h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-200">
                    Scalable and secure cloud infrastructure
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 dark:text-indigo-200 text-xl mt-1">
                  ✓
                </span>
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Data Analytics
                  </h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-200">
                    Transform data into actionable insights
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 dark:text-indigo-200 text-xl mt-1">
                  ✓
                </span>
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Mobile App Development
                  </h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-200">
                    iOS and Android applications
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 dark:text-indigo-200 text-xl mt-1">
                  ✓
                </span>
                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100">
                    Technical Support
                  </h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-200">
                    24/7 dedicated support services
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
