/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary: '#6366f1',
        dark: '#27272a'
      },
      screens: {
        'xl' : '1320px',
        'sm' : '440px'
      },
    },
  },
  plugins: [],
}

