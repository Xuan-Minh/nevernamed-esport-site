import React from 'react';
import Marquee from 'react-fast-marquee';
import { sponsors } from './sponsors';

// Import dynamique des logos SVG (corrigé pour le bon chemin)
const sponsorLogoModules = import.meta.glob('../../assets/sponsors/*.svg', { eager: true });
// Créer un objet { 'sponso-A': '/path/to/logo.svg', ... }
const logoMap = Object.entries(sponsorLogoModules).reduce((acc, [path, module]) => {
  const id = path.split('/').pop().replace('.svg', '');
  acc[id] = module.default;
  return acc;
}, {});

function SponsorsBanner() {
  const sponsorsWithLogo = sponsors.map((s) => ({ ...s, logo: logoMap[s.id] || null }));
  const totalSponsors = sponsorsWithLogo.filter((s) => s.logo).length;

  // Si le nombre de sponsors est faible, on ne fait pas défiler.
  if (totalSponsors <= 5) {
    return (
      <div className="sponsors-banner py-8">
        <div className="container mx-auto">
          <div className="flex justify-center items-center gap-x-12 md:gap-x-16 flex-wrap">
            {sponsorsWithLogo
              .filter((s) => s.logo)
              .map((s) => (
                <img
                  loading="lazy"
                  key={s.id}
                  src={s.logo}
                  alt={`Logo ${s.name}`}
                  width="64"
                  height="64"
                  className="h-12 md:h-16 object-contain"
                />
              ))}
          </div>
        </div>
      </div>
    );
  }

  // Si on a assez de sponsors, on affiche le carrousel défilant avec react-fast-marquee.
  return (
    <div className="sponsors-banner py-8 overflow-hidden relative w-full">
      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover={true}
        autoFill={true}
        className="flex items-center"
      >
        {sponsorsWithLogo
          .filter((s) => s.logo)
          .map((s, index) => (
            <div key={s.id} className="flex-shrink-0 mx-8 md:mx-12">
              <img
                loading="lazy"
                src={s.logo}
                alt={`Logo ${s.name}`}
                width="64"
                height="64"
                className="h-12 md:h-16 object-contain"
              />
            </div>
          ))}
      </Marquee>
    </div>
  );
}

export default SponsorsBanner;
