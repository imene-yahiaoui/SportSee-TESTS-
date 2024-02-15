/**
 * Settings Component
 * @returns {JSX.Element} - The rendered Settings component.
 */
import SettingsComponent from "./settingsComponent";
import "./style.css";
import WithLoader from "../../helpers/withLoader";

interface SettingsProps {}

const SettingsWhitLoader = WithLoader(SettingsComponent);

const Settings: React.FC<SettingsProps> = () => {
  document.title = "settings- SportSee";

  return (
    <div>
      <SettingsWhitLoader />
    </div>
  );
};

export default Settings;
