import { u } from 'framer-motion/client';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        'brand-dark': '#000719', // Ajout de votre couleur
        'brand-accent': '#2F3C94'
      },
      fontFamily: {
        unbounded: ['Unbounded', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        amanojaku: ['Amanojaku', 'sans-serif']
    },
  },
  plugins: [],
}
}
