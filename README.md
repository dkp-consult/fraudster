# [fraudster.tech](https://fraudster.tech/)

Ce projet communautaire et collaboratif aura pour objectif de signaler les formateurs, vendeur de formation, etc. que l'on pourrait considérer comme 'frauduleux' que ce soit pas la vente de contenu open-source, le mensonge concernant la réussite éventuelle (photos d'internet, etc), ceux qui fonctione par réseaux afin de simuler une réussite en groupe, etc. 

Ensuite, si le POC fonctionne, il est possible que la plateforme permettent de signaler des fraudes et arnaques liées à d'autres domaine. 

## Disclaimer

[fraudster.tech](https://fraudster.tech/) n'a aucune vocation à donner une note à différent formateur que ce soit sur la qualité de leur formation, de leurs contenus ou autre. L'idée sous-jacente est vraiment de faire une annuaire de signalement des arnaques et malhonneteté dans la vente de formation. 

## Objectif

[fraudster.tech](https://fraudster.tech/) est une plateforme destinée à dénoncer des formateurs en ligne malhonnêtes, vendant de la poudre aux yeux, et autres pratiques douteuses. L'objectif est de créer une communauté informée, capable de prendre des décisions éclairées sur les formations en ligne auxquelles elle choisit de participer.

## Technologies et Outils Utilisés

- **Front-end** : React avec Tailwind CSS pour une interface utilisateur moderne et responsive. Le front sera dans un premier temps hébergé sur Vercel afin de limiter les coûts du POC. 
- **Back-end** : Node.js avec le framework Express.js, fournissant une architecture solide pour les services web. Je pense utiliser Heroku pour héberger le back, mais n'ayant aucune expérience avec le backend, cela pourra évoluer et sera mis à jour dans le readme. 
- **Base de données** : MongoDB avec Mongoose, offrant une solution flexible et puissante pour gérer les données. Ici, je ferais appel également à un service online à moindre coûts, je ne dispose pas des connaissances pour mettre tout cela en place seul. 

## Fonctionnalités

### Fonctionnalités Frontend

- [ ] **Page d'accueil** :
  - [ ] Présentation du concept du site.
  - [ ] Mise en avant des formateurs les plus populaires ou bien notés.

- [ ] **Recherche et Filtres** :
  - [ ] Recherche de formateurs par nom, domaine d'expertise, etc.
  - [ ] Filtres avancés par catégorie, évaluation, etc.

- [ ] **Page de Profil Formateur** :
  - [ ] Détails du formateur (bio, domaine d'expertise, liens vers réseaux sociaux, site web).
  - [ ] Affichage des évaluations et commentaires des utilisateurs.

- [ ] **Soumission de Signalements** :
  - [ ] Formulaire permettant aux utilisateurs de soumettre des signalements concernant les formateurs.
  - [ ] Choix du type de problème rencontré et possibilité d'ajouter une description.

- [ ] **Ajout d'Évaluations et Commentaires** (facultatif) :
  - [ ] Fonctionnalité permettant aux utilisateurs de laisser une évaluation et un commentaire sur les profils des formateurs.

- [ ] **Inscription/Connexion** (pour une phase ultérieure) :
  - [ ] Système d'authentification pour les utilisateurs souhaitant laisser des évaluations ou des signalements.

  - [ ] **FAQs / Aide** : Pour répondre aux questions courantes sur la manière dont le site fonctionne, la manière de soumettre des signalements, et d'autres informations utiles pour les utilisateurs et les formateurs/influenceurs.

- [ ] **Contact / Assistance** : Une page pour permettre aux utilisateurs de vous contacter directement pour de l'assistance, des suggestions, ou des feedbacks.

- [ ] **Politique de Confidentialité et CGU (Conditions Générales d'Utilisation)** : Très important pour informer les utilisateurs sur l'utilisation de leurs données et les conditions d'utilisation du service.

- [ ] **Page "À propos"** : Pour raconter l'histoire de votre projet, présenter l'équipe derrière, et expliquer votre vision et vos objectifs. Cela aide à construire une connexion avec les utilisateurs.

### Fonctionnalités Backend

- [ ] **Gestion des Utilisateurs** (second temps) :
  - [ ] Inscription, connexion, gestion des profils utilisateurs (pour une phase ultérieure).

- [ ] **API de Recherche et Filtres** :
  - [ ] API permettant la recherche et l'application de filtres sur les formateurss.

- [ ] **API de Profil Formateur** :
  - [ ] Récupération et envoi des données détaillées pour chaque formateur.

- [ ] **Gestion des Signalements** :
  - [ ] API pour la soumission et le stockage des signalements par les utilisateurs.

- [ ] **Gestion des Évaluations et Commentaires** (second temps) :
  - [ ] API permettant aux utilisateurs de soumettre des évaluations et commentaires.

- [ ] **Sécurité** :
  - [ ] Mise en place de mesures de sécurité pour protéger les données sensibles et les interactions avec l'API.

### Base de Données

- [ ] **Modèle Formateur** :
  - [ ] Structure pour stocker les informations des formateurss.

- [ ] **Modèle d'Évaluation/Commentaire** :
  - [ ] Structure pour stocker les évaluations et commentaires des utilisateurs.

- [ ] **Modèle de Signalement** :
  - [ ] Structure pour enregistrer les signalements soumis par les utilisateurs.

- [ ] **Modèle Utilisateur** (pour une phase ultérieure) :
  - [ ] Structure pour gérer les informations et les actions des utilisateurs inscrits.

## Avancées du Projet

- [x] Achat NDD
- [ ] Réflexion charte graphique
- [x] Création d'un logo
- [ ] Création du README - WIP
- [x] Création du projet
- [ ] Mise en place de la structure du repo
- [ ] Mise en place de la CI
- [ ] Mise en place de la DB
- [ ] Création de l'ensemble du front
- [ ] Implémentation des fonctionnalités back-end
- [ ] Sécurité et tests
- [ ] Déploiement
- [ ] Retours des utilisateurs et itérations

## Comment Contribuer

Nous sommes heureux de recevoir des contributions de la part de notre communauté. Si vous souhaitez contribuer au projet, veuillez suivre ces étapes :

1. **Forker le projet** : Commencez par forker le projet sur votre compte GitHub.
2. **Créer une branche** : Créez une branche pour vos modifications. Utilisez un nom descriptif, par exemple : `git checkout -b feature/nom-de-votre-feature`.
3. **Apporter vos modifications** : Apportez les modifications ou ajouts que vous souhaitez.
4. **Commit vos changements** : Faites un commit de vos changements avec un message descriptif. Par exemple : `git commit -m 'Ajout de telle fonctionnalité'`.
5. **Pusher sur votre fork** : Poussez vos changements sur votre fork. `git push origin feature/nom-de-votre-feature`.
6. **Ouvrir une Pull Request** : Allez sur le GitHub du projet original et ouvrez une Pull Request avec une description claire de vos modifications.

Assurez-vous de respecter les conventions de code et les tests déjà en place. Ajoutez des tests pour vos nouvelles fonctionnalités si possible.

## Licence

Ce projet est open-source et communautaire, des renseignements seront pris afin d'utiliser la licence qui convient le mieux. 

## Contact