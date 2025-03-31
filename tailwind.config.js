 /** @type {import('tailwindcss').Config} */

 import tailwindScroolbar from 'tailwind-scrollbar';
 export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'sans':['Inter','sans-serif']
      }
    },
  },
  plugins: [tailwindScroolbar],
}