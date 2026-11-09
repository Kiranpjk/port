/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{js,jsx}', './src/data/**/*.js'],
  theme: {
    extend: {
      colors: {
        paper: '#F4EFE8',
        ink: '#171412',
        soft: '#62594F',
        line: '#D6CCBF',
        accent: '#B03F16',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Impact', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
