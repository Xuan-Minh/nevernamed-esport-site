import React, { useEffect, useRef } from 'react';

function HeroSection({ videoSrc, imageSrc, isLoading, children }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (!videoElement || isLoading) {
      return;
    }

    const attemptPlay = () => {
      videoElement.play().catch((error) => {
        console.error(
          'Erreur de lecture automatique, le navigateur a bloqué la tentative :',
          error,
        );
        document.body.addEventListener('click', attemptPlay, { once: true });
      });
    };

    if (videoElement.readyState >= 3) {
      attemptPlay();
    } else {
      videoElement.addEventListener('canplay', attemptPlay, { once: true });
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('canplay', attemptPlay);
        document.body.removeEventListener('click', attemptPlay);
      }
    };
  }, [isLoading, videoSrc]);

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]">
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
          <img src={imageSrc} alt="Hero background" className="w-full h-full object-cover" />
        )}
      </div>

      <div className="absolute inset-0 bg-black/40 -z-10"></div>

      <div className="relative z-10 text-center text-white px-4">{children}</div>
    </div>
  );
}

export default HeroSection;
