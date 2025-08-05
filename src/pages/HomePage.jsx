import React from 'react';
import { Link } from 'react-router-dom';

// 1. Importer les nouveaux composants et la vidéo
import HeroSection from '../components/HeroSection';
import Button from '../components/Button';
import Separator from '../components/Separator';
import SponsorsBanner from '../components/SponsorsBanner';
import heroVideo from '../assets/valreal.mp4';

// On reçoit la prop "isLoading"
const HomePage = ({ isLoading }) => {
  return (
    <div>
      {/* On passe la prop au HeroSection */}
      <HeroSection videoSrc={heroVideo} isLoading={isLoading}>
        {/* Contenu à afficher par-dessus la vidéo */}
        <h1 className="font-unbounded text-4xl md:text-7xl font-bold mb-4">
          NEVERNAMED ESPORT
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          L'excellence compétitive, sans compromis.
        </p>
        <Link to="/equipes">
          <Button>Découvrir nos rosters</Button>
        </Link>
      </HeroSection>

      {/* Le reste de votre page */}
      <div className="container mx-auto px-4">
        <Separator />
        <SponsorsBanner />
        <Separator />
        {/* Vous pouvez ajouter d'autres sections ici */}
      </div>
    </div>
  );
};

export default HomePage;