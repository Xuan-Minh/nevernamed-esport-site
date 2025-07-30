import { Link } from 'react-router-dom';

function Header() {

  return (
    <header className="font-unbounded w-full bg-gray-900 p-4">
       <nav className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-white">
          NEVERNAMED
        </Link>
        <div className="flex items-center gap-6 text-white">
          <Link to="/equipes" className="text-xl font-bold text-white">TEAMS</Link>
          <Link to="/a-propos" className="text-xl font-bold text-white">ABOUT US</Link>
          <Link to="/partenaires" className="text-xl font-bold text-white">PARTNERS</Link>
          <Link to="/contact" className="text-xl font-bold text-white">SOCIALS</Link>
        </div>

      </nav>
    </header>
  );
}

export default Header;