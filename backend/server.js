const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bienvenue sur le backend de notre projet !');
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

/* Test connexion front to back */

app.get('/api/test', (req, res) => {
    res.json({ message: "Connexion réussie au backend !" });
  });
  