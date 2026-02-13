import React from "react";

export default function VideoCard({ video }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow">
      <div className="aspect-video bg-black">
        {/* Use thumbnail if available; for now embed YouTube lightly */}
        <iframe
          title={video.title}
          src={video.embed}
          allowFullScreen
          className="w-full h-full"
        />
      </div>
      <div className="p-3">
        <h4 className="font-semibold text-gray-800">{video.title}</h4>
        <p className="text-sm text-gray-500">{video.channel}</p>
      </div>
    </div>
  );
}
