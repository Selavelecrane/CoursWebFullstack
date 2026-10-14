# Cours Web Fullstack

> Un cours de développement web **de zéro à expert**, pensé pour les débutants — et ouvert à tous.

[![Site en ligne](https://img.shields.io/badge/site-en%20ligne-38bdf8?style=flat-square)](https://selavelecrane.github.io/CoursWebFullstack/)
[![Licence CC BY-SA 4.0](https://img.shields.io/badge/licence-CC%20BY--SA%204.0-a78bfa?style=flat-square)](./LICENSE)
[![Contributions bienvenues](https://img.shields.io/badge/contributions-bienvenues-34d399?style=flat-square)](#contribuer)

---

## 🌐 Le site

👉 **https://selavelecrane.github.io/CoursWebFullstack/**

Tout le cours est consultable en ligne, chapitre par chapitre, sans rien installer.
Le code source de chaque chapitre vit dans ce dépôt, dans le dossier [`docs/`](./docs).

---

## 🎯 À qui s'adresse ce cours ?

À **toute personne** qui veut apprendre à créer des sites web, en partant de zéro :

- Un débutant complet qui n'a jamais écrit une ligne de code.
- Un adolescent curieux qui veut comprendre comment marche le web.
- Un adulte qui souhaite se reconvertir ou monter son propre projet.
- Un enseignant qui cherche un support structuré et progressif.

**Aucun prérequis.** On commence par installer les outils, on finit par construire une application complète.

---

## 📚 Contenu

Le cours est organisé en **modules** progressifs, chacun composé de plusieurs **chapitres**.

| Module | Titre | Chapitres | Statut |
|:------:|-------|:---------:|:------:|
| 0 | **Découverte** — comprendre le web et installer ses outils | 3 | ✅ |
| 1 | **HTML** — structurer le contenu | 6 | 🚧 |
| 2 | **CSS** — styliser et mettre en page | 6 | 🚧 |
| 3 | **JavaScript** — rendre la page vivante | 6 | ⏳ |
| 4 | **Projets** — construire de vrais sites | 3 | ⏳ |
| 5 | **PHP / MySQL** — le backend | — | ⏳ |

Chaque chapitre suit le même rythme :

1. Un objectif clair en une phrase.
2. Des **démos interactives** que l'on peut manipuler.
3. Un **quiz** pour vérifier la compréhension.
4. Un **défi** pratique à réaliser.

---

## 🛠️ Structure du dépôt

CoursWebFullstack/
├── README.md ← ce fichier
├── CONTRIBUTING.md ← guide de contribution
├── LICENSE ← CC BY-SA 4.0
├── _template.html ← squelette pour un nouveau chapitre
│
├── docs/ ← le site lui-même (servi par GitHub Pages)
│ ├── index.html ← accueil
│ ├── 00-decouverte/
│ ├── 01-html/
│ ├── 02-css/
│ ├── 03-javascript/
│ ├── 04-projets/
│ └── assets/ ← design system + moteur JS
│ ├── css/main.css
│ └── js/
│ ├── cours.js ← table des matières (source unique)
│ ├── nav.js ← sidebar, progression, navigation
│ ├── quiz.js ← moteur de quiz
│ ├── resize.js ← démos redimensionnables
│ └── demo.js ← CSS live, copier, pastilles Grid

## 🚀 Voir le cours en local

```bash
git clone git@github.com:Selavelecrane/CoursWebFullstack.git
cd CoursWebFullstack
python3 -m http.server 8000 --directory docs
```

Puis ouvre http://localhost:8000/ dans ton navigateur.
✍️ Ajouter un chapitre

    Copie _template.html dans le bon dossier (ex. docs/01-html/07-mon-chapitre.html).

    Modifie le <title>, le <h1> et le <p class="lead">.

    Écris ton contenu dans <main>.

    Ouvre docs/assets/js/cours.js et ajoute ton chapitre dans le module correspondant avec dispo: true.

    Teste en local, puis commit + push.

Le détail complet est dans CONTRIBUTING.md.
🧩 Comment ça marche (technique)

Le site est 100 % statique — pas de build, pas de framework, pas de serveur.
Il utilise :

    HTML / CSS / JavaScript natifs pour la structure, le design et l'interactivité.

    Prism.js pour la coloration syntaxique des blocs de code.

    GitHub Pages pour l'hébergement (source : branche main, dossier /docs).

Le fichier docs/assets/js/cours.js contient toute la table des matières. C'est la seule source de vérité : ajouter un chapitre = ajouter une entrée ici, et la sidebar, la progression et la navigation se mettent à jour automatiquement.
📜 Licence

Ce projet est sous CC BY-SA 4.0 — tu peux :

    ✅ Utiliser, modifier, redistribuer librement.

    ✅ L'utiliser en cours, en classe, en formation.

    ⚠️ En conservant la mention d'auteur et en partageant sous la même licence.

🤝 Contribuer

Les contributions sont les bienvenues : corrections de fautes, nouveaux exemples, chapitres manquants, traductions…

Ouvre une issue pour discuter, ou envoie directement une pull request.
Le guide complet est dans CONTRIBUTING.md.
❤️ Remerciements

Ce cours est né d'une envie simple : rendre l'apprentissage du web accessible à tous,
sans jargon, sans prérequis, sans barrière à l'entrée. Il est construit et testé avec de vrais élèves.

Si ce cours t'aide, tu peux :

    ⭐ Mettre une étoile sur ce dépôt.

    🐛 Signaler une erreur ou une amélioration.

    📣 En parler autour de toi.

<p align="center"> <strong>Bon apprentissage 🚀</strong> </p> ```