import React from 'react';

const Hero = () => {
  return (
    <div className='h-screen p-5 flex justify-between md:justify-center items-center flex-col gap-5'>
        <div className='flex justify-center items-center flex-col gap-3'>
            <h1 className='text-4xl sm:text-5xl lg:text-6xl text-left md:text-center text-neutral-300'>
              Password Reset
              <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>{""} Application</span>
            </h1>
            <p className='text-sm text-left md:text-center w-full md:w-[90%] lg:w-[70%]  leading-6 text-neutral-400'>The task is to implement a correct password reset flow with email verification and proper update of the new password in the database for the web app.</p>
        </div>
        <div className='w-full flex justify-around md:justify-center items-center gap-10'>
            <button className='bg-orange-600 px-5 py-2 rounded-lg tracking-wider border border-orange-600 hover:transition duration-200 ease-out hover:scale-110 text-sm'>Sign Up</button>
            <button className='border border-neutral-300 text-neutral-300 tracking-wider px-5 py-2 rounded-lg hover:transition duration-200 ease-out hover:scale-110 text-sm'>Sign In</button>
        </div>
    </div>
  )
}

export default Hero