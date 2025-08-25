import React from 'react';
import mainLogo from '../assets/mainlogo.png';
import avatarPlaceholder from '../assets/avatar-placeholder.png';
import Separator from '../components/Separator';
import AnimatedElement from '../components/AnimatedElement';
import { TwitterIcon, TwitchIcon, LinkedinIcon } from '../components/Icons';
import { useTranslation } from 'react-i18next';

const staffModules = import.meta.glob('../assets/staff/*.{png,jpg,jpeg,webp,svg}', { eager: true });
const staffImages = Object.entries(staffModules).reduce((acc, [path, mod]) => {
  const file = path.split('/').pop();
  const id = file.replace(/\.(png|jpe?g|webp|svg)$/i, '').toLowerCase();
  acc[id] = mod.default;
  return acc;
}, {});

// Données Staff
const defaultStaffData = [
  {
    name: 'Maestroke',
    avatar: avatarPlaceholder,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
    socials: { twitter: '#', twitch: '#', linkedin: '#' },
  },
  {
    name: 'Solenne',
    avatar: avatarPlaceholder,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
    socials: { twitter: '#', twitch: '', linkedin: '#' },
  },
  {
    name: 'syNip',
    avatar: 'syNip',
    description: [
      'Ancien joueur professionnel esport des années 2000. Tony a joué pour les plus grandes équipes françaises.',
      'Depuis 2007, il travaille pour de nombreuses équipes professionnelles et a découvert plus de 50 joueurs sur la scène française et internationale.',
      "Depuis 2018, il met son expertise au service du développement de l’esport en concevant des événements et des projets pour des entreprises et des institutions, notamment pour l’Éducation nationale et l’armée. Il intervient également en tant que conférencier et partage son expérience à travers des cours dans le secondaire sur l’esport et ses enjeux.",
      'En 2024, il décide de reprendre le projet NeverNamed.',
    ],
    socials: { twitter: '', twitch: '#', linkedin: '' },
  },
];

const AboutUsPage = () => {
  const { t } = useTranslation();

  const i18nStaff = t('about.staffMembers', { returnObjects: true });
  const staffData = (Array.isArray(i18nStaff) && i18nStaff.length ? i18nStaff : defaultStaffData)
    .map(m => ({ ...m, socials: m.socials || {} }));

  return (
    <div className="text-white">
      {/* Section 1: Hero plein écran */}
      <section className="h-[80vh] w-full flex flex-col justify-center items-center text-center p-3">
        <AnimatedElement>
          <div className="relative flex justify-center items-center w-full max-w-2xl h-96">
            <img
              src={mainLogo}
              alt=""
              className="absolute inset-0 w-full h-full object-contain z-0 opacity-10"
            />
            <h1 className="relative font-unbounded text-3xl sm:text-4xl md:text-5xl font-bold z-10">
              {t('hero.whatsOurName')}
            </h1>
          </div>
        </AnimatedElement>
      </section>

      {/* Contenu */}
      <div className="container mx-auto px-4">
        <main className="flex flex-col items-center gap-y-24 md:gap-y-32 py-16 md:py-24">
          {/* Section 2: Nos Valeurs */}
          <AnimatedElement>
            <section className="w-full max-w-5xl font-poppins">
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="flex-shrink-0 md:w-1/2">
                  <img
                    src={avatarPlaceholder}
                    alt={t('about.values')}
                    className="rounded-lg w-full h-auto object-cover"
                  />
                </div>
                <div className="md:w-1/2 text-center md:text-left">
                  <h2 className="font-unbounded text-2xl sm:text-3xl font-bold mb-6">{t('about.values')}</h2>
                  <p className="text-white/80 leading-relaxed text-sm sm:text-base">
                    {t('about.valuesText')}
                  </p>
                </div>
              </div>
            </section>
          </AnimatedElement>

          {/* Section 3: Nos Missions */}
          <AnimatedElement>
            <section className="w-full max-w-5xl font-poppins">
              <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
                <div className="flex-shrink-0 md:w-1/2">
                  <img
                    src={avatarPlaceholder}
                    alt={t('about.missions')}
                    className="rounded-lg w-full h-auto object-cover"
                  />
                </div>
                <div className="md:w-1/2 text-center md:text-left">
                  <h2 className="font-unbounded text-2xl sm:text-3xl font-bold mb-6">{t('about.missions')}</h2>
                  <p className="text-white/80 leading-relaxed mb-12 text-sm sm:text-base">
                    {t('about.missionsText')}
                  </p>
                </div>
              </div>
            </section>
          </AnimatedElement>

          <Separator />

          <blockquote className="pl-6 italic text-white/70 font-poppins text-base sm:text-xl text-left">
            <p>{t('about.quote.text')}</p>
            <cite className="block text-right not-italic mt-2">- {t('about.quote.author')}</cite>
          </blockquote>

          {/* Section 4: Notre Staff (cartes en grille 2 colonnes, orphelin centré) */}
          <section className="w-full max-w-6xl font-poppins">
            <h2 className="font-unbounded text-2xl sm:text-3xl font-bold text-center mb-14">{t('about.staff')}</h2>
            <div className="grid gap-12 md:gap-14 md:grid-cols-2">
              {staffData.map((member, idx) => {
                // Système orphelin : si dernier ET nombre impair, centre la carte sur desktop
                const isLastOrphan = staffData.length % 2 === 1 && idx === staffData.length - 1;
                return (
                  <AnimatedElement key={member.name}>
                    <div
                      className={
                        "relative h-full bg-gray-800/40 backdrop-blur-sm rounded-2xl p-4 sm:p-8 flex flex-col border border-white/5 hover:border-white/15 transition-colors md:mx-0" +
                        (isLastOrphan ? " md:col-span-2 md:max-w-xl md:mx-auto" : "")
                      }
                    >
                      <div className="flex items-center gap-5 mb-5">
                        <img
                          src={staffImages[(member.avatar || member.name).toLowerCase()] || avatarPlaceholder}
                          alt={`Avatar de ${member.name}`}
                          className="w-16 h-16 sm:w-24 sm:h-24 rounded-full object-cover"
                        />
                        <h3 className="font-unbounded text-lg sm:text-xl md:text-2xl font-bold text-orange-400">
                          {member.name}
                        </h3>
                      </div>

                      {/* Description multi-paragraphes stylisée */}
                      <div className="flex-grow">
                        <div className="relative pl-4">
                          <span
                            aria-hidden
                            className="absolute left-0 top-0 h-full w-1 bg-orange-400 rounded-full"
                          />
                          <div className="space-y-3 text-white/80 text-sm sm:text-base leading-relaxed">
                            {(Array.isArray(member.description)
                              ? member.description
                              : [member.description]
                            ).map((para, i) => (
                              <p key={i} className="text-justify">
                                {para}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 flex items-center gap-4 text-sm">
                        {member.socials?.twitter && (
                          <a href={member.socials.twitter} aria-label="Twitter" className="hover:text-white/70 transition-colors">
                            <TwitterIcon />
                          </a>
                        )}
                        {member.socials?.twitch && (
                          <a href={member.socials.twitch} aria-label="Twitch" className="hover:text-white/70 transition-colors">
                            <TwitchIcon />
                          </a>
                        )}
                        {member.socials?.linkedin && (
                          <a href={member.socials.linkedin} aria-label="LinkedIn" className="hover:text-white/70 transition-colors">
                            <LinkedinIcon />
                          </a>
                        )}
                      </div>
                    </div>
                  </AnimatedElement>
                );
              })}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AboutUsPage;