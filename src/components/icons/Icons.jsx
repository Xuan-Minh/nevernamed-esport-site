import React from 'react';


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