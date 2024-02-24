/**
 * Header component displaying the logo and navigation links.
 *
 * @component
 * @returns {JSX.Element} - The rendered Header component.
 */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./style.css";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src={logo} alt="logo" />
      </Link>
      <div
        className={`menu-icon ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={toggleMenu}>
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/profil/12" onClick={toggleMenu}>
            Profil
          </Link>
        </li>
        <li>
          <Link to="/settings" onClick={toggleMenu}>
            Réglage
          </Link>
        </li>
        <li>
          <Link to="/community" onClick={toggleMenu}>
            Communauté
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
