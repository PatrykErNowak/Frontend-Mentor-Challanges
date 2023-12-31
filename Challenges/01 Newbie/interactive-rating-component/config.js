// Base paths
const paths = {
  sass: './src/sass/**/*.scss',
  css: './dist/css',
  js: ['./src/js/**/*.js', '!./src/js/modules/**/*.js'],
  jsDist: './dist/js',
  img: './src/img/**/*',
  imgDist: './dist/img',
  html: ['./src/**/*.html', '!./src/html/**/*.html'],
  dist: './dist',
};

const config = {
  cssFileName: 'style',
  jsFileName: 'script',
  tailwindjs: './tailwind.config.js',
  purgecss: {
    content: ['src/**/*.{html,js,php}'],
    safelist: {
      standard: [/^pre/, /^code/],
      greedy: [/token.*/],
    },
  },
};

// tailwind plugins
const plugins = {
  typography: false,
  forms: true,
  containerQueries: true,
};

module.exports = {
  paths,
  plugins,
  config,
};
