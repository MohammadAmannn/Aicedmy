import React from "react";
import { FiBarChart2 } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";



function CourseDetails({ course }) {
  return (
    <div className="border p-7 rounded-xl shadow-sm mt-3">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5  ">
        <div className="flex  gap-2">
          <FiBarChart2 className="text-4xl text-violet-500" />
          <div>
            <h2 className="text-xs text-gray-500">Skill Level</h2>
            <h2 className="font-medium text-lg">{course?.level}</h2>
          </div>
        </div>

        <div className="flex  gap-2">
          <FaRegClock className="text-4xl text-violet-500" />
          <div>
            <h2 className="text-xs text-gray-500">Duration</h2>
            <h2 className="font-medium text-lg">{course?.courseOutput?.duration}</h2>
          </div>
        </div>
        <div className="flex  gap-2">
          <FaBookOpen className="text-4xl text-violet-500" />
          <div>
            <h2 className="text-xs text-gray-500">No Of Chapters</h2>
            <h2 className="font-medium text-lg">{course?.courseOutput?.noOfChapters}</h2>
          </div>
        </div>

        <div className="flex  gap-2">
          <FaRegCirclePlay className="text-4xl text-violet-500" />
          <div>
            <h2 className="text-xs text-gray-500">Include Video</h2>
            <h2 className="font-medium text-lg">{course?.includeVideo}</h2>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CourseDetails;
