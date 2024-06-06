/** @type {import('tailwindcss').Config} */
import withMT from '@material-tailwind/react/utils/withMT';

module.exports = withMT ({
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          500: "#00bcd4"
        },
        slate: {
          900: "#0f172a"
        },
        sky : {
          500: "#0ea5e9" 
        }
      }
    },
  },
  plugins: [],
})