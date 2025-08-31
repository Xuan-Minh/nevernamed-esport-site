import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedElement from '../common/AnimatedElement';
import { FaInstagram, FaTwitch, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import ArrowIcon from '../common/ArrowIcon';

function MemberCard({ member, lang, handlePrev, handleNext, current, team, roleIcons }) {
  return (
    <div className="flex flex-col gap-4">
      {/* Rôle dynamique animé */}
      <AnimatedElement className="flex items-center gap-2 mb-2" as="div">
        <span className="uppercase font-unbounded text-2xl md:text-4xl font-bold text-white tracking-wider">
        {member.role}
        </span>
        {roleIcons && roleIcons[member.role]}
      </AnimatedElement>
      {/* Nom du joueur animé */}
                <AnimatePresence mode="wait">
                <motion.span
                    key={member.name + '-title'}
                    className="block text-xl md:text-3xl font-bold text-orange-400"
                    style={{
                        fontFamily: 'Unbounded, sans-serif',
                        textIndent: '1.5rem',
                        position: 'relative',
                        display: 'block',
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                >
                    {member.name}
                </motion.span>
                </AnimatePresence>
      {/* Description animée */}
        <AnimatePresence mode="wait">
        <motion.p
            key={member.name + '-desc'}
            className="text-white font-poppins text-base md:text-lg leading-relaxed md:leading-loose my-4 overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
        >
            {typeof member.description === 'string'
            ? member.description
            : member.description?.[lang] || member.description?.en || ""}
        </motion.p>
        </AnimatePresence>

{/* Pseudo en bas à gauche */}
<div className="relative min-h-[40px]">
  <AnimatePresence mode="wait">
      {member.name}
      <span
        className="absolute right-1 bottom-7 text-7xl text-white/10 pointer-events-none select-none"
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
  </AnimatePresence>
</div>
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
  );
}

export default MemberCard;