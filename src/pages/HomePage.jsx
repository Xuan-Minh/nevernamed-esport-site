import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import AnimatedElement from '../components/AnimatedElement';

// Import des composants
import HeroSection from '../components/HeroSection';
import SponsorsBanner from '../components/SponsorsBanner';
import Separator from '../components/Separator';
import Button from '../components/Button';
import Nowornever from '../components/Nowornever';
import LatestPost from '../components/LatestPost';

// Import des ressources
import heroVideo from '../assets/valreal.mp4';
import testImage from '../assets/test.jpg'; 

const HomePage = ({ isLoading }) => {
  const { t } = useTranslation();
      
  return (
   
    // Le conteneur principal de la page n'a AUCUN padding.
    <div className="text-white">
      <Helmet>
        <title>NeverNamed Esport - Accueil</title>
        <meta name="description" content="NeverNamed Esport : équipe, ambition, sponsors et actualités." />
      </Helmet>
      {/* Section 1: Hero Vidéo. Elle est maintenant à la racine et peut prendre 100% de la largeur. */}
            <HeroSection videoSrc={heroVideo} isLoading={isLoading}>
        <AnimatedElement><h1 className="font-unbounded text-3xl sm:text-4xl md:text-7xl font-bold mb-4">
          {t('home.hero.title')}
        </h1>
        </AnimatedElement>
      </HeroSection>

      <div className="container mx-auto px-4 py-20 sm:py-24 text-white">
        <SponsorsBanner />
        <Separator />
      </div>

      <div className="container mx-auto px-4 py-20 sm:py-24">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <AnimatedElement>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 font-unbounded">
              {t('home.ambition.title')}
            </h2>
            <p className="text-base sm:text-lg font-poppins my-8">
              {t('home.ambition.text')}
            </p>
            </AnimatedElement>
            <Link to="/equipes">
              <Button>{t('home.ambition.cta')}</Button>
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={testImage}
              alt={t('home.ambition.imageAlt')}
              className="w-full max-w-md h-auto rounded-xl shadow-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <Nowornever />

      <LatestPost />
    </div>
  );
};

export default HomePage;