function PolitiquesPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white px-4 py-12">
      <div className="max-w-3xl w-full">
        <h1 className="font-unbounded text-5xl font-bold mb-6 text-center">Politique de confidentialité</h1>
        <p className="mb-6 text-lg text-center">
          Cette page explique comment NeverNamed Esport collecte, utilise et protège vos données personnelles lorsque vous utilisez notre site.
        </p>

        <h2 className="font-bold text-2xl mt-8 mb-2">1. Données collectées</h2>
        <ul className="list-disc list-inside mb-4 text-base">
          <li>Informations que vous nous transmettez via les formulaires (nom, email, message, etc.).</li>
          <li>Données de navigation collectées automatiquement (cookies, adresse IP, statistiques anonymes).</li>
        </ul>

        <h2 className="font-bold text-2xl mt-8 mb-2">2. Utilisation des données</h2>
        <ul className="list-disc list-inside mb-4 text-base">
          <li>Répondre à vos demandes via le formulaire de contact.</li>
          <li>Améliorer l’expérience utilisateur et la sécurité du site.</li>
          <li>Analyser la fréquentation du site (statistiques anonymes).</li>
        </ul>

        <h2 className="font-bold text-2xl mt-8 mb-2">3. Cookies</h2>
        <p className="mb-4 text-base">
          Ce site peut utiliser des cookies pour améliorer la navigation et mesurer l’audience. Vous pouvez configurer votre navigateur pour refuser les cookies.
        </p>

        <h2 className="font-bold text-2xl mt-8 mb-2">4. Partage des données</h2>
        <p className="mb-4 text-base">
          Vos données ne sont jamais revendues. Elles peuvent être partagées uniquement avec des prestataires techniques nécessaires au fonctionnement du site (hébergement, statistiques).
        </p>

        <h2 className="font-bold text-2xl mt-8 mb-2">5. Vos droits</h2>
        <p className="mb-4 text-base">
          Conformément au RGPD, vous pouvez demander l’accès, la rectification ou la suppression de vos données personnelles en nous contactant à l’adresse suivante : <a href="mailto:contact@nevernamed-esport.com" className="underline text-brand-accent">contact@nevernamed-esport.com</a>
        </p>

        <h2 className="font-bold text-2xl mt-8 mb-2">6. Contact</h2>
        <p className="mb-4 text-base">
          Pour toute question concernant la confidentialité ou vos données, contactez-nous à l’adresse ci-dessus.
        </p>

        <p className="text-xs text-gray-400 mt-8 text-center">
          Dernière mise à jour : août 2025
        </p>
      </div>
    </div>
  );
}

export default PolitiquesPage;