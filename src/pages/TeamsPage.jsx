function TeamsPage() {
  // Pour l'instant, on retourne juste un titre simple
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white">
      <h1 className="font-unbounded text-5xl font-bold mb-4">Select our roster</h1>
    </div>
  );
}

// La ligne la plus importante : il faut exporter le composant
// pour pouvoir l'importer ailleurs.
export default TeamsPage;