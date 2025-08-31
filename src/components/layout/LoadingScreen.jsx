import { motion } from 'framer-motion';
import logoSvg from '../../assets/logo.svg';

function LoadingScreen({ progress }) {
  const radius = 120;
  const circumference = 2 * Math.PI * radius;

  // Valeur sûre et bornée 0–100
  const safeProgress =
    typeof progress === 'number' && isFinite(progress) ? Math.max(0, Math.min(100, progress)) : 0;

  const strokeDashoffset = circumference - (safeProgress / 100) * circumference;

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
          loading="lazy"
          src={`${logoSvg}#svgView(viewBox(162,0,243,385))`}
          alt="Logo Nevernamed"
          className="h-40 w-auto z-10" // h-32 -> h-40
        />

        {/* Cercle de progression SVG */}
        <svg className="absolute top-0 left-0 w-full h-full -rotate-90">
          <circle
            cx="160"
            cy="160"
            r={radius}
            stroke="#374151"
            strokeWidth="4"
            fill="transparent"
          />
          <motion.circle
            cx="160"
            cy="160"
            r={radius}
            stroke="white"
            strokeWidth="4"
            fill="transparent"
            strokeLinecap="round"
            style={{ strokeDasharray: circumference }}
            initial={{ strokeDashoffset: circumference }} // valeur d’origine
            animate={{ strokeDashoffset }} // valeur cible
            transition={{ duration: 0.15, ease: 'linear' }}
          />
        </svg>
      </div>

      <p className="mt-8 text-sm tracking-widest">{Math.round(safeProgress)}%</p>
    </motion.div>
  );
}

export default LoadingScreen;
