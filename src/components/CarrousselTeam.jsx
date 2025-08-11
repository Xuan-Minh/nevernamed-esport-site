import React, { useState } from 'react';

// --- Swiper ---
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// --- Données et Composants ---
import { LolLogoText, ValorantLogoText, R6LogoText } from './GameLogos';
import ArrowIcon from './ArrowIcon';
import lolImage from '../assets/teams/lol-bg.jpg';
import valorantImage from '../assets/teams/valorant-bg.jpg';
import jerseyImage from '../assets/jersey.png'; // Placeholder pour le maillot

// --- Données étendues ---
const teamsData = [
  {
    id: 'lol',
    name: 'LEAGUE OF LEGENDS',
    image: lolImage,
    fontClass: 'font-beaufort',
    LogoComponent: LolLogoText,
    roster: [
      { name: 'Finn', role: 'Head Coach', description: 'Lorem ipsum dolor sit amet...', socials: { twitter: '#', twitch: '#' } },
      { name: 'Solenne', role: 'Player', description: 'Consectetur adipiscing elit...', socials: { twitter: '#', twitch: '#' } },
      // ... ajoutez les autres membres
    ]
  },
  // ... ajoutez les données pour Valorant et R6
    {
    id: 'Valorant',
    name: 'Valorant',
    image: valorantImage,
    fontClass: 'font-beaufort',
    LogoComponent: ValorantLogoText,
    roster: [
      { name: 'Finn', role: 'Head Coach', description: 'Lorem ipsum dolor sit amet...', socials: { twitter: '#', twitch: '#' } },
      { name: 'Solenne', role: 'Player', description: 'Consectetur adipiscing elit...', socials: { twitter: '#', twitch: '#' } },
      // ... ajoutez les autres membres
    ]
  },
   {
    id: 'Valorant',
    name: 'Valorant',
    image: valorantImage,
    fontClass: 'font-beaufort',
    LogoComponent: ValorantLogoText,
    roster: [
      { name: 'Finn', role: 'Head Coach', description: 'Lorem ipsum dolor sit amet...', socials: { twitter: '#', twitch: '#' } },
      { name: 'Solenne', role: 'Player', description: 'Consectetur adipiscing elit...', socials: { twitter: '#', twitch: '#' } },
      // ... ajoutez les autres membres
    ]
  },
   {
    id: 'Valorant',
    name: 'Valorant',
    image: valorantImage,
    fontClass: 'font-beaufort',
    LogoComponent: ValorantLogoText,
    roster: [
      { name: 'Finn', role: 'Head Coach', description: 'Lorem ipsum dolor sit amet...', socials: { twitter: '#', twitch: '#' } },
      { name: 'Solenne', role: 'Player', description: 'Consectetur adipiscing elit...', socials: { twitter: '#', twitch: '#' } },
      // ... ajoutez les autres membres
    ]
  }, {
    id: 'Valorant',
    name: 'Valorant',
    image: valorantImage,
    fontClass: 'font-beaufort',
    LogoComponent: ValorantLogoText,
    roster: [
      { name: 'Finn', role: 'Head Coach', description: 'Lorem ipsum dolor sit amet...', socials: { twitter: '#', twitch: '#' } },
      { name: 'Solenne', role: 'Player', description: 'Consectetur adipiscing elit...', socials: { twitter: '#', twitch: '#' } },
      // ... ajoutez les autres membres
    ]
  },
];

// --- Composant pour la vue détaillée de l'équipe ---
const TeamDetailView = ({ team, onBack }) => {
  return (
    <div className="absolute inset-0  flex flex-col animate-fade-in">
      {/* Fond d'écran et titre du jeu */}
      <div className="relative w-full h-1/2">
        <img src={team.image} alt={team.name} className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className={`text-6xl md:text-8xl text-white/80 ${team.fontClass}`}>{team.name}</h1>
        </div>
        <button onClick={onBack} className="absolute top-5 left-5 text-white bg-black/50 rounded-full p-2 hover:bg-brand-accent transition-colors z-20">
          <ArrowIcon className="w-6 h-6 rotate-180" />
        </button>
      </div>

      {/* Section des joueurs (Carrousel Swiper) */}
      <div className="w-full h-1/2 relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{
            el: '.swiper-pagination-custom',
            type: 'fraction',
          }}
          className="h-full"
        >
          {team.roster.map((member, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-8">
                {/* Info Joueur */}
                <div className="relative text-left">
                  <span className="text-brand-accent font-bold">{member.role}</span>
                  <h3 className="text-4xl font-bold my-2">{member.name}</h3>
                  <p className="text-white/70">{member.description}</p>
                </div>
                {/* Maillot */}
                <div className="flex justify-center">
                  <img src={jerseyImage} alt="Maillot" className="w-64 h-auto drop-shadow-2xl" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Contrôles de navigation personnalisés pour Swiper */}
         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-6 text-white font-bold">
            <button className="swiper-button-prev-custom"><ArrowIcon className="w-5 h-5 rotate-180" /></button>
            <div className="swiper-pagination-custom w-12 text-center"></div>
            <button className="swiper-button-next-custom"><ArrowIcon className="w-5 h-5" /></button>
        </div>
      </div>
    </div>
  );
};


// --- Composant principal ---
function CarrousselTeam() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTeam, setSelectedTeam] = useState(null);

  if (selectedTeam) {
    return <TeamDetailView team={selectedTeam} onBack={() => setSelectedTeam(null)} />;
  }

  const handleSelectTeam = (index) => {
    // On centre d'abord l'élément cliqué, puis on le sélectionne après une courte animation
    setCurrentIndex(index);
    setTimeout(() => {
      setSelectedTeam(teamsData[index]);
    }, 500); // Doit correspondre à la durée de la transition CSS
  };

  return (
 <section className="h-screen w-full bg-brand-dark text-white flex flex-col justify-center items-center p-4 overflow-hidden">
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

export default CarrousselTeam;