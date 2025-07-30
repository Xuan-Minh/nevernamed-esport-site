import { Link } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';

function Header() {

  return (
    <header className="font-unbounded w-full p-4">
       <nav className="container mx-auto grid grid-cols-3 items-center">

        <div>
        <Link to="/" className="text-xl font-bold text-white">
          NEVERNAMED
        </Link>
        </div>

        <div className="flex items-center gap-10 text-white">
          <Link to="/equipes" className="text-xl font-bold text-white">TEAMS</Link>
          <Link to="/a-propos" className="text-xl font-bold text-white">ABOUT US</Link>
          <Link to="/partenaires" className="text-xl font-bold text-white">PARTNERS</Link>
          <Link to="/contact" className="text-xl font-bold text-white">SOCIALS</Link>
        </div>

         <div className="flex justify-end">
            <LanguageSwitcher />
        </div>

      </nav>
    </header>
  );
}

export default Header;