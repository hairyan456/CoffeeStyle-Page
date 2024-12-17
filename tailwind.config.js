/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';
export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // nếu custom smaller breakpoint thì dùng cách này (không thêm được vào extend)
    screens: {
      'xs': '480px',
      ...defaultTheme.screens, // chỉ ghi đè mỗi xs breakpoint
    },
    extend: {
      fontFamily: {
        sora: ["Sora", 'sans-serif'],
      },
      colors: {
        'coffee': {
          50: '#E8D6D0',
          200: '#C89F94',
          400: '#A25F4B',
          600: '#744838'
        }
      },
      boxShadow: {
        md: "6px 6px 16px 0 rgba(0, 0, 0, 0.25),-4px -4px 12px 0 rgba(255, 255, 255, 0.3);",
      },

      //custom dropdown menu on Mobile
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: 0 }, to: { opacity: 1 },
        }
      },
      animation: {
        slideDown: 'slideDown 0.5s ease-in-out',
        fadeIn: 'fadeIn 0.5s ease-in-out '
      },
      backgroundImage: {
        'slider-bg': `url('slider-img.jpg')`,
        'featured-mugs-1': `url('featured-mugs-1.jpg')`,
        'featured-mugs-2': `url('featured-mugs-2.jpg')`,

        'more-products-1': `url('more-products-1.jpg')`,
        'more-products-2': `url('more-products-2.jpg')`,
        'more-products-3': `url('more-products-3.jpg')`,
        'more-products-4': `url('more-products-4.jpg')`,
        'more-products-5': `url('more-products-5.jpg')`,
        'more-products-6': `url('more-products-6.jpg')`,

        'coffee-magazine-1': `url('coffee-magazine-1.jpg')`,
        'coffee-magazine-2': `url('coffee-magazine-2.jpg')`,
        'coffee-magazine-3': `url('coffee-magazine-3.jpg')`,

        'parallax': `url('parallax-section.jpg')`,
      }
    },
    plugins: [],
  }
}