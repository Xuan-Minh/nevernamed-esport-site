import React from 'react';
import { Link } from 'react-router-dom';

import HeroSection from '../components/HeroSection';
import Button from '../components/Button';
import Separator from '../components/Separator';
import SponsorsBanner from '../components/SponsorsBanner';
import Nowornever from '../components/Nowornever';
import LatestPost from '../components/LatestPost';
import heroVideo from '../assets/valreal.mp4';
import testImage from '../assets/test.jpg';
import { useTranslation } from 'react-i18next'; // AJOUT

const HomePage = ({ isLoading }) => {
  const { t } = useTranslation(); // AJOUT

  return (
    <div>
      {/* Section 1: Hero Vidéo en plein écran */}
      <HeroSection videoSrc={heroVideo} isLoading={isLoading}>
        <h1 className="font-unbounded text-4xl md:text-7xl font-bold mb-4">
          {t('home.hero.title')}
        </h1>
      </HeroSection>

      {/* Section 2: Bannière des sponsors, centrée */}
      <div className="container mx-auto px-4 py-16  text-white">
        <SponsorsBanner />
        <Separator />
      </div>

      {/* Section 3: "Ambition", centrée avec deux colonnes */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Colonne de gauche (Texte) */}
          <div className="md:w-1/2 text-left">
            <h2 className="text-4xl font-bold mb-4 font-unbounded">
              {t('home.ambition.title')}
            </h2>
            <p className="text-lg font-poppins my-8">
              {t('home.ambition.text')}
            </p>
            <Link to="/equipes">
              <Button>{t('home.ambition.cta')}</Button>
            </Link>
          </div>

          {/* Colonne de droite (Image) */}
          <div className="md:w-1/2">
            <img
              src={testImage}
              alt={t('home.ambition.imageAlt')}
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Section 4: Bandeau défilant en pleine largeur */}
      <Nowornever />
      <LatestPost />
    </div>
  );
};

export default HomePage;