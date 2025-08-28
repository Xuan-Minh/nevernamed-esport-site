function MentionsLegalesPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white px-4 py-12">
      <div className="max-w-3xl w-full">
        <h1 className="font-unbounded text-5xl font-bold mb-6 text-center">Mentions légales</h1>
        <p className="mb-6 text-lg text-center">
          Conformément à la loi, vous trouverez ci-dessous les informations légales du site NeverNamed Esport.
        </p>

        <h2 className="font-bold text-2xl mt-8 mb-2">Éditeur du site</h2>
        <ul className="list-disc list-inside mb-4 text-base">
          <li>Nom de l’association : NeverNamed Esport</li>
          <li>Adresse : [adresse du siège social]</li>
          <li>Responsable de la publication : [Nom, Prénom ou fonction]</li>
          <li>Email : <a href="mailto:contact@nevernamed-esport.com" className="underline text-brand-accent">contact@nevernamed-esport.com</a></li>
          <li>Numéro RNA ou SIREN : [à compléter]</li>
        </ul>

        <h2 className="font-bold text-2xl mt-8 mb-2">Hébergement</h2>
        <ul className="list-disc list-inside mb-4 text-base">
          <li>Hébergeur : [Nom de l’hébergeur, ex : OVH, Infomaniak, etc.]</li>
          <li>Adresse : [adresse de l’hébergeur]</li>
          <li>Téléphone : [numéro de l’hébergeur]</li>
        </ul>

        <h2 className="font-bold text-2xl mt-8 mb-2">Propriété intellectuelle</h2>
        <p className="mb-4 text-base">
          Le contenu du site (textes, images, graphismes, logo, etc.) est protégé par le droit d’auteur. Toute reproduction ou utilisation sans autorisation est interdite.
        </p>

        <h2 className="font-bold text-2xl mt-8 mb-2">Contact</h2>
        <p className="mb-4 text-base">
          Pour toute question, contactez-nous à l’adresse suivante : <a href="mailto:contact@nevernamed-esport.com" className="underline text-brand-accent">contact@nevernamed-esport.com</a>
        </p>

        <p className="text-xs text-gray-400 mt-8 text-center">
          Dernière mise à jour : août 2025
        </p>
      </div>
    </div>
  );
}

export default MentionsLegalesPage;