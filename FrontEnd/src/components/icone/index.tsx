import React from "react";
import { Link } from "react-router-dom";
 
import "./style.css";

const Icone: React.FC = ({icon,}) => {
  return (
    <div className="icon">
      <Link to="/">
        <img className="icon-color" src={icon} alt="icon" />
      </Link>
      
    </div>
  );
};

export default Icone;
