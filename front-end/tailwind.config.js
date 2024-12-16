/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#A294F9",
        "bg":"#F5EFFF",
        "nav":"#CDC1FF"
      },
      fontFamily:{
        "rubik":["Rubik Mono One"],
        "noto":['Noto Sans JP'],
        "poppins":['Poppins']
      }
    },
  },
  plugins: [],
}