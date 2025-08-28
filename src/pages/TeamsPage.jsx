import React, { useState } from 'react';
import { teamsData } from '../data/teams';
import TeamSelector from '../components/TeamSelector';
import TeamDetailView from '../components/TeamDetailView';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

  
function TeamsPage() {
  const [selectedTeam, setSelectedTeam] = useState(null);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {selectedTeam ? (
        <TeamDetailView team={selectedTeam} onBack={() => setSelectedTeam(null)} />
      ) : (
        <TeamSelector teams={teamsData} onSelect={setSelectedTeam} />
      )}
    </motion.div>
  );
}

export default TeamsPage;