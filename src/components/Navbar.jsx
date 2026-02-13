import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar({ role }) {
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-white/70 backdrop-blur-md shadow-sm px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="text-2xl font-bold text-indigo-600">LearnoHub</div>
        <div className="text-sm text-gray-600 hidden md:block">Learn Smarter, Not Harder</div>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate("/")}
          className="text-sm text-gray-700 hover:text-indigo-600"
        >
          Home
        </button>
        <button
          onClick={() => navigate(role === "teacher" ? "/teacher-dashboard" : "/student-dashboard")}
          className="text-sm text-gray-700 hover:text-indigo-600"
        >
          Dashboard
        </button>
        <button
          onClick={() => {
            // simple frontend logout: navigate home
            navigate("/");
          }}
          className="px-3 py-1 bg-red-500 text-white text-sm rounded-md"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
