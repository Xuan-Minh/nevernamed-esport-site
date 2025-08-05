import React, { useRef } from 'react';
import postImage from '../assets/test.jpg'; // Assurez-vous que le chemin est correct

// Icônes pour la navigation et les réseaux sociaux
const ChevronLeftIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
);
const ChevronRightIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
);
const InstagramIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 8.118c-2.136 0-3.863 1.727-3.863 3.863s1.727 3.863 3.863 3.863 3.863-1.727 3.863-3.863S14.136 8.118 12 8.118zM12 14.172c-1.186 0-2.156-.97-2.156-2.156s.97-2.156 2.156-2.156 2.156.97 2.156 2.156-.97 2.156-2.156 2.156zm4.803-6.402c-.783 0-1.418-.635-1.418-1.418s.635-1.418 1.418-1.418 1.418.635 1.418 1.418-.635 1.418-1.418 1.418z" clipRule="evenodd"></path></svg>;
const TwitterIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>;
const YoutubeIcon = () => <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19.802 5.802a2.5 2.5 0 00-1.768-1.768C16.538 3.5 12 3.5 12 3.5s-4.538 0-6.034.534a2.5 2.5 0 00-1.768 1.768C3.5 7.298 3.5 12 3.5 12s0 4.702.7 6.198a2.5 2.5 0 001.768 1.768C7.462 20.5 12 20.5 12 20.5s4.538 0 6.034-.534a2.5 2.5 0 001.768-1.768C20.5 16.702 20.5 12 20.5 12s0-4.702-.698-6.198zM9.898 15.5v-7l6.102 3.5-6.102 3.5z" clipRule="evenodd"></path></svg>;

function LatestPost() {
  const scrollContainerRef = useRef(null);

  // Données de test pour les posts
  const posts = Array(8).fill({ image: postImage });

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8; // Défile de 80% de la largeur visible
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Titre de la section */}
      <h2 className="text-3xl font-bold mb-8 font-unbounded text-left">
        DERNIERS POSTS
      </h2>

      {/* Carrousel des posts */}
      <div className="relative">
        {/* Conteneur de défilement */}
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

        {/* Dégradé à droite pour un effet de fondu */}
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-brand-dark to-transparent pointer-events-none"></div>

        {/* Boutons de navigation */}
        <button
          onClick={() => scroll('left')}
          className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-brand-accent text-white p-2 rounded-full shadow-lg z-10 hover:scale-110 transition-transform"
          aria-label="Post précédent"
        >
          <ChevronLeftIcon />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-brand-accent text-white p-2 rounded-full shadow-lg z-10 hover:scale-110 transition-transform"
          aria-label="Post suivant"
        >
          <ChevronRightIcon />
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