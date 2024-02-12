/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors : {
        blue : '#2D70FD',
        green : '#009688',
        red : '#E2164B',
        yellow : '#FCCE30',
        darkblue : '#203D76'
      } 
    },
  },
  plugins: [],
}

