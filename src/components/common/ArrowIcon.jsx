// Ce composant rend votre SVG manipulable par CSS
const ArrowIcon = (props) => (
  <svg
    width="19"
    height="31"
    viewBox="0 0 19 31"
    xmlns="http://www.w3.org/2000/svg"
    // On passe toutes les props (comme className) au SVG
    {...props}
  >
    <path
      d="M0.964233 30.7638H8.38009L18.0208 16.7881C18.5559 16.0134 18.5559 14.9853 18.0208 14.2105L8.38009 0.236155H0.964233L11.4941 15.5L0.964233 30.7638Z"
      // La magie est ici : la couleur de remplissage est maintenant "currentColor"
      fill="currentColor"
    />
  </svg>
);

export default ArrowIcon;
