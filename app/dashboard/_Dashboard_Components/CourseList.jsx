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
    }
  };

  return (
    <div className="container mx-auto mt-10 px-4">
      <h2 className="font-semibold text-2xl text-gray-800 mb-6 text-center">My AI Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courseList?.length > 0 ? (
          courseList.map((course, index) => (
            <CourseCard course={course} key={index} />
          ))
        ) : (
          [1, 2, 3, 4, 5].map((item, index) => (
            <div
              key={index}
              className="w-full h-[250px] bg-gradient-to-r from-purple-200 to-purple-300 animate-pulse rounded-lg"
            ></div>
          ))
        )}
      </div>
    </div>
  );
}

export default CourseList;
