================================================================================

                        UMMTO Student Kit
            Mini site e-commerce universitaire — Projet Web

================================================================================


MEMBRES DU GROUPE
--------------------------------------------------------------------------------

   ABOUTITE Amine     —   Groupe pédagogique 7
   CHIKHI Ali         —   Groupe pédagogique 7
   MASSOUT Omar       —   Groupe pédagogique 10

   Étudiants en deuxième année de Licence Informatique
   Faculté de Génie Électrique et Informatique (FGEI)
   Université Mouloud Mammeri de Tizi-Ouzou
   Module : Développement d'Applications Web — Année 2025-2026


DESCRIPTION DU SITE
--------------------------------------------------------------------------------

UMMTO Student Kit est un mini site e-commerce destiné aux étudiants algériens,
avec une attention particulière aux étudiants de l'UMMTO. Le site propose des
packs scolaires (fournitures, livres, supports de cours, accessoires) adaptés
à la filière, au niveau d'études et au budget de chaque étudiant.

Le site comprend cinq pages principales — accueil, inscription, connexion,
boutique et commande — ainsi que deux pages complémentaires (un quiz de
recommandation et un guide de l'UMMTO). L'utilisateur peut créer un compte,
se connecter, parcourir les produits avec filtres dynamiques, ajouter des
articles à son panier et passer une commande.


INSTRUCTIONS D'UTILISATION
--------------------------------------------------------------------------------

1. Ouvrir le fichier "index.html" avec un navigateur web (Chrome, Firefox,
   Edge ou Brave).

2. Pour tester rapidement le site, utiliser le compte de démonstration :

       Email     :   demo@ummto.dz
       Mot de passe :   demo123

   Il est également possible de créer un nouveau compte via la page
   "Inscription".

3. Parcourir la boutique pour découvrir les packs disponibles. Les filtres
   (catégorie, filière, sous-catégorie, tri par prix, recherche par mot-clé)
   permettent de trouver rapidement un pack adapté.

4. Cliquer sur "+ Panier" sur n'importe quelle carte pour ajouter un pack au
   panier. Le panier est accessible depuis le menu de navigation.

5. Remplir le formulaire de commande pour finaliser l'achat. Les commandes
   passées sont conservées dans l'historique du compte.


STRUCTURE DU PROJET
--------------------------------------------------------------------------------

   index.html              Page d'accueil
   readme.txt              Ce fichier
   content/
       inscription.html    Formulaire d'inscription
       connexion.html      Formulaire de connexion
       produits.html       Catalogue des packs (boutique)
       commande.html       Panier et passage de commande
       quiz.html           Quiz "Trouve ton pack idéal"
       ummto.html          Guide pratique de l'UMMTO
   style/
       design.css          Feuille de styles
   javascript/
       products.js         Données et affichage des produits
       auth.js             Inscription, connexion, session
       cart.js             Gestion du panier et des commandes
       quiz.js             Logique du quiz
       theme.js            Bascule thème clair / sombre
   images/                 Logos, illustrations et photos des produits


TECHNOLOGIES UTILISÉES
--------------------------------------------------------------------------------

HTML5, CSS3 et JavaScript natif. Aucun framework ni bibliothèque externe.
Site responsive, fonctionnant sur ordinateur, tablette et téléphone.
Données persistantes côté client via localStorage. Validation des formulaires
par expressions régulières (RegExp). Code séparé en trois couches distinctes
(HTML, CSS, JavaScript) selon les exigences du sujet.


================================================================================
