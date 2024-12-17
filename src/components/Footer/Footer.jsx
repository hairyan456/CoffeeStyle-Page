import React from 'react';

const Footer = () => {
    return (
        <div className='w-[95%] lg:w-[65%] mx-auto pb-24 text-gray-500 text-xs'>
            <div className='flex flex-col md:flex-row text-center md:text-left gap-12 md:gap-8'>
                <div className='basis-2/6'>
                    <div className='font-semibold text-base text-gray-800 mb-4'>CoffeeStyle.</div>
                    <div className='mb-8 md:mb-20'>Delivering the best coffee life since 1996. From coffee geeks to the real ones.</div>
                    <div className='text-gray-400 hover:text-coffee-400'>CoffeeStyle Inc. © 2024</div>
                </div>

                <div className='basis-1/6'>
                    <div className='uppercase font-semibold tracking-wider text-gray-600 mb-4'>Menu</div>
                    <div className='flex flex-col gap-4'>
                        <div><a href="#" className='hover:text-coffee-400'>Home</a></div>
                        <div><a href="#" className='hover:text-coffee-400'>Our Products</a></div>
                        <div><a href="#" className='hover:text-coffee-400'>About</a></div>
                        <div><a href="#" className='hover:text-coffee-400'>Contact</a></div>
                        <div><a href="#" className='hover:text-coffee-400'>StyleGuide</a></div>
                    </div>
                </div>

                <div className='basis-1/6'>
                    <div className='uppercase font-semibold tracking-wider text-gray-600 mb-4'>Follow Us</div>
                    <div className='flex flex-col gap-4'>
                        <div><a href="#" className='hover:text-coffee-400'>Facebook</a></div>
                        <div><a href="#" className='hover:text-coffee-400'>Instagram</a></div>
                        <div><a href="#" className='hover:text-coffee-400'>Pinterest</a></div>
                        <div><a href="#" className='hover:text-coffee-400'>Twitter</a></div>
                    </div>
                </div>

                <div className='basis-2/6'>
                    <div className='uppercase font-semibold tracking-wider text-gray-600 mb-8 md:mb-4'>Contact Us</div>
                    <div className='mb-4'>We're Always Happy to Help</div>
                    <div className='mb-16 text-gray-800 tracking-wider text-lg'>
                        <a href="mailto:vuhoanghai0702@gmail.com" className='hover:text-coffee-400 font-medium'>vuhoanghai070@gmail.com</a>
                    </div>
                    <div className='hover:text-coffee-400 text-gray-400 cursor-pointer'>Powered by @HoangHai</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;