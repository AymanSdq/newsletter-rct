/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        "tomatoColor" : "hsl(4, 100%, 67%)",
        "darkSlateGray" : "hsl(234, 29%, 20%)",
        "charcoalGray" : "hsl(235, 18%, 26%)",
        "greyColor" : "hsl(231, 7%, 60%)",
        "whiteColor" : "hsl(0, 0%, 100%)",
      }
    },
  },
  plugins: [],
}

