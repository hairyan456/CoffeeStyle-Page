import React, { useState, useEffect, useRef } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const handleToggle = () => {
        setMenuOpen((prev) => !prev);

    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false);

        }
    };

    useEffect(() => {
        if (menuOpen)
            document.addEventListener('mousedown', handleClickOutside);
        else
            document.removeEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <header className='p-6 mx-auto'>
            <nav ref={menuRef} className='flex flex-row justify-between items-center relative'>
                <div className='logo basis-2/6 text-center text-lg font-semibold cursor-pointer'>
                    CoffeeStyle
                </div>

                <ul className={`basis-3/6 ${menuOpen ? 'ct-top-menu-expanded' : 'hidden'} lg:flex lg:items-center lg:justify-end lg:gap-8 
                uppercase text-sm text-gray-500 font-medium`}>
                    <li className='ct-top-menu-item ct-top-menu-item-active'>
                        <a href="#">Home</a>
                    </li>
                    <li className='ct-top-menu-item'>
                        <a href="#" className='text-nowrap'>Our Products</a>
                    </li>
                    <li className='ct-top-menu-item'>
                        <a href="#">About</a>
                    </li>
                    <li className='ct-top-menu-item'>
                        <a href="#">Contact</a>
                    </li>
                    <li className='ct-top-menu-item '>
                        <a href="#">Guide</a>
                    </li>
                    <li className='ct-top-menu-item'>
                        <a href="https://hoanghai-cv.click" target='blank'>HoangHai</a>
                    </li>
                </ul>

                <ul className='basis-3/6 lg:basis-1/6 flex justify-end lg:justify-start items-center ml-16 uppercase text-sm text-gray-500 font-medium'>
                    <li className='ct-top-menu-item'>
                        <a href="#" className='flex items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ct-icon">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                            <span className='mx-2'>Cart</span>
                            <span className='ct-badge bg-orange-400 text-white'>10</span>
                        </a>
                    </li>
                </ul>

                <div className='basis-1/6 lg:hidden flex items-center cursor-pointer px-3 sm:px-8'>
                    <svg onClick={handleToggle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="ct-icon">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
            </nav>
        </header>
    );
};

export default Header;
