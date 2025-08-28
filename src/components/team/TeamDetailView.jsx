import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import TeamHero from './TeamHero';
import TeamMembersGallery from './sponsors/TeamMembersGallery';
import MemberCard from './MemberCard';
import MemberVisual from './MemberVisual';
import { IconAdc, IconCoach, IconSupp, IconTop, IconMid, IconJungle } from './icons/Icons';

const roleIcons = {
ADC: <IconAdc />,     
Coach: <IconCoach />,
Support: <IconSupp />,
Top: <IconTop />,
Mid: <IconMid />,
Jungle: <IconJungle />,
};
  

function TeamDetailView({ team, onBack }) {
  const { i18n } = useTranslation();
  const lang = i18n.language.startsWith('fr') ? 'fr' : 'en';

  const [showTitle, setShowTitle] = useState(false);
  const [current, setCurrent] = useState(0);
  const directionRef = useRef(1);
  const [displayed, setDisplayed] = useState({ index: 0, direction: 1 });

  useEffect(() => {
    setDisplayed({ index: current, direction: directionRef.current });
  }, [current]);

  const handlePrev = () => {
    directionRef.current = -1;
    setCurrent(c => (c - 1 + team.roster.length) % team.roster.length);
  };
  const handleNext = () => {
    directionRef.current = 1;
    setCurrent(c => (c + 1) % team.roster.length);
  };

  const member = team.roster[displayed.index];

  return (
    <div className="relative min-h-screen brand-background pb-24 sm:pb-0">  
      <TeamHero team={team} showTitle={showTitle} setShowTitle={setShowTitle} />

      {/* Galerie des membres */}
            <TeamMembersGallery
              roster={team.roster}
              current={current}
              setCurrent={setCurrent}
              directionRef={directionRef}
            />

      {/* Bouton retour */}
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
      <section className="relative z-40 w-full h-[70vh] flex flex-col md:flex-row justify-center items-center px-2 sm:px-6 mt-0">
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-4 items-center md:items-start h-full">
          <div className="flex-1 flex flex-col gap-2 justify-center h-full relative">
            <MemberCard
              member={member}
              lang={lang}
              handlePrev={handlePrev}
              handleNext={handleNext}
              current={displayed.index}
              team={team}
              roleIcons={roleIcons}
            />
          </div>
          <MemberVisual member={member} displayed={displayed} />
        </div>
      </section>
    </div>
  );
}

export default TeamDetailView;