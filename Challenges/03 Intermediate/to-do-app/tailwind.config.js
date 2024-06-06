/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        activeTask: 'var(--active-task-text)',
        completeTask: 'var(--complete-task-text)',
        filters: 'var(--filters-text)',
        filtersActive: 'var(--filters-active-text)',
        input: 'var(--input-text)',
        inputPlaceholder: 'var(--input-placeholder-text)',
      },
      borderColor: {
        defaultColor: 'var(--border-color)',
      },
      backgroundColor: {
        app: 'var(--bgc-app)',
        task: 'var(--bgc-task)',
      },
      colors: {
        defaultColor: 'var(--border-color)',
      },

      backgroundImage: {
        mobile: 'var(--bg-mobile)',
        desktop: 'var(--bg-desktop)',
        gradientButton: 'var(--gradient-button)',
      },
      boxShadow: {
        custom: 'var(--box-shadow)',
      },
    },
  },
  plugins: [],
};
