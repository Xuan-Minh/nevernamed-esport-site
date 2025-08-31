import lolImage from '../lol-bg.jpg';
import { LolLogoText } from '../../../components/icons/GameLogos';
import valoImage from '../valorant-bg.jpg';
import { ValorantLogoText } from '../../../components/icons/GameLogos';
import fortniteImage from '../fortnite-bg.jpg';
import { FortniteLogoText } from '../../../components/icons/GameLogos';
import rainbow6Image from '../rainbow6-bg.jpg';
import { rainbow6LogoText } from '../../../components/icons/GameLogos';
import rocketleagueImage from '../rocketleague-bg.jpg';
import { rocketleagueLogoText } from '../../../components/icons/GameLogos';

// Exemple d'import d'assets pour les maillots et champions
import coachJersey from '../jersey.png';
import coachChampion from '../lol/champion-coach.png';
import topJersey from '../jersey.png';
import topChampion from '../lol/champion-top.png';
import midJersey from '../jersey.png';
import midChampion from '../lol/champion-mid.png';
import jungleJersey from '../jersey.png';
import jungleChampion from '../lol/champion-jungle.png';
import adcJersey from '../jersey.png';
import adcChampion from '../lol/champion-adc.png';
import suppJersey from '../jersey.png';
import suppChampion from '../lol/champion-supp.png';
// Ajoute les imports nécessaires pour Valorant si besoin
// ===> lien pour les PNG de perso lol https://purepng.com/tags/league%20of%20legends
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
        role: 'Coach',
        description: {
          fr: "Finn est le coach stratégique de l’équipe. Il analyse chaque partie et motive ses joueuses à donner le meilleur d’elles-mêmes. Toujours à l’écoute, il sait transformer la pression en énergie positive.",
          en: "Finn is the team’s strategic coach. He analyzes every game and motivates his players to give their best. Always attentive, he knows how to turn pressure into positive energy.",
        },
        socials: { twitter: 'https://x.com/finn_finnyboy', twitch: '#' },
        jersey: coachJersey,
        championImage: coachChampion,
      },
      {
        name: 'Kanna',
        role: 'Top',
        description: {
          fr: "Solenne est le pilier défensif de l’équipe. Sa vision de jeu et sa réactivité font d’elle une alliée précieuse dans les moments décisifs. Elle inspire confiance et calme sur la Faille.",
          en: "Solenne is the team’s defensive pillar. Her game sense and reactivity make her a valuable ally in clutch moments. She inspires confidence and calm on the Rift.",
        },
        socials: { twitter: 'https://x.com/kanna_lol9', twitch: '#' },
        jersey: topJersey,
        championImage: topChampion,
      },
      {
        name: 'Lotus',
        role: 'Mid',
        description: {
          fr: "Solenne est le pilier défensif de l’équipe. Sa vision de jeu et sa réactivité font d’elle une alliée précieuse dans les moments décisifs. Elle inspire confiance et calme sur la Faille.",
          en: "Solenne is the team’s defensive pillar. Her game sense and reactivity make her a valuable ally in clutch moments. She inspires confidence and calm on the Rift.",
        },
        socials: { twitter: 'https://x.com/LotusVerdoyant', twitch: '#' },
        jersey: midJersey,
        championImage: midChampion,
      },
      {
        name: 'Drazonia',
        role: 'Jungle',
        description: {
          fr: "Solenne est le pilier défensif de l’équipe. Sa vision de jeu et sa réactivité font d’elle une alliée précieuse dans les moments décisifs. Elle inspire confiance et calme sur la Faille.",
          en: "Solenne is the team’s defensive pillar. Her game sense and reactivity make her a valuable ally in clutch moments. She inspires confidence and calm on the Rift.",
        },
        socials: { twitter: 'https://x.com/Drazoniaa', twitch: 'https://twitch.tv/drazonia' },
        jersey: jungleJersey,
        championImage: jungleChampion,
      },
      {
        name: 'Ryo',
        role: 'ADC',
        description: {
          fr: "Solenne est le pilier défensif de l’équipe. Sa vision de jeu et sa réactivité font d’elle une alliée précieuse dans les moments décisifs. Elle inspire confiance et calme sur la Faille.",
          en: "Solenne is the team’s defensive pillar. Her game sense and reactivity make her a valuable ally in clutch moments. She inspires confidence and calm on the Rift.",
        },
        socials: { twitter: 'https://x.com/RyoMaiKo', twitch: '#' },
        jersey: adcJersey,
        championImage: adcChampion,
      },
      {
        name: 'Shinobu',
        role: 'Support',
        description: {
          fr: "Solenne est le pilier défensif de l’équipe. Sa vision de jeu et sa réactivité font d’elle une alliée précieuse dans les moments décisifs. Elle inspire confiance et calme sur la Faille.",
          en: "Solenne is the team’s defensive pillar. Her game sense and reactivity make her a valuable ally in clutch moments. She inspires confidence and calm on the Rift.",
        },
        socials: { twitter: 'https://x.com/shinobulol_', twitch: '#' },
        jersey: suppJersey,
        championImage: suppChampion,
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
      }
      // ...
    ]
  },
  {
    id: 'fortnite',
    name: 'FORTNITE',
    image: fortniteImage,
    LogoComponent: FortniteLogoText,
    fontClass: 'font-beaufort',
    roster: [
      {
        name: 'Joueur 1',
        role: 'Captain',
        description: 'Description...',
        socials: { twitter: '#', twitch: '#' },
        jersey: null, // À remplacer par l'import du maillot si tu l'as
        championImage: null, // À remplacer par l'import du personnage si tu l'as
      }
      // ...
    ]
  },
  {
    id: 'rainbow6',
    name: 'RAINBOW SIX SIEGE',
    image: rainbow6Image,
    LogoComponent: rainbow6LogoText,
    fontClass: 'font-beaufort',
    roster: [
      {
        name: 'Joueur 1',
        role: 'Captain',
        description: 'Description...',
        socials: { twitter: '#', twitch: '#' },
        jersey: null, // À remplacer par l'import du maillot si tu l'as
        championImage: null, // À remplacer par l'import du personnage si tu l'as
      }
      // ...
    ]
  },
  {
    id: ' rocketleague',
    name: 'Rocket League',
    image: rocketleagueImage,
    LogoComponent: rocketleagueLogoText,
    fontClass: 'font-beaufort',
    roster: [
      {
        name: 'Joueur 1',
        role: 'Captain',
        description: 'Description...',
        socials: { twitter: '#', twitch: '#' },
        jersey: null, // À remplacer par l'import du maillot si tu l'as
        championImage: null, // À remplacer par l'import du personnage si tu l'as
      }
      // ...
    ]
  },
  // {
  //   id: "affiliates",
  //   name: "AMBASSADEURS / SPORTIFS / CREATORS",
  //   image: null,
  //   LogoComponent: undefined, // ou une icône générique si tu veux
  //   fontClass: 'font-beaufort',
  //   roster: [
  //     {
  //       name: 'Joueur 1',
  //       role: 'Ambassadeur',
  //       description: 'Description...',
  //       socials: { twitter: '#', twitch: '#' },
  //       jersey: null, // À remplacer par l'import du maillot si tu l'as
  //       championImage: null // À remplacer par l'import du personnage si tu l'as
  //     }
  //   ]
  // }
];