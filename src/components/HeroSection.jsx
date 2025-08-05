import React, { useEffect, useRef } from 'react';

function HeroSection({ videoSrc, imageSrc, isLoading, children }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    // Si le composant n'est pas prêt ou si on charge encore, on ne fait rien.
    if (!videoElement || isLoading) {
      return;
    }

    // Fonction qui tente de lancer la lecture
    const attemptPlay = () => {
      videoElement.play().catch(error => {
        console.error("Erreur de lecture automatique, le navigateur a bloqué la tentative :", error);
        // En dernier recours, on peut ajouter un listener pour lancer la vidéo
        // à la toute première interaction de l'utilisateur avec la page.
        document.body.addEventListener('click', attemptPlay, { once: true });
      });
    };

    // On vérifie si la vidéo est déjà prête à être jouée.
    // readyState >= 3 signifie qu'il y a assez de données pour jouer.
    if (videoElement.readyState >= 3) {
      attemptPlay();
    } else {
      // Sinon, on attend que le navigateur nous dise qu'il est prêt.
      videoElement.addEventListener('canplay', attemptPlay, { once: true });
    }

    // Fonction de nettoyage pour éviter les fuites de mémoire
    return () => {
      if (videoElement) {
        videoElement.removeEventListener('canplay', attemptPlay);
        document.body.removeEventListener('click', attemptPlay);
      }
    };
  }, [isLoading, videoSrc]); // L'effet dépend du chargement et de la source vidéo

return (
    // 1. La classe "overflow-hidden" a été retirée ici pour permettre au dégradé de déborder.
    <div className="relative h-screen w-full flex items-center justify-center">

      {/* Conteneur pour la vidéo ou l'image */}
      <div className="absolute top-0 left-0 w-full h-full">
        {videoSrc && (
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        )}
        {imageSrc && !videoSrc && (
          <img
            src={imageSrc}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Superposition sombre pour la lisibilité du texte */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* LE DÉGRADÉ AJOUTÉ ICI */}
      <div 
        className="absolute -bottom-1 left-0 w-full h-2/5 bg-gradient-to-t from-[#000719] to-transparent"
        aria-hidden="true"
      />

      {/* Contenu textuel par-dessus tout */}
      <div className="relative z-10 text-center text-white px-4">
        {children}
      </div>
    </div>
  );
}

export default HeroSection;