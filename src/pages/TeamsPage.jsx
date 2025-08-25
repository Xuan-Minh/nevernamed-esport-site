import React, { useState } from 'react';
import GameSelectionCarousel from '../components/GameSelectionCarousel';
import TeamDetailView from '../components/TeamDetailView';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

// Vous pouvez centraliser vos données ici ou les importer
const teamsData = [
    { 
      id: 'lol', 
      name: 'LEAGUE OF LEGENDS', 
      image: '/src/assets/teams/lol-bg.jpg', 
      LogoComponent: 'LolLogoText', // Simplifié pour l'exemple
      fontClass: 'font-beaufort',
      roster: [
        { name: 'Finn', role: 'Head Coach', description: 'Lorem ipsum dolor sit amet...', socials: { twitter: '#', twitch: '#' } },
        { name: 'Solenne', role: 'Player', description: 'Consectetur adipiscing elit...', socials: { twitter: '#', twitch: '#' } },
      ]
    },
    // ... autres équipes
];

function TeamsPage() {
  const [selectedTeam, setSelectedTeam] = useState(null);

  // Fonction pour gérer la sélection d'une équipe depuis le carrousel
  const handleTeamSelect = (team) => {
    // On recherche les données complètes de l'équipe pour les passer à la vue détaillée
    const fullTeamData = teamsData.find(t => t.id === team.id);
    setSelectedTeam(fullTeamData);
  };

  // Fonction pour revenir à la sélection
  const handleBackToSelection = () => {
    setSelectedTeam(null);
  };

  return (
    <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.4 }}
>
    <main className="">
      <Helmet>
        <title>NeverNamed Esport - Nos équipes</title>
        <meta name="description" content="Découvrez les équipes NeverNamed Esport, leurs joueurs et leurs performances." />
      </Helmet>
      {selectedTeam ? (
        <TeamDetailView team={selectedTeam} onBack={handleBackToSelection} />
      ) : (
        <GameSelectionCarousel onTeamSelect={handleTeamSelect} />
      )}
    </main>
    </motion.div>
  );
}

export default TeamsPage;