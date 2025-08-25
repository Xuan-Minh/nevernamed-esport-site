function Nowornever() {
  return (
    // Le conteneur qui cache le débordement
   <div className="w-full overflow-x-hidden overflow-y-hidden py-20 sm:py-28">
      {/* Le conteneur qui empêche le retour à la ligne */}
      <div className="flex whitespace-nowrap">
        {/* Premier bloc de texte, animé */}
        <div className="animate-marquee flex-shrink-0">
<span className="font-amanojaku text-4xl sm:text-7xl md:text-9xl text-white/10 px-4 sm:px-8">NOW OR NEVER</span>
<span className="font-amanojaku text-4xl sm:text-7xl md:text-9xl text-white/10 px-4 sm:px-8">NOW OR NEVER</span>
<span className="font-amanojaku text-4xl sm:text-7xl md:text-9xl text-white/10 px-4 sm:px-8">NOW OR NEVER</span>
        </div>
        <div className="animate-marquee flex-shrink-0" aria-hidden="true">
<span className="font-amanojaku text-4xl sm:text-7xl md:text-9xl text-white/10 px-4 sm:px-8">NOW OR NEVER</span>
<span className="font-amanojaku text-4xl sm:text-7xl md:text-9xl text-white/10 px-4 sm:px-8">NOW OR NEVER</span>
<span className="font-amanojaku text-4xl sm:text-7xl md:text-9xl text-white/10 px-4 sm:px-8">NOW OR NEVER</span>
        </div>
      </div>
    </div>
  );
}

export default Nowornever;