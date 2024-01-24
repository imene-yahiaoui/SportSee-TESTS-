/**
 * Component representing an icon with a link.
 *
 * @component
 * @param {Object} props - The properties of the component.
 * @param {string} props.icon - The source URL of the icon image.
 * @returns {JSX.Element} - The rendered Icone component.
 */
import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Icone: React.FC = ({ icon }) => {
  return (
    <div className="icon">
      <Link to="#">
        <img className="icon-color" src={icon} alt="icon" />
      </Link>
    </div>
  );
};

export default Icone;
