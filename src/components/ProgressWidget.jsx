import React from "react";

export default function ProgressWidget({ title, percentage }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-semibold text-gray-700">{title}</h4>
        <span className="text-sm text-gray-500">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="h-3 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
