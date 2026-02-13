import React from "react";

export default function NotesSection({ notes }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-3">Notes</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map((note) => (
          <div
            key={note.id}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <h3 className="font-semibold text-gray-700">{note.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{note.summary}</p>
            <a
              href={note.link}
              className="inline-block mt-3 text-blue-600 text-sm hover:underline"
            >
              Read Full Note →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
