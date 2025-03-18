import React from 'react';
import './Header.css';
import logo from './assets/ysmart.jpg';
import tokenManagerService from "./services/tokenManager.service.js";


const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      
      <nav className="nav">
        <ul className="navbar">
          <li>
            <a href="/devices" className="nav-link">Accueil</a>
          </li>
          <li>
            <a href="/commands" className="nav-link">Historique</a>
          </li>
          <li>
            <a onClick={tokenManagerService.removeToken} href="/" className="nav-link">Déconnexion</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;