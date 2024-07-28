import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className=' navabar  my-4 flex justify-between items-center'>
        <div className='flex gap-1 items-center'>
            <img className='h-8 w-10' src="logo.svg" alt="logo" />
            <h1 className='text-blue-500 text-lg font-semibold'>HealNet</h1>
            </div>  
        <div className='hidden lg:text-2xl  sm:flex justify-between gap-2 items-center md:gap-5 md:text-lg lg:gap-6'>
            <h1>Home</h1>
            <h1> service</h1>
            <h1>Find Doctors</h1>
            <h1>About Us </h1>
            <h1>Blog</h1>
            <h1>Contact</h1>
        </div>
        
        <Link href="/signup" className='px-3 py-2 rounded-md bg-gradient-to-r from-blue-300 to to-blue-500 '>
        Join Us
        </Link>
      
    </div>
  )
}

export default Navbar
