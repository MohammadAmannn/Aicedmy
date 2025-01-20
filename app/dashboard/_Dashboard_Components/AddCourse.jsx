import React from "react";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";


function _AddCourse() {
  const { user } = useUser();

  return (
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl">
          {" "}
          Hello,<span className="text-blue-800">{user?.fullName} </span>
        </h2>
        <p className="text-gray-500">
          Create new course with AI,Share with friends and Earn a coin{" "}
        </p>
      </div>
      <Link href="/create-course">
        <Button className="bg-blue-800 text-white rounded-lg">
          {" "}
          Create AI Course
        </Button>
      </Link>
    </div>
  );
}

export default _AddCourse;
