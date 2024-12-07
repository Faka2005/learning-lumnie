import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css'; // Assure-toi de créer ce fichier CSS

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Lumnie</h1>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">Accueil</Link>
            </li>
            <li className="nav-item">
              <Link to="/exercice" className="nav-link">Exercice</Link>
            </li>
            <li className="nav-item">
              <Link to="/course" className="nav-link">Cours</Link>
            </li>
            <li className="nav-item">
              <Link to="/outils" className="nav-link">Outils</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
