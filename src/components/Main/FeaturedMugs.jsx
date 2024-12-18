import React from 'react';

const FeaturedMugs = () => {
    return (
        <div className='w-[95%] lg:w-[65%] mx-auto'>
            <div className='grid lg:grid-cols-2 gap-12 lg:gap-4'>
                <div className='ct-product-card'>
                    <div className='w-full h-[400px] sm:h-[500px] bg-featured-mugs-1 bg-cover bg-no-repeat bg-center'>
                        <a href="#" alt="">
                            <div className='w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all 
                            hover:ease-in-out hover:duration-300 relative group'>
                                <div className='ct-button absolute bg-white text-gray-900 w-11/12 bottom-3 left-1/2 -translate-x-1/2  transition-all hidden group-hover:block group-hover:animate-fadeIn'>
                                    Explore Mug
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='text-center mt-8'>
                        <a href="#" alt="">
                            <div className='text-lg mb-3 hover:text-coffee-400'>Pink Premium Ceramic</div>
                        </a>
                        <div className=''>
                            <span className='text-gray-600'>$99.00</span>
                        </div>
                    </div>
                </div>

                <div className='ct-product-card'>
                    <div className='w-full h-[400px] sm:h-[500px] bg-featured-mugs-2 bg-cover bg-no-repeat bg-center'>
                        <a href="#" alt="">
                            <div className='w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all 
                            hover:ease-in-out hover:duration-300 relative group'>
                                <div className='absolute w-[100px] bg-white py-2 px-4 top-2 right-2 text-center font-medium text-coffee-400'>
                                    On sale.
                                </div>
                                <div className='ct-button absolute bg-white text-gray-900 w-11/12 bottom-3  left-1/2 -translate-x-1/2 transition-all hidden group-hover:block group-hover:animate-fadeIn'>
                                    Explore Mug
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='text-center mt-8'>
                        <a href="#" alt="">
                            <div className='text-lg mb-3 hover:text-coffee-400'>Golden Designer Mugs</div>
                        </a>
                        <div className=''>
                            <span className='text-lg text-coffee-400'>$50.00</span>
                            <span className='ml-2 text-gray-400 line-through'>$69.00</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedMugs;