import { useEffect, useState } from 'react'
import './App.css'
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
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
    if (windowSize.w < 500)
      setIsMobile(true);
    else
      setIsMobile(false)

  }, [windowSize]);

  return (
    < >
      <div className='font-sora  '>
        <Header />
        <Main />
        <Footer />
      </div>
    </>

  )
}

export default App