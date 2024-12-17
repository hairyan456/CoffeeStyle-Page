import React from 'react';

const LifeStyle = () => {
    return (
        <div className='w-[95%] xl:w-[65%] mx-auto mb-24'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-4'>
                <div className='ct-lifestyle-story-card'>
                    <div className='w-full h-[300px] bg-life-story-1 bg-cover bg-no-repeat bg-center'>
                        <a href="#" alt="">
                            <div className='w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all 
                            hover:ease-in-out hover:duration-300 relative group'>
                                <div className='ct-button absolute bg-white text-gray-900 w-11/12 bottom-3 left-1/2 -translate-x-1/2  transition-all hidden group-hover:block group-hover:animate-fadeIn'>
                                    Read the story
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='text-left tracking-wider my-6'>
                        <a href="#" alt="">
                            <div className='text-lg mb-3 hover:text-coffee-400'>
                                Health Check: why do I get a headache when I haven't had my coffee?
                            </div>
                        </a>
                        <div className='text-gray-500 leading-7 mb-4 text-sm'>
                            It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                        </div>
                        <div className='text-gray-500 leading-7 text-xs font-medium uppercase tracking-widest'>
                            December 17th, 2024
                        </div>
                    </div>
                </div>

                <div className='ct-lifestyle-story-card'>
                    <div className='w-full h-[300px] bg-life-story-2 bg-cover bg-no-repeat bg-center'>
                        <a href="#" alt="">
                            <div className='w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all 
                            hover:ease-in-out hover:duration-300 relative group'>
                                <div className='ct-button absolute bg-white text-gray-900 w-11/12 bottom-3 left-1/2 -translate-x-1/2  transition-all hidden group-hover:block group-hover:animate-fadeIn'>
                                    Read the story
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='text-left tracking-wider my-6'>
                        <a href="#" alt="">
                            <div className='text-lg mb-3 hover:text-coffee-400'>
                                How long does a cup of coffee keep you awake?
                            </div>
                        </a>
                        <div className='text-gray-500 leading-7 mb-4 text-sm'>
                            It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem.
                        </div>
                        <div className='text-gray-500 leading-7 text-xs font-medium uppercase tracking-widest'>
                            December 17th, 2024
                        </div>
                    </div>
                </div>

                <div className='ct-lifestyle-story-card'>
                    <div className='w-full h-[300px] bg-life-story-3 bg-cover bg-no-repeat bg-center'>
                        <a href="#" alt="">
                            <div className='w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all 
                            hover:ease-in-out hover:duration-300 relative group'>
                                <div className='ct-button absolute bg-white text-gray-900 w-11/12 bottom-3 left-1/2 -translate-x-1/2  transition-all hidden group-hover:block group-hover:animate-fadeIn'>
                                    Read full story
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className='text-left tracking-wider my-6'>
                        <a href="#" alt="">
                            <div className='text-lg mb-3 hover:text-coffee-400'>
                                Recent research suggests that heavy coffee drinkers may reap health benefits.
                            </div>
                        </a>
                        <div className='text-gray-500 leading-7 mb-4 text-sm'>
                            It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                        </div>
                        <div className='text-gray-500 leading-7 text-xs font-medium uppercase tracking-widest'>
                            December 17th, 2024
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LifeStyle;