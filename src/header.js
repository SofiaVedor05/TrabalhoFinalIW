import React from 'react';
import './index.css'; // Certifique-se de que o arquivo CSS está no caminho correto

function Header() {
  return (
    <header className="header">
      <nav className="nav-bar">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#home" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="#equipas" className="nav-link">Equipas</a>
          </li>
          <li className="nav-item">
            <a href="#jogadores" className="nav-link">Jogadores</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
