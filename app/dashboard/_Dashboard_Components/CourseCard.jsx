"use client";
import Image from 'next/image';
import React from 'react';
import { FaBookReader } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import Link from 'next/link';

function CourseCard({ course }) {
  const { name, thumbnail, category, level, courseOutput } = course;

  return (
    <Link href={'/course/' + course?.courseId}>
      <div className="border rounded-lg shadow-lg p-4 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer bg-white hover:shadow-xl">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={`${name} thumbnail`}
            width={300}
            height={200}
            className="w-full h-48 object-cover rounded-md"
          />
        ) : (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-lg">
            <p className="text-gray-600">No Image</p>
          </div>
        )}

        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 truncate">
            {courseOutput?.courseName || name}
          </h3>
          <p className="text-purple-600 font-medium">{category}</p>

          <div className="mt-4 flex justify-between items-center text-violet-600">
            <div className="flex items-center gap-2">
              <FaBookReader className="text-violet-500" />
              <span>Chapters: {courseOutput?.noOfChapters}</span>
            </div>
            <div className="flex items-center gap-2">
              <BsGraphUp className="text-violet-500" />
              <span>Level: {level}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CourseCard;
