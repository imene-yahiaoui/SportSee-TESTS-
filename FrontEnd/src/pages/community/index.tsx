/**
 * Community Component
 * @returns {JSX.Element} - The rendered Community component.
 */
import "./style.css";

interface CommunityProps {}
const Community: React.FC<CommunityProps> = () => {
  document.title = "Community- SportSee";
  return (
    <div className="community">
      <h2>Bientôt disponible</h2>
      <p>
        Nous travaillons activement sur cette page. Revenez bientôt pour
        découvrir de nouvelles fonctionnalités.
      </p>
    </div>
  );
};

export default Community;
