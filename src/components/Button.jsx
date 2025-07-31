import arrowSvg from '../assets/arrow.svg';
function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-transparent hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {children}
    </button>
  );
}

export default Button;