import React, { useState } from 'react';
import ArrowIcon from '../components/ArrowIcon';
import { FaTwitter, FaInstagram, FaGlobe } from 'react-icons/fa';
import { sponsors } from '../assets/sponsors/sponsors'; // Importer les données centralisées
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import Separator from '../components/Separator';

// --- Importation dynamique des logos SVG ---
const sponsorLogoModules = import.meta.glob('../assets/sponsors/*.svg', { eager: true });

// Créer un objet facile à utiliser: { 'ragnarok': '/path/to/logo.svg', ... }
const logoMap = Object.entries(sponsorLogoModules).reduce((acc, [path, module]) => {
  const id = path.split('/').pop().replace('.svg', '');
  acc[id] = module.default;
  return acc;
}, {});

// Combiner les données et les logos
const sponsorsData = sponsors.map(sponsor => ({
  ...sponsor,
  logo: logoMap[sponsor.id] // Ajoute le chemin du logo correspondant
}));


function PartnersPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sponsorsData.length) % sponsorsData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sponsorsData.length);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center text-white pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        {/* --- Titre --- */}
        <h1 className="font-unbounded text-4xl md:text-5xl font-bold mb-4">
          NOS SPONSORS <span className="to-orange-400">&</span> PARTENAIRES
        </h1>

        {/* --- Carrousel des Sponsors --- */}
        <div className="relative w-full max-w-5xl mx-auto h-72 flex items-center justify-center my-16">
          {sponsorsData.map((sponsor, index) => {
            let position = index - currentIndex;
            const totalItems = sponsorsData.length;
            if (position > totalItems / 2) position -= totalItems;
            if (position < -totalItems / 2) position += totalItems;

            const isActive = position === 0;
            const isVisible = Math.abs(position) <= 2; // Affiche 5 sponsors au total

            const styles = {
              transform: `translateX(${position * 60}%) scale(${isActive ? 1 : 0.6})`,
              opacity: isVisible ? 1 : 0,
              zIndex: totalItems - Math.abs(position),
              transition: 'transform 0.5s ease, opacity 0.5s ease',
            };

            return (
              <div
                key={sponsor.id}
                className="absolute w-64 h-64 cursor-pointer"
                style={styles}
                onClick={() => setCurrentIndex(index)}
              >
                <div className={`w-full h-full rounded-2xl bg-gray-800 backdrop-blur-sm flex flex-col items-center justify-center p-6 transition-all duration-500 ${isActive ? 'bg-gray-700/50 shadow-lg shadow-cyan-500/20' : 'opacity-50'}`}>
                  {/* On vérifie que le logo existe avant de l'afficher */}
                  {sponsor.logo && <img src={sponsor.logo} alt={sponsor.name} className={`transition-all duration-500 ${isActive ? 'h-20' : 'h-24'}`} />}
                  {isActive && (
                    <div className="text-center mt-4 animate-fade-in">
                      <p className="text-xs text-white/80 my-3 line-clamp-3">{sponsor.description}</p>
                      <div className="flex justify-center gap-4 text-lg">
                        {sponsor.socials.instagram && <a href={sponsor.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent"><FaInstagram /></a>}
                        {sponsor.socials.twitter && <a href={sponsor.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent"><FaTwitter /></a>}
                        {sponsor.socials.website && <a href={sponsor.socials.website} target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent"><FaGlobe /></a>}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
          {/* --- Navigation du Carrousel --- */}
          <button onClick={handlePrev} className="absolute left-0 z-20 p-3 text-white/50 hover:text-white transition-colors"><ArrowIcon className="w-6 h-6 rotate-180" /></button>
          <button onClick={handleNext} className="absolute right-0 z-20 p-3 text-white/50 hover:text-white transition-colors"><ArrowIcon className="w-6 h-6" /></button>
        </div>

        {/* --- Séparateur --- */}
        <Separator/>

        {/* --- Section "Devenir Partenaire" --- */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center text-left">
          <div>
            <h2 className="font-unbounded text-3xl font-bold">DEVENIR PARTENAIRE</h2>
            <p className="text-white/70 mt-4 max-w-md">
              With decades of experience in business and esports, our multinational staff ensures our partners enjoy the highest levels of performance in every aspect. Contact us and find out for yourself!
            </p>
          </div>
          <Link to="/contact" className="flex justify-center items-center">
         <Button>
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PartnersPage;