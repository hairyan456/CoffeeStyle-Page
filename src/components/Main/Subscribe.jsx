import React from 'react';

const Subscribe = () => {
    return (
        <div className='h-[350px] bg-[#1d1f2e] mb-24 flex flex-col justify-center items-center'>
            <div className='flex justify-center items-center px-6 xs:px-0 mb-6'>
                <div className='w-8 h-px bg-gray-600' />
                <div className='uppercase mx-4 tracking-widest text-gray-400 font-medium text-xs text-center'>
                    Sign up and get free coffee bags
                </div>
                <div className='w-8 h-px bg-gray-600' />
            </div>
            <div className='text-2xl mb-6 text-white uppercase'>Coffee Updates</div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-4'>
                <div className='text-center'>
                    <input type="email" placeholder='example@gmail.com'
                        className='text-sm px-6 py-4 w-[350px] max-w-[80%] xs:max-w-full bg-inherit border-[1px] border-gray-700 outline-none text-white leading-5
                        hover:border-gray-300 transition-all duration-500 ease-in-out focus:border-gray-300 placeholder:uppercase
                        placeholder:text-xs placeholder:tracking-widest placeholder:font-medium' />
                </div>
                <div className=''>
                    <button type='submit' className='ct-button bg-white text-gray-900 w-max max-h-[54px]'>Subcribe</button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;