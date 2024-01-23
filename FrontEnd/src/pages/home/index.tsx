import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

import "./style.css";
import { isBackendAvailable } from "../../helpers/services/services";
const Home: React.FC<HomeProps> = () => {
  document.title = "Home- SportSee";
  const [isBackendAccessible, setIsBackendAccessible] = useState<
    boolean | null
  >(null);
  useEffect(() => {
    const isBackendReady = isBackendAvailable();
    setIsBackendAccessible(isBackendReady);
  }, []);

  return (
    <div>
      <h1> Bienvenue sur SportSee</h1>
      <div className="users">
        {isBackendAccessible ? (
          <>
            <Link to="/profil/12">
              <button className="userBtn">utilisateur 12</button>
            </Link>
            <Link to="/profil/18">
              <button className="userBtn">utilisateur 18</button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/profil/1">
              <button className="userBtn">utilisateur 1</button>
            </Link>
            <Link to="/profil/2">
              <button className="userBtn">utilisateur 2</button>
            </Link>
            <Link to="/profil/12">
              <button className="userBtn">utilisateur 12</button>
            </Link>
            <Link to="/profil/18">
              <button className="userBtn">utilisateur 18</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
