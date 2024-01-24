/**
 * Vertical navigation component displaying icons and copyright information.
 *
 * @component
 * @returns {JSX.Element} - The rendered Verticalnavigation component.
 */
import Icon from "../../components/icone";
import "./style.css";
import Yoga from "../../assets/images/yoga.svg";
import Swimming from "../../assets/images/swimming.svg";
import Bicycle from "../../assets/images/bicycle.svg";
import Exercise from "../../assets/images/exercise.svg";

const Verticalnavigation: React.FC = () => {
  return (
    <div className="vertical-navigation">
    <nav className="vertical-navigation-icons">
      <Icon icon={Yoga} />
      <Icon icon={Swimming} />
      <Icon icon={Bicycle} />
      <Icon icon={Exercise} />
    </nav>
    <p className="vertical-navigation-p"> Copiryght, SportSee 2020 </p>
    </div>
  );
};

export default Verticalnavigation;
