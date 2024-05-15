/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: 'hsl(180, 29%, 50%)',
        'main-gray': 'hsl(180, 8%, 52%)',
        'main-dark': 'hsl(180, 14%, 20%)',
        'main-light': 'hsl(180, 31%, 95%)',
        'main-bg': 'hsl(180, 52%, 96%)',
      },
      backgroundImage: {
        'hero-mobile': 'url(./images/bg-header-mobile.svg)',
        'hero-desktop': 'url(./images/bg-header-desktop.svg)',
      },
    },
  },
  plugins: [],
};
