import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import TeamHero from './TeamHero';
import TeamMembersGallery from './TeamMembersGallery';
import MemberCard from './MemberCard';
import MemberVisual from './MemberVisual';

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
    <div className="relative min-h-screen brand-background">
      <TeamHero team={team} showTitle={showTitle} setShowTitle={setShowTitle} />
      {/* Bouton retour */}
      <button onClick={onBack} className="...">...</button>
      <TeamMembersGallery
        roster={team.roster}
        current={current}
        setCurrent={setCurrent}
        directionRef={directionRef}
      />
      <section className="relative z-40 w-full h-[70vh] flex flex-col justify-center items-center px-2 sm:px-6 mt-0">
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-2 items-center md:items-start h-full">
          <div className="flex-1 flex flex-col gap-2 justify-center h-full relative">
            <MemberCard
              member={member}
              lang={lang}
              handlePrev={handlePrev}
              handleNext={handleNext}
              current={displayed.index}
              team={team}
            />
          </div>
          <MemberVisual member={member} displayed={displayed} />
        </div>
      </section>
    </div>
  );
}

export default TeamDetailView;