import React from 'react';
import mainLogo from '../assets/mainlogo.png';
import avatarPlaceholder from '../assets/avatar-placeholder.png'; // Placeholder pour les avatars
import Separator from '../components/Separator';
// --- Icônes pour les réseaux sociaux ---
const TwitterIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>;
const TwitchIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M11.571 4.714h1.715v5.143h-1.715V4.714zm4.714 0h1.715v5.143h-1.715V4.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L24 15.428V0H6zm16.286 14.571-3.428 3.429h-3.429l-3 3v-3H6.857V1.714h15.429v12.857z"></path></svg>;
const SocialIcon = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>; // Placeholder

// --- Données pour la section Staff (facile à modifier) ---
const staffData = [
  {
    name: 'Maestroke',
    avatar: avatarPlaceholder,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.',
    socials: { twitter: '#', twitch: '#', other: '#' }
  },
  {
    name: 'Solenne',
    avatar: avatarPlaceholder,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.',
    socials: { twitter: '#', twitch: '#', other: '#' }
  },
  {
    name: 'syNip',
    avatar: avatarPlaceholder,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue.',
    socials: { twitter: '#', twitch: '#', other: '#' }
  }
];

// --- Composant principal de la page ---
const AboutUsPage = () => {
  return (
    <div className="bg-brand-dark text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <main className="flex flex-col items-center gap-y-24 md:gap-y-32">

          {/* Section 1: Titre principal */}
          <section className="w-full flex flex-col items-center text-center">
            <div className="relative flex justify-center items-center w-full max-w-2xl h-48">
              <img 
                src={mainLogo} 
                alt=""
                className="absolute inset-0 w-full h-full object-contain z-0 opacity-10"
              />
              <h1 className="relative font-unbounded text-4xl md:text-5xl font-bold z-10">
                WHAT'S OUR NAME ?
              </h1>
            </div>
          </section>

          {/* Section 2: Nos Valeurs */}
          <section className="w-full max-w-3xl text-center">
            <h2 className="font-unbounded text-3xl font-bold mb-6 justify-start">NOS VALEURS</h2>
            <p className="text-white/80 leading-relaxed">
              Nevernamed prône l'inclusivité, l'égalité, la mixité et l'apprentissage ainsi que la sensibilisation au secteur esportif et aux métiers du numérique à travers ses actions. 
Constituée de passionnés et professionnels, notre structure est prête à accueillir, accompagner et faire briller vos talents. 

Avec une équipe féminine en plein essor, Nevernamed s'engage à promouvoir et à aider à rendre l'esport féminin plus visible.
            </p>
          </section>

          {/* Section 3: Nos Missions */}
          <section className="w-full max-w-3xl text-center">
            <h2 className="font-unbounded text-3xl font-bold mb-6">NOS MISSIONS</h2>
            <p className="text-white/80 leading-relaxed mb-12">
              Former, éduquer, accompagner et performer sont les missions de notre structure. 

En intervenant auprès de l'Éducation Nationale dans les collèges et lycées à travers différents ateliers sur l'univers de l'esport, nous participons à la sensibilisation concernant la mixité et l'inclusivité des métiers de l'univers de l'esport et du jeu vidéo. 

Aussi, nous accompagnons des joueuses dans leur carrière esportive afin de leur permettre de performer au plus haut de leur potentiel. 

NeverNamed est la structure de tous les possibles, mélangeant professionnalisme et bienveillance.
            </p>
            <blockquote className="pl-6 italic text-white/70">
              <p>"Lorem ipsum dolor sit amet, consectetur."</p>
              <cite className="block text-right not-italic mt-2">- Author</cite>
            </blockquote>
            <Separator/>
          </section>

          {/* Section 4: Notre Staff */}
          <section className="w-full max-w-5xl">
            <h2 className="font-unbounded text-3xl font-bold text-center mb-16">NOTRE STAFF</h2>
            <div className="flex flex-col gap-y-20">
              {staffData.map((member, index) => (
                <div 
                  key={member.name} 
                  // Alterne la mise en page en fonction de l'index (pair/impair)
                  className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <img src={member.avatar} alt={`Avatar de ${member.name}`} className="w-40 h-40 rounded-full object-cover border-4 border-brand-accent" />
                  </div>
                  {/* Informations */}
                  <div className={`flex-grow ${index % 2 === 1 ? 'md:text-right' : 'md:text-left'}`}>
                    <h3 className="font-unbounded text-2xl font-bold text-orange-400 mb-4">{member.name}</h3>
                    <p className="text-white/80 mb-6">{member.description}</p>
                    <div className={`flex gap-4 ${index % 2 === 1 ? 'md:justify-end' : 'md:justify-start'}`}>
                      <a href={member.socials.twitter} className="hover:text-white"><TwitterIcon /></a>
                      <a href={member.socials.twitch} className="hover:text-white"><TwitchIcon /></a>
                      <a href={member.socials.other} className="hover:text-white"><SocialIcon /></a>
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