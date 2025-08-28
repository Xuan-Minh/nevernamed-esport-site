import React from 'react';
import avatarPlaceholder from '../../assets/avatar-placeholder.png';

function TeamMembersGallery({ roster, current, setCurrent, directionRef }) {
  return (
<div className="w-full max-w-6xl mx-auto flex justify-center items-end gap-8 md:gap-12 py-4 z-40 relative overflow-x-auto scrollbar-thin px-2 md:px-2">
  <div className="flex pl-4 pr-4 md:pl-0 md:pr-0  md:gap-10">
    {roster.map((m, idx) => (
        <button
          key={m.name}
          className={`
            flex flex-col items-center group transition-all duration-200
            ${idx === current ? 'scale-110' : 'opacity-70 hover:opacity-100'}
            min-w-[64px] md:min-w-[120px]
          `}
          style={{ outline: idx === current ? '2px solid #ff6600' : 'none', borderRadius: 12 }}
          aria-label={`Voir ${m.name}`}
          onClick={() => {
            if (idx !== current) {
              directionRef.current = idx > current ? 1 : -1;
              setCurrent(idx);
            }
          }}
        >
          <div className={`
            w-14 h-16 md:w-28 md:h-32
            bg-gray-800 rounded-xl flex items-end justify-center
            overflow-hidden shadow-lg mb-2 border-2
            ${idx === current ? 'border-brand-accent' : 'border-transparent'}
          `}>
            <img
              src={m.avatar || avatarPlaceholder}
              alt={m.name}
              className="object-cover w-full h-full"
              draggable={false}
            />
          </div>
          <span className={`
            text-[10px] md:text-lg font-unbounded font-bold px-1 md:px-3 py-1text-white tracking-wide shadow
            ${idx === current ? 'text-orange-400  ' : ''}
          `}>
            {m.name}
          </span>
        </button>
      ))}
    </div>
    </div>
  );
}

export default TeamMembersGallery;