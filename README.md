# 🎓 University Platform Front-End (SAAM)

## ✨ Aperçu du Projet

Ce dépôt contient le code source de l'interface utilisateur (Front-End) de la plateforme de gestion universitaire. Développée avec **Next.js**, **React** et **TypeScript**, cette application offre une interface moderne et intuitive pour la gestion complète des étudiants, enseignants, cours, inscriptions et du suivi académique.

-----

## 🛠️ Technologies Utilisées

| Catégorie | Technologie | Description |
| :--- | :--- | :--- |
| **Framework** | **Next.js** | Framework React pour le rendu côté serveur (SSR) et le routage. |
| **Langage** | **TypeScript** | Assure la robustesse et la scalabilité du code. |
| **UI/Composants**| **React** | Bibliothèque principale pour la construction de l'interface utilisateur. |
| **Dépendances UI**| **Shadcn UI** | Composants réutilisables basés sur Tailwind CSS. |
| **CSS** | **Tailwind CSS** | Framework CSS utilitaire pour un style rapide et réactif. |
| **Gestion des Paquets**| **npm** | Utilisé pour installer et gérer les dépendances. |

-----

## 🏗️ Structure des Modules

L'application est organisée en modules clairs, chacun gérant une fonctionnalité spécifique de la plateforme :

  * **`/app/academic-tracking`**: Suivi académique des étudiants (notes, GPA, attestations).
  * **`/app/courses`**: Gestion complète des cours (création, modification, affichage).
  * **`/app/enrollments`**: Gestion du système d'inscription aux cours.
  * **`/app/students`**: Gestion du système des étudiants (CRUD).
  * **`/app/teachers`**: Gestion du système des enseignants (CRUD).
  * **`/components`**: Composants d'interface utilisateur réutilisables (`Sidebar`, `PageHeader`, `StatCard`, etc.).
  * **`/lib/api`**: Fichiers de mock API (à remplacer par vos appels **SOAP/REST** réels).

-----

## ⚙️ Installation et Démarrage Local

Suivez ces étapes pour lancer le projet en local sur votre machine.

### Prérequis

Assurez-vous d'avoir installé **Node.js** (version 18+) et **npm**.

### 1\. Cloner le Dépôt

```bash
git clone https://github.com/AsamaeS/University-platform-front-end-SAAM-.git
cd University-platform-front-end-SAAM-
```

### 2\. Installer les Dépendances

Utilisez `npm install` pour télécharger toutes les dépendances nécessaires (comme indiqué dans votre console) :

```bash
npm install
```

### 3\. Lancer le Serveur de Développement

Lancez l'application en mode développement. L'application se rafraîchira automatiquement lors des modifications.

```bash
npm run dev
```

### 4\. Accéder à l'Application

Ouvrez votre navigateur web et accédez à l'adresse suivante :

🌐 **[http://localhost:3000](https://www.google.com/search?q=http://localhost:3000)**

-----

## 🤝 Contribution

Nous accueillons les contributions \! Veuillez suivre les étapes suivantes pour proposer des changements :

1.  **Forkez** ce dépôt (`Fork`).
2.  Créez une nouvelle **branche de fonctionnalité** :
    ```bash
    git checkout -b feature/nouvelle-fonctionnalite
    ```
3.  **Committez** vos changements :
    ```bash
    git commit -m "feat: Ajout de la fonctionnalité XYZ"
    ```
4.  **Pushez** sur votre branche :
    ```bash
    git push origin feature/nouvelle-fonctionnalite
    ```
5.  Ouvrez une **Pull Request** sur la branche `main` de ce dépôt.

-----

## 📞 Support et Contact

Pour toute question ou problème, veuillez contacter **AsamaeS** ou ouvrir une **Issue** directement dans ce dépôt.

-----

## 📝 Licence

Ce projet est sous licence **MIT** (ou la licence de votre choix).


