import React from 'react';
import { Link } from 'react-router-dom';

import HeroSection from '../components/HeroSection';
import Button from '../components/Button';
import Separator from '../components/Separator';
import SponsorsBanner from '../components/SponsorsBanner';
import Nowornever from '../components/Nowornever';
import heroVideo from '../assets/valreal.mp4';

const HomePage = ({ isLoading }) => {
  return (
    <div>
      {/* Section 1: Hero Vidéo en plein écran */}
      <HeroSection videoSrc={heroVideo} isLoading={isLoading}>
        <h1 className="font-unbounded text-4xl md:text-7xl font-bold mb-4">
          NEVERNAMED ESPORT
        </h1>


      </HeroSection>

      {/* Section 2: Bannière des sponsors, centrée */}
      <div className="container mx-auto px-4 py-16">
        <Separator />
        <SponsorsBanner />
        <Separator />
      </div>

      {/* Section 4: Section "Ambition", centrée */}
      <div className="container mx-auto px-4 py-16 text-left">
        <h2 className="text-4xl font-bold mb-4 font-unbounded">
          PLUS QU’UNE EQUIPE, UNE AMBITION
        </h2>
        <p className="text-lg max-w-3xl font-poppins my-4">
          Nous sommes une structure émergente et passionnée, dédiée à la promotion et à la visibilité des ligues féminines dans l'e-sport. Notre mission est de renforcer la représentation des femmes dans l’univers du jeu vidéo et de contribuer à une culture plus inclusive.
        <Link to="/equipes">
          <Button>Découvrir nos rosters</Button>
        </Link>
        </p>
      </div>

        {/* Section 3: Bandeau défilant en pleine largeur */}
      <Nowornever />
    </div>
  );
};

export default HomePage;