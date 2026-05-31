<div align="center">

<br>

# 🎓 UMMTO Student Kit

### *Le compagnon digital de chaque étudiant algérien*

<br>

[![HTML5](https://img.shields.io/badge/HTML5-Sémantique-E34F26?style=flat-square&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-Responsive-1572B6?style=flat-square&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](#)
[![No Framework](https://img.shields.io/badge/Framework-Aucun-9333EA?style=flat-square)](#)

[![Dark Mode](https://img.shields.io/badge/🌙-Mode%20sombre-0F2A5C?style=flat-square)](#)
[![Mobile First](https://img.shields.io/badge/📱-Mobile%20First-FFB800?style=flat-square)](#)
[![Université](https://img.shields.io/badge/🎓-UMMTO%20Tizi--Ouzou-10B981?style=flat-square)](#)

<br>

> *Une boutique en ligne pensée pour aider chaque étudiant à réussir ses études,*
> *avec une attention particulière pour les futurs informaticiens de l'UMMTO.*

<br>

[**🌐 Voir le site →**](https://ummto-student-kit.onrender.com)

<br>

---

</div>

## 🎯 L'idée derrière le projet

Trouver le bon matériel pour ses études en Algérie peut être un vrai casse-tête : trop de produits, peu de conseils, pas de filtrage par filière, et encore moins par programme universitaire précis.

**UMMTO Student Kit** propose une approche différente : des **packs scolaires complets**, déjà composés par filière, par niveau et par budget. Plus besoin de chercher pendant des heures — chaque pack regroupe tout ce dont un étudiant a besoin pour réussir une matière ou une année entière.

Et pour aider à choisir, un **quiz intelligent** pose les bonnes questions et recommande le pack le plus pertinent.

<br>

## ✨ Ce qui rend le site différent

<table>
<tr>
<td width="50%" valign="top">

### 🎓 Optimisé UMMTO
Les modules officiels du programme L1, L2, L3 et Master de la Faculté de Génie Électrique et Informatique sont intégrés dans le quiz et les recommandations.

</td>
<td width="50%" valign="top">

### 🤖 Quiz adaptatif
Les questions s'adaptent en temps réel selon les réponses. Pas besoin de questions inutiles — l'algorithme va droit au but.

</td>
</tr>
<tr>
<td width="50%" valign="top">

### 🌙 Mode sombre natif
Le thème sombre est activé par défaut pour le confort visuel, mais l'utilisateur peut basculer vers le mode clair à tout moment.

</td>
<td width="50%" valign="top">

### 📱 100% responsive
Pensé d'abord pour le mobile, puis adapté pour tablettes et ordinateurs. L'expérience reste fluide quel que soit l'appareil.

</td>
</tr>
</table>

<br>

## 🗂️ Pages du site

| Page | Rôle |
| :--- | :--- |
| 🏠 **Accueil** | Présentation, hero animé, packs vedettes |
| 🛍️ **Boutique** | Catalogue dynamique avec filtres (catégorie, filière, prix, sous-catégorie) |
| 🎯 **Mon Pack** | Quiz intelligent qui recommande le pack idéal |
| 📚 **Guide UMMTO** | Informations pratiques sur l'université (filières, campus, contacts) |
| 🛒 **Panier** | Récapitulatif des achats et passage de commande |
| 🔐 **Connexion / Inscription** | Authentification simulée avec validation RegEx |

<br>

## 🛠️ Stack technique

Tout est codé **à la main**, sans framework ni bibliothèque externe. C'est volontaire : maîtriser les bases avant d'utiliser des outils plus complexes.

```
HTML5        →  Structure sémantique (header, main, section, article, footer)
CSS3         →  Grid, Flexbox, variables CSS, animations, media queries
JavaScript   →  Vanilla ES6+ (let/const, arrow functions, async, modules)
localStorage →  Persistance des sessions, panier et préférences
RegExp       →  Validation des formulaires (email, téléphone DZ, mot de passe)
```

<br>

## 📂 Structure du projet

```
Aboutite_Chikhi_Massout_UMMTO_Student_Kit/
│
├── 📄 index.html                    Page d'accueil
├── 📄 readme.txt                    Notice de remise pour le module
│
├── 📁 content/                      Pages secondaires
│   ├── inscription.html             Formulaire de création de compte
│   ├── connexion.html               Formulaire d'authentification
│   ├── produits.html                Catalogue avec filtres dynamiques
│   ├── commande.html                Panier et passage de commande
│   ├── quiz.html                    Quiz "Trouve ton pack idéal"
│   └── ummto.html                   Guide pratique de l'UMMTO
│
├── 📁 style/
│   └── design.css                   Feuille de styles complète (claire + sombre)
│
├── 📁 javascript/                   Logique côté client
│   ├── products.js                  Base de produits + affichage dynamique
│   ├── auth.js                      Inscription, connexion, gestion de session
│   ├── cart.js                      Panier, persistance, commandes
│   ├── quiz.js                      Algorithme de recommandation
│   └── theme.js                     Bascule thème clair / sombre
│
└── 📁 images/                       Logo et photos des packs
```

<br>

## 🚀 Mise en route

Le site fonctionne en ouvrant simplement `index.html` dans un navigateur.

Aucune installation, aucune dépendance, aucun serveur requis.

<br>

### Tester avec un compte de démonstration

```
Email      :  demo@ummto.dz
Mot de passe :  demo123
```

Il est également possible de créer un nouveau compte via la page Inscription.

<br>

## 🎨 Identité visuelle

| Couleur | Code | Usage |
| :---: | :---: | :--- |
| 🔵 | `#0F2A5C` | Bleu marine principal — fond et titres en clair |
| 🟡 | `#FFB800` | Or chaleureux — accents, prix, éléments importants |
| 🌃 | `#0B1220` | Bleu nuit profond — fond du mode sombre |
| ⚪ | `#F8F7F2` | Crème chaud — fond du mode clair |

<br>

## 🧪 Validation par expressions régulières

Les formulaires utilisent des RegEx strictes pour valider les saisies côté client :

```js
email     →  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
password  →  /^.{6,}$/
phone DZ  →  /^(?:(?:\+|00)213|0)\s?[567](?:[\s.-]?\d){8}$/
name      →  /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]{2,40}$/
```

<br>

## 👥 L'équipe

| Membre | Groupe |
| :--- | :---: |
| **ABOUTITE Amine** | 7 |
| **CHIKHI Ali** | 7 |
| **MASSOUT Omar** | 10 |

Étudiants en deuxième année de Licence Informatique à la **Faculté de Génie Électrique et Informatique** (FGEI) — Université Mouloud Mammeri de Tizi-Ouzou.

<br>

## 📋 Cadre du projet

Projet réalisé dans le cadre du module **Développement d'Applications Web**, année universitaire **2025 — 2026**, sous la supervision de Madame **Bousnina**, Mademoiselle **Moudir** et Mademoiselle **Yesli**.

<br>

---

<div align="center">

### *Conçu et codé avec patience à Tizi-Ouzou* 🇩🇿

<br>

**🎓 UMMTO Student Kit · 2026**

</div>
