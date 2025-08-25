import React, { useState } from 'react';
import ArrowIcon from './ArrowIcon';

// --- Données et Composants ---
import { LolLogoText, ValorantLogoText } from './GameLogos';
import lolImage from '../assets/teams/lol-bg.jpg';
import valorantImage from '../assets/teams/valorant-bg.jpg';

const teamsData = [
  { id: 'lol', name: 'LEAGUE OF LEGENDS', image: lolImage, LogoComponent: LolLogoText, fontClass: 'font-beaufort' },
  { id: 'valorant', name: 'VALORANT', image: valorantImage, LogoComponent: ValorantLogoText, fontClass: 'font-unbounded' },
  { id: 'valorant', name: 'VALORANT', image: valorantImage, LogoComponent: ValorantLogoText, fontClass: 'font-unbounded' },
  // Ajoute d'autres jeux ici...
];

function GameSelectionCarousel({ onTeamSelect }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 1: next, -1: prev, 0: initial

  const total = teamsData.length;

  const handlePrev = () => {
    setDirection(-1);
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setDirection(1);
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const handlePanelClick = (index) => {
    if (index === currentIndex) {
      onTeamSelect?.(teamsData[index]);
      return;
    }
    // Choisit la direction la plus courte
    const forward = (index - currentIndex + total) % total;
    if (forward <= total / 2) handleNext();
    else handlePrev();
  };

  // Détermine quelles cartes afficher à gauche/centre/droite
  const centerIndex = currentIndex;
  let leftIndex, rightIndex;

  if (direction === 1 && total >= 3) {
    // Next: centre = ancien right, gauche = ancien centre, droite = ancien left (n-1 repart vers le centre)
    leftIndex = prevIndex;
    rightIndex = (prevIndex - 1 + total) % total;
  } else if (direction === -1 && total >= 3) {
    // Prev: centre = ancien left, droite = ancien centre, gauche = ancien right
    rightIndex = prevIndex;
    leftIndex = (prevIndex + 1) % total;
  } else {
    // État initial ou 2 items seulement
    leftIndex = (centerIndex - 1 + total) % total;
    rightIndex = (centerIndex + 1) % total;
  }

  // Rendu
  return (
    <section className="h-screen w-full text-white flex flex-col justify-center items-center overflow-hidden animate-fade-in">
      <h2 className="font-unbounded text-3xl md:text-4xl font-bold tracking-wider">SELECT OUR TEAM</h2>
      <ArrowIcon className="w-8 h-8 mt-4 text-white/50 rotate-90" />

      <div className="relative w-full h-[400px] flex items-center justify-center mt-8">
        <div className="w-full h-full">
          <div className="w-full h-full relative">
            {teamsData.map((team, index) => {
              let pos = null; // -1, 0, +1
              if (index === centerIndex) pos = 0;
              else if (index === leftIndex) pos = -1;
              else if (index === rightIndex) pos = +1;

              const isVisible = pos !== null;
              const isActive = pos === 0;

              const transform = isVisible
                ? `translateX(${pos * 65}%) scale(${isActive ? 1 : 0.7})`
                : `translateX(0%) scale(0.7)`;

              const zIndex = isActive ? 3 : isVisible ? 2 : 0;

              return (
                <div
                  key={`${team.id}-${index}`}
                  className="absolute w-80 h-80 md:w-96 md:h-96 top-1/2 left-1/2 -mt-48 -ml-48 transition-all duration-500 ease-in-out cursor-pointer"
                  style={{
                    transform,
                    zIndex,
                    opacity: isVisible ? 1 : 0,
                    pointerEvents: isVisible ? 'auto' : 'none',
                  }}
                  onClick={() => handlePanelClick(index)}
                >
                  <div className={`relative w-full h-full rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 ${isActive ? 'shadow-cyan-500/50' : 'shadow-black/50'}`}>
                    <img
                      src={team.image}
                      alt={team.name}
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                    {/* Overlay: côtés plus transparents (plus sombre) */}
                    <div className={`absolute inset-0 transition-opacity duration-500 ${isActive ? 'opacity-40' : 'opacity-85'}`}></div>
                    <div className={`absolute inset-0 flex items-center justify-center p-8 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-30'}`}>
                      <team.LogoComponent className="w-full h-auto text-white" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Boutons de navigation */}
        <button onClick={handlePrev} className="absolute left-4 md:left-16 z-20 p-3 text-white/50 hover:text-white transition-colors">
          <ArrowIcon className="w-8 h-8 rotate-180" />
        </button>
        <button onClick={handleNext} className="absolute right-4 md:right-16 z-20 p-3 text-white/50 hover:text-white transition-colors">
          <ArrowIcon className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}

export default GameSelectionCarousel;