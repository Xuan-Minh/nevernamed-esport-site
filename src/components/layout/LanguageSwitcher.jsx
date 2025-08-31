import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

const languages = [
  { code: 'fr', name: 'Français' },
  { code: 'en', name: 'English' },
];

const langToCountry = { fr: 'fr', en: 'gb' };

const Flag = ({ lang, className = '' }) => {
  const country = langToCountry[lang] || lang;
  return <span className={`fi fi-${country} text-xl ${className}`} aria-hidden />;
};

// --- Dropdown Desktop ---
function DesktopDropdown({ currentLanguage, onChange, isOpen, setIsOpen }) {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setIsOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center gap-2 bg-brand-dark text-white px-4 py-2 rounded hover:bg-gray-700 focus:outline-none"
        onClick={() => setIsOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Changer de langue"
      >
        <Flag lang={currentLanguage.code} />
        <span className="font-bold text-white">{currentLanguage.code.toUpperCase()}</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute right-0 mt-2 w-44 bg-brand-dark rounded-xl shadow-lg z-50"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <ul role="listbox" className="py-2">
              {languages.map((lang) => (
                <li key={lang.code}>
                  <button
                    onClick={() => {
                      onChange(lang.code);
                      setIsOpen(false);
                    }}
                    className="w-full flex items-center gap-3 py-2 px-4 text-left text-white text-base rounded hover:bg-gray-700"
                    role="option"
                    aria-label={`Choisir la langue ${lang.name}`}
                  >
                    <Flag lang={lang.code} className="text-xl" />
                    <span>{lang.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- Modal Mobile ---
function MobileModal({ currentLanguage, onChange, isOpen, setIsOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            className="bg-brand-dark rounded-xl shadow-lg w-11/12 max-w-xs mx-auto p-4 z-50"
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 40 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <ul role="listbox" className="space-y-2">
              {languages.map((lang) => (
                <li key={lang.code}>
                  <button
                    onClick={() => {
                      onChange(lang.code);
                      setIsOpen(false);
                    }}
                    className="w-full flex items-center gap-3 py-3 px-4 text-left text-white text-lg rounded hover:bg-gray-700"
                    role="option"
                    aria-label={`Choisir la langue ${lang.name}`}
                  >
                    <Flag lang={lang.code} className="text-2xl" />
                    <span>{lang.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const getCurrentLanguage = () => {
    const languageCode = (i18n.language || 'fr').split('-')[0].toLowerCase();
    return languages.find((l) => l.code === languageCode) || languages[0];
  };
  const currentLanguage = getCurrentLanguage();

  const handleChange = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <>
      {/* Desktop */}
      <div className="hidden sm:block">
        <DesktopDropdown
          currentLanguage={currentLanguage}
          onChange={handleChange}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
      {/* Mobile */}
      <div className="block sm:hidden">
        <button
          className="flex items-center gap-2 bg-brand-dark text-white px-4 py-2 rounded hover:bg-gray-700 focus:outline-none"
          onClick={() => setIsOpen(true)}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-label="Changer de langue"
        >
          <Flag lang={currentLanguage.code} />
          <span className="font-bold text-white">{currentLanguage.code.toUpperCase()}</span>
        </button>
        <MobileModal
          currentLanguage={currentLanguage}
          onChange={handleChange}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
    </>
  );
}

export default LanguageSwitcher;
