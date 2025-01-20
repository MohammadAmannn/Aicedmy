"use client"
import React from 'react'
import _Addcourse from './_Dashboard_Components/AddCourse'
import { useUser } from '@clerk/nextjs'
import CourseList from './_Dashboard_Components/CourseList'
function Dashboard() {
  return (
    <div>
      <_Addcourse/>
      {/* Display list of course */}
      <CourseList/>
      </div>
  )
}

export default Dashboard