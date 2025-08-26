import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TwitterIcon, TwitchIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from './Icons';

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
  const [current, setCurrent] = useState(0);

  const member = team.roster[current];

  const roleIcons = {
    'Head Coach': <img src="/assets/icons/coach.svg" alt="Coach" className="inline w-7 h-7 ml-2" />,
    // Ajoute d'autres rôles ici
  };

  return (
    <div className="relative min-h-screen brand-background  ">
      {/* HERO morphé fullscreen */}
      <motion.div
  className="relative w-full h-screen z-30"
  layoutId={`${team.id}-hero`}
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
    className="absolute inset-0 w-full h-full object-cover"
    initial={{ scale: 1.1, opacity: 0.2 }}
    animate={{ scale: 1, opacity: 0.4 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    style={{
      WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
      maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
    }}
  />
  {/* Overlay foncé */}
  <motion.div
    className="absolute inset-0 bg-black/60"
    initial={{ opacity: 0.7 }}
    animate={{ opacity: 0.6 }}
    exit={{ opacity: 0.7 }}
    transition={{ duration: 0.7 }}
    style={{
      WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
      maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
    }}
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
        className="
          fixed
          right-4 top-auto bottom-4
          sm:top-8 sm:bottom-auto sm:right-8
          z-50
          bg-white/10 hover:bg-brand-accent/80 text-white
          rounded-full w-12 h-12 sm:w-14 sm:h-14
          flex items-center justify-center
          shadow-lg transition-colors border-2 border-white/30
        "
        aria-label="Fermer"
        type="button"
      >
        <svg className="w-7 h-7 sm:w-10 sm:h-10" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
        </svg>
      </button>

      {/* SECTION MEMBRE scrollable */}
            <section
        className="relative z-40 w-full h-screen min-h-screen flex flex-col justify-center items-center px-2 sm:px-6"
      >
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center md:items-start h-full">
          {/* Partie gauche : infos joueur */}
          <div className="flex-1 flex flex-col gap-4 justify-center h-full relative">
            {/* Rôle dynamique */}
            <div className="flex items-center gap-2 mb-2">
              <span className="uppercase font-unbounded text-4xl font-bold text-white tracking-wider">
                {member.role}
              </span>
              {roleIcons[member.role] && roleIcons[member.role]}
            </div>
            {/* Nom du joueur */}
            <div className="relative mb-2">
              <span
                    className="block text-3xl font-bold text-orange-400"
                    style={{
                      fontFamily: 'Unbounded, sans-serif',
                      textIndent: '1.5rem', // Ajoute l'indentation ici (ajuste la valeur selon ton besoin)
                    }}
                  >
                    {member.name}
                  </span>
              <span
                className="absolute left-0 top-7 text-6xl text-white/10 pointer-events-none select-none"
                style={{
                  fontFamily: 'Amanojaku, sans-serif',
                  zIndex: 0,
                  lineHeight: 1,
                  userSelect: 'none',
                  filter: 'blur(0.5px)',
                }}
                aria-hidden
              >
                {member.name}
              </span>
              <p className="text-white font-poppins text-base leading-relaxed mb-4">{member.description}</p>
            </div>
            {/* Description */}
            
            {/* Réseaux sociaux */}
          <div className="flex gap-4 mb-4">
            {member.socials?.twitter && (
              <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <TwitterIcon className="w-6 h-6 text-white hover:text-brand-accent transition" />
              </a>
            )}
            {member.socials?.twitch && (
              <a href={member.socials.twitch} target="_blank" rel="noopener noreferrer" aria-label="Twitch">
                <TwitchIcon className="w-6 h-6 text-white hover:text-brand-accent transition" />
              </a>
            )}
            {member.socials?.instagram && (
              <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstagramIcon className="w-6 h-6 text-white hover:text-brand-accent transition" />
              </a>
            )}
            {member.socials?.youtube && (
              <a href={member.socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <YoutubeIcon className="w-6 h-6 text-white hover:text-brand-accent transition" />
              </a>
            )}
            {member.socials?.linkedin && (
              <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <LinkedinIcon className="w-6 h-6 text-white hover:text-brand-accent transition" />
              </a>
            )}
          </div>
            {/* Navigation membres */}
            <div className="flex items-center gap-4 mt-4">
              <button
                onClick={() => setCurrent((current - 1 + team.roster.length) % team.roster.length)}
                className="p-2 rounded-full bg-white/10 hover:bg-brand-accent/80 text-white transition"
                aria-label="Membre précédent"
              >
                {/* Flèche gauche */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <span className="text-white/70 text-sm">{current + 1} / {team.roster.length}</span>
              <button
                onClick={() => setCurrent((current + 1) % team.roster.length)}
                className="p-2 rounded-full bg-white/10 hover:bg-brand-accent/80 text-white transition"
                aria-label="Membre suivant"
              >
                {/* Flèche droite */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          {/* Partie droite : maillot + personnage */}
          <div className="flex-1 flex flex-col items-center justify-center relative h-full">
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
                className="relative z-10 w-48 md:w-64 object-contain"
                style={{ filter: 'drop-shadow(0 4px 32px #0008)' }}
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default TeamDetailView;