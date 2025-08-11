import React, { useState } from 'react';
import ArrowIcon from './ArrowIcon';

// --- Données et Composants ---
import { LolLogoText, ValorantLogoText, R6LogoText } from './GameLogos';
import lolImage from '../assets/teams/lol-bg.jpg';
import valorantImage from '../assets/teams/valorant-bg.jpg';

const teamsData = [
  { id: 'lol', name: 'LEAGUE OF LEGENDS', image: lolImage, LogoComponent: LolLogoText, fontClass: 'font-beaufort' },
  { id: 'valorant', name: 'VALORANT', image: valorantImage, LogoComponent: ValorantLogoText, fontClass: 'font-unbounded' },

]
function GameSelectionCarousel({ onTeamSelect }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + teamsData.length) % teamsData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamsData.length);
  };

  const handlePanelClick = (index) => {
    if (index === currentIndex) {
      onTeamSelect(teamsData[index]);
    } else {
      setCurrentIndex(index);
    }
  };

  return (
    <section className="h-screen w-full text-white flex flex-col justify-center items-center p-4 overflow-hidden animate-fade-in">
      <h2 className="font-unbounded text-3xl md:text-4xl font-bold tracking-wider">SELECT OUR TEAM</h2>
      <ArrowIcon className="w-8 h-8 mt-4 text-white/50 rotate-90" />

      <div className="relative w-full h-[400px] flex items-center justify-center mt-8">
        {/* MODIFIÉ: Suppression de la classe 'perspective-1000' qui n'est plus nécessaire */}
        <div className="w-full h-full">
          {/* Le conteneur pour les cartes */}
          <div className="w-full h-full relative">
            {teamsData.map((team, index) => {
              const isActive = index === currentIndex;
              const distance = index - currentIndex;

              // --- LOGIQUE DE TRANSFORMATION 2D ---
              let transform = '';
              let zIndex = teamsData.length - Math.abs(distance);
              let opacity = 0;

              if (Math.abs(distance) <= 1) { // Affiche l'élément central et ses voisins directs
                // MODIFIÉ: Suppression de rotateY pour un effet 2D. Augmentation de translateX pour plus d'espace.
                transform = `translateX(${distance * 65}%) scale(${isActive ? 1 : 0.7})`;
                opacity = 1;
              } else { // Cache les autres éléments plus lointains
                transform = `translateX(${distance * 65}%) scale(0.7)`;
                opacity = 0;
              }

              return (
                <div
                  key={team.id}
                  className="absolute w-64 h-80 md:w-72 md:h-96 top-1/2 left-1/2 -mt-48 -ml-36 transition-all duration-500 ease-in-out cursor-pointer"
                  style={{
                    transform: transform,
                    zIndex: zIndex,
                    opacity: opacity,
                  }}
                  onClick={() => handlePanelClick(index)}
                >
                  <div className={`relative w-full h-full rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 ${isActive ? 'shadow-cyan-500/50' : 'shadow-black/50'}`}>
                    <img
                      src={team.image}
                      alt={team.name}
                      // MODIFIÉ: Suppression de 'grayscale'
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                    {/* MODIFIÉ: Ajout d'un calque noir pour assombrir les cartes */}
                    <div className={`absolute inset-0 bg-black transition-opacity duration-500 ${isActive ? 'opacity-40' : 'opacity-75'}`}></div>
                    
                    {/* MODIFIÉ: Le logo est maintenant toujours visible, mais son opacité change */}
                    <div className={`absolute inset-0 flex items-center justify-center p-8 transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-20'}`}>
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