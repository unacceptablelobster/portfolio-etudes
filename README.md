# Portfolio Étudiant - Template Minimaliste & Modulaire

Un template de portfolio web moderne, léger et entièrement responsive (HTML/CSS/JS pur, sans framework lourd), conçu initialement pour les étudiants (notamment en BUT) afin de présenter son parcours, ses compétences et ses projets/réalisations.

---

## Fonctionnalités

- **Design Moderne & Thèmes personnalisables** : 10 thèmes de couleurs intégrés (Vert, Noir OLED, Blanc, Rouge, Bleu, Violet, Orange, Rose, Cyan, Jaune) avec sauvegarde des préférences
- **100% Modulaire** : Tout le contenu textuel et la structure se gèrent dans un seul fichier (`content.js`)
- **Gestion automatique des médias** : Déposez vos images ou PDF dans des dossiers d'actifs et le script de génération s'occupe du reste
- **Visionneuse intégrée** : Un mode plein écran interactif (carrousels, visionneuse d'images et de PDF)
- **Recherche instantanée & Navigation fluide** : Moteur de recherche intégré et barre de progression du défilement
- **Export PDF** : Fonctionnalité d'impression optimisée pour générer un PDF propre du portfolio
- **Léger et rapide** : Pas de dépendance complexe, s'exécute directement dans le navigateur

---

## Structure du Projet

```text
.
├── assets/                  # Dossier contenant vos sous-dossiers d'AC/Projets (ex: AC1.01/)
├── assets-index.js          # Index généré automatiquement des fichiers multimédias
├── content.js               # Fichier unique pour modifier tout le contenu du portfolio
├── favicon.svg              # Icône du site en svg
├── favicon.png              # Icône du site en pbg
├── index.html               # Structure de la page principale
├── LICENSE                  # Licence du code (MIT)
├── LICENSE-CONTENT          # Licence des textes et documents (ex: CC BY-SA 4.0)
├── README.md                # Documentation du projet
├── scripts/
│   └── build.js             # Script Node.js pour scanner les assets
└── style.css                # Feuille de styles globale et gestion des thèmes
```

---

## Guide de Personnalisation rapide

1. Modifier le contenu (`content.js`)
Ouvrez le fichier `content.js` :
- Modifiez vos informations personnelles (`nom`, `formation`, `introduction`)
- Configurez vos projets dans l'objet `saes`
- Personnalisez vos compétences et vos Apprentissages Critiques (AC) en remplissant les champs `argumentation`

2. Ajouter vos fichiers (Images et PDF)
Pour chaque Apprentissage Critiques ou Projets :

   1. Créez un dossier dans assets/ correspondant au code de votre AC (par exemple : assets/AC1.01/).
   2. Glissez-y vos images (.png, .jpg, .webp, etc.) ou vos fichiers PDF.
   3. Exécutez le script de génération pour mettre à jour l'index :

```bash
node scripts/build.js
```

---

## Lancer le site en local

Puisqu'il s'agit d'un site statique (HTML/CSS/JS), vous pouvez simplement ouvrir le fichier `index.html` dans votre navigateur.
Cependant, pour éviter les restrictions de sécurité du navigateur (CORS) lors du chargement de certains fichiers locaux ou iframes, je consielle d'utiliser un serveur local (comme l'extension Live Server sur VS Code, ou via un outil comme `npx serve`).

---

## Licence

Distribué sous licence MIT (voir le fichier [LICENSE](LICENSE)). Vous êtes libre de réutiliser, modifier et partager le code.