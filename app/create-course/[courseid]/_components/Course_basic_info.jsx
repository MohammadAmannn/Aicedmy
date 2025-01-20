import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsPuzzle } from "react-icons/bs";

function CourseBasic({ course }) {
  return (
    <div className='p-10 border rounded-xl shadow-sm mt-5'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <div>
          <h2 className='font-bold text-2xl'>{course?.courseOutput?.courseName}</h2>
          <p className='text-sm text-gray-400 mt-3'>{course?.courseOutput?.description}</p>
          <div>
            <h2 className='font-medium mt-2 flex gap-2 items-center text-violet-500'>
              <BsPuzzle /> {course?.category}
            </h2>
            {/* Neon border effect button */}
            <Link href={'/course/'+course?.courseId+'/start'}>
            <Button className="w-full mt-5 bg-gradient-to-r from-gray-300 to-gray-500 text-black font-bold py-2 px-4 rounded-md transition-all duration-300 ease-in-out">
  Start
</Button>
</Link>

          </div>
        </div>
        <div>
          <Image
            src={'/book.jpg'}
            width={300}
            height={300}
            className='w-full rounded-xl h-[250px] object-cover'
            alt="Course Image"
          />
        </div>
      </div>
    </div>
  );
}

export default CourseBasic;
