import React from "react";
import { Link } from "react-router-dom";

export default function StudentLogin() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
          Student Login
        </h2>
        <form className="space-y-5">
          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              placeholder="student@example.com"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          <Link
            to="/student-dashboard"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-all text-center"
          >
            Login
          </Link>
        </form>

        <p className="text-center mt-4 text-sm text-gray-500">
          Are you a teacher?{" "}
          <Link to="/teacher-login" className="text-blue-600 hover:underline">
            Go to Teacher Login
          </Link>
        </p>
      </div>
    </div>
  );
}
