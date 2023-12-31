const options = require('./config'); //options from config.js

const allPlugins = {
  typography: require('@tailwindcss/typography'),
  forms: require('@tailwindcss/forms'),
  containerQueries: require('@tailwindcss/container-queries'),
};

const plugins = Object.keys(allPlugins)
  .filter((k) => options.plugins[k])
  .map((k) => {
    if (k in options.plugins && options.plugins[k]) {
      return allPlugins[k];
    }
  });

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,php}'],
  darkMode: 'class',
  theme: {
    extend: {},
    colors: {
      primary: 'hsl(25, 97%, 53%)',
      secondaryLight: 'hsl(213, 19%, 18%)',
      secondaryDark: 'hsl(216, 12%, 8%)',
      lightGray: 'hsl(217, 12%, 63%)',
      mediumGray: 'hsl(216, 12%, 54%)',
    },
    fontFamily: {
      sans: ['Overpass', 'sans-serif'],
    },
    fontWeight: {
      regular: 400,
      bold: 700,
    },
  },
  plugins: plugins,
};
