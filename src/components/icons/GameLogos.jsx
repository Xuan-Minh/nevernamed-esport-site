import React from 'react';

// Importez vos fichiers SVG comme des composants React.
// Le `?react` à la fin est la syntaxe moderne de Vite pour cela.
import LolLogo from '../../assets/teams/logotype-lol.svg?react';
import ValorantLogo from '../../assets/teams/logotype-valo.svg?react';
import FortniteLogo from '../../assets/teams/logotype-fortnite.svg?react';
import Rainbow6Logo from '../../assets/teams/logotype-r6.svg?react';
import RocketLeagueLogo from '../../assets/teams/logotype-rocketleague.svg?react';

// Chaque composant exporté rend simplement le SVG importé,
// en lui passant la className pour le style.
export const LolLogoText = ({ className }) => (
  <LolLogo className={className} />
);

export const ValorantLogoText = ({ className }) => (
  <ValorantLogo className={className} />
);

export const FortniteLogoText = ({ className }) => (
  <FortniteLogo className={className} />
);      
export const rainbow6LogoText = ({ className }) => (
  <Rainbow6Logo className={className} />
);
export const rocketleagueLogoText = ({ className }) => (
  <RocketLeagueLogo className={className} />
);

