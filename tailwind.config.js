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
        'unbounded': ['Unbounded', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'amanojaku': ['Amanojaku', 'sans-serif'],
      },
        animation: {
        marquee: 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [
     require('tailwind-scrollbar-hide'),
     function ({ addUtilities }) {
          const newUtilities = {
            '.perspective-1000': {
              perspective: '1000px',
            },
          };
          addUtilities(newUtilities, ['responsive', 'hover']);
        },
      ],
}