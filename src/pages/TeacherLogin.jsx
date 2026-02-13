import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function TeacherLogin() {
  const navigate = useNavigate(); // for navigation
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 🔹 Temporary fake authentication
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if user entered something (no real auth)
    if (email.trim() !== "" && password.trim() !== "") {
      // You can show a small alert for demo
     // alert("Login successful (temporary logic)");
      // Redirect to dashboard
      navigate("/teacher-dashboard");
    } else {
      alert("Please enter both email and password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-100 via-orange-200 to-yellow-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-orange-600 mb-6">
          Teacher Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Input */}
          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              placeholder="teacher@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg font-semibold transition-all"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-500">
          Are you a student?{" "}
          <Link to="/student-login" className="text-orange-600 hover:underline">
            Go to Student Login
          </Link>
        </p>
      </div>
    </div>
  );
}
