"use client";

import { getCustomersWithInvoiceCounts } from "../lib/data";
import { useState } from "react";

export default function Customers() {
  const customers = getCustomersWithInvoiceCounts();
  const [searchTerm, setSearchTerm] = useState("");
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const filteredCustomers = customers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="min-h-screen py-12 px-4"
      style={{ backgroundColor: "#F0FFFF" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-black dark:text-zinc-50">
            Customers
          </h1>
        </div>

        {/* Search Section */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-200"
          />
        </div>

        {/* Results count */}
        <p className="text-sm text-zinc-600 dark:text-zinc-200 mb-4">
          Showing {filteredCustomers.length} of {customers.length} customers
        </p>

        {filteredCustomers.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {filteredCustomers.map((customer) => (
              <div
                key={customer.id}
                className="perspective-1000 h-80"
                onMouseEnter={() => setFlippedCard(customer.id)}
                onMouseLeave={() => setFlippedCard(null)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                    flippedCard === customer.id ? "rotate-y-180" : ""
                  }`}
                >
                  {/* Front of Card */}
                  <div className="absolute w-full h-full backface-hidden bg-white dark:from-zinc-900 dark:to-zinc-800 rounded-lg shadow-sm p-6 border border-sky-100 hover:border-sky-200 transition-all duration-300 hover:shadow-md">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mb-1">
                          {customer.name}
                        </h2>
                        <p className="text-sm text-zinc-400 dark:text-zinc-200">
                          Customer ID: #{customer.id}
                        </p>
                      </div>
                      <span className="px-4 py-2 text-xs font-semibold rounded-full bg-sky-100 text-sky-700 shadow-sm">
                        {customer.totalInvoices} Invoices
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <span className="text-zinc-400 dark:text-zinc-200 w-20">
                          Email:
                        </span>
                        <a
                          href={`mailto:${customer.email}`}
                          className="text-sky-600 dark:text-indigo-200 hover:underline"
                        >
                          {customer.email}
                        </a>
                      </div>
                      <div className="flex items-center text-sm">
                        <span className="text-zinc-400 dark:text-zinc-200 w-20">
                          Phone:
                        </span>
                        <a
                          href={`tel:${customer.phone}`}
                          className="text-zinc-700 dark:text-zinc-100"
                        >
                          {customer.phone}
                        </a>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-700">
                      <button className="w-full px-4 py-2 bg-sky-100 text-sky-700 rounded-lg hover:bg-sky-200 transition-all duration-300 text-sm font-medium shadow-sm hover:shadow-md">
                        View Details
                      </button>
                    </div>
                    <p className="text-xs text-zinc-300 dark:text-zinc-500 mt-4 text-center italic">
                      Hover to see actions
                    </p>
                  </div>

                  {/* Back of Card */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-sky-50 dark:from-zinc-800 dark:to-zinc-900 rounded-lg shadow-sm p-6 border border-sky-100">
                    <div className="h-full flex flex-col justify-center items-center text-center">
                      <h3 className="text-2xl font-bold text-sky-700 dark:text-violet-200 mb-4">
                        {customer.name}
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-300 mb-6">
                        Total Invoices:{" "}
                        <span className="font-bold text-2xl">
                          {customer.totalInvoices}
                        </span>
                      </p>
                      <div className="w-full space-y-2">
                        <a
                          href={`mailto:${customer.email}`}
                          className="block w-full px-4 py-2 bg-sky-200 text-sky-800 rounded-lg hover:bg-sky-300 transition-colors text-sm font-medium"
                        >
                          📧 Send Email
                        </a>
                        <a
                          href={`tel:${customer.phone}`}
                          className="block w-full px-4 py-2 bg-sky-100 text-sky-800 rounded-lg hover:bg-sky-200 transition-colors text-sm font-medium"
                        >
                          📞 Call Customer
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-md p-8 text-center">
            <p className="text-zinc-500 dark:text-zinc-200">
              No customers found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
