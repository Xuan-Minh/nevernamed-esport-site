import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function SocialsPage() {
  const location = useLocation();

  useEffect(() => {
    // Vérifie s'il y a une ancre dans l'URL
    if (location.hash) {
      // Trouve l'élément correspondant à l'ancre
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        // Fait défiler la vue jusqu'à l'élément
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
          <h2 className="font-unbounded text-3xl font-bold mb-8">Contactez-nous</h2>
          {/* ... Vos champs de formulaire ici ... */}
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Nom</label>
            <input type="text" id="name" className="w-full p-2 rounded bg-gray-800 border border-gray-600" />
          </div>
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
            Envoyer
          </button>
        </form>

         {/* Espace pour simuler du contenu après le formulaire */}
        <div className="h-screen"></div>
      </div>
    </div>
  );
}

export default SocialsPage;