import { NavLink as RouterNavLink, Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import logoSvg from '../assets/logo.svg'; 
import ArrowIcon from './ArrowIcon'; // 1. Importer le nouveau composant

function Header() {

  const NavLink = ({ to, children }) => (
    <RouterNavLink 
      to={to} 
      className="relative group text-xl font-bold text-white py-4"
    >
      {({ isActive }) => (
        <>
          <span>{children}</span>
          {/* 2. Remplacer <img> par <ArrowIcon /> */}
          <ArrowIcon 
            alt="v" 
            className={`
              absolute bottom-0 left-1/2 -translate-x-1/2 h-4 w-auto rotate-90 
              transition-all duration-300 ease-in-out
              ${isActive 
                ? 'opacity-100 translate-y-0 text-[#F89C2C]' // 3. Si actif: couleur personnalisée
                : 'opacity-0 -translate-y-2 text-white group-hover:opacity-100 group-hover:translate-y-0' // 4. Sinon: blanc
              }
            `}
          />
        </>
      )}
    </RouterNavLink>
  );

  return (
    // On remet les classes pour le positionnement absolu et le fond transparent
    <header className="font-unbounded w-full p-4 absolute top-0 left-0 z-50 bg-gradient-to-b from-black/70 to-transparent">
       <nav className="container mx-auto grid grid-cols-3 items-center">
        <div>
          <Link to="/">
            <img src={logoSvg} alt="Logo Nevernamed Esport" className="h-20 w-auto" />
          </Link>
        </div>

        <div className="flex items-center justify-center gap-10 text-white text-nowrap">
          <NavLink to="/equipes">TEAMS</NavLink>
          <NavLink to="/a-propos">ABOUT US</NavLink>
          <NavLink to="/partenaires">PARTNERS</NavLink>
          <NavLink to="/socialhub">SOCIALS</NavLink>
        </div>

         <div className="flex justify-end">
            <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}

export default Header;