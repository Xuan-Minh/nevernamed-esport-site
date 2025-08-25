import React, { useState } from 'react';
import { motion } from 'framer-motion';

function splitTitle(name) {
  const words = name.trim().split(' ');
  if (words.length >= 3) {
    return {
      back: words.slice(0, words.length - 1).join(' '),
      front: words[words.length - 1],
    };
  }
  return { back: '', front: name };
}

function TeamDetailView({ team, onBack }) {
  const { back, front } = splitTitle(team.name);
  const [showTitle, setShowTitle] = useState(false);

  return (
    <div className="relative min-h-screen bg-brand-dark">
      {/* Hero morphé fullscreen */}
      <motion.div
        className="fixed inset-0 z-30 w-full h-full"
        layoutId={team.id ? `${team.id}-hero` : undefined}
        style={{ overflow: 'hidden' }}
        transition={{
          layout: { duration: 0.7, type: "spring", bounce: 0.25 },
        }}
        initial={{ borderRadius: 39, scale: 0.95, filter: "blur(0px)" }}
        animate={{ borderRadius: 0, scale: 1, filter: "blur(0px)" }}
        exit={{ borderRadius: 39, scale: 0.95, filter: "blur(4px)", opacity: 0 }}
        onAnimationComplete={() => setShowTitle(true)}
      >
        {/* Image de fond */}
        <motion.img
          src={team.image}
          alt={team.name}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          initial={{ scale: 1.1, opacity: 0.2 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
        {/* Overlay foncé */}
        <motion.div
          className="absolute inset-0 bg-black/60"
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0.7 }}
          transition={{ duration: 0.7 }}
        />
        {/* Titre stylisé fullscreen, affiché seulement après le morph */}
        {showTitle && (
  <div className="absolute inset-0 flex flex-col items-center justify-center select-none pointer-events-none">
    {back && (
      <motion.span
        className="block text-white"
        style={{
          fontFamily: 'Amanojaku, sans-serif',
          fontSize: 'clamp(2.5rem, 12vw, 160px)',
          lineHeight: '0.8',
          opacity: 0.18,
          letterSpacing: '0.05em',
          whiteSpace: 'nowrap',
          filter: 'blur(0.5px)',
          textAlign: 'center',
          textShadow: '0 4px 32px #000, 0 1px 0 #222',
          zIndex: 0,
        }}
        aria-hidden
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 0.18, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, type: "spring" }}
      >
        {back}
      </motion.span>
    )}
    <motion.span
      className="block text-white"
      style={{
        fontFamily: 'Amanojaku, sans-serif',
        fontSize: 'clamp(2.5rem, 12vw, 160px)',
        lineHeight: '0.6',
        letterSpacing: '0.05em',
        whiteSpace: 'nowrap',
        textAlign: 'center',
        textShadow: '0 4px 32px #000, 0 1px 0 #222',
        zIndex: 1,
        opacity: 1,
      }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.25, type: "spring" }}
    >
      {front}
    </motion.span>
  </div>
)}
      </motion.div>

      {/* Bouton retour, toujours au-dessus */}
      <button
        onClick={onBack}
        className="fixed top-8 right-8 z-50 bg-white/10 hover:bg-brand-accent/80 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-colors border-2 border-white/30"
        aria-label="Fermer"
        type="button"
      >
        <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
        </svg>
      </button>

      {/* Contenu sous le hero */}
      <div className="relative z-40 pt-[60vh] px-4 max-w-5xl mx-auto">
        {/* Ajoute ici le roster, staff, etc. */}
      </div>
    </div>
  );
}

export default TeamDetailView;