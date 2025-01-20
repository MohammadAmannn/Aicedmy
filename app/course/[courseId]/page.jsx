// page.jsx
"use client";
import Header from "@/app/dashboard/_Dashboard_Components/Header";
import { db } from "@/configs/db";
import { CourseList } from "@/configs/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import CourseBasic from "@/app/create-course/[courseid]/_components/Course_basic_info";
import CourseDetails from "@/app/create-course/[courseid]/_components/course_details";
import ChapterList from "@/app/create-course/[courseid]/_components/Chapter_List";

function Page({ params }) {
  const [course, setCourse] = useState(null);

  useEffect(() => {
    if (params) {
      GetCourse();
    }
  }, [params]);

  const GetCourse = async () => {
    try {
      const result = await db
        .select()
        .from(CourseList)
        .where(eq(CourseList?.courseId, params?.courseId));

      if (result && result.length > 0) {
        setCourse(result[0]); // Update course state with fetched data
      } else {
        console.log("No course found");
      }
    } catch (error) {
      console.error("Error fetching course:", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="px-10 p-10 md:px-20 lg:px-44">
        <CourseBasic course={course} /> {/* Pass course data */}
        <CourseDetails course={course} /> {/* Pass course data */}
        <ChapterList course={course} /> {/* Pass course data */}
      </div>
    </div>
  );
}

export default Page;
