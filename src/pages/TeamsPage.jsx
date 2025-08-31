import React, { useState } from 'react';
import { teamsData } from '../assets/teams/data/teams';
import TeamSelector from '../components/team/TeamSelector';
import TeamDetailView from '../components/team/TeamDetailView';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

function TeamsPage() {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [selectedTeamId, setSelectedTeamId] = useState(null);

  const handleSelectTeam = (team) => {
    setSelectedTeam(team);
    setSelectedTeamId(team.id);
  };

  const handleBack = () => {
    setSelectedTeam(null);
    // selectedTeamId reste inchangé pour garder le centrage
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {selectedTeam ? (
        <TeamDetailView team={selectedTeam} onBack={handleBack} />
      ) : (
        <TeamSelector
          teams={teamsData}
          onSelect={handleSelectTeam}
          selectedTeamId={selectedTeamId}
        />
      )}
    </motion.div>
  );
}

export default TeamsPage;
