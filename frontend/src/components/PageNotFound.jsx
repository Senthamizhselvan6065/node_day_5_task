import React from 'react';

const PageNotFound = () => {
  return (
    <div className='h-screen flex justify-center items-center p-5'>
        <div></div>
        <div className='flex flex-col justify-center items-center gap-3'>
            <div className='flex justify-center items-center gap-2'>
                <span className='text-9xl font-semibold bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text'>O</span>
                <span className='text-7xl font-semibold bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text'>o</span>
                <span className='text-7xl font-semibold bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text'>p</span>
                <span className='text-7xl font-semibold bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text'>s</span>
                <span className='text-7xl font-semibold bg-gradient-to-r from-blue-700 to-blue-500 text-transparent bg-clip-text'>!</span>
            </div>
            <div className='flex flex-col justify-center items-center gap-5'>
                <h2 className='text-2xl uppercase font-semibold tracking-wider text-neutral-700'>404 - page not found</h2>
                <button className='bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 text-sm tracking-wider uppercase rounded-2xl hover:shadow-btn hover:transition duration-200 ease-out'>go to homepage</button>
            </div>
        </div>
    </div>
  )
}

export default PageNotFound