import React, { useState } from 'react';
import ArrowIcon from './ArrowIcon';

// --- Données et Composants ---
// (Assurez-vous que les imports pointent vers les bons fichiers)
import { LolLogoText, ValorantLogoText, R6LogoText } from './GameLogos';
import lolImage from '../assets/teams/lol-bg.jpg';
import valorantImage from '../assets/teams/valorant-bg.jpg';

// Recréons les données ici pour que le composant soit autonome
const teamsData = [
  { id: 'lol', name: 'LEAGUE OF LEGENDS', image: lolImage, LogoComponent: LolLogoText, fontClass: 'font-beaufort' },
  { id: 'valorant', name: 'VALORANT', image: valorantImage, LogoComponent: ValorantLogoText, fontClass: 'font-unbounded' },
  // ... ajoutez les autres jeux
];

function GameSelectionCarousel({ onTeamSelect }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelectTeam = (index) => {
    setCurrentIndex(index);
    setTimeout(() => {
      onTeamSelect(teamsData[index]);
    }, 500); // Délai pour l'animation de centrage
  };

  return (
    <section className="h-screen w-full text-white flex flex-col justify-center items-center p-4 overflow-hidden animate-fade-in">
      <h2 className="font-unbounded text-3xl md:text-4xl font-bold tracking-wider">SELECT OUR TEAM</h2>
      <ArrowIcon className="w-8 h-8 mt-4 text-white/50 rotate-90" />

      <div className="relative w-full max-w-4xl h-[400px] flex items-center justify-center mt-8">
        <div className="w-full h-full flex items-center justify-center perspective-1000">
          {teamsData.map((team, index) => {
            const isActive = index === currentIndex;
            const distance = index - currentIndex;
            let transformStyle = `translateX(${distance * 50}%) scale(0.7) rotateY(${distance > 0 ? -45 : 45}deg)`;
            if (isActive) transformStyle = 'translateX(0) scale(1) rotateY(0)';

            return (
              <div
                key={team.id}
                className="absolute w-64 h-80 md:w-80 md:h-96 transition-transform duration-500 ease-in-out cursor-pointer"
                style={{ transform: transformStyle, zIndex: isActive ? 10 : 1 }}
                onClick={() => handleSelectTeam(index)}
              >
                <div className={`relative w-full h-full rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 ${isActive ? 'shadow-cyan-500/50' : 'shadow-black/50'}`}>
                  <img src={team.image} alt={team.name} className={`w-full h-full object-cover transition-all duration-500 ${isActive ? 'scale-100' : 'scale-125 grayscale opacity-50'}`} />
                  {isActive && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-8">
                      <team.LogoComponent className="w-full h-auto text-white" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default GameSelectionCarousel;