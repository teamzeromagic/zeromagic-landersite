/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors : {
        primary: "#366AA7",
        secondary: "#4D5770",
        bgColor: "#F5F7FB", 
        blue : '#2D70FD',
        green : '#009688',
        red : '#E2164B',
        yellow : '#FCCE30',
        darkblue : '#203D76',
        base : '#15171AFF'
      },
      maxWidth: {
        '8xl': '90rem', // Example custom maximum width
      },
    },
  },
  plugins: [],
}

