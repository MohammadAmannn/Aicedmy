import React from 'react';

function ChapterList({ course }) {
  return (
    <div className="mt-8 px-6 py-8 bg-gradient-to-b from-purple-50 to-purple-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-purple-800 text-center mb-6">Chapter List</h2>
      <div className="space-y-6">
        {course?.courseOutput?.chapters?.map((item, index) => (
          <div 
            key={index} 
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 cursor-pointer">
            <h3 className="text-xl font-semibold text-purple-700">
              Chapter {index + 1}: {item.name}
            </h3>
            <p className="text-gray-600 mt-2 text-sm">
              {item.about}
            </p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm font-medium text-purple-600">
              🕓  Duration: {item.duration}
              </span>
              {/* <button className="px-4 py-2 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors duration-300">
                View More
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChapterList;
