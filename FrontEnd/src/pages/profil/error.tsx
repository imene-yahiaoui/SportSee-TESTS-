/**
 * Error Component
 * @component
 * @category Components/Error
 * @description Renders an error message with a link to the homepage.
 * @returns {JSX.Element} - The rendered Error component.
 */
import "./style.css";

const Error = () => {
  return (
    <div>
      <p className="errBackend">
        Une erreur s'est produite lors de la récupération des données.
      </p>
      <a href="/" className="link_404">
        Aller à la page d'accueil
      </a>
    </div>
  );
};

export default Error;
