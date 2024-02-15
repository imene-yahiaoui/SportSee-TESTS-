/**
 * Community Component
 * @returns {JSX.Element} - The rendered Community component.
 */
import CommunityComponent from "./communityComponent";
import "./style.css";
import WithLoader from "../../helpers/withLoader";
interface CommunityProps {}
const CommunityWhitLoader = WithLoader(CommunityComponent);
const Community: React.FC<CommunityProps> = () => {
  document.title = "Community- SportSee";
  return (
    <div>
      <CommunityWhitLoader />
    </div>
  );
};

export default Community;
