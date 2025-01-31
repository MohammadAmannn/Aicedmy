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
      <div className="group relative border border-gray-100 rounded-2xl shadow-lg hover:shadow-2xl p-4 hover:-translate-y-2 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer bg-white">
        {/* Image Section with Gradient Overlay */}
        <div className="relative overflow-hidden rounded-xl aspect-video">
          {thumbnail ? (
            <Image
              src={thumbnail}
              alt={`${name} thumbnail`}
              width={400}
              height={300}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center rounded-xl">
              <span className="text-white text-4xl">🎓</span>
            </div>
          )}
          {/* Category Badge */}
          <div className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-purple-600">
            {category}
          </div>
        </div>

        {/* Content Section */}
        <div className="mt-6 px-2">
          <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 leading-snug bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            {courseOutput?.courseName || name}
          </h3>

          {/* Metadata */}
          <div className="flex flex-col gap-3 text-gray-600">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-purple-50 px-3 py-1.5 rounded-full">
                <FaBookReader className="text-purple-600 w-5 h-5" />
                <span className="text-sm font-medium">
                  {courseOutput?.noOfChapters || 0} Chapters
                </span>
              </div>
              <div className="flex items-center gap-2 bg-blue-50 px-3 py-1.5 rounded-full">
                <BsGraphUp className="text-blue-600 w-5 h-5" />
                <span className="text-sm font-medium capitalize">{level}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hover Gradient Effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none overflow-hidden">
          <div className="absolute -inset-8 bg-[radial-gradient(300px_circle_at_var(--x)_var(--y),rgba(124,58,237,0.1)_0%,rgba(124,58,237,0)_100%)]"></div>
        </div>
      </div>
    </Link>
  );
}

export default CourseCard;