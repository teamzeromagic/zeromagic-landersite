/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors : {
        primary: "#366AA7",
        secondary: "#4D5770",
        bgColor: "#F5F7FB", 
        blue : '#0369a1',
        blueBg : '#dbeafe',
        green : '#009688',
        greendark : "#16a34a",
        red : '#E2164B',
        yellow : '#FCCE30',
        orange : "#fb923c",
        darkblue : '#203D76',
        base : '#15171AFF',
        primaryBg : '#3B75B81A'
      },
      maxWidth: {
        '8xl': '90rem', // Example custom maximum width
      },
    },
  },
  plugins: [],
}

