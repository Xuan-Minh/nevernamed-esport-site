import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function MemberVisual({ member, displayed }) {
  return (
    <div className="flex-1 flex flex-col items-center justify-center relative h-full">
      <AnimatePresence mode="wait" custom={displayed.direction}>
        <motion.div
          key={member.name + '-images-' + displayed.direction}
          custom={displayed.direction}
          initial={{ opacity: 0, x: displayed.direction > 0 ? -120 : 120, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: displayed.direction > 0 ? 120 : -120, scale: 0.95 }}
          transition={{ duration: 0.45, ease: [0.4, 0.2, 0.2, 1] }}
          className="w-full h-full flex flex-col items-center justify-center relative"
          style={{ position: "absolute", inset: 0 }}
        >
          {/* Image du personnage phare en transparence */}
          {member.championImage && (
            <img
              src={member.championImage}
              alt="Champion"
              className="absolute inset-0 w-full h-full object-contain opacity-10 pointer-events-none select-none"
              style={{ zIndex: 0 }}
              aria-hidden
            />
          )}
          {/* Maillot */}
          {member.jersey && (
            <img
              src={member.jersey}
              alt="Maillot"
              className="relative z-10 w-68 md:w-80 object-contain"
              style={{ filter: 'drop-shadow(0 4px 32px #0008)' }}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default MemberVisual;