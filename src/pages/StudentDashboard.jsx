import React from "react";
import { useNavigate } from "react-router-dom";
import { courses, notes, resources } from "../data/studentData.js";
import CourseSlider from "../components/CourseSlider.jsx";
import NotesSection from "../components/NotesSection.jsx";
import ResourceSection from "../components/ResourceSection.jsx";
import ProgressSidebar from "../components/ProgressSidebar.jsx";

export default function StudentDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-white/70 backdrop-blur-md px-8 py-4 shadow sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-blue-600">LearnoHub Student Dashboard</h1>
        <button
          onClick={() => navigate("/")}
          className="text-sm bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700"
        >
          Logout
        </button>
      </nav>

      <main className="flex flex-col lg:flex-row flex-1 px-6 py-8 gap-6">
        {/* LEFT SIDE */}
        <section className="lg:w-3/4 space-y-8">
          <CourseSlider courses={courses} />
          <NotesSection notes={notes} />
          <ResourceSection resources={resources} />
        </section>

        {/* RIGHT SIDE */}
        <ProgressSidebar />
      </main>
    </div>
  );
}
