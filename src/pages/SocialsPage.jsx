import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Separator from '../components/Separator';
import Button from '../components/Button';
import AnimatedElement from '../components/AnimatedElement';

// Données fictives pour les publications sur les réseaux sociaux
const socialPosts = [
  {
    id: 1,
    platform: 'instagram',
    date: '28/07/2025',
    image: 'https://via.placeholder.com/400x300',
    caption: "Notre victoire hier soir sur scène ! Fier-ère d'elles!",
    icon: <FaInstagram />,
  },
  {
    id: 2,
    platform: 'twitter',
    date: '28/07/2025',
    image: 'https://via.placeholder.com/400x300',
    caption: 'Un match incroyable, une performance à couper le souffle.',
    icon: <FaXTwitter />,
  },
  {
    id: 3,
    platform: 'youtube',
    date: '28/07/2025',
    image: 'https://via.placeholder.com/400x300',
    caption: 'Revivez les meilleurs moments de la finale dans notre dernière vidéo !',
    icon: <FaYoutube />,
  },
];

function SocialsPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.substring(1));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="text-white">
      <div className="container mx-auto px-4">
        {/* HERO */}
        <section className="relative min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center">
          <div className="w-full text-center translate-y-10 md:translate-y-14">
            <h1 className="font-unbounded text-5xl font-bold mb-12">SOCIAL HUB</h1>
            <h2 className="font-unbounded text-3xl font-bold mb-6">NOS CHAINES</h2>
            <div className="flex justify-center items-center gap-10 text-4xl">
              <a href="#" className="text-white/70 hover:text-white transition-colors"><FaInstagram /></a>
              <a href="#" className="text-white/70 hover:text-white transition-colors"><FaXTwitter /></a>
              <a href="#" className="text-white/70 hover:text-white transition-colors"><FaYoutube /></a>
            </div>
          </div>
        </section>

        {/* POSTS */}
        <section className="max-w-6xl mx-auto mt-2 mb-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialPosts.map(post => (
              <div
                key={post.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 text-left flex flex-col shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs text-white/60">{post.date}</span>
                  <span className="text-xl text-white/80">{post.icon}</span>
                </div>
                <img
                  src={post.image}
                  alt={post.caption}
                  className="rounded-lg w-full h-48 object-cover mb-4"
                />
                <p className="text-white/90 flex-grow">{post.caption}</p>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-4"/>

        {/* FORMULAIRE CONTACT */}
        <AnimatedElement>
        <section id="contact-form" className="max-w-4xl mx-auto mt-8 mb-0 text-left">
          <h2 className="font-unbounded text-3xl font-bold text-center mb-6">CONTACTEZ NOUS</h2>
          <form>
            <div className="grid font-poppins md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="prenom" className="block text-sm font-medium text-white/70 mb-2">Prénom</label>
                <input
                  type="text"
                  id="prenom"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div>
                <label htmlFor="nom" className="block text-sm font-medium text-white/70 mb-2">Nom</label>
                <input
                  type="text"
                  id="nom"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <div>
                <label htmlFor="tel" className="block text-sm font-medium text-white/70 mb-2">Tél.</label>
                <input
                  type="tel"
                  id="tel"
                  className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>

            <div className="mb-6 font-poppins">
              <label className="block text-sm font-medium text-white/70 mb-3">Sujet du message</label>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="form-checkbox bg-gray-700 text-cyan-500 focus:ring-cyan-500" defaultChecked /> Partenariat
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="form-checkbox bg-gray-700 text-cyan-500 focus:ring-cyan-500" /> Rejoindre la team
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="form-checkbox bg-gray-700 border-gray-600 text-cyan-500 focus:ring-cyan-500" /> Autres
                </label>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">Message</label>
              <textarea
                id="message"
                rows="5"
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              ></textarea>
            </div>

            <div className="text-center pb-10">
              <Button type="submit">Envoyez votre message</Button>
            </div>
          </form>
        </section>
        </AnimatedElement>
      </div>
    </div>
  );
}

export default SocialsPage;