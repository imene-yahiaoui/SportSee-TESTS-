import ProfilUser from "../profil/profilUser";
import WithLoader from "../../helpers/withLoader";
interface ProfilProps {}
const ProfilWhitLoader = WithLoader(ProfilUser);
const Profil: React.FC<ProfilProps> = () => {
  return (
    <div>
      <ProfilWhitLoader />
    </div>
  );
};
export default Profil;
