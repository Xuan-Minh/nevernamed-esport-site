import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logoSvg from '../assets/logo.svg'; // 1. Importer le logo

// Icône pour le bouton de fermeture
const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

function Footer({ handleClose }) {
  const footerVariants = {
    hidden: { y: "100%" },
    visible: { y: 0, transition: { type: "spring", stiffness: 120, damping: 20 } },
    exit: { y: "100%", transition: { ease: "easeInOut" } }
  };

  return (
    <motion.footer
      className="font-unbounded fixed bottom-0 left-0 w-full p-4 border-t border-gray-600 z-50"
      variants={footerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Bouton de fermeture */}
       <button
        onClick={handleClose}
        className="absolute top-0 right-8 -translate-y-1/2 bg-gray-800 border border-gray-600 text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
        aria-label="Fermer le pied de page"
      >
        <CloseIcon />
      </button>

      <nav className="container mx-auto grid grid-cols-2 items-center">
        {/* Colonne de gauche */}
        <div>
          <Link to="/" className="text-xl font-bold text-white">
            <img src={logoSvg} alt="Logo Nevernamed Esport" className="h-10 w-auto" />
          </Link>
          <div className="text-sm text-gray-400 mt-2">
            © 2025 Nevernamed Esport. All rights reserved
          </div>
          <Link to="/politiques" className="text-sm text-gray-400 mt-2 block">Politique de confidentialité</Link>
          <Link to="/socialhub#contact-form" className="text-sm text-gray-400 mt-2 block">Contact</Link>
        </div>

        {/* Colonne de droite */}
        <div className="flex flex-col items-end">
          <p className="text-lg font-bold mb-2">@thenevernamed</p>
          <div className="flex items-center gap-6 text-white">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 8.118c-2.136 0-3.863 1.727-3.863 3.863s1.727 3.863 3.863 3.863 3.863-1.727 3.863-3.863S14.136 8.118 12 8.118zM12 14.172c-1.186 0-2.156-.97-2.156-2.156s.97-2.156 2.156-2.156 2.156.97 2.156 2.156-.97 2.156-2.156 2.156zm4.803-6.402c-.783 0-1.418-.635-1.418-1.418s.635-1.418 1.418-1.418 1.418.635 1.418 1.418-.635 1.418-1.418 1.418z" clipRule="evenodd"></path></svg>
            </a>
          </div>
        </div>
      </nav>
    </motion.footer>
  );
}

export default Footer;