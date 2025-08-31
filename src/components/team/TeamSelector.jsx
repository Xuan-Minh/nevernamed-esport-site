import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import ArrowIcon from '../common/ArrowIcon';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AnimatedElement from '../common/AnimatedElement';

function TeamSelector({ teams, onSelect, selectedTeamId }) {
  const [hovered, setHovered] = useState(null);
  const [clicked, setClicked] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [pendingSelectId, setPendingSelectId] = useState(null); // Pour différer le hero (id du jeu)
  const swiperRef = useRef(null);

  // Centre le carrousel sur le jeu sélectionné à l'ouverture
  useEffect(() => {
    if (selectedTeamId && swiperRef.current) {
      const idx = teams.findIndex((t) => t.id === selectedTeamId);
      if (idx !== -1) {
        swiperRef.current.slideToLoop(idx, 0, false);
      }
    }
  }, [selectedTeamId, teams]);

  // Gestion du clic sur un slide Swiper (toujours centrer d'abord, puis pop le hero)
  const handleSlideClick = (swiper, slideIndex) => {
    if (!swiper) return;
    const realIdx = swiper.realIndex;
    const clickedTeam = teams[slideIndex];
    // Si déjà centré, pop direct
    if (realIdx === slideIndex) {
      setClicked(clickedTeam.id);
      setTimeout(() => {
        onSelect(clickedTeam);
        setClicked(null);
      }, 350);
    } else {
      setPendingSelectId(clickedTeam.id);
      swiper.slideToLoop(slideIndex, 500, true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8">
      <AnimatedElement>
        <h2 className="text-3xl md:text-4xl font-bold tracking-wider font-unbounded mb-8 text-white text-center">
          SELECT YOUR GAME
        </h2>
      </AnimatedElement>
      <div
        className="w-full max-w-5xl px-2 flex flex-row items-center justify-center"
        style={{ minHeight: '340px' }}
      >
        {/* Flèche gauche custom */}
        <button
          className="hidden md:flex items-center justify-center w-12 h-12 rounded-full hover:scale-150 text-white mr-2 transition"
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Précédent"
        >
          <ArrowIcon style={{ transform: 'rotate(180deg)' }} className="w-12 h-12" />
        </button>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={false}
          pagination={{ clickable: true }}
          loop={true}
          centeredSlides={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
            // Si on attendait un centrage, et qu'on y est, on pop le hero (par id)
            if (pendingSelectId) {
              const centeredTeam = teams[swiper.realIndex];
              if (centeredTeam && centeredTeam.id === pendingSelectId) {
                setClicked(centeredTeam.id);
                setTimeout(() => {
                  onSelect(centeredTeam);
                  setClicked(null);
                  setPendingSelectId(null);
                }, 350);
              }
            }
          }}
          breakpoints={{
            640: { slidesPerView: 2, centeredSlides: true },
            1024: { slidesPerView: 3, centeredSlides: true },
          }}
          className="team-selector-swiper"
        >
          {teams.map((team, idx) => (
            <SwiperSlide key={team.id}>
              <motion.div
                className={`mx-auto overflow-hidden shadow-2xl cursor-pointer relative group transition-all duration-300
                  ${activeIndex === idx ? 'w-80 h-80 z-20 shadow-3xl opacity-100 scale-105' : 'w-56 h-56 z-10 opacity-30 scale-90'}
                `}
                layoutId={`${team.id}-hero`}
                style={{ borderRadius: 39, overflow: 'hidden' }}
                onMouseEnter={() => setHovered(team.id)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => handleSlideClick(swiperRef.current, idx)}
              >
                <img
                  src={team.image}
                  alt={team.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="100%"
                  height="100%"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <AnimatePresence>
                    {!clicked && (
                      <motion.div
                        key="logo"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hovered === team.id ? 1 : 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center justify-center w-full h-full"
                      >
                        <team.LogoComponent className="w-56 h-56 text-white transition-all duration-300" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Flèche droite custom */}
        <button
          className="hidden md:flex items-center justify-center w-12 h-12 rounded-full hover:scale-150 text-white ml-2 transition"
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Suivant"
        >
          <ArrowIcon className="w-12 h-12" />
        </button>
      </div>
    </div>
  );
}

export default TeamSelector;
