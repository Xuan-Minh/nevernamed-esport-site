import React from 'react';
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
  const sponsorsWithLogo = sponsors.map(s => ({ ...s, logo: logoMap[s.id] || null }));
  const totalSponsors = sponsorsWithLogo.filter(s => s.logo).length;

  // Si le nombre de sponsors est faible, on ne fait pas défiler.
  if (totalSponsors <= 5) {
    return (
      <div className="sponsors-banner py-8">
        <div className="container mx-auto">
          <div className="flex justify-center items-center gap-x-12 md:gap-x-16 flex-wrap">
            {sponsorsWithLogo.filter(s => s.logo).map(s => (
              <img loading="lazy"
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

  // Si on a assez de sponsors, on affiche le carrousel défilant.
  return (
    <div className="sponsors-banner py-8 overflow-hidden relative w-full">
      {/* Le conteneur qui va défiler */}
      <div className="flex animate-marquee whitespace-nowrap">
        {/* On affiche la liste des logos une première fois */}
        {sponsorsWithLogo.filter(s => s.logo).map((s, index) => (
          <div key={`logo-${index}`} className="flex-shrink-0 mx-8 md:mx-12">
            <img loading="lazy"
              src={s.logo}
              alt={`Logo ${s.name}`}
              width="64"
              height="64"
              className="h-12 md:h-16 object-contain"
            />
          </div>
        ))}
        {/* On affiche la liste une DEUXIÈME fois pour un défilement infini parfait */}
        {sponsorsWithLogo.filter(s => s.logo).map((s, index) => (
          <div key={`logo-dup-${index}`} className="flex-shrink-0 mx-8 md:mx-12" aria-hidden="true">
            <img loading="lazy"
              src={s.logo}
              alt={`Logo ${s.name}`}
              width="64"
              height="64"
              className="h-12 md:h-16 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SponsorsBanner;