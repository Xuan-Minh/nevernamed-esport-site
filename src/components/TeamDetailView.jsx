import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ArrowIcon from './ArrowIcon';
import jerseyImage from '../assets/jersey.png';

function TeamDetailView({ team, onBack }) {
  return (
    <div className="absolute inset-0 flex flex-col animate-fade-in">
      {/* Fond d'écran et titre du jeu */}
      <div className="relative w-full h-1/2">
        <img src={team.image} alt={team.name} className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className={`text-6xl md:text-8xl text-white/80 ${team.fontClass}`}>{team.name}</h1>
        </div>
        <button onClick={onBack} className="absolute top-5 left-5 text-white bg-black/50 rounded-full p-2 hover:bg-brand-accent transition-colors z-20">
          <ArrowIcon className="w-6 h-6 rotate-180" />
        </button>
      </div>

      {/* Section des joueurs (Carrousel Swiper) */}
      <div className="w-full h-1/2 relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{ nextEl: '.swiper-button-next-custom', prevEl: '.swiper-button-prev-custom' }}
          pagination={{ el: '.swiper-pagination-custom', type: 'fraction' }}
          className="h-full"
        >
          {team.roster.map((member, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-8">
                <div className="relative text-left">
                  <span className="text-brand-accent font-bold">{member.role}</span>
                  <h3 className="text-4xl font-bold my-2">{member.name}</h3>
                  <p className="text-white/70">{member.description}</p>
                </div>
                <div className="flex justify-center">
                  <img src={jerseyImage} alt="Maillot" className="w-64 h-auto drop-shadow-2xl" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-6 text-white font-bold">
          <button className="swiper-button-prev-custom"><ArrowIcon className="w-5 h-5 rotate-180" /></button>
          <div className="swiper-pagination-custom w-12 text-center"></div>
          <button className="swiper-button-next-custom"><ArrowIcon className="w-5 h-5" /></button>
        </div>
      </div>
    </div>
  );
}

export default TeamDetailView;