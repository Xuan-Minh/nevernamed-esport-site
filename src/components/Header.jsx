import { Link } from 'react-router-dom';

function Header() {

  return (
    <header className="p-4 bg-gray-900 text-white"> 
      <nav className="container mx-auto flex justify-between">
        <Link to="/" className="text-xl font-bold">NEVERNAMED</Link>
        <div className="flex gap-4">
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