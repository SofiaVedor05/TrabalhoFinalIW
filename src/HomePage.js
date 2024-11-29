import React from 'react';
import './index.css';

function HomePage({ handleLogout }) {
  return (
    <div className="home-page">
      {/* Botão de Logout no topo esquerdo */}
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>

      {/* Conteúdo principal */}
      <h2>Futebol no Mundo</h2>
      <p>A vitória é imprevisível, mas só existe para quem entra em campo!</p>
    </div>
  );
}

export default HomePage;
