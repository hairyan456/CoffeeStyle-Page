import React from 'react';

const Magazine = () => {
    return (
        <div className='w-[95%] lg:w-[65%] mx-auto mb-24'>
            <div className='flex flex-col md:flex-row justify-center items-center gap-5'>
                <div className='ct-magazine-images basis-1/2 md:flex md:flex-row  gap-5 w-full h-full mb-6 md:mb-0'>
                    <div className='ct-magazine-big-image h-[280px] mb-3 xs:mb-5 md:mb-0 bg-coffee-magazine-1 bg-cover bg-no-repeat bg-center basis-2/3 ' />
                    <div className='ct-magazine-small-images basis-1/3 flex md:flex-col gap-3 xs:gap-5'>
                        <div className='h-[130px] xs:h-[200px] md:h-[130px] basis-1/2 bg-coffee-magazine-2 bg-cover bg-no-repeat bg-center'></div>
                        <div className='h-[130px] xs:h-[200px] md:h-[130px] basis-1/2 bg-coffee-magazine-3 bg-cover bg-no-repeat bg-center'></div>
                    </div>
                </div>

                <div className='ct-magazine-post basis-1/2 pl-8 xl:pl-11 text-center md:text-left'>
                    <div className='uppercase tracking-widest text-gray-500 font-medium text-xs mb-4'>Premium Offer</div>
                    <div className='text-2xl mb-4'>Get our Coffee Magazine</div>
                    <div className='text-gray-500 leading-7 mb-4'>The most versatile furniture system ever created. Designed to fit your life.</div>
                    <div className='ct-button bg-gray-900 text-white w-max mx-auto md:mx-0'>Start Shopping</div>
                </div>
            </div>
        </div>
    );
};

export default Magazine;