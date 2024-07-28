import React from 'react'
import { Button } from './ui/button'
import { ChevronRight } from 'lucide-react'
import { url } from 'inspector'

const Hero = () => {
  return (
    <div className=' flex m-auto flex-col md:flex-row gap-2   '>
        <div className=' flex flex-col  items-start m-4  w-full md:w-1/2 '>
            <h1  className='text-3xl p-2 font-bold md:text-2xl lg:text-4xl'>Your <span className='text-blue-400 '>Trusted partner</span>
             <br />in digital health care.
             </h1>
                <p className='text-sm p-4 md:text-xl lg:2xl  font-mediumy'><span className='text-blue-500'>Empowering Your Health at Every Step</span>. Experience
                 personalized medical care from the comfort of your home. Connect with <span className='text-blue-500'>certified doctors</span>, 
                 or manage prescriptions, and schedule appointments with ease. Ready to take control of your
                  health? <span className='text-blue-500'>Get Started</span> or Book  an Appointment today.</p>
                  
                  <Button className='ml-4 bg-gradient-to-r from-blue-200 to-blue-600 m-2 '> Book an appointment  <ChevronRight size={19}  /></Button>
                  <div className='flex flex-col justify-start '>
                    <h1 className='text-xs p-4 md:text-xs lg:text-xl text-gray-400'>Trusted by millions accross the globe:
                    </h1>
                     <img  src="/company.svg" className='h-6 md:h-8  ml-2 w-full' alt="companies" />
                  </div>
        </div>
        <div className=' md:w-1/2 pt-10  ' > 
                 
                 <div className= 'relative rounded-xl '>            
                  <img className='h-[200px] w-full  md:w-full  md:h-[300px]' src="/man.svg" alt="img" />
                 </div>
             


        </div>
    </div>
  )
}

export default Hero
