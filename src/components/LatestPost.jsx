import React, { useRef } from 'react';
import postImage from '../assets/test.jpg';
// Importez votre fichier SVG
import arrowIcon from '../assets/arrow.svg';

// --- Les icônes SVG en ligne sont maintenant supprimées (sauf pour les réseaux sociaux) ---
const InstagramIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">...</svg>;
const TwitterIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">...</svg>;
const YoutubeIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">...</svg>;

function LatestPost() {
  const scrollContainerRef = useRef(null);
  const posts = Array(8).fill({ image: postImage });

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
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 font-unbounded text-left">
        DERNIERS POSTS
      </h2>
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-6 overflow-x-auto pb-4 scrollbar-hide"
        >
          {posts.map((post, index) => (
            <div key={index} className="flex-shrink-0 w-1/3 md:w-1/4">
              <img src={post.image} alt={`Post ${index + 1}`} className="w-full h-auto object-cover rounded-2xl" />
            </div>
          ))}
        </div>
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-brand-dark to-transparent pointer-events-none"></div>
        
        {/* Boutons de navigation mis à jour */}
        <button
          onClick={() => scroll('left')}
          className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 text-white p-3 rounded-full shadow-lg z-10 hover:scale-110 transition-transform"
          aria-label="Post précédent"
        >
          <img src={arrowIcon} alt="Précédent" className="h-10 w-10 rotate-180" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 text-white p-3 rounded-full shadow-lg z-10 hover:scale-110 transition-transform"
          aria-label="Post suivant"
        >
          <img src={arrowIcon} alt="Suivant" className="h-10 w-10" />
        </button>
      </div>

      {/* Section "Suivez-nous" */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mt-12">
        <h3 className="text-2xl font-bold font-unbounded">SUIVEZ NOUS</h3>
        <div className="flex items-center gap-6">
          <p className="text-lg font-bold text-white/70">@thenevernamed</p>
          <div className="flex items-center gap-4 text-white">
            <a href="#" className="hover:text-white/70 transition-colors"><InstagramIcon /></a>
            <a href="#" className="hover:text-white/70 transition-colors"><TwitterIcon /></a>
            <a href="#" className="hover:text-white/70 transition-colors"><YoutubeIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestPost;