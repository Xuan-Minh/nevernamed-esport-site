import lolImage from '../assets/teams/lol-bg.jpg';
import { LolLogoText } from '../components/GameLogos';
import valoImage from '../assets/teams/valorant-bg.jpg';
import { ValorantLogoText } from '../components/GameLogos';

// Exemple d'import d'assets pour les maillots et champions
import finnJersey from '../assets/teams/jersey.png';
import finnChampion from '../assets/teams/champion-finn.png';
import solenneJersey from '../assets/teams/jersey.png';
import solenneChampion from '../assets/teams/champion-solenne.png';
// Ajoute les imports nécessaires pour Valorant si besoin

export const teamsData = [
  {
    id: 'lol',
    name: 'LEAGUE OF LEGENDS',
    image: lolImage,
    LogoComponent: LolLogoText,
    fontClass: 'font-beaufort',
    roster: [
      {
        name: 'Finn',
        role: 'Head Coach',
        description: 'Lorem ipsum dolor sit amet...',
        socials: { twitter: 'é', twitch: '#' },
        jersey: finnJersey,
        championImage: finnChampion,
      },
      {
        name: 'Solenne',
        role: 'Player',
        description: 'Consectetur adipiscing elit...',
        socials: { twitter: '#', twitch: '#' },
        jersey: solenneJersey,
        championImage: solenneChampion,
      },
    ]
  },
  {
    id: 'valorant',
    name: 'VALORANT',
    image: valoImage,
    LogoComponent: ValorantLogoText,
    fontClass: 'font-beaufort',
    roster: [
      {
        name: 'Joueur 1',
        role: 'Captain',
        description: 'Description...',
        socials: { twitter: '#', twitch: '#' },
        jersey: null, // À remplacer par l'import du maillot si tu l'as
        championImage: null, // À remplacer par l'import du personnage si tu l'as
      },
      // ...
    ]
  },
];