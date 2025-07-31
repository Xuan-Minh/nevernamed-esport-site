import arrowSvg from '../assets/arrow.svg';
function Button({ children, onClick }) {
  return (
    <button
    
      onClick={onClick}
      className="font-unbounded text-m border-solid-white bg-transparent border-2 rounded-full px-4 py-2 flex items-center gap-2 hover:bg-white hover:text-black transition-colors duration-300"
    >
      <img src={arrowSvg} alt="Arrow Icon" className="w-4 h-4" />
      {children}
    </button>
  );
}

export default Button;