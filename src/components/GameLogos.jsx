// filepath: c:\MAMP\htdocs\nevernamed-esport-site\src\components\GameLogos.jsx
import React from 'react';

// REMPLACEZ CES SVG par les vôtres. Ce sont des exemples.
// Assurez-vous que le SVG a une viewBox et que vous pouvez contrôler sa couleur avec `fill="currentColor"`.
export const LolLogoText = ({ className }) => (
  <svg className={className} viewBox="0 0 200 50" fill="currentColor">
    <text x="0" y="40" fontFamily="Arial, sans-serif" fontSize="40" fontWeight="bold">LEAGUE <tspan fill="#5383E8">of</tspan> LEGENDS</text>
  </svg>
);

export const ValorantLogoText = ({ className }) => (
  <svg className={className} viewBox="0 0 200 50" fill="currentColor">
     <text x="0" y="40" fontFamily="Arial, sans-serif" fontSize="45" fontWeight="bold">VALORANT</text>
  </svg>
);

export const R6LogoText = ({ className }) => (
    <svg className={className} viewBox="0 0 200 50" fill="currentColor">
        <text x="0" y="40" fontFamily="Arial, sans-serif" fontSize="40" fontWeight="bold">RAINBOW SIX</text>
    </svg>
);