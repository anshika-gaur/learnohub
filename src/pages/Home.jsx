import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-end items-center overflow-hidden pb-16">
      {/* 🌌 3D Background */}
      <div className="absolute inset-0 -z-20">
        <iframe
          src="https://my.spline.design/claritystream-kgkslKGHuW7gFGOBunSFA75d/"
          title="Edunex 3D Scene"
          className="w-full h-full border-none"
          allowFullScreen
        ></iframe>
      </div>

      {/* 🌫️ Overlay for clarity */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 -z-10"></div>

      {/* ✨ Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-xl text-center border border-white/20 w-[90%] max-w-lg mb-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-bold text-white drop-shadow-lg mb-4"
        >
          Welcome to <span className="text-blue-400">LearnoHub 🚀</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="text-gray-200 mb-8 text-lg drop-shadow-md"
        >
          Learn smarter, not harder — explore AI-powered tools, notes, and lectures.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          className="flex gap-6 justify-center"
        >
          <Link
            to="/student-login"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 transition-all"
          >
            Student Login
          </Link>
          <Link
            to="/teacher-login"
            className="px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold shadow-md hover:bg-orange-600 transition-all"
          >
            Teacher Login
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
