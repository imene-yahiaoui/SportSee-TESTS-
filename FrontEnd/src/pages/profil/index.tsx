import ProfilUser from "../profil/profilUser";
import WithLoader from "../../helpers/withLoader";

const ProfilWhitLoader = WithLoader(ProfilUser);
const Profil: React.FC<ProfilProps> = (props) => {
  console.log("Props dans Profil:", props);
  return (
    <div>
      <ProfilWhitLoader  {...props}/>
    </div>
  );
};
export default Profil;
