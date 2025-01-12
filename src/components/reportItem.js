import React from "react";

const ReportItem = ({ report, onEdit, onDelete }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-lg font-semibold mb-2">{report.title}</h3>
      <p className="text-sm text-gray-700 mb-4">{report.description}</p>
      <p className="text-xs text-gray-500 mb-4">
        Dibuat pada: {new Date(report.createdAt).toLocaleString()}
      </p>
      <div className="flex justify-between items-center">
        <button
          onClick={() => onDelete(report.id)}
          className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 text-sm"
        >
          Hapus
        </button>
        <button
          onClick={() => onEdit(report)}
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 text-sm"
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default ReportItem;
