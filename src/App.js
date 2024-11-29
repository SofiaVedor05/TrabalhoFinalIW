import React, { useState } from 'react';
import './App.css';
import Login from './login'; // Importa o componente Login
import './index.css';
import HomePage from './HomePage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true); // Atualiza o estado para autenticado
  };

  const handleLogout = () => {
    setIsAuthenticated(false); // Atualiza o estado para não autenticado
    localStorage.removeItem('auth'); // Remove a autenticação do Local Storage
  };

  return (
    <div className="App">
      {!isAuthenticated ? (
        // Exibe o componente de login se não estiver autenticado
        <Login onLogin={handleLogin} />
      ) : (
        // Exibe o conteúdo principal se estiver autenticado
        <div>
          <header className="App-header">
          <HomePage handleLogout={handleLogout} />
          </header>
        </div>
      )}
    </div>
  );
}

export default App;
