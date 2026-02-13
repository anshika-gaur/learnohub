import React from "react";

export default function AISuggestion({ suggestion }) {
  return (
    <div className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-2xl p-4 shadow-lg">
      <h4 className="font-bold mb-2">AI Suggestion</h4>
      <p className="text-sm">{suggestion}</p>
    </div>
  );
}
