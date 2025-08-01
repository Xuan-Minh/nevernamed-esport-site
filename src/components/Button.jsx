import { motion } from 'framer-motion';
import arrowSvg from '../assets/arrow.svg';

function Button({ children, onClick }) {
  const arrowVariants = {
    initial: { x: 0 },
    // On change la transition pour un effet "ressort"
    hover: {
      x: 5, // La flèche "vise" cette position
      transition: {
        type: "spring", // Le type de transition qui crée un rebond naturel
        stiffness: 400, // La "rigidité" du ressort
        damping: 10     // La force qui freine l'oscillation
      }
    }
  };

 return (
    <motion.button
      onClick={onClick}
      className="font-unbounded text-xl bg-transparent border-2 border-white rounded-full px-8 py-4 flex items-center gap-2 hover:bg-white/10 transition-colors duration-300"
      initial="initial"
      whileHover="hover"
    >
      {children}
      <motion.img
        src={arrowSvg}
        alt="Arrow Icon"
        className="w-4 h-4"
        variants={arrowVariants}
        // Cette transition est maintenant utilisée pour le retour, car l'animation "hover" n'est plus infinie
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
    </motion.button>
  );
}

export default Button;