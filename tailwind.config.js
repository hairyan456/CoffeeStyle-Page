/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", 'sans-serif'], // Thêm fontFamily vào extend
      },
      colors: {
        'light-coffee': '#C89F94',
      },
      boxShadow: {
        md: "6px 6px 16px 0 rgba(0, 0, 0, 0.25),-4px -4px 12px 0 rgba(255, 255, 255, 0.3);",
      },

      //custom dropdown menu on Mobile
      keyframes: {
        slideDown: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        slideDown: 'slideDown 0.5s ease-in-out',
      }
    },
    plugins: [],
  }
}