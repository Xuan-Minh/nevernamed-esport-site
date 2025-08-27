import React from 'react';
import avatarPlaceholder from '../assets/avatar-placeholder.png';

function TeamMembersGallery({ roster, current, setCurrent, directionRef }) {
  return (
    <div className="w-full flex justify-center items-end gap-6 py-4 z-40 relative">
      {roster.map((m, idx) => (
        <button
          key={m.name}
          onClick={() => {
            if (idx !== current) {
              directionRef.current = idx > current ? 1 : -1;
              setCurrent(idx);
            }
          }}
          className={`flex flex-col items-center group transition-all duration-200 ${
            idx === current ? 'scale-110' : 'opacity-70 hover:opacity-100'
          }`}
          style={{ outline: idx === current ? '2px solid #ff6600' : 'none', borderRadius: 12 }}
          aria-label={`Voir ${m.name}`}
        >
          <div className={`w-20 h-24 md:w-24 md:h-24 bg-gray-800 rounded-xl flex items-end justify-center overflow-hidden shadow-lg mb-2 border-2 ${idx === current ? 'border-brand-accent' : 'border-transparent'}`}>
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
  );
}

export default TeamMembersGallery;