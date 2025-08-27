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
        description: {
          fr: "Finn est le coach stratégique de l’équipe. Il analyse chaque partie et motive ses joueuses à donner le meilleur d’elles-mêmes. Toujours à l’écoute, il sait transformer la pression en énergie positive.",
          en: "Finn is the team’s strategic coach. He analyzes every game and motivates his players to give their best. Always attentive, he knows how to turn pressure into positive energy.",
        },
        socials: { twitter: 'https://x.com/finn_finnyboy', twitch: '#' },
        jersey: finnJersey,
        championImage: finnChampion,
      },
      {
        name: 'Kanna',
        role: 'Top',
        description: {
          fr: "Solenne est le pilier défensif de l’équipe. Sa vision de jeu et sa réactivité font d’elle une alliée précieuse dans les moments décisifs. Elle inspire confiance et calme sur la Faille.",
          en: "Solenne is the team’s defensive pillar. Her game sense and reactivity make her a valuable ally in clutch moments. She inspires confidence and calm on the Rift.",
        },
        socials: { twitter: 'https://x.com/kanna_lol9', twitch: '#' },
        jersey: solenneJersey,
        championImage: solenneChampion,
      },
      {
        name: 'Lotus',
        role: 'Mid',
        description: {
          fr: "Solenne est le pilier défensif de l’équipe. Sa vision de jeu et sa réactivité font d’elle une alliée précieuse dans les moments décisifs. Elle inspire confiance et calme sur la Faille.",
          en: "Solenne is the team’s defensive pillar. Her game sense and reactivity make her a valuable ally in clutch moments. She inspires confidence and calm on the Rift.",
        },
        socials: { twitter: 'https://x.com/LotusVerdoyant', twitch: '#' },
        jersey: solenneJersey,
        championImage: solenneChampion,
      },
      {
        name: 'Drazonia',
        role: 'Jungle',
        description: {
          fr: "Solenne est le pilier défensif de l’équipe. Sa vision de jeu et sa réactivité font d’elle une alliée précieuse dans les moments décisifs. Elle inspire confiance et calme sur la Faille.",
          en: "Solenne is the team’s defensive pillar. Her game sense and reactivity make her a valuable ally in clutch moments. She inspires confidence and calm on the Rift.",
        },
        socials: { twitter: 'https://x.com/Drazoniaa', twitch: 'https://twitch.tv/drazonia' },
        jersey: solenneJersey,
        championImage: solenneChampion,
      },
      {
        name: 'Ryo',
        role: 'Adc',
        description: {
          fr: "Solenne est le pilier défensif de l’équipe. Sa vision de jeu et sa réactivité font d’elle une alliée précieuse dans les moments décisifs. Elle inspire confiance et calme sur la Faille.",
          en: "Solenne is the team’s defensive pillar. Her game sense and reactivity make her a valuable ally in clutch moments. She inspires confidence and calm on the Rift.",
        },
        socials: { twitter: 'https://x.com/RyoMaiKo', twitch: '#' },
        jersey: solenneJersey,
        championImage: solenneChampion,
      },
      {
        name: 'Shinobu',
        role: 'Support',
        description: {
          fr: "Solenne est le pilier défensif de l’équipe. Sa vision de jeu et sa réactivité font d’elle une alliée précieuse dans les moments décisifs. Elle inspire confiance et calme sur la Faille.",
          en: "Solenne is the team’s defensive pillar. Her game sense and reactivity make her a valuable ally in clutch moments. She inspires confidence and calm on the Rift.",
        },
        socials: { twitter: 'https://x.com/shinobulol_', twitch: '#' },
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
      }
      // ...
    ]
  },
];