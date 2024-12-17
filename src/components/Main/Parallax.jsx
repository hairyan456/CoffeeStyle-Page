import React from 'react';

// kĩ thuật cho width phần tử con rộng vượt ngoài div cha : w-[99.4vw] relative left-[calc(-50vw_+_50%)]
const Parallax = () => {
    return (
        <div className='h-[400px] md:h-[500px] bg-parallax bg-cover bg-no-repeat bg-center mb-24 bg-fixed w-[99.4vw] relative 
        left-[calc(-50vw_+_50%)]'>
        </div>
    );
};

export default Parallax; 