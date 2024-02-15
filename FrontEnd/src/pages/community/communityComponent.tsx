/**
 * CommunityComponent Component
 * @returns {JSX.Element} - The rendered CommunityComponent component.
 */
import "./style.css";
interface CommunityComponentProps {}
const CommunityComponent: React.FC<CommunityComponentProps> = () => {
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

export default CommunityComponent;
