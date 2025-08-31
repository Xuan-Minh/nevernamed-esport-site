import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedElement from '../common/AnimatedElement';

function TeamSelector({ teams, onSelect }) {
  const [hovered, setHovered] = useState(null);
  const [clicked, setClicked] = useState(null);

  const handleClick = (team) => {
    setClicked(team.id);
    setTimeout(() => {
      onSelect(team);
      setClicked(null);
    }, 350);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8">
      <AnimatedElement>
        <h2 className="text-3xl md:text-4xl font-bold tracking-wider font-unbounded mb-8 text-white text-center">
          SELECT YOUR GAME
        </h2>
      </AnimatedElement>
      <div className="flex justify-center items-center gap-8">
        {teams.map(team => (
          <motion.div
            key={team.id}
            className="w-72 h-72 overflow-hidden shadow-2xl cursor-pointer relative group"
            layoutId={`${team.id}-hero`}
            style={{ borderRadius: 39, overflow: 'hidden' }}
            onMouseEnter={() => setHovered(team.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => handleClick(team)}
          >
            <img src={team.image} alt={team.name} className="w-full h-full object-cover" loading="lazy" />
            <img src={team.image} alt={team.name} className="w-full h-full object-cover" loading="lazy" width="288" height="288" />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <AnimatePresence>
                {(!clicked) && (
                  <motion.div
                    key="logo"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hovered === team.id ? 1 : 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-center w-full h-full"
                  >
                    <team.LogoComponent className="w-56 h-56 text-white transition-all duration-300" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default TeamSelector;