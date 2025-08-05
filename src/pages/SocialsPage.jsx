import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function SocialsPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]); // Se déclenche à chaque changement d'URL

  return (
    <div className="min-h-screen text-white pt-24">
      <div className="container mx-auto text-center">
        <h1 className="font-unbounded text-5xl font-bold mb-4">Social Hub</h1>
        <p className="text-xl mb-16">Rejoignez-nous sur nos réseaux !</p>
        
        {/* Espace pour simuler du contenu et rendre le défilement visible */}
        <div className="h-screen">
            <p>Contenu divers de la page Socials...</p>
        </div>

        {/* Assurez-vous que l'id ici correspond à l'ancre dans le Link */}
        <form id="contact-form" className="max-w-xl mx-auto">

        </form>
      </div>
    </div>
  );
}

export default SocialsPage;