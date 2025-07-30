import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import logoSvg from '../assets/logo.svg'; 

function Header() {

  return (
    <header className="font-unbounded w-full p-4 absolute top-0 left-0 z-50 bg-gradient-to-b from-black to-transparent">
       <nav className="container mx-auto grid grid-cols-3 items-center">

        <div>
        <Link to="/" className="text-xl font-bold text-white">
          <img src={logoSvg} alt="Logo Nevernamed Esport" className="h-20 w-auto" />
        </Link>
        </div>

        <div className="flex items-center gap-10 text-white text-nowrap">
          <Link to="/equipes" className="text-xl font-bold text-white">TEAMS</Link>
          <Link to="/a-propos" className="text-xl font-bold text-white">ABOUT US</Link>
          <Link to="/partenaires" className="text-xl font-bold text-white">PARTNERS</Link>
          <Link to="/socialhub" className="text-xl font-bold text-white">SOCIALS</Link>
        </div>

         <div className="flex justify-end">
            <LanguageSwitcher />
        </div>

      </nav>
    </header>
  );
}

export default Header;