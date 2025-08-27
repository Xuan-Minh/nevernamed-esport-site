import React from "react";
import { TwitterIcon, TwitchIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from "./Icons"; // adapte selon ton projet
import ArrowIcon from "./ArrowIcon"; // Ajoute cet import


function MemberCard({
  member,
  lang,
  roleIcons,
  handlePrev,
  handleNext,
  current,
  team,
}) {
  return (
    <div className="flex flex-col gap-4">
      {/* Rôle et icône */}
      <div className="flex items-center gap-2 mb-2">
        <span className="uppercase font-unbounded text-4xl font-bold text-white tracking-wider">
          {member.role}
        </span>
        {roleIcons[member.role] && roleIcons[member.role]}
      </div>

      {/* Nom stylisé */}
      <div className="relative mb-2">
        <span className="block text-3xl font-bold text-orange-400" style={{ fontFamily: 'Unbounded, sans-serif', textIndent: '1.5rem' }}>
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
      </div>

      {/* Description */}
      <p className="text-white font-poppins text-base leading-relaxed mb-4 min-h-[80px]">
        {typeof member.description === 'string'
          ? member.description
          : member.description?.[lang] || member.description?.en || ""}
      </p>

      {/* Réseaux sociaux */}
      <div className="flex gap-4 mb-4">
        {member.socials?.twitter && (
          <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <TwitterIcon className="w-6 h-6 text-white hover:text-brand-accent transition-colors" />
          </a>
        )}
        {member.socials?.twitch && (
          <a href={member.socials.twitch} target="_blank" rel="noopener noreferrer" aria-label="Twitch">
            <TwitchIcon className="w-6 h-6 text-white hover:text-brand-accent transition-colors" />
          </a>
        )}
        {member.socials?.instagram && (
          <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <InstagramIcon className="w-6 h-6 text-white hover:text-brand-accent transition-colors" />
          </a>
        )}
        {member.socials?.youtube && (
          <a href={member.socials.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <YoutubeIcon className="w-6 h-6 text-white hover:text-brand-accent transition-colors" />
          </a>
        )}
        {member.socials?.linkedin && (
          <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinIcon className="w-6 h-6 text-white hover:text-brand-accent transition-colors" />
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