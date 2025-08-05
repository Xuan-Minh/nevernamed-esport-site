import React, { useEffect, useRef } from 'react';

function HeroSection({ videoSrc, imageSrc, isLoading, children }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!isLoading && videoRef.current) {
      // On tente de forcer la lecture manuellement
      videoRef.current.play()
        .catch(error => {
          console.log("Tentative de lecture manuelle bloquée par le navigateur (comportement normal).", error);
        });
    }
  }, [isLoading, videoSrc]);

  return (
    // On retire la marge négative "-mt-24" qui n'est plus nécessaire
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        {videoSrc && (
          <video
            ref={videoRef}
            src={videoSrc}
            // On ajoute autoPlay pour donner une instruction claire au navigateur
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 text-center text-white px-4">
        {children}
      </div>
    </div>
  );
}

export default HeroSection;