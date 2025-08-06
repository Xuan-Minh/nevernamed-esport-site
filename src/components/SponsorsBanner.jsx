import React, { useState } from 'react';
// Importez votre fichier SVG
import arrowIcon from '../assets/arrow.svg';

const sponsorModules = import.meta.glob('../assets/sponsors/*.svg', { eager: true });
const sponsorLogos = Object.values(sponsorModules).map((module) => module.default);

// --- Les icônes SVG en ligne sont maintenant supprimées ---

function SponsorsBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSponsors = sponsorLogos.length;

  // ... (la logique de la grille statique reste la même)
  if (totalSponsors <= 5) {
    return (
      <div className="sponsors-banner py-8">
        <div className="container mx-auto">
          <div className="flex justify-evenly items-center gap-x-8 md:gap-x-12 flex-wrap">
            {sponsorLogos.map((logoUrl) => {
              const fileName = logoUrl.split('/').pop().replace('.svg', '');
              return (
                <img 
                  key={fileName}
                  src={logoUrl} 
                  alt={`Logo ${fileName}`}
                  className="h-20 md:h-24 object-contain"
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // --- Logique pour le carrousel ---
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalSponsors - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === totalSponsors - 1 ? 0 : prevIndex + 1));
  };

  // Si on a plus de 5 sponsors, on affiche le carrousel
  return (
    <div className="sponsors-banner py-8">
      <div className="container mx-auto">
        <div className="relative flex justify-center items-center gap-x-4 md:gap-x-8">
          {/* Bouton Précédent */}
          <button 
            onClick={handlePrev} 
            className="text-white/50 hover:text-white transition-colors p-2 rounded-full"
            aria-label="Sponsor précédent"
          >
            {/* Utilisez l'icône importée avec une rotation */}
            <img src={arrowIcon} alt="Précédent" className="h-6 w-6 rotate-180" />
          </button>

          {/* Conteneur du logo */}
          <div className="w-48 h-20 flex items-center justify-center">
            <img 
              key={currentIndex}
              src={sponsorLogos[currentIndex]} 
              alt={`Logo sponsor ${currentIndex + 1}`}
              className="h-24 md:h-28 object-contain"
            />
          </div>

          {/* Bouton Suivant */}
          <button 
            onClick={handleNext} 
            className="text-white/50 hover:text-white transition-colors p-2 rounded-full"
            aria-label="Sponsor suivant"
          >
            {/* Utilisez l'icône importée sans rotation */}
            <img src={arrowIcon} alt="Suivant" className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SponsorsBanner;