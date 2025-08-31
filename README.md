<p align="center">
  <img src="public/assets/mainlogo.png" alt="NeverNamed Logo" width="120"/>
</p>

<h1 align="center">🎮 NeverNamed Esport Site</h1>

<p align="center">
  <a href="https://nevernamed-esport-site.vercel.app/"><img src="https://img.shields.io/badge/Site%20en%20ligne-Vercel-000?logo=vercel&logoColor=white" alt="Vercel"></a>
  <img src="https://img.shields.io/github/package-json/v/Xuan-Minh/nevernamed-esport-site?color=blue&label=version" alt="Version">
  <img src="https://img.shields.io/github/license/Xuan-Minh/nevernamed-esport-site?color=green" alt="License">
  <img src="https://img.shields.io/github/last-commit/Xuan-Minh/nevernamed-esport-site?color=orange" alt="Last commit">
</p>

<p align="center">
  Plateforme web dédiée à l'équipe <b>NeverNamed</b> pour la gestion et la présentation de ses activités esport.
  <br>
  <a href="https://nevernamed-esport-site.vercel.app/">🌐 Voir le site en ligne</a>
</p>

---

## 🛠️ Stack technique

| Frontend | Routing      | SEO & i18n         | Styles/Tailwind       | Déploiement |
| -------- | ------------ | ------------------ | --------------------- | ----------- |
| React.js | React Router | React Helmet Async | Tailwind CSS, PostCSS | Vercel      |

**Fonctionnalités clés :**

- Lazy loading (React.lazy + Suspense) sur toutes les pages
- SEO dynamique (React Helmet)
- Internationalisation (i18next, fichiers fr/en complets)
- Accessibilité avancée (a11y, navigation clavier, aria-labels)
- Performances optimisées (lazy loading images, code splitting, WebP)
- Structure modulaire et composants réutilisables

---

## 🚀 Installation & Lancement

### Prérequis

- Node.js & npm
- Git

### Étapes

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/Xuan-Minh/nevernamed-esport-site.git
   ```
2. **Installer les dépendances**
   ```bash
   cd nevernamed-esport-site
   npm install
   ```
3. **Lancer le projet en local**
   ```bash
   npm run dev
   ```
   Rendez-vous sur [http://localhost:5173](http://localhost:5173) (ou le port affiché dans le terminal).

---

## 🗂️ Structure du projet

```
nevernamed-esport-site/
│
├── public/
│   ├── logo.png         # Logo de l'équipe
│   └── ...              # Autres fichiers statiques (images, favicon, etc.)
│
├── src/
│   ├── assets/          # Images, polices, icônes, etc.
│   ├── components/      # Composants réutilisables (Header, Footer, Socials, etc.)
│   ├── pages/           # Pages principales (Home, About, Teams, Partners, Socials, Legal, Terms, Policies)
│   ├── App.jsx          # Composant principal, gestion du router
│   ├── main.jsx         # Point d'entrée de l'application
│   └── index.css        # Styles globaux
│
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
```

---

## 👤 Auteur

- **Xuan-Minh TRAN** — Développement & intégration du site

---

## ⚖️ Licence

Ce projet est soumis à la licence choisie dans ce dépôt. Consulte [LICENSE](LICENSE) pour plus d’informations.

---

<p align="center">
  <img src="public/preview.png" alt="Aperçu du site" width="60%"/>
</p>

---

---

## 📝 Bonnes pratiques & Checklist

- [x] Accessibilité (a11y) : balises sémantiques, aria-labels, navigation clavier
- [x] SEO : balises meta dynamiques, titres, descriptions, Open Graph, Twitter Card
- [x] Performances : lazy loading images, code splitting, bundle léger
- [x] Internationalisation : fichiers fr/en complets, détection automatique
- [x] Sécurité : pas de données sensibles, headers à configurer côté serveur
- [x] Responsive : Tailwind, breakpoints testés mobile/tablette
- [x] Nettoyage du code : imports et composants inutiles supprimés
- [x] Documentation à jour

N’hésite pas à contribuer, signaler un bug ou proposer des idées d’amélioration !
Pour toute question, contacte-moi sur GitHub.

---
