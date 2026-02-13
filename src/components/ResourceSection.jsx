import React from "react";

export default function ResourceSection({ resources }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-3">
        Recommended Resources
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {resources.map((res) => (
          <a
            key={res.id}
            href={res.link}
            target="_blank"
            rel="noreferrer"
            className="bg-white rounded-xl shadow hover:shadow-lg transition block overflow-hidden"
          >
            <img src={res.thumb} alt={res.title} className="w-full h-40 object-cover" />
            <div className="p-3">
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                {res.subject}
              </span>
              <h3 className="text-gray-800 font-semibold mt-2">{res.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
