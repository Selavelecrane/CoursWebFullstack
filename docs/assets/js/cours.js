/* ============================================================
   CWF · cours.js — Table des matières (source unique de vérité)
   ============================================================ */

window.COURS = {
  titre: "Cours Web Fullstack",
  sousTitre: "Du premier fichier HTML à l'app complète",
  modules: [
    /* ---------------- Module 0 ---------------- */
    {
      id: "00-decouverte",
      titre: "Découverte",
      emoji: "👋",
      couleur: "#34d399",
      description:
        "Comprendre le web, installer ses outils, afficher sa première page.",
      chapitres: [
        {
          id: "01-comment-marche-le-web",
          titre: "Comment marche le web",
          dispo: true,
        },
        {
          id: "02-installer-ses-outils",
          titre: "Installer ses outils",
          dispo: true,
        },
        { id: "03-premiere-page", titre: "Ta première page", dispo: true },
      ],
    },

    /* ---------------- Module 1 ---------------- */
    {
      id: "01-html",
      titre: "HTML — Structurer",
      emoji: "🧱",
      couleur: "#38bdf8",
      description:
        "Le squelette de toute page web : balises, structure, sémantique.",
      chapitres: [
        {
          id: "01-structure-dune-page",
          titre: "Structure d'une page",
          dispo: true,
        },
        {
          id: "02-titres-et-paragraphes",
          titre: "Titres et paragraphes",
          dispo: true,
        },
        { id: "03-liens-et-images", titre: "Liens et images", dispo: true },
        {
          id: "04-listes-et-tableaux",
          titre: "Listes et tableaux",
          dispo: true,
        },
        { id: "05-formulaires", titre: "Formulaires", dispo: true },
        {
          id: "06-formulaires-avances",
          titre: "Formulaires — champs avancés",
          dispo: true,
        },
        { id: "07-html-semantique", titre: "HTML sémantique", dispo: true },
      ],
    },

    /* ---------------- Module 2 ---------------- */
    {
      id: "02-css",
      titre: "CSS — Styliser",
      emoji: "🎨",
      couleur: "#a78bfa",
      description:
        "Couleurs, mise en page, animation. Le CSS donne vie à la structure.",
      chapitres: [
        { id: "01-selecteurs", titre: "Sélecteurs", dispo: false },
        {
          id: "02-couleurs-et-typo",
          titre: "Couleurs et typographie",
          dispo: false,
        },
        { id: "03-box-model", titre: "Box model", dispo: false },
        { id: "04-flexbox", titre: "Flexbox", dispo: false },
        { id: "05-grid", titre: "CSS Grid", dispo: true },
        { id: "06-responsive", titre: "Responsive", dispo: false },
      ],
    },

    /* ---------------- Module 3 ---------------- */
    {
      id: "03-javascript",
      titre: "JavaScript — Interagir",
      emoji: "⚡",
      couleur: "#fbbf24",
      description:
        "Rendre la page vivante : calculs, clics, animations, données.",
      chapitres: [
        {
          id: "01-variables-et-types",
          titre: "Variables et types",
          dispo: false,
        },
        { id: "02-conditions", titre: "Conditions", dispo: false },
        { id: "03-boucles", titre: "Boucles", dispo: false },
        { id: "04-fonctions", titre: "Fonctions", dispo: false },
        { id: "05-le-dom", titre: "Le DOM", dispo: false },
        { id: "06-evenements", titre: "Événements", dispo: false },
      ],
    },

    /* ---------------- Module 4 ---------------- */
    {
      id: "04-projets",
      titre: "Projets",
      emoji: "🚀",
      couleur: "#f472b6",
      description:
        "Construire de vrais projets qui combinent tout ce qu'on a appris.",
      chapitres: [
        { id: "01-carte-de-visite", titre: "Carte de visite", dispo: false },
        { id: "02-todo-list", titre: "Todo list", dispo: false },
        { id: "03-mini-jeu", titre: "Mini-jeu", dispo: false },
        { id: "04-palmyre", titre: "Site web Palmyre", dispo: true },
      ],
    },
  ],
};
