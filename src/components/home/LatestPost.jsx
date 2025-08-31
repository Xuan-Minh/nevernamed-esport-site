import React, { useRef } from 'react';
import postImage from '../../assets/test.webp';
import arrowIcon from '../../assets/arrow.svg';
import { useTranslation } from 'react-i18next';

import { FaInstagram, FaTwitch } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function LatestPost() {
  const { t } = useTranslation();
  const scrollContainerRef = useRef(null);
  const posts = Array(8).fill({ image: postImage });
  const isMobile = window.innerWidth < 640;
  const visiblePosts = isMobile ? posts.slice(0, 2) : posts;

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="container mx-auto px-4 md:AZpy-8 sm:py-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 font-unbounded text-center sm:text-left">
        {t('latestPost.title')}
      </h2>
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-6 overflow-x-auto pb-4 scrollbar-hide px-4"
        >
          {visiblePosts.map((post, index) => (
            <div key={index} className="flex-shrink-0 w-4/5 sm:w-1/3 md:w-1/4">
              <img
                src={post.image}
                alt={`Post ${index + 1}`}
                className="w-full h-56 sm:h-40 md:h-56 object-cover rounded-2xl"
                loading="lazy"
                width="320"
                height="224"
              />
            </div>
          ))}
        </div>
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-brand-dark to-transparent pointer-events-none"></div>
        {/* Flèches masquées sur mobile */}
        <button
          onClick={() => scroll('left')}
          className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 text-white p-3 rounded-full shadow-lg z-10 hover:scale-110 transition-transform hidden sm:block"
          aria-label="Post précédent"
        >
          <img
            src={arrowIcon}
            alt="Précédent"
            className="h-10 w-10 rotate-180"
            loading="lazy"
            width="40"
            height="40"
          />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 text-white p-3 rounded-full shadow-lg z-10 hover:scale-110 transition-transform hidden sm:block"
          aria-label="Post suivant"
        >
          <img
            src={arrowIcon}
            alt="Suivant"
            className="h-10 w-10"
            loading="lazy"
            width="40"
            height="40"
          />
        </button>
      </div>

      {/* Section "Suivez-nous" */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-x-6 gap-y-4 mt-12 text-white">
        <h3 className="text-2xl font-bold font-unbounded">{t('latestPost.followUs')}</h3>
        <p className="text-lg font-bold text-white/70">{t('latestPost.handle')}</p>
        {/* Conteneur pour les icônes */}
        <div className="flex items-center gap-4">
          <a
            href="https://x.com/thenevernamed"
            className="flex-shrink-0 hover:text-white/70 transition-colors"
            aria-label="Twitter"
          >
            <FaXTwitter className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="flex-shrink-0 hover:text-white/70 transition-colors"
            aria-label="Twitch"
          >
            <FaTwitch className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="flex-shrink-0 hover:text-white/70 transition-colors"
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default LatestPost;
