function PartnersPage() {

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white">
      <h1 className="font-unbounded text-5xl font-bold mb-4">À Propos</h1>
      <p className="text-xl">Ceci est la page "À Propos".</p>
    </div>
  );
}

// La ligne la plus importante : il faut exporter le composant
// pour pouvoir l'importer ailleurs.
export default PartnersPage;