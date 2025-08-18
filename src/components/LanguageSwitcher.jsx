import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'fr', name: 'Français' },
  { code: 'en', name: 'English' },
];

// Map langue -> pays pour flag-icons
const langToCountry = { fr: 'fr', en: 'gb' };

const Flag = ({ lang, className = '' }) => {
  const country = langToCountry[lang] || lang;
  // Taille contrôlée via text-* (flag-icons se base sur font-size)
  return <span className={`fi fi-${country} text-xl ${className}`} aria-hidden />;
};

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getCurrentLanguage = () => {
    const languageCode = (i18n.language || 'fr').split('-')[0].toLowerCase();
    return languages.find((l) => l.code === languageCode) || languages[0];
  };
  const currentLanguage = getCurrentLanguage();

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center gap-2 bg-brand-dark text-white px-4 py-2 rounded hover:bg-gray-700 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <Flag lang={currentLanguage.code} />
        <span className="font-bold text-white">{currentLanguage.code.toUpperCase()}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-44 bg-brand-dark rounded-md shadow-lg z-10">
          <ul role="listbox">
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  onClick={() => { i18n.changeLanguage(lang.code); setIsOpen(false); }}
                  className="w-full flex items-center gap-3 p-2 text-left text-white hover:bg-gray-700"
                  role="option"
                >
                  <Flag lang={lang.code} />
                  <span>{lang.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;