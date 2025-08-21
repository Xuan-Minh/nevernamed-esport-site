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


];

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
        <div className="w-full h-full">
          <div className="w-full h-full relative">
            {teamsData.map((team, index) => {
              // --- NOUVELLE LOGIQUE POUR LA BOUCLE INFINIE ---
              let position = index - currentIndex;
              const totalItems = teamsData.length;

              // Corrige la position pour la boucle (ex: si on est à l'index 0, le dernier item est à -1)
              if (position > totalItems / 2) {
                position -= totalItems;
              }
              if (position < -totalItems / 2) {
                position += totalItems;
              }

              const isActive = position === 0;
              const isVisible = Math.abs(position) <= 1;

              const transform = `translateX(${position * 65}%) scale(${isActive ? 1 : 0.7})`;
              const zIndex = totalItems - Math.abs(position);

              return (
                <div
                  key={team.id + '-' + index} // Clé plus robuste pour éviter les conflits
                  className="absolute w-80 h-80 md:w-96 md:h-96 top-1/2 left-1/2 -mt-48 -ml-48 transition-all duration-500 ease-in-out cursor-pointer"
                  style={{
                    transform: transform,
                    zIndex: zIndex,
                    opacity: isVisible ? 1 : 0, // On affiche seulement les 3 cartes concernées
                    pointerEvents: isVisible ? 'auto' : 'none', // On désactive le clic sur les cartes cachées
                  }}
                  onClick={() => handlePanelClick(index)}
                >
                  <div className={`relative w-full h-full rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 ${isActive ? 'shadow-cyan-500/50' : 'shadow-black/50'}`}>
                    <img
                      src={team.image}
                      alt={team.name}
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                    <div className={`absolute inset-0transition-opacity duration-500 ${isActive ? 'opacity-40' : 'opacity-75'}`}></div>
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