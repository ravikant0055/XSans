/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        notosans: ['"Noto Sans"', "sans-serif" ],
        baloo: ['"Baloo Bhaijaan 2"', "sans-serif" ],
        playwrite: ['"Playwrite DE Grund"', "cursive" ],
        // Add more custom font families as needed
      },
      animation: {
        'color-change': 'colorChange 4s infinite',
      },
      keyframes: {
        colorChange: {
          '0%': { boxShadow: '0 0 30px 5px #2f00ff' },
          '25%': { boxShadow: '0 0 30px 5px #88ff00' },
          '50%': { boxShadow: '0 0 30px 5px #2f00ff' },
          '75%': { boxShadow: '0 0 30px 5px #88ff00' },
          '100%': { boxShadow: '0 0 30px 5px #2f00ff' },
        },
      },
      boxShadow: {
        'custom-shadow': '-15px -15px 30px 0 #fff, 15px 15px 30px 0 #1d0dca17',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-custom::-webkit-scrollbar': {
          width: '6px',
        },
        '.scrollbar-custom::-webkit-scrollbar-thumb': {
          backgroundColor: '#333',
          borderRadius: '10px',
        },
        '.scrollbar-custom::-webkit-scrollbar-track': {
          backgroundColor: '#111',
        },
      })
    }
  ],
}

