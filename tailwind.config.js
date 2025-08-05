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
      // NOUVEAU: Définition de l'animation et des keyframes
      animation: {
        marquee: 'marquee 25s linear infinite',
        // NOUVEAU: Animation pour une boucle parfaite avec texte dupliqué
        'marquee-full': 'marquee-full 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        // NOUVEAU: Keyframes pour la nouvelle animation
        'marquee-full': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}