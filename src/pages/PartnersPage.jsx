import React, { useState } from 'react';
import ArrowIcon from '../components/common/ArrowIcon';
import { FaInstagram, FaGlobe } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa';
import { sponsors } from '../components/sponsors/sponsors';
import Button from '../components/common/Button';
import { Link } from 'react-router-dom';
import Separator from '../components/common/Separator';
import AnimatedElement from '../components/common/AnimatedElement';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

// --- Importation dynamique des logos SVG ---
const sponsorLogoModules = import.meta.glob('../assets/sponsors/*.svg', { eager: true });

// Créer un objet facile à utiliser: { 'ragnarok': '/path/to/logo.svg', ... }
const logoMap = Object.entries(sponsorLogoModules).reduce((acc, [path, module]) => {
  const id = path.split('/').pop().replace('.svg', '');
  acc[id] = module.default;
  return acc;
}, {});

// Combiner les données et les logos
const sponsorsData = sponsors.map((sponsor) => ({
  ...sponsor,
  logo: logoMap[sponsor.id] || null,
  socials: sponsor.socials || {},
}));

function PartnersPage() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };
  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };
  const handleTouchEnd = () => {
    if (touchStartX !== null && touchEndX !== null) {
      const delta = touchStartX - touchEndX;
      if (delta > 50) handleNext(); // swipe gauche
      if (delta < -50) handlePrev(); // swipe droite
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sponsorsData.length) % sponsorsData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sponsorsData.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen flex flex-col justify-center text-white pt-24 px-4"
    >
      <div className="min-h-screen flex flex-col justify-center text-white sm:pt-18 sm:pb-8 sm:pt-20 px-4">
        <Helmet>
          <title>NeverNamed Esport - Partenaires & Sponsors</title>
          <meta
            name="description"
            content="Nos sponsors, partenaires et comment rejoindre l’aventure NeverNamed Esport."
          />
        </Helmet>
        <div className="container mx-auto text-center pt-20 sm:pt-24">
          {/* --- Titre --- */}
          <AnimatedElement>
            <h1 className="font-unbounded text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
              {t('partners.title.left')} <span className="text-[#F89C2C]">&</span>{' '}
              {t('partners.title.right')}
            </h1>
          </AnimatedElement>

          {/* --- Carrousel des Sponsors --- */}
          <AnimatedElement>
            <div
              className="relative w-full max-w-5xl mx-auto h-56 sm:h-72 flex items-center justify-center my-10 sm:my-16"
              style={{ perspective: 1200 }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {sponsorsData.map((sponsor, index) => {
                let position = index - currentIndex;
                const totalItems = sponsorsData.length;
                // wrap positions to allow circular behavior
                if (position > totalItems / 2) position -= totalItems;
                if (position < -totalItems / 2) position += totalItems;

                const isActive = position === 0;
                // Only show center and direct neighbors => 3 visible items
                const isVisible = Math.abs(position) <= 1;

                // 3D triangle illusion: all cards on same vertical level, use translateZ+rotateY for depth
                const xOffset = 55; // horizontal offset percent for side cards
                const zFront = 90; // translateZ for the active card (px)
                const zSide = 24; // translateZ for side cards (px)

                let transform = '';
                let opacity = 0;
                let zIndex = 1;
                let pointerEventsVal = 'none';

                if (position === 0) {
                  // center: closer to camera, slight tilt back
                  transform = `translateX(0%) translateZ(${zFront}px) rotateX(6deg) scale(1)`;
                  opacity = 1;
                  zIndex = totalItems;
                  pointerEventsVal = 'auto';
                } else if (position === -1) {
                  // left side: rotate to the left
                  transform = `translateX(-${xOffset}%) translateZ(${zSide}px) rotateY(18deg) rotateX(2deg) scale(0.92)`;
                  opacity = 0.5;
                  zIndex = totalItems - 1;
                  pointerEventsVal = 'auto';
                } else if (position === 1) {
                  // right side: rotate to the right
                  transform = `translateX(${xOffset}%) translateZ(${zSide}px) rotateY(-18deg) rotateX(2deg) scale(0.92)`;
                  opacity = 0.5;
                  zIndex = totalItems - 1;
                  pointerEventsVal = 'auto';
                } else {
                  // hidden / far behind
                  transform = `translateX(0%) translateZ(-60px) scale(0.8)`;
                  opacity = 0;
                  zIndex = 0;
                  pointerEventsVal = 'none';
                }

                const styles = {
                  transform,
                  transformStyle: 'preserve-3d',
                  opacity,
                  zIndex,
                  transition: 'transform 0.55s cubic-bezier(.22,.9,.28,1), opacity 0.35s ease',
                  pointerEvents: pointerEventsVal,
                };

                return (
                  <div
                    key={sponsor.id}
                    className="absolute w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 cursor-pointer"
                    aria-hidden={!isVisible}
                    style={styles}
                    onClick={() => setCurrentIndex(index)}
                  >
                    <div
                      className={`w-full h-full rounded-2xl bg-gray-800 backdrop-blur-sm flex flex-col items-center justify-center p-4 sm:p-6 transition-all duration-500 ${
                        isActive ? 'bg-gray-300/50 shadow-lg shadow-cyan-500/20' : 'opacity-70'
                      }`}
                    >
                      {sponsor.logo && (
                        <img
                          src={sponsor.logo}
                          alt={sponsor.name}
                          className={`transition-all duration-500 ${isActive ? 'h-16 sm:h-24' : 'h-12 sm:h-20'}`}
                        />
                      )}
                      {isActive && (
                        <div className="text-center mt-4 animate-fade-in">
                          <p className="text-xs sm:text-sm text-white/80 my-3 line-clamp-4">
                            {sponsor.description?.[i18n.language] ||
                              sponsor.description?.fr ||
                              sponsor.description}
                          </p>
                          <div className="flex justify-center gap-4 text-lg sm:text-xl">
                            {sponsor.socials?.tiktok && (
                              <a
                                href={sponsor.socials.tiktok}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-brand-accent transition-colors hover:scale-110"
                                aria-label="TikTok"
                              >
                                <FaTiktok />
                              </a>
                            )}
                            {sponsor.socials?.linkedin && (
                              <a
                                href={sponsor.socials.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-brand-accent transition-colors hover:scale-110"
                                aria-label="LinkedIn"
                              >
                                <FaLinkedin />
                              </a>
                            )}
                            {sponsor.socials?.instagram && (
                              <a
                                href={sponsor.socials.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-brand-accent transition-colors hover:scale-110"
                                aria-label="Instagram"
                              >
                                <FaInstagram />
                              </a>
                            )}
                            {sponsor.socials?.twitter && (
                              <a
                                href={sponsor.socials.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-brand-accent transition-colors hover:scale-110"
                                aria-label="Twitter"
                              >
                                <FaXTwitter />
                              </a>
                            )}
                            {sponsor.socials?.website && (
                              <a
                                href={sponsor.socials.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-brand-accent transition-colors hover:scale-110"
                                aria-label="Site web"
                              >
                                <FaGlobe />
                              </a>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
              {/* --- Navigation du Carrousel --- */}
              <button
                onClick={handlePrev}
                className="absolute left-0 z-20 p-3 text-white/50 hover:text-white transition-colors hidden sm:block"
                aria-label="Sponsor précédent"
              >
                <ArrowIcon className="w-6 h-6 rotate-180" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-0 z-20 p-3 text-white/50 hover:text-white transition-colors hidden sm:block"
                aria-label="Sponsor suivant"
              >
                <ArrowIcon className="w-6 h-6" />
              </button>
            </div>
          </AnimatedElement>

          {/* --- Section "Devenir Partenaire" --- */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center text-left px-4 pb-8 sm:px-0 sm:pb-4">
            <div>
              <h2 className="font-unbounded text-2xl sm:text-3xl font-bold">
                {t('partners.become.title')}
              </h2>
              <p className="text-white/70 mt-4 max-w-md font-poppins text-sm sm:text-base">
                {t('partners.become.text')}
              </p>
            </div>
            <Link to="/socialhub#contact-form">
              <Button className="min-w-[140px]">{t('partners.become.button')}</Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default PartnersPage;
