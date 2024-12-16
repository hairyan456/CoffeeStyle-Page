import React from 'react';

const Slider = () => {
    return (
        <div className={`w-full h-[530px] bg-slider-bg bg-cover bg-no-repeat bg-bottom `}>
            <div className='w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-60'>
                <div className='mx-16 text-white text-center'>
                    <div className='uppercase mb-6'>Best place to buy coffee</div>
                    <div className='font-medium text-4xl mb-6'>Coffee Mugs</div>
                    <div className='font-medium text-lg mb-8'>The most versatile furniture system ever created. Designed to fit your life, made to move and grow.</div>
                    <div className='flex justify-center '>
                        <div className='ct-button bg-white text-gray-900 w-max'>
                            Explore our products
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Slider;