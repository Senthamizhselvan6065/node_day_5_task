import React from 'react';

const Home = () => {
  return (
    <div className='h-screen flex justify-between md:justify-center items-center gap-4 flex-col p-3'>
        <div className='flex justify-center items-center gap-3 flex-col'>
            <h1 className='text-5xl lg:text-6xl tracking-wider bg-gradient-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent'>Password Reset <span className='text-neutral-700'>Application</span></h1>
            <p className='text-sm w-full md:w-[90%] lg:w-[70%] text-left md:text-center text-neutral-600 tracking-wider leading-5 lg:leading-6'>The task is to implement a correct password reset flow with email verification and proper update of the new password in the database for the web app.</p>
        </div>
        <div className='w-full flex justify-center flex-col md:flex-row items-center gap-3 md:gap-8'>
             <button className='w-full md:w-fit text-center border border-blue-500 px-5 py-2 tracking-widest rounded-lg md:rounded-xl text-sm bg-blue-500 text-white hover:transition duration-200 ease-linear hover:shadow-btn'>Sign up</button>
             <button className='w-full md:w-fit text-center border border-blue-500 px-5 py-2 tracking-widest rounded-lg md:rounded-xl  text-sm text-blue-500 hover:bg-blue-500 hover:text-white hover:transition duration-200 ease-linear hover:shadow-btn'>Sign in</button>
        </div>
    </div>
  )
}

export default Home