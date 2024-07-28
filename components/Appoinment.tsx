import React from 'react'
import { InputWithLabel } from './ui/inputwithlabel'
import { Button } from './ui/button'

const Appoinment = () => {
  return (
    <div className='max-w-4xl my-4  border m-auto p-6 md:p-3 rounded-3xl border-slate-400 md:mx-auto '>
          <h1 className='text-blue-600 font-semibold p-4 '>Easily book an appoinment in 3 steps.</h1>
          

          <div className='flex  flex-col items-center w-full md:flex-row md:gap-1 gap-5 '>
              <InputWithLabel label='Email address' type='email' placeholder='Enter your email Address' id='Email' /> 
              <InputWithLabel label='Phone Number' type='text' placeholder='Enter your phone ' id='Email' /> 
              <InputWithLabel label='Date of appoinment' type='date' placeholder='select date of appoinment' id='Email' /> 
              <Button className='bg-blue-500 mt-6'> Book Now </Button>
          </div>
          
    </div>
  )
}

export default Appoinment
