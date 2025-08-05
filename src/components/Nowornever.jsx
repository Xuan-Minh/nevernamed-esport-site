function Nowornever() {
  return (
    // Le conteneur prend toute la largeur et cache le débordement
    <div className="w-full overflow-x-hidden py-16">
      {/* Le conteneur flex qui sera animé */}
      <div className="flex animate-marquee-full">
        {/* Chaque enfant doit avoir une base de 100% de la largeur et ne pas rétrécir */}
        <div className="flex-shrink-0 w-full flex justify-around items-center font-amanojaku text-9xl text-white/10 text-nowrap">
          <span>NOW OR NEVER </span>
          <span>NOW OR NEVER </span>
          <span>NOW OR NEVER </span>
        </div>
        {/* Le deuxième enfant est une copie exacte pour la boucle */}

      </div>
    </div>
  );
}

export default Nowornever;