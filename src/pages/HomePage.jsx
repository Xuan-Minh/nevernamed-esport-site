import React from 'react';
import { Link } from 'react-router-dom';

import HeroSection from '../components/HeroSection';
import Button from '../components/Button';
import Separator from '../components/Separator';
import SponsorsBanner from '../components/SponsorsBanner';
import heroVideo from '../assets/valreal.mp4';

const HomePage = ({ isLoading }) => {
  return (
    // La div principale n'a plus besoin de classes spécifiques
    <div>
      <HeroSection videoSrc={heroVideo} isLoading={isLoading}>
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

      {/* NOUVEAU: La section de transition */}
  <div className="py-16">
        <div className="container mx-auto px-4">
          <Separator />
          <SponsorsBanner />
          <Separator />
        </div>
      </div>
    </div>
  );
};

export default HomePage;