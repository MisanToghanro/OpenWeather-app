 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
     extend: {
    screens:{
    "sm": "640px",
    "md":"768px",
    "lg":"1024px"
  },

    colors: {
    orange: '#FFA200',
    black: '#0D0D0D',
    charcoal: '#1A1A1A',
    slate: '#222222',
    gray: '#CCCCCC',
    white: '#FFFFFF',}


  
  },
   },
   plugins: [],
 }
