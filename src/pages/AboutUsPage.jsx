import React from 'react';
import mainLogo from '../assets/mainlogo.png';
import avatarPlaceholder from '../assets/avatar-placeholder.png'; // Assurez-vous que ce fichier existe dans src/assets
import Separator from '../components/Separator';
import AnimatedElement from '../components/AnimatedElement';
import { TwitterIcon, TwitchIcon, LinkedinIcon } from '../components/Icons';

// --- Données pour la section Staff (facile à modifier) ---
const staffData = [
  {
    name: 'Maestroke',
    avatar: avatarPlaceholder,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
    socials: { twitter: '#', twitch: '#', linkedin: '#' }
  },
  {
    name: 'Solenne',
    avatar: avatarPlaceholder,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
    socials: { twitter: '#', twitch: '', linkedin: '#' }
  },
  {
    name: 'syNip',
    avatar: avatarPlaceholder,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.',
    socials: { twitter: '', twitch: '#', linkedin: '' }
  }
];

// --- Composant principal de la page ---
const AboutUsPage = () => {
  return (
    <div className=" text-white">
      
      {/* Section 1: Titre principal - Prend maintenant tout l'écran */}
      <section className="h-screen w-full flex flex-col justify-center items-center text-center p-3">
        <AnimatedElement>
       <div className="relative flex justify-center items-center w-full max-w-2xl h-96">
          <img 
            src={mainLogo} 
            alt=""
            className="absolute inset-0 w-full h-full object-contain z-0 opacity-10"
          />
          <h1 className="relative font-unbounded text-4xl md:text-5xl font-bold z-10">
            WHAT'S OUR NAME ?
          </h1>
        </div>
        </AnimatedElement>
      </section>

      {/* Conteneur pour le reste du contenu de la page */}
      <div className="container mx-auto px-4">
        <main className="flex flex-col items-center gap-y-24 md:gap-y-32 py-16 md:py-24">
          
          {/* MODIFIÉ: Section 2: Nos Valeurs */}
          <section className="w-full max-w-5xl font-poppins">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Image à gauche */}
              <div className="flex-shrink-0 md:w-1/2">
                <img src={avatarPlaceholder} alt="Nos Valeurs" className="rounded-lg w-full h-auto object-cover" />
              </div>
              {/* Texte à droite */}
              <div className="md:w-1/2 text-center md:text-left">
                {/* Le titre est maintenant ici */}
                <h2 className="font-unbounded text-3xl font-bold mb-6">NOS VALEURS</h2>
                <p className="text-white/80 leading-relaxed">
                  Nevernamed prône l'inclusivité, l'égalité, la mixité et l'apprentissage ainsi que la sensibilisation au secteur esportif et aux métiers du numérique à travers ses actions. 
                  Constituée de passionnés et professionnels, notre structure est prête à accueillir, accompagner et faire briller vos talents. 
                  Avec une équipe féminine en plein essor, Nevernamed s'engage à promouvoir et à aider à rendre l'esport féminin plus visible.
                </p>
              </div>
            </div>
          </section>

          {/* MODIFIÉ: Section 3: Nos Missions */}
          <section className="w-full max-w-5xl font-poppins">
            <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
              {/* Image à droite */}
              <div className="flex-shrink-0 md:w-1/2">
                <img src={avatarPlaceholder} alt="Nos Missions" className="rounded-lg w-full h-auto object-cover" />
              </div>
              {/* Texte à gauche */}
              <div className="md:w-1/2 text-center md:text-left">
                {/* Le titre est maintenant ici */}
                <h2 className="font-unbounded text-3xl font-bold mb-6">NOS MISSIONS</h2>
                <p className="text-white/80 leading-relaxed mb-12">
                  Former, éduquer, accompagner et performer sont les missions de notre structure. 
                  En intervenant auprès de l'Éducation Nationale dans les collèges et lycées à travers différents ateliers sur l'univers de l'esport, nous participons à la sensibilisation concernant la mixité et l'inclusivité des métiers de l'univers de l'esport et du jeu vidéo. 
                  Aussi, nous accompagnons des joueuses dans leur carrière esportive afin de leur permettre de performer au plus haut de leur potentiel. 
                  NeverNamed est la structure de tous les possibles, mélangeant professionnalisme et bienveillance.
                </p>
              </div>
            </div>
          </section>
            <Separator/>
  <blockquote className="pl-6 italic text-white/70 font-poppins text-left">
                  <p>"Lorem ipsum dolor sit amet, consectetur."</p>
                  <cite className="block text-right not-italic mt-2">- Author</cite>
                </blockquote>
          {/* Section 4: Notre Staff */}
          <section className="w-full max-w-5xl font-poppins">
            <h2 className="font-unbounded text-3xl font-bold text-center mb-16">NOTRE STAFF</h2>
            <div className="flex flex-col gap-y-20">
              {staffData.map((member, index) => (
                <div 
                  key={member.name} 
                  className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <img src={member.avatar} alt={`Avatar de ${member.name}`} className="w-40 h-40 rounded-full object-cover border-4 border-brand-accent" />
                  </div>
                  {/* Informations */}
                  <div className={`flex-grow text-center md:text-left ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                    <h3 className="font-unbounded text-2xl font-bold text-orange-400 mb-4">{member.name}</h3>
                    <p className="text-white/80 mb-6">{member.description}</p>
                      <div className={`flex gap-4 justify-center ${index % 2 === 1 ? 'md:justify-end' : 'md:justify-start'}`}>
                      {member.socials.twitter && (
                        <a href={member.socials.twitter} className="hover:text-white/70 transition-colors" aria-label="Twitter"><TwitterIcon /></a>
                      )}
                      {member.socials.twitch && (
                        <a href={member.socials.twitch} className="hover:text-white/70 transition-colors" aria-label="Twitch"><TwitchIcon /></a>
                      )}
                      {member.socials.linkedin && (
                        <a href={member.socials.linkedin} className="hover:text-white/70 transition-colors" aria-label="LinkedIn"><LinkedinIcon /></a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </main>
      </div>
    </div>
  );
};

export default AboutUsPage;