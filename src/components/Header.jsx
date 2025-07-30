import { Link } from 'react-router-dom';

function Header() {

  return (
    <header className="w-full bg-gray-900 p-4">
       <nav className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-white">
          NEVERNAMED
        </Link>
        <div className="flex items-center gap-6 text-white">
          <Link to="/equipes">Teams</Link>
          <Link to="/a-propos">About Us</Link>
          <Link to="/contact">Socials</Link>
          <Link to="/partenaires">Partners</Link>
        </div>

      </nav>
    </header>
  );
}

export default Header;