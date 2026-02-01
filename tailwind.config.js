/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        'primary-light': '#818cf8',
        'primary-dark': '#4f46e5',
        secondary: '#ec4899',
        'secondary-light': '#f472b6',
        accent: '#14b8a6',
        'bg-dark': '#0a0a0f',
        'bg-darker': '#050508',
        'bg-card': 'rgba(15, 15, 25, 0.8)',
        'text-primary': '#f8fafc',
        'text-secondary': '#cbd5e1',
        'text-muted': '#94a3b8',
        'border-color': 'rgba(148, 163, 184, 0.1)',
      },
    },
  },
  plugins: [],
}
