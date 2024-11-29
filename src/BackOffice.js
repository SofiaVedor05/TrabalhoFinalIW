import React from 'react';

function BackOffice() {
  const handleLogout = () => {
    localStorage.removeItem('auth'); // Remove autenticação
    window.location.href = '/'; // Redireciona para o login
  };

  return (
    <div>
      <h1>Bem-vindo ao BackOffice!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default BackOffice;
