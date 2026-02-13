import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";

// Lazy load all pages for better performance
const Home = lazy(() => import("./pages/Home.jsx"));
const StudentLogin = lazy(() => import("./pages/StudentLogin.jsx"));
const TeacherLogin = lazy(() => import("./pages/TeacherLogin.jsx"));
const StudentDashboard = lazy(() => import("./pages/StudentDashboard.jsx"));
const TeacherDashboard = lazy(() => import("./pages/TeacherDashboard.jsx"));
const CourseDescription = lazy(() => import("./pages/CourseDescription.jsx"));

// Loading component for Suspense
function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
    </div>
  );
}

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/teacher-login" element={<TeacherLogin />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
          <Route path="/course/:id" element={<CourseDescription />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
