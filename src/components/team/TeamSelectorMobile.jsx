import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedElement from '../common/AnimatedElement';

function TeamSelectorMobile({ teams, onSelect, selectedTeamId }) {
  const { t } = useTranslation();
  const [hovered, setHovered] = useState(null);
  const [clicked, setClicked] = useState(null);

  return (
    <div className="w-full min-h-screen pt-8 flex flex-col">
      {/* Titre sous la navbar */}
      <section className="relative min-h-[calc(65vh-6rem)] flex flex-col items-center justify-center">
        <div className="w-full text-center translate-y-6 sm:translate-y-10 md:translate-y-14">
          <h1 className="font-unbounded text-4xl sm:text-5xl font-bold mb-8"> SELECT YOUR GAME</h1>
        </div>
      </section>
      {/* Liste verticale scrollable */}
      <div className="w-full flex flex-col gap-6 px-4 pb-8">
        {teams.map((team) => (
          <motion.div
            key={team.id}
            className={`mx-auto flex items-center justify-center overflow-hidden shadow-2xl cursor-pointer relative group transition-all duration-300 w-64 h-64 rounded-3xl bg-gradient-to-br from-[#1a2a4d] to-[#0a1833] ${selectedTeamId === team.id ? 'ring-4 ring-white' : ''}`}
            layoutId={`${team.id}-hero`}
            onClick={() => {
              if (window && 'scrollY' in window) {
                sessionStorage.setItem('teamScrollY', window.scrollY);
              }
              onSelect(team);
            }}
            onMouseEnter={() => setHovered(team.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={team.image}
              alt={team.name}
              className="w-full h-full object-cover rounded-3xl"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <AnimatePresence>
                {!clicked && (
                  <motion.div
                    key="logo"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hovered === team.id ? 1 : 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-center w-full h-full"
                  >
                    <team.LogoComponent className="w-32 h-32 text-white transition-all duration-300" />
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

export default TeamSelectorMobile;
