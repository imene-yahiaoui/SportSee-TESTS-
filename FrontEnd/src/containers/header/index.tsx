/**
 * Header component displaying the logo and navigation links.
 *
 * @component
 * @returns {JSX.Element} - The rendered Header component.
 */
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./style.css";

const Header: React.FC = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={logo} alt="logo Kasa" />
      </Link>
      <ul className="nav">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/profil/12">Profil</Link>
        </li>
        <li>
          <Link to="/settings">Réglage</Link>
        </li>
        <li>
          <Link to="/community">Communauté</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
