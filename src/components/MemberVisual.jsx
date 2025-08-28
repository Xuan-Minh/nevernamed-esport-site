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
          {member.jersey && (
            <motion.img
              src={member.jersey}
              alt="Maillot"
              className="relative z-10 w-68 md:w-80 object-contain"
              style={{ filter: 'drop-shadow(0 4px 32px #0008)' }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.5, ease: [0.4, 0.2, 0.2, 1] }}
            />
          )}
          {member.championImage && (
            <motion.img
              src={member.championImage}
              alt="Champion"
              className="absolute inset-0 w-full h-full object-contain opacity-40 pointer-events-none select-none translate-y-[-20%] translate-x-[30%]"
              style={{ zIndex: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.4, 0.2, 0.2, 1] }}
              aria-hidden
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default MemberVisual;