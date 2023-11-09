/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#10B582',
        secondary: '#FA9F42',
        white: 'white',
        blue: '#353A5A',
        purple: 'purple',
      },
      fontFamily: {
        montserat: 'Montserrat, sans-serif',
      },
    },
    screens: {
      xx: '300px',
      xs: '480px',
      ss: '640px',
      sm: '768px',
      md: '974px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [],
};
