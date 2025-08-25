import { motion } from 'framer-motion';

function TeamSelector({ teams, onSelect }) {
  return (
    <div className="flex justify-center items-center h-screen gap-8">
      {teams.map(team => (
        <motion.div
                key={team.id}
                className="w-72 h-72 rounded-3xl overflow-hidden shadow-2xl cursor-pointer relative"
                layoutId={team.id === 'lol' ? 'lol-hero' : undefined}
                style={{ borderRadius: 39, overflow: 'hidden' }}
                onClick={() => onSelect(team)}
                >
                <img src={team.image} alt={team.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <team.LogoComponent className="w-56 h-56 text-white" /> {/* <-- Taille augmentée */}
                </div>
                </motion.div>
      ))}
    </div>
  );
}

export default TeamSelector;