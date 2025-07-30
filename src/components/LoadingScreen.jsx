import { motion } from 'framer-motion';
import logoSvg from '../assets/logo.svg';

// Le composant reçoit la progression en prop
function LoadingScreen({ progress }) {
  // 2. Augmentation de la taille du cercle
  const radius = 120; // Agrandit le rayon de 80 à 120
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center brand-background text-white font-unbounded"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* 2. Augmentation de la taille du conteneur */}
      <div className="relative w-80 h-80 flex items-center justify-center">
        {/* 2. Augmentation de la taille du logo */}
        <img 
          src={`${logoSvg}#svgView(viewBox(162,0,243,385))`} 
          alt="Logo Nevernamed" 
          className="h-40 w-auto z-10" // h-32 -> h-40
        />

        {/* Cercle de progression SVG */}
        <svg className="absolute top-0 left-0 w-full h-full -rotate-90">
          {/* Cercle de fond (la piste) */}
          <circle
            cx="160" cy="160" r={radius} // Centre ajusté pour le conteneur de 320px (w-80)
            stroke="#374151" // gray-700
            strokeWidth="4"
            fill="transparent"
          />
          {/* Cercle de progression animé */}
          <motion.circle
            cx="160" cy="160" r={radius} // Centre ajusté
            stroke="white"
            strokeWidth="4"
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={circumference}
            // 1. Déplacer strokeDashoffset dans la prop "animate"
            animate={{ strokeDashoffset }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </svg>
      </div>

      {/* Pourcentage de chargement */}
      <p className="mt-8 text-sm tracking-widest">
        {Math.round(progress)}%
      </p>
    </motion.div>
  );
}

export default LoadingScreen;