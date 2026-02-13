import React, { useState } from "react";

export default function TeacherCourses({ courses }) {
  const [courseList, setCourseList] = useState(courses);
  const [newCourse, setNewCourse] = useState("");

  const handleAddCourse = (e) => {
    e.preventDefault();
    if (!newCourse.trim()) return;
    setCourseList([
      ...courseList,
      { id: Date.now(), title: newCourse, students: 0, rating: 0 },
    ]);
    setNewCourse("");
  };

  return (
    <section className="px-6 md:px-8 mb-10">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          Your Courses
        </h2>

        <form onSubmit={handleAddCourse} className="flex w-full md:w-auto gap-2">
          <input
            type="text"
            placeholder="Add new course"
            value={newCourse}
            onChange={(e) => setNewCourse(e.target.value)}
            className="w-full md:w-64 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Add
          </button>
        </form>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courseList.map((c) => (
          <article
            key={c.id}
            className="bg-white rounded-xl p-4 shadow hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold text-gray-800">{c.title}</h3>
            <p className="text-sm text-gray-500 mt-1">
              {c.students} students • ⭐ {c.rating}
            </p>

            <div className="mt-3 flex gap-2">
              <button className="flex-1 bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 transition">
                Manage
              </button>
              <button className="flex-1 border px-3 py-2 rounded-lg hover:bg-gray-50 transition">
                Edit
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
