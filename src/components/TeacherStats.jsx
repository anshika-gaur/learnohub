import React from "react";

export default function TeacherStats({ stats }) {
  const statCards = [
    { label: "Total Students", value: stats.totalStudents },
    { label: "Courses", value: stats.coursesCount },
    { label: "Avg Rating", value: `${stats.avgRating} ⭐` },
    { label: "Assignments", value: stats.assignments },
  ];

  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 px-6 md:px-8 mb-8">
      {statCards.map((s, i) => (
        <div
          key={i}
          className="bg-white p-4 rounded-xl shadow flex flex-col items-center"
        >
          <div className="text-blue-500 mb-2 text-2xl">📘</div>
          <div className="text-sm text-gray-600">{s.label}</div>
          <div className="text-xl font-bold text-gray-900">{s.value}</div>
        </div>
      ))}
    </section>
  );
}
