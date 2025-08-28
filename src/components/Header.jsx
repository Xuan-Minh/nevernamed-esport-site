import { useState, useEffect } from 'react';
import { NavLink as RouterNavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // <-- 1. Importer motion et AnimatePresence
import LanguageSwitcher from './LanguageSwitcher';
import logoSvg from '../assets/logo.svg';
import ArrowIcon from './ArrowIcon';

// --- Icônes pour le menu mobile ---
const HamburgerIcon = () => (
  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

function Header({ isOpen, setIsOpen }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ to, children, onClick }) => (
    <RouterNavLink
      to={to}
      onClick={onClick}
      className="relative group text-xl font-bold text-white py-4"
    >
      {({ isActive }) => (
        <>
          <span>{children}</span>
          <ArrowIcon
            alt="v"
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-4 w-auto rotate-90 transition-all duration-300 ease-in-out ${isActive ? 'opacity-100 translate-y-0 text-[#F89C2C]' : 'opacity-0 -translate-y-2 text-white group-hover:opacity-100 group-hover:translate-y-0'}`}
          />
        </>
      )}
    </RouterNavLink>
  );

  const navItems = [
    { to: "/equipes", text: "TEAMS" },
    { to: "/a-propos", text: "ABOUT US" },
    { to: "/partenaires", text: "PARTNERS" },
    { to: "/socialhub", text: "SOCIALS" },
  ];

  // 2. Définir les variantes de l'animation
  const menuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.4, ease: 'easeInOut' },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

 return (
    <header
      className={`font-unbounded w-full p-4 fixed top-0 left-0 z-50 transition-colors duration-300 ${
        isScrolled || isOpen ? 'bg-brand-dark/90 backdrop-blur-lg' : 'bg-gradient-to-b from-black/70 to-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link
              to="/"
              className="flex-shrink-0"
              onClick={() => setIsOpen(false)} // Ajouté pour fermer le menu mobile
            >
              <img src={logoSvg} alt="Logo Nevernamed Esport" className="h-16 md:h-20 w-auto" />
            </Link>
        <nav className="hidden md:flex items-center justify-center gap-10 text-white text-nowrap">
          {navItems.map(item => <NavLink key={item.to} to={item.to}>{item.text}</NavLink>)}
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden md:block"><LanguageSwitcher /></div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Ouvrir le menu">
              {isOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. Envelopper le menu mobile avec AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          // 4. Transformer le div en motion.div et appliquer les variantes
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="md:hidden container mx-auto overflow-hidden bg-brand-dark/95 backdrop-blur-lg rounded-xl mt-2"
          >
            <nav className="flex flex-col items-center gap-6 py-8 border-t border-white/10 mt-4">
              {navItems.map(item => (
                <NavLink key={item.to} to={item.to} onClick={() => setIsOpen(false)}>
                  {item.text}
                </NavLink>
              ))}
              <div className="mt-4"><LanguageSwitcher /></div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;