import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { courses } from "../data/studentData";

export default function CourseDescription() {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = courses.find((c) => c.id === Number(id));
  if (!course)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        <p>Course not found.</p>
      </div>
    );

  const discountedPrice = Math.round(course.price * (1 - course.discount / 100));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center px-6 py-12">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="self-start mb-6 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        ← Back
      </button>

      <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg w-full max-w-6xl p-8 grid lg:grid-cols-2 gap-10">
        {/* ---------- Left Section ---------- */}
        <div>
          <h1 className="text-3xl font-bold text-blue-700 mb-2">{course.title}</h1>
          <p className="text-gray-600 text-lg mb-4">{course.desc}</p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
            <span>🧑‍🏫 {course.teacher}</span>
            <span>⭐ {course.rating}</span>
            <span>📘 {course.language}</span>
            <span>👥 {course.students} Students</span>
            <span>⏱️ {course.duration}</span>
          </div>

          <h3 className="text-lg font-semibold mb-2 text-gray-800">What you'll learn</h3>
          <ul className="list-disc list-inside text-gray-700 mb-5 space-y-1">
            {course.skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>

          <h3 className="text-lg font-semibold mb-2 text-gray-800">Course Highlights</h3>
          <ul className="space-y-2 text-gray-700">
            {course.highlights.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✔️</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- Right Section ---------- */}
        <div className="flex flex-col items-center lg:items-end">
          <img
            src={course.thumb}
            alt={course.title}
            className="rounded-xl shadow-lg mb-6 w-full lg:w-[380px]"
          />

          <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-sm">
            <div className="flex justify-between items-center mb-2">
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  ₹{discountedPrice}{" "}
                  <span className="text-sm text-gray-400 line-through">
                    ₹{course.price}
                  </span>
                </p>
                <p className="text-sm text-gray-500">+ GST</p>
              </div>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                {course.discount}% OFF
              </span>
            </div>

            <p className="text-sm text-gray-700 mt-3">
              🎁 Coupon:{" "}
              <span className="bg-green-100 text-green-700 font-mono px-2 rounded">
                EDU75
              </span>{" "}
              extra 10% OFF
            </p>

            <div className="flex gap-3 mt-6">
              <button className="flex-1 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold transition">
                Preview Course
              </button>
              <button className="flex-1 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition">
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
