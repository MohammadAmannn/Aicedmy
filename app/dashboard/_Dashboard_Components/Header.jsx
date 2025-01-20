import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-between items-center p-5 shadow-md'>
      <p className='text-xl font-semibold'>Aicedmy</p>
        <UserButton/>
    </div>
  )
}

export default Header