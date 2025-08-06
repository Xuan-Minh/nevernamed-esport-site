import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
    {code: 'fr', name: 'Français', flag : '🇫🇷'},
    {code: 'en', name: 'English', flag : '🇬🇧'},
];
function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const dropdownRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [dropdownRef]);
  
    const getCurrentLanguage = () => {
    const languageCode = i18n.language.split('-')[0]; // Prend 'fr' de 'fr-FR'
    return languages.find(lang => lang.code === languageCode) || languages[0];
  };

  const currentLanguage = getCurrentLanguage();

    return (
    
        <div className="relative" ref={dropdownRef}>
            <button
                className="flex items-center gap-2 bg-brand-dark text-white px-4 py-2 rounded hover:bg-gray-700 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-xl">{currentLanguage.flag}</span>
                <span className="font-bold text-white">{currentLanguage?.code.toUpperCase()}</span>
            </button>

            
            {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-40 bg-brand-dark rounded-md shadow-lg z-10">
          <ul>
            {languages.map((lang) => (
              <li key={lang.code}>
                <button
                  onClick={() => {
                    i18n.changeLanguage(lang.code);
                    setIsOpen(false); // On ferme le menu après avoir cliqué
                  }}
                  className="w-full flex items-center gap-3 p-2 text-left text-white hover:bg-gray-700"
                >
                  <span className="text-xl">{lang.flag}</span>
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