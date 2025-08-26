import lolImage from '../assets/teams/lol-bg.jpg';
import { LolLogoText } from '../components/GameLogos';
import valoImage from '../assets/teams/valorant-bg.jpg';
import { ValorantLogoText } from '../components/GameLogos';

export const teamsData = [
  {
    id: 'lol',
    name: 'LEAGUE OF LEGENDS',
    image: lolImage,
    LogoComponent: LolLogoText,
    fontClass: 'font-beaufort',
    roster: [
      { name: 'Finn', role: 'Head Coach', description: 'Lorem ipsum dolor sit amet...', socials: { twitter: 'é', twitch: '#' } },
      { name: 'Solenne', role: 'Player', description: 'Consectetur adipiscing elit...', socials: { twitter: '#', twitch: '#' } },
    ]
  },
  {
    id: 'valorant',
    name: 'VALORANT',
    image: valoImage,
    LogoComponent: ValorantLogoText,
    fontClass: 'font-beaufort',
    roster: [
      // Ajoute ici les joueurs/staff Valorant
      { name: 'Joueur 1', role: 'Captain', description: 'Description...', socials: { twitter: '#', twitch: '#' } },
      // ...
    ]
  },
];