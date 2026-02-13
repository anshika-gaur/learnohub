import React from "react";

export default function CourseCard({ course, onEdit }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
      <div className="flex justify-between items-start gap-3">
        <div>
          <h3 className="text-lg font-semibold text-orange-600">{course.title}</h3>
          <p className="text-sm text-gray-500 mt-1">{course.subtitle}</p>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-500">Students</div>
          <div className="font-semibold">{course.students}</div>
        </div>
      </div>

      <div className="mt-3 flex gap-2">
        <button className="px-3 py-1 bg-orange-500 text-white rounded-md text-sm">View</button>
        <button onClick={() => onEdit(course)} className="px-3 py-1 border rounded-md text-sm">Edit</button>
      </div>
    </div>
  );
}
