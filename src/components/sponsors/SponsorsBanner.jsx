import React from 'react';

const sponsorModules = import.meta.glob('../assets/sponsors/*.svg', { eager: true });
const sponsorLogos = Object.values(sponsorModules).map((module) => module.default);

function SponsorsBanner() {
  const totalSponsors = sponsorLogos.length;

  // Si le nombre de sponsors est faible, on ne fait pas défiler.
  if (totalSponsors <= 5) {
    return (
      <div className="sponsors-banner py-8">
        <div className="container mx-auto">
          <div className="flex justify-center items-center gap-x-12 md:gap-x-16 flex-wrap">
            {sponsorLogos.map((logoUrl) => {
              const fileName = logoUrl.split('/').pop().replace('.svg', '');
              return (
                <img loading="lazy"
                  key={fileName}
                  src={logoUrl} 
                  alt={`Logo ${fileName}`}
                  className="h-12 md:h-16 object-contain"
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Si on a assez de sponsors, on affiche le carrousel défilant.
  return (
    <div className="sponsors-banner py-8 overflow-hidden relative w-full">
      {/* Le conteneur qui va défiler */}
      <div className="flex animate-marquee whitespace-nowrap">
        {/* On affiche la liste des logos une première fois */}
        {sponsorLogos.map((logoUrl, index) => {
          const fileName = logoUrl.split('/').pop().replace('.svg', '');
          return (
            <div key={`logo-${index}`} className="flex-shrink-0 mx-8 md:mx-12">
              <img loading="lazy"
                src={logoUrl} 
                alt={`Logo ${fileName}`}
                className="h-12 md:h-16 object-contain"
              />
            </div>
          );
        })}
        {/* On affiche la liste une DEUXIÈME fois pour un défilement infini parfait */}
        {sponsorLogos.map((logoUrl, index) => {
          const fileName = logoUrl.split('/').pop().replace('.svg', '');
          return (
            <div key={`logo-dup-${index}`} className="flex-shrink-0 mx-8 md:mx-12" aria-hidden="true">
              <img loading="lazy"
                src={logoUrl} 
                alt={`Logo ${fileName}`}
                className="h-12 md:h-16 object-contain"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SponsorsBanner;