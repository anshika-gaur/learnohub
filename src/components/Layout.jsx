import React from "react";

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* 🌌 Lightweight Gradient Background - Fast loading */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />

      {/* Optional overlay tint for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/20 to-white/30 backdrop-blur-sm -z-5"></div>

      {/* 🌟 Page Content */}
      <main className="relative z-10">{children}</main>
    </div>
  );
}
