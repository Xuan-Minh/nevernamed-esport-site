import React, { useState, useRef } from 'react';
import { TwitterIcon, TwitchIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from './Icons';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import AnimatedElement from './AnimatedElement';
import avatarPlaceholder from '../assets/avatar-placeholder.png';

import IconCoach from '../assets/icons/icon_coach.svg?react';
import IconSupp from '../assets/icons/icon_supp.svg?react';
import IconTop from '../assets/icons/icon_top.svg?react';
import IconMid from '../assets/icons/icon_mid.svg?react';
import IconJungle from '../assets/icons/icon_jungle.svg?react';
import IconAdc from '../assets/icons/icon_adc.svg?react';
import ArrowIcon from './ArrowIcon';

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
  const { i18n } = useTranslation();
  const lang = i18n.language.startsWith('fr') ? 'fr' : 'en';

  const { back, front } = splitTitle(team.name);
  const [showTitle, setShowTitle] = useState(false);
 const [current, setCurrent] = useState(0);
  const directionRef = useRef(1); // <-- ref pour mémoriser la direction
  const [displayed, setDisplayed] = useState({ index: 0, direction: 1 });

  const handlePrev = () => {
    directionRef.current = -1;
    setCurrent(c => (c - 1 + team.roster.length) % team.roster.length);
  };
  const handleNext = () => {
    directionRef.current = 1;
    setCurrent(c => (c + 1) % team.roster.length);
  };

  // Quand current change, on met à jour displayed pour déclencher l'animation avec la bonne direction
    React.useEffect(() => {
      setDisplayed({ index: current, direction: directionRef.current });
    }, [current]);

  const member = team.roster[displayed.index];

  const roleIcons = {
    'Head Coach': <IconCoach className="inline w-9 h-9 ml-2" />,
    'Support': <IconSupp className="inline w-9 h-9 ml-2" />,
    'Top': <IconTop className="inline w-9 h-9 ml-2" />,
    'Mid': <IconMid className="inline w-9 h-9 ml-2" />,
    'Jungle': <IconJungle className="inline w-9 h-9 ml-2"/>,
    'Adc': <IconAdc className="inline w-9 h-9 ml-2" />,
  };

  return (
    <div className="relative min-h-screen brand-background">
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
<div className="w-full flex justify-center items-end gap-6 py-8 z-40 relative">
  {team.roster.map((m, idx) => (
    <button
      key={m.name}
      onClick={() => {
        directionRef.current = idx > current ? 1 : -1;
        setCurrent(idx);
      }}
      className={`flex flex-col items-center group transition-all duration-200 ${
        idx === current ? 'scale-110' : 'opacity-70 hover:opacity-100'
      }`}
      style={{ outline: idx === current ? '2px solid #ff6600' : 'none', borderRadius: 12 }}
      aria-label={`Voir ${m.name}`}
    >
      {/* Placeholder photo détourée */}
      <div className={`w-20 h-24 md:w-28 md:h-32 bg-gray-800 rounded-xl flex items-end justify-center overflow-hidden shadow-lg mb-2 border-2 ${idx === current ? 'border-brand-accent' : 'border-transparent'}`}>
        {/* Remplace src par m.photo quand tu auras les vraies images */}
        <img
          src={avatarPlaceholder}
          alt={m.name}
          className="object-cover w-full h-full"
          draggable={false}
        />
      </div>
      <span className={`text-base md:text-lg font-unbounded font-bold px-3 py-1 rounded bg-white/90 text-gray-900 tracking-wide shadow ${idx === current ? 'text-brand-accent' : ''}`}>
        {m.name}
      </span>
    </button>
  ))}
</div>
      {/* SECTION MEMBRE scrollable */}
            <section
  className="relative z-40 w-full h-[70vh] flex flex-col justify-center items-center px-2 sm:px-6 mt-0"
>
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-2 items-center md:items-start h-full">
          {/* Partie gauche : infos joueur */}
          <div className="flex-1 flex flex-col gap-2 justify-center h-full relative">
  <AnimatePresence mode="wait">
    <motion.div
      key={member.name + member.role}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-4"
    >
      {/* Rôle dynamique animé */}
      <AnimatedElement className="flex items-center gap-2 mb-2" as="div">
        <span className="uppercase font-unbounded text-4xl font-bold text-white tracking-wider">
          {member.role}
        </span>
        {roleIcons[member.role] && roleIcons[member.role]}
      </AnimatedElement>
      {/* Nom du joueur animé avec délai */}
      <AnimatedElement className="relative mb-2" as="div">
        <span
          className="block text-3xl font-bold text-orange-400"
          style={{
            fontFamily: 'Unbounded, sans-serif',
            textIndent: '1.5rem',
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
      </AnimatedElement>
      {/* Description fade in/out */}
        <motion.p
          key={member.name + '-desc'}
          className="text-white font-poppins text-base leading-relaxed mb-4 overflow-hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          {typeof member.description === 'string'
            ? member.description
            : member.description?.[lang] || member.description?.en || ""}
        </motion.p>
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
    </motion.div>
  </AnimatePresence>
  {/* Navigation membres */}
    <div className="flex items-center gap-4 mt-4">
          <button
        onClick={handlePrev}
        className="p-2 rounded-full bg-white/10 hover:bg-brand-accent/80 text-white transition"
        aria-label="Membre précédent"
      >
        <ArrowIcon className="w-6 h-6 rotate-180" />
      </button>
      <span className="text-white/70 text-sm font-unbounded">{current + 1} / {team.roster.length}</span>
      <button
        onClick={handleNext}
        className="p-2 rounded-full bg-white/10 hover:bg-brand-accent/80 text-white transition"
        aria-label="Membre suivant"
      >
        <ArrowIcon className="w-6 h-6" />
      </button>
        </div>
      </div>
          {/* Partie droite : maillot + personnage */}
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
        </div>
      </section>
    </div>
  );
}

export default TeamDetailView;