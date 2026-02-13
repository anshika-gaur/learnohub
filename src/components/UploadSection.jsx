import React, { useState } from "react";

export default function UploadSection() {
  const [fileName, setFileName] = useState(null);

  return (
    <section className="bg-white p-6 mx-6 md:mx-8 rounded-xl shadow mb-12">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        Upload New Material
      </h3>

      <div className="grid md:grid-cols-3 gap-3 items-end">
        <input
          type="text"
          placeholder="Course Name"
          className="border rounded px-3 py-2 focus:ring-2 focus:ring-blue-300 outline-none"
        />
        <input
          type="text"
          placeholder="Material Title"
          className="border rounded px-3 py-2 focus:ring-2 focus:ring-blue-300 outline-none"
        />
        <label className="flex items-center gap-3 border rounded px-3 py-2 cursor-pointer">
          <input
            type="file"
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? null)}
            className="hidden"
          />
          <span className="text-sm text-gray-600">Choose file</span>
          <span className="text-xs text-gray-400">{fileName ?? ""}</span>
        </label>

        <div className="md:col-span-3">
          <button
            type="button"
            onClick={() => alert("Upload successful (mock)")}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Upload Material
          </button>
        </div>
      </div>
    </section>
  );
}
