import React from "react";

export default function NoteCard({ note }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition">
      <h3 className="font-semibold text-gray-800">{note.title}</h3>
      <p className="text-sm text-gray-500 mt-1">{note.description}</p>
      <div className="mt-3 flex items-center justify-between">
        <a
          href={note.link || "#"}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-indigo-600 hover:underline"
        >
          View / Download
        </a>
        <span className="text-xs text-gray-400">{note.size || "1.2MB"}</span>
      </div>
    </div>
  );
}
