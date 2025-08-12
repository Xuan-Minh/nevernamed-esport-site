import { motion } from 'framer-motion';
import arrowSvg from '../assets/arrow.svg';

function Button({ children, onClick }) {
  // SUPPRIMÉ: La logique d'animation "arrowVariants" n'est plus nécessaire.

  return (
    // MODIFIÉ: On retire les props `initial` et `whileHover` et on ajoute la classe `group`.
    <motion.button
      onClick={onClick}
      className="group font-unbounded text-xl bg-transparent border-2 border-white rounded-full px-8 py-4 flex items-center gap-2 hover:bg-white/10 transition-colors duration-300"
    >
      {children}
      {/* MODIFIÉ: On utilise une balise `img` standard avec les classes de transition demandées. */}
      <img
        src={arrowSvg}
        alt="Arrow Icon"
        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
      />
    </motion.button>
  );
}

export default Button;