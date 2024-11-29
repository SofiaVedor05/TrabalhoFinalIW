import React, { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const authUser = 'admin';
    const authPass = 'admin';

    if (username === authUser && password === authPass) {
      onLogin(); // Chama a função de login passada como prop
      localStorage.setItem('auth', 'true'); // Salva a autenticação
    } else {
      alert('Credenciais inválidas!');
    }
  };

  return (
    <div>
      <h1>Bem-Vindo</h1>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Utilizador"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}

export default Login;
