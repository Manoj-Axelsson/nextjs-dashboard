"use client";

import { invoices } from "../lib/data";
import { useState } from "react";

export default function Invoices() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("All");

  const filteredInvoices = invoices.filter((invoice) => {
    const matchesSearch = invoice.customerName
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "All" || invoice.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div
      className="min-h-screen py-12 px-4"
      style={{ backgroundColor: "#F0FFFF" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-black dark:text-zinc-50">
            Invoices
          </h1>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search by customer name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          </div>
          <div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full sm:w-auto px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            >
              <option value="All">All Status</option>
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
              <option value="Overdue">Overdue</option>
            </select>
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-zinc-600 dark:text-zinc-200 mb-4">
          Showing {filteredInvoices.length} of {invoices.length} invoices
        </p>

        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-zinc-100 dark:bg-zinc-800">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  ID
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  Customer
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  Amount
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  Date
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-700">
              {filteredInvoices.length > 0 ? (
                filteredInvoices.map((invoice, index) => (
                  <tr
                    key={invoice.id}
                    className={`transition-all duration-300 hover:scale-[1.01] hover:shadow-md hover:bg-indigo-50/50 dark:hover:bg-indigo-900/10 border-l-4 ${
                      index % 2 === 0
                        ? "bg-white dark:bg-zinc-900 border-l-transparent"
                        : "bg-slate-50 dark:bg-zinc-800/50 border-l-transparent"
                    } hover:border-l-indigo-200 rounded-lg`}
                  >
                    <td className="px-6 py-4 text-sm text-zinc-900 dark:text-zinc-100 rounded-l-lg">
                      #{invoice.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-zinc-900 dark:text-zinc-100">
                      {invoice.customerName}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-zinc-900 dark:text-zinc-100">
                      {invoice.amount}
                    </td>
                    <td className="px-6 py-4 text-sm text-zinc-600 dark:text-zinc-200">
                      {invoice.date}
                    </td>
                    <td className="px-6 py-4 rounded-r-lg">
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full ${
                          invoice.status === "Paid"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            : invoice.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                        }`}
                      >
                        {invoice.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-8 text-center text-zinc-500 dark:text-zinc-200"
                  >
                    No invoices found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
