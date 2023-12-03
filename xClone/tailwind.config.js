/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          base:"hsl(203, 89%, 53%)",
          dark:"hsl(203, 89%, 45%)",
          light:"hsl(203, 89%, 96%)"
        },
        gray:{
          dark:"#657786",
          light:"#AAB8C2",
          extraLight:"#E1E8ED"
        },
        black: "#14171A",
      },
    },
  },
  plugins: [],
}

