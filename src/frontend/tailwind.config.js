/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
      extend: {
        fontFamily: {
          urbanist: ["Urbanist", "sans-serif"], 
          ysabeau: ["'Ysabeau Office'", "sans-serif"],
        },
      },
    },
    plugins: [],
  }