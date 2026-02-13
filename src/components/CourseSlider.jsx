import { useNavigate } from "react-router-dom";

export default function CourseSlider({ courses }) {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-3">My Courses</h2>
      <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-blue-400">
        {courses.map((course) => (
          <div
            key={course.id}
            className="min-w-[260px] bg-white rounded-2xl shadow hover:shadow-lg transition cursor-pointer flex-shrink-0"
          >
            <img
              src={course.thumb}
              alt={course.title}
              className="w-full h-36 object-contain p-4"
            />
            <div className="p-4">
              <h3 className="font-bold text-blue-600">{course.title}</h3>
              <p className="text-sm text-gray-500">{course.teacher}</p>
              <p className="text-xs text-gray-400 mt-1">{course.desc}</p>
              <button
                onClick={() => navigate(`/course/${course.id}`)}
                className="mt-3 w-full text-sm bg-blue-600 text-white py-1 rounded hover:bg-blue-700 transition"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
