mon-projet/
│
├── .github/                         # Dossiers pour les workflows GitHub Actions
│   └── workflows/
│       ├── ci-frontend.yml          # CI pour le frontend
│       └── ci-backend.yml           # CI pour le backend
│
├── backend/                         # Tout le code source du backend
│   ├── src/
│   │   ├── controllers/             # Logique de contrôle pour gérer les requêtes
│   │   │   └── formateurController.js
│   │   ├── models/                  # Modèles Mongoose pour la structure de données
│   │   │   ├── formateurModel.js
│   │   │   └── evaluationModel.js
│   │   ├── routes/                  # Définition des routes Express
│   │   │   ├── formateurRoutes.js
│   │   │   └── evaluationRoutes.js
│   │   ├── utils/                   # Fonctions utilitaires, middleware, etc.
│   │   ├── app.js                   # Point d'entrée de l'application Express
│   │   └── server.js                # Serveur HTTP et connexion DB
│   ├── .env                         # Variables d'environnement pour le backend
│   ├── package.json
│   └── ...
│
├── frontend/                        # Tout le code source du frontend
│   ├── public/                      # Fichiers statiques pour le frontend
│   │   ├── index.html
│   │   └── ...
│   ├── src/
│   │   ├── components/              # Composants React réutilisables
│   │   │   ├── Navbar.js
│   │   │   ├── Footer.js
│   │   │   └── ...
│   │   ├── pages/                   # Composants de page React
│   │   │   ├── HomePage.js
│   │   │   ├── FormateurPage.js
│   │   │   └── ...
│   │   ├── App.js                   # Composant principal de l'application React
│   │   ├── index.js                 # Point d'entrée React
│   │   └── index.css                # Styles globaux
│   ├── package.json
│   └── tailwind.config.js           # Configuration de Tailwind CSS
│
├── scripts/                         # Scripts utiles pour le développement et le déploiement
│   └── deploy.sh
│
├── package.json                     # À la racine pour les scripts et dépendances communs
└── README.md
