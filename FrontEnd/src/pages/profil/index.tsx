/**
 * Profil Component
 * @component
 * @category Components/Profile
 * @description Renders a user profile with loading indicator.
 * @returns {JSX.Element} - The rendered Profil component.
 */
import ProfilUser from "../profil/profilUser";
import WithLoader from "../../helpers/withLoader";
import useUserData from "../../helpers/services/fetchdata";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
interface ProfilProps {}
const ProfilWhitLoader = WithLoader(ProfilUser);
const Profil: React.FC<ProfilProps> = () => {
  const { id } = useParams<{ id?: string }>() ?? { id: undefined };
  console.log("le id dans le c Parent ", id);
  const isMockUser = [1, 2].includes(parseInt(id ?? "0", 10));
  const [loading, setLoading] = useState(true);
  const { infoUser, Iserror } = useUserData(isMockUser, id);
  console.log(" dans le composet parent  infoUser", infoUser);
  console.log(" dans le composet parent  Iserror", Iserror);

  useEffect(() => {
    if (Iserror === true || Iserror === false) {
      setLoading(false);
    }
  }, [Iserror, infoUser]);

  return (
    <div>
      <ProfilWhitLoader
        loading={loading}
        infoUser={infoUser}
        Iserror={Iserror}
      />
    </div>
  );
};
export default Profil;
