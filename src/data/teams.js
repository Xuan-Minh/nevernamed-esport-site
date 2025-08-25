import lolImage from '../assets/teams/lol-bg.jpg';
import { LolLogoText } from '../components/GameLogos';

export const teamsData = [
  {
    id: 'lol',
    name: 'LEAGUE OF LEGENDS',
    image: lolImage,
    LogoComponent: LolLogoText,
    fontClass: 'font-beaufort',
    roster: [
      { name: 'Finn', role: 'Head Coach', description: 'Lorem ipsum dolor sit amet...', socials: { twitter: '#', twitch: '#' } },
      { name: 'Solenne', role: 'Player', description: 'Consectetur adipiscing elit...', socials: { twitter: '#', twitch: '#' } },
    ]
  },
  // ...autres équipes
];