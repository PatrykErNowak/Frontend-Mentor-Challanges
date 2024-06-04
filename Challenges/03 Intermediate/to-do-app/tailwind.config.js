/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        activeTask: 'var(--active-task-text)',
        completeTask: 'var(--complete-task-text)',
        filters: 'var(--additional-text)',
        filtersActive: 'var(--filters-active-text)',
        input: 'var(--input-text)',
        inputPlaceholder: 'var(--input-placeholder-text)',
      },
      borderColor: {
        defaultColor: '#979797',
      },
      backgroundColor: {
        app: 'var(--bgc-app)',
        task: 'var(--bgc-task)',
      },
      colors: {
        gradientColor1: 'var(--gradient-color-1)',
        gradientColor2: 'var(--gradient-color-2)',
      },
      backgroundImage: {
        mobile: 'var(--bg-mobile)',
        desktop: 'var(--bg-desktop)',
      },
    },
  },
  plugins: [],
};
