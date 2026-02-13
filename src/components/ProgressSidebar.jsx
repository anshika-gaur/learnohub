import React, { useState } from "react";

export default function ProgressSidebar() {
  const [showHistory, setShowHistory] = useState(false);

  return (
    <aside className="lg:w-1/4 flex flex-col gap-6 relative">
      {/* 📊 Progress Tracker */}
      <div className="bg-white p-6 rounded-xl shadow text-center">
        <h3 className="font-semibold text-gray-800 mb-2">Overall Progress</h3>
        <div className="relative mx-auto my-4 w-24 h-24">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="50%"
              cy="50%"
              r="38%"
              stroke="#e5e7eb"
              strokeWidth="10"
              fill="none"
            />
            <circle
              cx="50%"
              cy="50%"
              r="38%"
              stroke="#3b82f6"
              strokeWidth="10"
              fill="none"
              strokeDasharray="240"
              strokeDashoffset="60"
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-blue-600 font-bold">
            75%
          </span>
        </div>
        <p className="text-sm text-gray-500">Course Completion</p>
      </div>

      {/* 🕓 History Button */}
      <div className="bg-white p-6 rounded-xl shadow text-center relative">
        <h3 className="font-semibold text-gray-800 mb-3">Recent Activity</h3>
        <button
          onClick={() => setShowHistory(!showHistory)}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          View History
        </button>

        {showHistory && (
          <div className="absolute right-0 mt-3 bg-white shadow-lg rounded-xl p-4 w-64 border border-gray-200">
            <h4 className="font-semibold text-gray-700 mb-2">Recently Viewed</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>Data Structures → Binary Trees</li>
              <li>DBMS → Normalization</li>
              <li>OS → Scheduling</li>
            </ul>
            <button
              onClick={() => setShowHistory(false)}
              className="mt-3 text-xs text-blue-500 hover:underline"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </aside>
  );
}
