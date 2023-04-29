/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#00C9A7',
        secondary: '#00AFA6',
        tertiary: '#4b2354',
        quaternary: '#845EC2'
      },
      fontFamily:{
        kanit: 'Kanit'
      }
    },
  },
  plugins: [],
}