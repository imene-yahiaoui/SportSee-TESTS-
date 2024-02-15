/**
 * User component displaying a greeting message and user information.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.userName - The name of the user.
 * @returns {JSX.Element} - The rendered User component.
 */
import React from "react";

import "./style.css";
interface UserProps {
  userName: string;
}
const User: React.FC <UserProps>= ({ userName }) => {
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
