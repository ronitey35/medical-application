import React from 'react'

const KnowUs = () => {
  return (
    <section>
    <h1 className='text-center p-8 text-xl md:text-3xl font-semibold'> <span className='text-blue-400'> HealNet’s Story:</span> Get to know us</h1>
    

  <div className="mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
   
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
          alt=""
          src='./knowus.svg'
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24 flex flex-col justify-center">

        <p className="mt-4 tracking-tight text-gray-600">
        HealNet is more than just an online medical service; it’s a movement towards accessible, efficient, and compassionate healthcare for all. Founded by a team of visionary doctors, healthcare professionals, and technology experts, we are driven by the mission to deliver exceptional medical care directly to you, no matter where you are. Our platform is built on the pillars of trust, innovation, and patient-centricity, ensuring that every interaction is personalized and every treatment plan is tailored to your unique needs.
        </p>

        <a
          href="/getstarted"
          className="mt-8 mx-auto   inline-block rounded bg-blue-400 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Started Today
        </a>
      </div>
    </div>
  </div>
</section>
  )
}

export default KnowUs
