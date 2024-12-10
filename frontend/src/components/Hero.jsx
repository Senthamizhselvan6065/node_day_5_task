import React from 'react';

const Hero = () => {
  return (
    <div className='h-screen p-5 max-w-6xl mx-auto flex justify-between md:justify-center items-center flex-col gap-4'>
        <div className='flex justify-center items-center flex-col gap-3'>
            <h1 className='text-4xl sm:text-6xl lg:text-7xl text-left md:text-center w-full'><span className='bg-gradient-to-r from-blue-600 to-blue-900 text-transparent bg-clip-text'>Password Reset</span> Application</h1>
            <p className='text-sm lg:text-[16px] text-left md:text-center w-full md:w-[80%] lg:w-[70%] leading-5 md:leading-6 text-neutral-700'>The task is to implement a correct password reset flow with email verification and proper update of the new password in the database for the web app.</p>
        </div>
        <div className='w-full flex justify-center items-center flex-col md:flex-row gap-4 md:gap-10'>
            <button className='bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl px-6 py-2.5 text-sm tracking-widest text-white hover:shadow-btn hover:transition duration-200 ease-linear sm:hover:scale-110 w-full md:w-fit'>Sign Up</button>
            <button className='bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl px-6 py-2.5 text-sm tracking-widest text-white hover:shadow-btn hover:transition duration-200 ease-linear sm:hover:scale-110 w-full md:w-fit'>Sign In</button>
        </div>
    </div>
  )
}

export default Hero