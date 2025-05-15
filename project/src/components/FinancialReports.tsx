import React, { useState } from "react";
import { FaEye, FaDownload } from "react-icons/fa";

const Reports = () => {
  // Sample dummy data
  const reportsData = [
    {
        id: 1,
        title: "Annual Report",
        date: "2024",
        link: "/public/publicationDocs/audit.pdf", // Add the download link here
      },
  ];

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const reportsPerPage = 5;

  const filteredReports = reportsData.filter((report) =>
    report.title.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastReport = currentPage * reportsPerPage;
  const indexOfFirstReport = indexOfLastReport - reportsPerPage;
  const currentReports = filteredReports.slice(indexOfFirstReport, indexOfLastReport);

  const totalPages = Math.ceil(filteredReports.length / reportsPerPage);

  return (
    <div className="pt-20 pb-16 bg-amber-50 pattern-bg-yellow w-full min-h-screen">
      <div className="max-w-6xl mx-auto w-full px-4">
        <h1 className="text-4xl font-semibold mb-6 text-center">Financial Reports</h1>

        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search by title..."
            className="p-2 border border-gray-300 rounded-md w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto shadow-md rounded-md">
          <table className="min-w-full bg-white border">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="py-3 px-4 border-b">Title</th>
                <th className="py-3 px-4 border-b">Date</th>
                <th className="py-3 px-4 border-b text-center">Download</th>
              </tr>
            </thead>
            <tbody>
  {currentReports.length === 0 ? (
    <tr>
      <td colSpan={3} className="py-4 px-4 text-center text-gray-500">
        No reports found.
      </td>
    </tr>
  ) : (
    currentReports.map((report) => (
      <tr key={report.id} className="hover:bg-gray-50">
        <td className="py-3 px-4 border-b">{report.title}</td>
        <td className="py-3 px-4 border-b">{report.date}</td>
        <td className="py-3 px-4 border-b text-center">
        <a
  href={report.link}
  className="text-amber-600 hover:text-amber-800 mr-4 inline-flex items-center justify-center"
  title="Download Report"
  target="_blank" // To open in a new tab
  rel="noopener noreferrer" // For security reasons when opening in a new tab
>
  <FaDownload className="text-lg" />
</a>
        </td>
      </tr>
    ))
  )}
</tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              className={`px-3 py-1 rounded-md ${
                currentPage === num ? "bg-amber-500 text-white" : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setCurrentPage(num)}
            >
              {num}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;