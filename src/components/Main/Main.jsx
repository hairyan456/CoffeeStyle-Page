import React from 'react';
import Slider from './Slider';
import Story from './Story';
import FeaturedMugs from './FeaturedMugs';
import MoreProducts from './MoreProducts';
import Magazine from './Magazine';
import LifeStyle from './LifeStyle';
import Parallax from './Parallax';
import Subscribe from './Subscribe';

const Main = () => {
    return (
        <div>
            <Slider />
            <Story />
            <div className='ct-subheadline'>
                <div className='ct-subheadline-decor-line'>

                </div>
                <div className='ct-subheadline-label'>
                    Featured Mugs
                </div>
                <div className='ct-subheadline-decor-line'>

                </div>
            </div>
            <FeaturedMugs />
            <div className='ct-subheadline'>
                <div className='ct-subheadline-decor-line'>

                </div>
                <div className='ct-subheadline-label'>
                    More Products
                </div>
                <div className='ct-subheadline-decor-line'>

                </div>
            </div>
            <MoreProducts />
            <div className='ct-subheadline'>
                <div className='ct-subheadline-decor-line'>
                </div>
                <div className='ct-subheadline-label'>
                    Buy 2 mugs and get a coffee magazine free
                </div>
                <div className='ct-subheadline-decor-line'>
                </div>
            </div>
            <Magazine />
            <Parallax />
            <div className='ct-subheadline'>
                <div className='ct-subheadline-decor-line'>
                </div>
                <div className='ct-subheadline-label'>
                    Behind the mugs, lifestyle stories
                </div>
                <div className='ct-subheadline-decor-line'>
                </div>
            </div>
            <LifeStyle />
            <Subscribe />
        </div>
    );
};

export default Main;