import React from 'react';
import { FiClock, FiBookOpen } from 'react-icons/fi';

function ChapterList({ course }) {
  return (
    <div className="mt-8 px-4 py-8 bg-gradient-to-br from-purple-50/80 to-indigo-50/80 rounded-3xl shadow-2xl border border-white/20 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 bg-white/80 px-6 py-2 rounded-full shadow-sm">
            <FiBookOpen className="w-6 h-6 text-purple-600" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Course Chapters
            </h2>
          </div>
          <p className="mt-3 text-gray-600 text-lg">
            Explore the learning journey
          </p>
        </div>

        <div className="space-y-6 relative">
          {/* Timeline */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-200/50 to-blue-200/50 rounded-full"></div>

          {course?.courseOutput?.chapters?.map((item, index) => (
            <div 
              key={index}
              className="relative pl-14 group transition-all duration-300 hover:!opacity-100 hover:!scale-[1.02]"
              style={{ transitionDelay: `${index * 25}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-5 w-12 h-12 flex items-center justify-center">
                <div className="w-4 h-4 bg-purple-500 rounded-full ring-8 ring-purple-100/50 group-hover:ring-purple-200/80 transition-all">
                  <div className="w-full h-full animate-pulse bg-purple-300/30 rounded-full" />
                </div>
              </div>

              <div className="p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl border border-white/20 overflow-hidden transition-all duration-300">
                {/* Chapter header */}
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-sm font-semibold text-purple-600 mb-1">
                      Chapter {index + 1}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900">
                      {item.name}
                    </h3>
                  </div>
                  <span className="px-3 py-1 bg-purple-50 text-purple-600 text-sm rounded-full flex items-center gap-2">
                    <FiClock className="w-4 h-4" />
                    {item.duration}
                  </span>
                </div>

                {/* Chapter content */}
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {item.about}
                </p>

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none overflow-hidden">
                  <div className="absolute -inset-8 bg-[radial-gradient(300px_circle_at_var(--x)_var(--y),rgba(124,58,237,0.1)_0%,rgba(124,58,237,0)_100%)]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChapterList;