import React from 'react'

const Doctors = () => {
  return (
    <div className='my-6 '>
        <div className='text-center   text-xl'>
        <h1 className='font-bold text-blue-500 '>Master Of Medicine:</h1> 
          <h2 className=' font-bold '>Meet Our team of specialist</h2>
          <p className=' text-gray-500 py-4' >Our team of specialists is at the forefront of medical innovation. Each specialist brings a unique blend of expertise, empathy, and experience to ensure that your health is in the best hands</p>
          </div>
          {/* doctors */}
          <div className=' space-y-5' >
              <div className='flex relative max-h-[400px] bg-blue-400 max-w-screen-md mx-auto rounded-3xl p-4 '>
                 <div className='img  h-full w-1/3'><img src="/doctor1.png" className='my-10 h-[300px]' alt="cardiologist " /></div>
                 <div className='content flex w-3/5
                  flex-col items-center  '>
                    <h1 className='text-2xl text-left text-white p-2 font-semibold '>Dr. Sarah Johnson (Cardiologist)</h1>
                    <p className='tracking-tighter text-white px-6 py-2  font-normal text-xl'>Heart health is Dr. Wong’s passion, and her approach to cardiology integrates cutting-edge technology with compassionate care. She’s a respected voice in the prevention of 
                        heart disease and a trusted partner to her patients on their journey to wellness.</p>
                    <button className='p-4 m-auto rounded-xl bg-white text-blue-500 hover:bg-blue-300s font-semibold'>Book appoinment</button>

                 </div>
              </div>

              <div className='flex relative max-h-[400px] bg-blue-400 max-w-screen-md mx-auto rounded-3xl p-4 '>
                 <div className='img  h-full w-1/3'><img src="/doctor2.png" className='my-10 object-center  h-[300px]' alt="cardiologist " /></div>
                 <div className='content flex w-3/5
                  flex-col items-center  '>
                    <h1 className='text-2xl text-left text-white p-2 font-semibold '>Dr. Sarah Johnson (Cardiologist)</h1>
                    <p className='tracking-tighter px-6 py-2  text-white font-normal text-xl'>Heart health is Dr. Wong’s passion, and her approach to cardiology integrates cutting-edge technology with compassionate care. She’s a respected voice in the prevention of 
                        heart disease and a trusted partner to her patients on their journey to wellness.</p>
                    <button className='p-4 m-auto rounded-xl bg-white text-blue-500 hover:bg-blue-200 e font-semibold'>Book appoinment</button>

                 </div>
              </div>


          </div>
    </div>
  )
}

export default Doctors

