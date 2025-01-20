"use client"
import React, { useState } from 'react'
import Header from '../dashboard/_Dashboard_Components/Header'
import { UserInput } from '../_Context/UserInout'

function CreateCourseLayout({children}) {
  const [userCourseInput,setUserCourseInput]=useState([])
  return (
    <div>
      <UserInput.Provider value={{userCourseInput, setUserCourseInput}}>
        <Header/>
        
        {children}
        </UserInput.Provider>
        </div>
  )
}

export default CreateCourseLayout