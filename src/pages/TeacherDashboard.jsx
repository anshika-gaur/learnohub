import React from "react";
import Navbar from "../components/Navbar.jsx";
import TeacherStats from "../components/TeacherStats.jsx";
import TeacherCourses from "../components/TeacherCourses.jsx";
import UploadSection from "../components/UploadSection.jsx";
import { teacherCourses, teacherStats } from "../data/teacherData.js";

export default function TeacherDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      <Navbar title="LearnoHub Teacher Dashboard" />

      <header className="text-center py-8 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
          Welcome Back, <span className="text-blue-600">Teacher 👩‍🏫</span>
        </h2>
        <p className="text-sm md:text-base text-gray-500">
          Manage your courses, upload materials, and track student progress.
        </p>
      </header>

      <TeacherStats stats={teacherStats} />
      <TeacherCourses courses={teacherCourses} />
      <UploadSection />

      <footer className="text-center py-6 text-gray-500 text-sm border-t">
        © {new Date().getFullYear()} EduNex | Empowering Educators & Learners
      </footer>
    </div>
  );
}
