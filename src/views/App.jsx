import { useEffect, useState } from 'react'
import './App.css'
import Header from '../components/Header/Header';
import Slider from '../components/Main/Slider';
import Story from '../components/Main/Story';
import FeaturedMugs from '../components/Main/FeaturedMugs';
import MoreProducts from '../components/Main/MoreProducts';
import Magazine from '../components/Main/Magazine';
import LifeStyle from '../components/Main/LifeStyle';
import Parallax from '../components/Main/Parallax';
import Subscribe from '../components/Main/Subscribe';
import Footer from '../components/Footer/Footer';

function App() {
  const [windowSize, setWindowSize] = useState({ w: undefined, h: undefined });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      setWindowSize({ w: window.innerWidth, h: window.innerHeight });
    };
    window.addEventListener("resize", handleSize);
    handleSize();

    return () => {
      window.removeEventListener("resize", handleSize);
    }
  }, []);

  useEffect(() => {
    if (windowSize.w < 1024)
      setIsMobile(true);
    else
      setIsMobile(false)

  }, [windowSize]);

  return (
    <div id="main_root">
      <div className='ct-no-parallax font-sora text-base mx-auto px-8'>
        <Header />
        <Slider />
        <div className='ct-subheadline'>
          <div className='ct-subheadline-decor-line' />
          <div className='ct-subheadline-label'>
            Our Coffee Stories
          </div>
          <div className='ct-subheadline-decor-line' />
        </div>
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
      </div>

      <Parallax />

      <div className='ct-no-parallax font-sora text-base mx-auto px-8 '>
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
        <Footer />
      </div>
    </div>

  )
}

export default App
