import { u } from 'framer-motion/client';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        unbounded: ['Unbounded', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        amanojaku: ['Amanojaku', 'sans-serif']
    },
  },
  plugins: [],
}
}
