"use client";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import { db } from "@/configs/db";
import { CourseList as CourseListSchema } from "@/configs/schema";
import { eq } from "drizzle-orm";

function CourseList() {
  const { user } = useUser();
  const [courseList, setCourseList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      getUserCourses();
    }
  }, [user]);

  const getUserCourses = async () => {
    try {
      const result = await db
        .select()
        .from(CourseListSchema)
        .where(eq(CourseListSchema.createdBy, user?.primaryEmailAddress?.emailAddress));
      setCourseList(result);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          My AI Courses
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent ml-2">
            Studio
          </span>
        </h1>
        <p className="text-gray-600 text-lg">
          Explore and manage your AI-generated courses
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {loading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="h-64 bg-white rounded-xl shadow-md overflow-hidden relative group animate-pulse"
            >
              <div className="h-32 bg-gray-200" />
              <div className="p-4 space-y-3">
                <div className="h-4 bg-gray-200 rounded w-3/4" />
                <div className="h-3 bg-gray-200 rounded w-1/2" />
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 bg-gray-200 rounded-full" />
                  <div className="h-3 bg-gray-200 rounded w-1/4" />
                </div>
              </div>
            </div>
          ))
        ) : courseList?.length > 0 ? (
          courseList.map((course) => (
            <CourseCard course={course} key={course.id} />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <div className="text-gray-500 text-6xl mb-4">🎓</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No Courses Found
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Create your first AI-generated course to get started!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CourseList;