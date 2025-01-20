"use client";
import { CourseList } from '@/configs/schema';
import { useUser } from '@clerk/nextjs';
import { and, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import CourseBasic from '../_components/Course_basic_info';
import { db } from '@/configs/db';
import { FaCopy } from "react-icons/fa";

function Finshpage({ params }) {
  const { user } = useUser();
  const [courses, setCourses] = useState(null); // Initialize with null instead of an empty array

  useEffect(() => {
    if (params && user) {
      GetCourse();
    }
  }, [params, user]);

  const GetCourse = async () => {
    const result = await db
      .select()
      .from(CourseList)
      .where(
        and(
          eq(CourseList.courseId, params?.courseid),
          eq(CourseList?.createdBy, user?.primaryEmailAddress?.emailAddress)
        )
      );

    // Store the course in the state
    if (result.length > 0) {
      setCourses(result[0]);
    } else {
      console.error('No course found');
    }
    console.log(result);
  };

  return (
    <div className='px-10 md:px-20 lg:px-44 my-7'>
      <h2 className='text-center font-bold text-2xl my-3 text-indigo-500'>
        Congrats!🎉 Your Course Is Ready Keep Learning!👻
      </h2>

      {courses && (
        <>
          <CourseBasic course={courses} refreshData={() => console.log()} />
          <h2 className='mt-3 font-bold'>Course URL</h2>
          <h2 className='text-center flex gap-5 items-center text-gray-400 border p-2 rounded-sm'>
            {`${process.env.NEXT_PUBLIC_HOST_NAME}/course/view/${courses.courseId}`}
            <FaCopy
              className='h-5 w-5 cursor-pointer'
              onClick={async () => {
                const textToCopy = `${process.env.NEXT_PUBLIC_HOST_NAME}/course/view/${courses.courseId}`;
                await navigator.clipboard.writeText(textToCopy);
              }}
            />
          </h2>
        </>
      )}
    </div>
  );
}

export default Finshpage;
