import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { InstagramIcon, TwitterIcon, YoutubeIcon, TwitchIcon, LinkedinIcon } from '../components/icons/SocialIcons';
import Separator from '../components/common/Separator';
import Button from '../components/common/Button';
import AnimatedElement from '../components/common/AnimatedElement';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import SocialFeed from '../components/social/SocialFeed';

{/* POSTS */}

// Données fictives pour les publications sur les réseaux sociaux
const socialPosts = [
  {
    id: 1,
    platform: 'instagram',
    date: '28/07/2025',
    image: 'https://via.placeholder.com/400x300',
    caption: "Notre victoire hier soir sur scène ! Fier-ère d'elles!",
  icon: <InstagramIcon />,
  },
  {
    id: 2,
    platform: 'twitter',
    date: '28/07/2025',
    image: 'https://via.placeholder.com/400x300',
    caption: 'Un match incroyable, une performance à couper le souffle.',
  icon: <TwitterIcon />,
  },
  {
    id: 3,
    platform: 'youtube',
    date: '28/07/2025',
    image: 'https://via.placeholder.com/400x300',
    caption: 'Revivez les meilleurs moments de la finale dans notre dernière vidéo !',
  icon: <YoutubeIcon />,
  },
];

function SocialsPage() {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.substring(1));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.4 }}
>
    <div className="text-white">
      <Helmet>
        <title>NeverNamed Esport - Social Hub</title>
        <meta name="description" content="Retrouvez tous les réseaux sociaux et dernières actualités de NeverNamed Esport." />
      </Helmet>
      <div className="container mx-auto px-4 overflow-y-hidden pt-10 sm:pt-20">
        {/* HERO */}
        <AnimatedElement>
          <section className="relative min-h-[calc(65vh-6rem)] flex flex-col items-center justify-center">
            <div className="w-full text-center translate-y-6 sm:translate-y-10 md:translate-y-14">
            <h1 className="font-unbounded text-4xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-12">{t('socialHub.title')}</h1>
            <h2 className="font-unbounded text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">{t('socialHub.channels')}</h2>
              <div className="flex justify-center items-center gap-6 sm:gap-14 text-4xl sm:text-6xl">
                <a href="#" className="text-white hover:text-brand-accent transition-colors hover:scale-110"><InstagramIcon /></a>
                <a href="https://x.com/thenevernamed" className="text-white hover:text-brand-accent transition-colors hover:scale-110"><TwitterIcon /></a>
                <a href="#" className="text-white hover:text-brand-accent transition-colors hover:scale-110"><TwitchIcon /></a>
                <a href="#" className="text-white hover:text-brand-accent transition-colors hover:scale-110"><LinkedinIcon /></a>
              </div>
            </div>
          </section>  
        </AnimatedElement>

        {/* POSTS */}
          <AnimatedElement>
            <section className="max-w-6xl mx-auto mt-2 mb-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {socialPosts.map(post => (
                  <div
                      key={post.id}
                      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-left flex flex-col shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300"
                    >
                    <div className="flex justify-between items-center mb-2 sm:mb-3">
                      <span className="text-xs text-white/60">{t(`socialHub.posts.${post.id}.date`, { defaultValue: post.date })}</span>
                      <span className="text-lg sm:text-xl text-white/80">{post.icon}</span>
                    </div>
                    <img
                      src={post.image}
                      alt={t(`socialHub.posts.${post.id}.caption`, { defaultValue: post.caption })}
                      className="rounded-lg w-full h-36 sm:h-48 object-cover mb-3 sm:mb-4"
                    />
                    <p className="text-white/90 flex-grow text-sm sm:text-base">{t(`socialHub.posts.${post.id}.caption`, { defaultValue: post.caption })}</p>
                  </div>
                ))}
              </div>
            </section>
          </AnimatedElement>
        {/* <AnimatedElement>
          <section className="max-w-6xl mx-auto mt-2 mb-4">
            <SocialFeed limit={6} />
          </section>
        </AnimatedElement> */}

        <Separator className="my-4"/>

        {/* FORMULAIRE CONTACT */}
        <AnimatedElement>
          <section id="contact-form" className="max-w-4xl mx-auto mt-8 mb-0 text-left px-2 sm:px-0">
          <h2 className="font-unbounded text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6">{t('contact.title')}</h2>
          <form>
            <div className="grid font-poppins grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
              <div>
                <label htmlFor="prenom" className="block text-sm font-medium text-white/70 mb-2">{t('contact.firstname')}</label>
                <input
                  type="text"
                  id="prenom"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div>
                <label htmlFor="nom" className="block text-sm font-medium text-white/70 mb-2">{t('contact.lastname')}</label>
                <input
                  type="text"
                  id="nom"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">{t('contact.email')}</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div>
                <label htmlFor="tel" className="block text-sm font-medium text-white/70 mb-2">{t('contact.phone')}</label>
                <input
                  type="tel"
                  id="tel"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>

            <div className="mb-6 font-poppins">
              <label className="block text-sm font-medium text-white/70 mb-3">{t('contact.subject')}</label>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="topic"
                    value="partnership"
                    className="form-radio bg-gray-700 text-cyan-500 focus:ring-cyan-500"
                    defaultChecked
                  /> {t('contact.topics.partnership')}
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="topic"
                    value="join"
                    className="form-radio bg-gray-700 text-cyan-500 focus:ring-cyan-500"
                  /> {t('contact.topics.join')}
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="topic"
                    value="other"
                    className="form-radio bg-gray-700 border-gray-600 text-cyan-500 focus:ring-cyan-500"
                  /> {t('contact.topics.other')}
                </label>
              </div>
            </div>

              <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">{t('contact.message')}</label>
                    <textarea
                      id="message"
                      rows="5"
                      className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base"
                    ></textarea>
                  </div>
                  <div className="text-center pb-10">
                    <Button className="mx-auto min-w-[140px]">{t('contact.send')}</Button>
                  </div>
                </form>
              </section>
        </AnimatedElement>
      </div>
    </div>
    </motion.div>
  );
}

export default SocialsPage;