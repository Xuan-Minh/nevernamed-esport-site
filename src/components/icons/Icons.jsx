import React from 'react';

// --- Icônes pour les réseaux sociaux ---

export const TwitterIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const TwitchIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M11.571 4.714h1.715v5.143h-1.715V4.714zm4.714 0h1.715v5.143h-1.715V4.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L24 15.428V0H6zm16.286 14.571-3.428 3.429h-3.429l-3 3v-3H6.857V1.714h15.429v12.857z" />
  </svg>
);

export const LinkedinIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export const InstagramIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.356 2.175 8.741 2.163 12 2.163m0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98C15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
  </svg>
);

export const YoutubeIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19.802 5.802a2.5 2.5 0 00-1.768-1.768C16.764 3.5 12 3.5 12 3.5s-4.764 0-6.034.534a2.5 2.5 0 00-1.768 1.768C3.5 7.07 3.5 12 3.5 12s0 4.93.732 6.198a2.5 2.5 0 001.768 1.768C7.236 20.5 12 20.5 12 20.5s4.764 0 6.034-.534a2.5 2.5 0 001.768-1.768C20.5 16.93 20.5 12 20.5 12s0-4.93-.698-6.198zM9.5 15.5V8.5l6 3.5-6 3.5z" clipRule="evenodd" />
  </svg>
);

import iconAdc from '../../assets/icons/icon_adc.svg';
import iconCoach from '../../assets/icons/icon_coach.svg';
import iconSupp from '../../assets/icons/icon_supp.svg';
import iconTop from '../../assets/icons/icon_top.svg';
import iconMid from '../../assets/icons/icon_mid.svg';
import iconJungle from '../../assets/icons/icon_jungle.svg';

// ... (tes icônes réseaux sociaux inchangées)

export const IconAdc = ({ className = "w-9 h-9 ml-2" }) => (
  <img src={iconAdc} alt="ADC" className={className} draggable={false} loading="lazy" />
);

export const IconCoach = ({ className = "w-9 h-9 ml-2" }) => (
  <img src={iconCoach} alt="Coach" className={className} draggable={false} loading="lazy" />
);

export const IconSupp = ({ className = "w-9 h-9 ml-2" }) => (
  <img src={iconSupp} alt="Support" className={className} draggable={false} loading="lazy" />
);

export const IconTop = ({ className = "w-9 h-9 ml-2" }) => (
  <img src={iconTop} alt="Top" className={className} draggable={false} loading="lazy" />
);

export const IconMid = ({ className = "w-9 h-9 ml-2" }) => (
  <img src={iconMid} alt="Mid" className={className} draggable={false} loading="lazy" />
);

export const IconJungle = ({ className = "w-9 h-9 ml-2" }) => (
  <img src={iconJungle} alt="Jungle" className={className} draggable={false} loading="lazy" />
);