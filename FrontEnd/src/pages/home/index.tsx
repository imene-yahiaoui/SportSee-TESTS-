/**
 * Home Component
 * @returns {JSX.Element} - The rendered Home component.
 */
import { Link } from "react-router-dom";

import "./style.css";
// import { CallBackend } from "../../helpers/services/callBackend";

import CheckBackend from "../../helpers/services/checkBackend";
const Home: React.FC<HomeProps> = () => {

  document.title = "Home- SportSee";

  return (
    <div>
      <h1> Bienvenue sur SportSee</h1>
      <div className="users">
        <>
          <Link to="/profil/12">
            <button className="userBtn">utilisateur 12</button>
          </Link>
          <Link to="/profil/18">
            <button className="userBtn">utilisateur 18</button>
          </Link>

          <Link to="/profil/1">
            <button className="userBtn">Mock utilisateur 1</button>
          </Link>
          <Link to="/profil/2">
            <button className="userBtn">Mock utilisateur 2</button>
          </Link>
        </>
      </div>
      <CheckBackend />
    </div>
  );
};

export default Home;
