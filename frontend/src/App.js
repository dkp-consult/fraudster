import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

/* Testing connexion front 2 back */

function App() {

  const [backendMessage, setBackendMessage] = useState('');

  useEffect(() => {
    fetch('/api/test')
      .then(response => response.json())
      .then(data => setBackendMessage(data.message))
      .catch(error => console.error("Erreur lors de la connexion au backend:", error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {backendMessage ? backendMessage : "Chargement du message depuis le backend..."}
      </header>
    </div>
  );
}

export default App;
