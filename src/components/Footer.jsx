import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logoSvg from '../assets/favicon.svg';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

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

  const { t } = useTranslation();

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        handleClose?.();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [handleClose]);

  return (
    <motion.footer
      className="font-unbounded fixed bottom-0 left-0 w-full p-0 border-t border-gray-700 bg-gradient-to-tr from-brand-dark via-gray-900 to-brand-dark z-50"
      variants={footerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      role="dialog"
      aria-label={t('footer.ariaLabel', { defaultValue: 'Footer' })}
      aria-modal="true"
    >
      {/* Bouton de fermeture */}
      <button
        onClick={handleClose}
        className="absolute top-0 right-8 -translate-y-1/2 bg-gray-800 border border-gray-600 text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
        aria-label={t('footer.closeLabel')}
      >
        <CloseIcon />
      </button>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-gray-900/80 rounded-xl shadow-2xl px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Bloc gauche */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold text-white" onClick={handleClose}>
              <img src={logoSvg} alt={t('footer.logoAlt')} className="h-16 w-auto rounded-lg shadow" />
              <span className="hidden sm:inline">NeverNamed Esport</span>
            </Link>
            <div className="text-sm text-gray-400">{t('footer.copyright')}</div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-2">
              <Link to="/politiques" className="text-sm text-gray-400 hover:text-white transition-colors" onClick={handleClose}>
                {t('footer.privacy')}
              </Link>
              <Link to="/socialhub#contact-form" className="text-sm text-gray-400 hover:text-white transition-colors" onClick={handleClose}>
                {t('footer.contact')}
              </Link>
            </div>
          </div>

          {/* Bloc droit */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <p className="text-lg font-bold mb-1">@thenevernamed</p>
            <div className="flex items-center gap-6 text-white">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors" aria-label="Twitter" onClick={handleClose}>
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors" aria-label="LinkedIn" onClick={handleClose}>
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors" aria-label="Instagram" onClick={handleClose}>
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 8.118c-2.136 0-3.863 1.727-3.863 3.863s1.727 3.863 3.863 3.863 3.863-1.727 3.863-3.863S14.136 8.118 12 8.118zM12 14.172c-1.186 0-2.156-.97-2.156-2.156s.97-2.156 2.156-2.156 2.156.97 2.156 2.156-.97 2.156-2.156 2.156zm4.803-6.402c-.783 0-1.418-.635-1.418-1.418s.635-1.418 1.418-1.418 1.418.635 1.418 1.418-.635 1.418-1.418 1.418z" clipRule="evenodd"></path></svg>
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-2">
              {t('footer.websiteBy')} <a href="http://xuan-minh.github.io/" className="underline hover:text-white">Xuan-Minh TRAN</a>
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;