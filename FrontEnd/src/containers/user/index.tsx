import React from "react";

import "./style.css";

const User: React.FC = ({ userName }) => {
  return (
    <div className="user">
      <div className="user-top">
        <h1> Bonjour </h1>
        <h1 className="user-name"> {userName} </h1>
      </div>
      <p> Félicitation ! Vous avez explosé vos objectifs hier 👏 </p>
    </div>
  );
};

export default User;
