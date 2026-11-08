/* ============================================================
   GUIDE DE PERSONNALISATION DU PORTFOLIO (content.js)
   ============================================================
   C'est le seul fichier à modifier pour adapter le portfolio à votre formation !
   
   1. INFORMATIONS PERSONNELLES : Modifiez "nom", "formation" et "introduction" ci-dessous.
   2. CRÉDITS : Personnalisez vos liens (site perso, IUT/École, etc.).
   3. PROJETS / SAÉ : Listez vos grands projets dans l'objet "saes".
   4. COMPÉTENCES : Le portfolio comporte 6 compétences ci-dessous. 
      - Modifiez leur nom, couleur, intitulé et niveau.
      - Pour chaque AC (Apprentissage Critique), écrivez votre argumentation 
        entre les `` (backticks).
      - Déposez vos images/PDF dans un dossier nommé "assets/<code de l'AC>/" 
        (ex: assets/AC1.01/). Ils s'afficheront automatiquement !
   ============================================================ */

const PORTFOLIO = {
  nom: "Prénom Nom", // Votre nom et prénom
  formation: "Nom de votre formation · Spécialité · Année", // Ex: BUT MMI · 2e année
  introduction: "Courte introduction ou description de votre parcours et de vos objectifs professionnels.",

  // Infobulle crédits (modifiez les URL selon vos besoins)
  credits: [
    { role: "Portfolio de", nom: "Prénom Nom", url: "Votre site perso ou LinkedIn" },
    { role: "Formation", nom: "Nom de votre formation" },
    { role: "Établissement", nom: "Nom de votre établissement - Université / École", url: "https://votre-etablissement.fr" },
    { role: "Référentiel de compétences", nom: "© Ministère de l'Enseignement supérieur (ou autre organisme)" },
    { role: "Icônes", nom: "Font Awesome", url: "https://fontawesome.com" },
    { role: "Police", nom: "Chivo (Google Fonts)", url: "https://fonts.google.com/specimen/Chivo" },
    { role: "Licences des textes et documents", nom: "CC BY-SA 4.0 (ou autre selon vos choix)", url: "" },
    { role: "Crédit du code", nom: "Axel Mansfield (Unacceptable Lobster)", url: "https://www.argument-minimal.fr" },
    { role: "Licence du code", nom: "MIT", url: "" },
  ],
  
  // Définition globale de vos projets ou de la démarche pédagogique
  saeDefinition: `Définissez ici ce que représentent vos projets ou situations d'apprentissage. 
  
Ce bloc sert à expliquer aux visiteurs (recruteurs, jurys) la démarche globale de vos réalisations au sein de votre formation.`,

  // Liste de vos projets majeurs (Code du projet : Intitulé)
  saes: {
    "PROJ.01": "Intitulé du premier projet majeur",
    "PROJ.02": "Intitulé du deuxième projet majeur",
    "PROJ.03": "Intitulé du troisième projet majeur",
    "PROJ.04": "Intitulé du quatrième projet majeur",
  },

  // Vos 6 Compétences du référentiel
  competences: [
    {
      id: "competence1", nom: "Compétence 1", couleur: "#f4695f",
      intitule: "Intitulé officiel ou description globale de la première compétence",
      niveau: "Niveau visé (ex : Niveau 2 : Maîtriser et mettre en œuvre...)",
      synthese: `Synthèse optionnelle pour résumer votre maîtrise de cette compétence.`,
      acs: [
        { code: "AC1.01", titre: "Premier apprentissage critique ou objectif visé",
          sae: ["PROJ.01"],
          argumentation: `Rédigez ici votre argumentation pour cet apprentissage critique. Expliquez comment vous avez validé cette compétence à travers vos travaux.`,
          fichiers: [
            // Exemple d'ajout manuel de fichier (facultatif si vous utilisez le dossier assets) :
            // { fichier: "mon-projet.png", titre: "Aperçu du projet", legende: "Description de l'image.", source: "Réalisation personnelle" }
            { fichier: "lorem-ipsum-techno.pdf", titre: "LOREM-IPSUM", legende: "Exemple", source: "Document perso, licence CC0" }
          ] },
        { code: "AC1.02", titre: "Deuxième apprentissage critique de la compétence 1",
          sae: ["PROJ.01", "PROJ.02"],
          argumentation: `Argumentation pour le second AC de cette compétence.`,
          fichiers: [] },
      ] 
    },
    {
      id: "competence2", nom: "Compétence 2", couleur: "#f8a45a",
      intitule: "Intitulé officiel ou description globale de la deuxième compétence",
      niveau: "Niveau visé",
      synthese: `BLA BLA BLA`,
      acs: [
        { code: "AC2.01", titre: "Apprentissage critique de la compétence 2",
          sae: ["PROJ.02"],
          argumentation: `C'est complet`,
          fichiers: [ { fichier: "favicon.png", titre: "Icone du site", legende: "", source: "Document pour le site, licence CC0" }, { fichier: "favicon-argument-minimal.png", titre: "Icone de mon site perso", legende: "Mon icone de site perso", source: "https://www.argument-minimal.fr/" }

          ] },
      ] 
    },
    {
      id: "competence3", nom: "Compétence 3", couleur: "#f5cf47",
      intitule: "Intitulé officiel ou description globale de la troisième compétence",
      niveau: "Niveau visé",
      synthese: ``,
      acs: [
        { code: "AC3.01", titre: "Apprentissage critique de la compétence 3",
          sae: ["PROJ.02", "PROJ.03"],
          argumentation: `Rédigez votre argumentation ici.`,
          fichiers: [] },
      ] 
    },
    {
      id: "competence4", nom: "Compétence 4", couleur: "#3fd08a",
      intitule: "Intitulé officiel ou description globale de la quatrième compétence",
      niveau: "Niveau visé",
      synthese: ``,
      acs: [
        { code: "AC4.01", titre: "Apprentissage critique de la compétence 4",
          sae: ["PROJ.03"],
          argumentation: `Rédigez votre argumentation ici.`,
          fichiers: [] },
      ] 
    },
    {
      id: "competence5", nom: "Compétence 5", couleur: "#38bdf8",
      intitule: "Intitulé officiel ou description globale de la cinquième compétence",
      niveau: "Niveau visé",
      synthese: ``,
      acs: [
        { code: "AC5.01", titre: "Apprentissage critique de la compétence 5",
          sae: ["PROJ.04"],
          argumentation: `Rédigez votre argumentation ici.`,
          fichiers: [] },
      ] 
    },
    {
      id: "competence6", nom: "Compétence 6", couleur: "#c084fc",
      intitule: "Intitulé officiel ou description globale de la sixième compétence",
      niveau: "Niveau visé",
      synthese: ``,
      acs: [
        { code: "AC6.01", titre: "Apprentissage critique de la sixième compétence",
          sae: ["PROJ.04"],
          argumentation: `Rédigez votre argumentation ici.`,
          fichiers: [] },
      ] 
    }
  ]
};