import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logoSvg from '../assets/favicon.svg';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { TwitterIcon, LinkedinIcon, InstagramIcon, TwitchIcon } from './Icons';

const CloseIcon = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

function Footer({ handleClose }) {
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

  const footerVariants = {
    hidden: { y: "100%" },
    visible: { y: 0, transition: { type: "spring", stiffness: 120, damping: 20 } },
    exit: { y: "100%", transition: { ease: "easeInOut" } }
  };

  return (
    <>
      {/* Overlay pour bloquer les interactions */}
      <div
        className="fixed inset-0 z-40 bg-black/40"
        aria-hidden="true"
        tabIndex={-1}
        onClick={handleClose}
      />
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
          className="absolute top-0 right-8 -translate-y-1/2 bg-gray-800 border border-gray-600 text-white p-2 rounded-full hover:bg-gray-700 transition-colors z-50"
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
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors" aria-label="Twitter" onClick={handleClose}>
                  <TwitterIcon className="w-7 h-7" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors" aria-label="LinkedIn" onClick={handleClose}>
                  <LinkedinIcon className="w-7 h-7" />
                </a>
                <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors" aria-label="Twitch" onClick={handleClose}>
                  <TwitchIcon className="w-7 h-7" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors" aria-label="Instagram" onClick={handleClose}>
                  <InstagramIcon className="w-7 h-7" />
                </a>
              </div>
              <p className="text-sm text-gray-400 mt-2">
                {t('footer.websiteBy')} <a href="https://github.com/Xuan-Minh/" className="underline hover:text-white">Xuan-Minh TRAN</a>
              </p>
            </div>
          </div>
        </div>
      </motion.footer>
    </>
  );
}

export default Footer;