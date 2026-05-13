

const PRODUCTS = [

    {
        id: 'pack-asd3',
        name: 'Pack Algorithmique + TP Algo',
        category: 'Informatique',
        subcategory: 'Programmation',
        filiere: 'Informatique',
        level: ['L2'],
        price: 3500,
        description: "Module S3 L2 Info UMMTO. Tout pour cartonner en algo : arbres, graphes, complexité, tris, tables de hachage.",
        contents: [
            'Carnet quadrillé 200 pages (gros carreaux)',
            "Polycopié résumé Algorithmique S3 (UMMTO)",
            "Fiches révision : tris (quick, merge, heap)",
            "Fiches : tables de hachage, arbres binaires",
            "Pochette TP impression code C/Pascal",
            "Set de stylos couleur (rouge/bleu/noir/vert)"
        ],
        thumb: '🌳',
        image: 'pack-asd3.jpg',
        matieres: ['Algorithmique', 'Programmation', 'Structures de données'],
        popular: true
    },

    {
        id: 'pack-archi-ord',
        name: 'Pack Architecture des ordinateurs',
        category: 'Informatique',
        subcategory: 'Architecture',
        filiere: 'Informatique',
        level: ['L2'],
        price: 3200,
        description: "Module S3 L2 Info UMMTO. Pour comprendre les processeurs, la mémoire, les circuits et l'assembleur.",
        contents: [
            'Cahier dédié schémas logiques (gros carreaux)',
            "Polycopié résumé Architecture (S3)",
            "Carte mémoire des registres x86 plastifiée",
            "Set de marqueurs effaçables pour schémas",
            "Fiches : circuits combinatoires & séquentiels",
            "Calculatrice scientifique (binaire/hexa)"
        ],
        thumb: '🖥️',
        image: 'pack-archi-ord.jpg',
        matieres: ['Architecture', 'Architecture des ordinateurs'],
        popular: false
    },

    {
        id: 'pack-systemes-info',
        name: "Pack Système d'information (MERISE)",
        category: 'Informatique',
        subcategory: 'Base de données',
        filiere: 'Informatique',
        level: ['L2'],
        price: 3100,
        description: "Module S3 L2 Info UMMTO. Méthode MERISE, MCD/MLD, dictionnaire de données. Le pack du futur architecte SI.",
        contents: [
            'Carnet à grands carreaux 200 pages',
            "Polycopié MERISE & MCD",
            "Règle + équerre + papier calque",
            "Fiches révision : niveaux conceptuel/logique/physique",
            "Stylos fineliner 0.4 mm pour schémas propres"
        ],
        thumb: '🗃️',
        image: 'pack-systemes-info.jpg',
        matieres: ["Système d'information", 'Base de données', 'MERISE'],
        popular: false
    },

    {
        id: 'pack-graphes',
        name: 'Pack Théorie des graphes',
        category: 'Informatique',
        subcategory: 'Mathématiques',
        filiere: 'Informatique',
        level: ['L2'],
        price: 2800,
        description: "Module S3 L2 Info UMMTO. Dijkstra, Bellman-Ford, Kruskal, parcours, arbres couvrants minimaux.",
        contents: [
            "Carnet de schémas (papier pointillé idéal pour graphes)",
            "Règle 30 cm + compas + rapporteur",
            "Fiches : Dijkstra, Prim, Kruskal, BFS/DFS",
            "Polycopié exos type EMD UMMTO",
            "Set de surligneurs 6 couleurs"
        ],
        thumb: '🕸️',
        image: 'pack-graphes.jpg',
        matieres: ['Théorie des graphes', 'Mathématiques'],
        popular: false
    },

    {
        id: 'pack-methode-num',
        name: 'Pack Méthode numérique',
        category: 'Informatique',
        subcategory: 'Mathématiques',
        filiere: 'Informatique',
        level: ['L2'],
        price: 2700,
        description: "Module S3 L2 Info UMMTO. Interpolation, intégration numérique, équations différentielles, erreurs.",
        contents: [
            'Carnet petits carreaux 200 pages',
            "Polycopié Méthode numérique (S3)",
            "Calculatrice scientifique programmable",
            "Fiches : Newton, Lagrange, Simpson, Runge-Kutta",
            "Stylos + crayons HB + gomme"
        ],
        thumb: '🔢',
        image: 'pack-methode-num.jpg',
        matieres: ['Méthode numérique', 'Mathématiques'],
        popular: false
    },

    {
        id: 'pack-logique-math',
        name: 'Pack Logique mathématique',
        category: 'Informatique',
        subcategory: 'Mathématiques',
        filiere: 'Informatique',
        level: ['L2'],
        price: 2400,
        description: "Module S3 L2 Info UMMTO. Calcul propositionnel, calcul des prédicats, démonstrations formelles.",
        contents: [
            "Carnet quadrillé 100 pages",
            "Polycopié Logique mathématique (S3)",
            "Fiches : tables de vérité, déduction naturelle",
            "Fiches : quantificateurs, formes normales",
            "Stylos + post-it (pour annotations)"
        ],
        thumb: '🧠',
        image: 'pack-logique-math.jpg',
        matieres: ['Logique mathématique', 'Mathématiques'],
        popular: false
    },

    {
        id: 'pack-anglais-info',
        name: 'Pack Anglais technique informatique',
        category: 'Informatique',
        subcategory: 'Anglais',
        filiere: 'Informatique',
        level: ['L1', 'L2', 'L3'],
        price: 1800,
        description: "Modules d'Anglais L1/L2/L3 Info UMMTO. Vocabulaire technique, lecture de docs, grammaire.",
        contents: [
            "Cahier d'anglais petits carreaux",
            "Polycopié vocabulaire technique IT (500 mots)",
            "Fiches grammaire essentielles",
            "Mini-dictionnaire technique FR-EN",
            "Stylos + surligneurs"
        ],
        thumb: '🇬🇧',
        image: 'pack-anglais-info.jpg',
        matieres: ['Anglais', 'Anglais technique'],
        popular: false
    },

    {
        id: 'pack-reseaux',
        name: 'Pack Réseaux + TP',
        category: 'Informatique',
        subcategory: 'Réseaux',
        filiere: 'Informatique',
        level: ['L2', 'L3'],
        price: 3600,
        description: "Module S4 L2 Info UMMTO. Modèles OSI/TCP-IP, adressage IP, routage. Avec matériel pour les TP.",
        contents: [
            'Câble Ethernet RJ45 1m (pour TP)',
            "Polycopié Réseaux S4 + Modèle OSI",
            "Fiches : adressage IPv4, sous-réseaux, masques",
            "Carte plastifiée des couches OSI",
            "Stickers Cisco / Wireshark pour PC"
        ],
        thumb: '🔌',
        image: 'pack-reseaux.jpg',
        matieres: ['Réseaux'],
        popular: true
    },

    {
        id: 'pack-se1',
        name: "Pack Système d'exploitation + TP",
        category: 'Informatique',
        subcategory: "Système d'exploitation",
        filiere: 'Informatique',
        level: ['L2'],
        price: 3400,
        description: "Module S4 L2 Info UMMTO. Processus, ordonnancement, mémoire, fichiers + TP Linux/Bash.",
        contents: [
            'Carnet TP Linux (commandes shell)',
            "Polycopié SE1 (FCFS, SJF, Round Robin)",
            "Fiches : sémaphores, deadlocks, mémoire virtuelle",
            "Clé USB 16 Go (Live Ubuntu pré-flashée sur demande)",
            "Set stylos + surligneurs"
        ],
        thumb: '🐧',
        image: 'pack-se1.jpg',
        matieres: ["Système d'exploitation", 'Linux'],
        popular: false
    },

    {
        id: 'pack-bdd',
        name: 'Pack Base de données + TP',
        category: 'Informatique',
        subcategory: 'Base de données',
        filiere: 'Informatique',
        level: ['L2', 'L3'],
        price: 3300,
        description: "Module S4 L2 Info UMMTO. Modèle relationnel, algèbre relationnelle, SQL avancé + TP MySQL/Oracle.",
        contents: [
            'Carnet SQL 200 pages',
            "Polycopié SQL (DDL, DML, DCL)",
            "Fiches : algèbre relationnelle, formes normales",
            "Aide-mémoire SQL plastifié",
            "Clé USB avec scripts SQL d'exemple",
            "Stylos couleur pour schémas E/A"
        ],
        thumb: '🗄️',
        image: 'pack-bdd.jpg',
        matieres: ['Base de données', 'SQL'],
        popular: true
    },

    {
        id: 'pack-langages',
        name: 'Pack Théorie des langages + TP',
        category: 'Informatique',
        subcategory: 'Théorie des langages',
        filiere: 'Informatique',
        level: ['L2'],
        price: 2900,
        description: "Module S4 L2 Info UMMTO. Automates, grammaires de Chomsky, expressions régulières + TP.",
        contents: [
            'Carnet quadrillé 100 pages',
            "Polycopié résumé Théorie des langages (S4)",
            "Fiches : automates finis, AEFD/AEFND",
            "Fiches : grammaires régulières, hors-contexte",
            "Stylos noir & rouge + crayon HB",
            "Pochette protège-cours A4"
        ],
        thumb: '🔠',
        image: 'pack-langages.jpg',
        matieres: ['Théorie des langages', 'Automates'],
        popular: false
    },

    {
        id: 'pack-poo',
        name: 'Pack POO + TP',
        category: 'Informatique',
        subcategory: 'Programmation',
        filiere: 'Informatique',
        level: ['L2', 'L3'],
        price: 3500,
        description: "Module S4 L2 Info UMMTO. Programmation Orientée Objet : classes, héritage, polymorphisme + TP Java/C++.",
        contents: [
            'Carnet de TP 200 pages',
            "Polycopié POO Java/C++ (S4 UMMTO)",
            "Fiches : classes, héritage, interfaces, design patterns",
            "Aide-mémoire UML plastifié",
            "Pochette code TP impression",
            "Stickers Java / C++ pour PC"
        ],
        thumb: '☕',
        image: 'pack-poo.jpg',
        matieres: ['POO', 'Programmation orientée objet', 'Programmation', 'Java', 'C++'],
        popular: true
    },

    {
        id: 'pack-web',
        name: 'Pack Développement Web + TP',
        category: 'Informatique',
        subcategory: 'Développement Web',
        filiere: 'Informatique',
        level: ['L2', 'L3', 'M1'],
        price: 3200,
        description: "Module S4 L2 Info UMMTO. HTML5, CSS3, JavaScript, PHP, MySQL. Le module dont vient ce site !",
        contents: [
            'Carnet code 200 pages',
            "Polycopié HTML/CSS/JS (S4)",
            "Aide-mémoire HTML5 + CSS3 plastifié",
            "Fiches JavaScript ES6+ essentielles",
            "Stickers VS Code / GitHub",
            "Clé USB 16 Go avec ressources Dev Web"
        ],
        thumb: '🌐',
        image: 'pack-web.jpg',
        matieres: ['Développement Web', 'HTML', 'CSS', 'JavaScript'],
        popular: true
    },

    {
        id: 'pack-prog',
        name: 'Pack Programmation L1',
        category: 'Informatique',
        subcategory: 'Programmation',
        filiere: 'Informatique',
        level: ['L1'],
        price: 3800,
        description: "Le starter pack du futur dev L1 Info : Algo 1, Structure machine, premiers TP.",
        contents: [
            'Clavier confortable',
            'Souris ergonomique',
            "Carnet d'algorithmes (cours d'algo 1)",
            "Polycopié Structure machine L1",
            'Fiches de logique de base',
            'Stickers raccourcis clavier'
        ],
        thumb: '⌨️',
        image: 'pack-prog.jpg',
        matieres: ['Algorithmique', 'Programmation', 'Algo 1'],
        popular: false
    },

    {
        id: 'pack-l3-genie-log',
        name: 'Pack Génie logiciel L3',
        category: 'Informatique',
        subcategory: 'Programmation',
        filiere: 'Informatique',
        level: ['L3'],
        price: 3700,
        description: "Module L3 Info UMMTO. Cycle de vie logiciel, UML, méthodes Agile, design patterns.",
        contents: [
            'Carnet projet 200 pages',
            "Polycopié Génie logiciel L3",
            "Aide-mémoire UML 14 diagrammes",
            "Fiches : Scrum, Kanban, design patterns",
            "Stickers Agile / Git"
        ],
        thumb: '⚙️',
        image: 'pack-l3-genie-log.jpg',
        matieres: ['Génie logiciel', 'UML', 'Programmation'],
        popular: false
    },

    {
        id: 'pack-se',
        name: "Pack Système d'exploitation 2 (L3)",
        category: 'Informatique',
        subcategory: "Système d'exploitation",
        filiere: 'Informatique',
        level: ['L3', 'M1'],
        price: 3500,
        description: "Module L3 Info UMMTO. SE2 : systèmes distribués, synchronisation avancée, virtualisation.",
        contents: [
            'Carnet TP Linux avancé',
            "Polycopié SE2 (UMMTO)",
            "Fiches : threads, IPC, RPC, sockets",
            "Clé USB 32 Go + scripts d'exemple",
            "Stickers Linux / Docker"
        ],
        thumb: '🖥️',
        image: 'pack-se.jpg',
        matieres: ["Système d'exploitation", 'Linux'],
        popular: false
    },

    {
        id: 'pack-master-sii',
        name: 'Pack Master SII (IA & Big Data)',
        category: 'Informatique',
        subcategory: 'Programmation',
        filiere: 'Informatique',
        level: ['M1', 'M2'],
        price: 6900,
        description: "Master Systèmes Informatiques Intelligents (FGEI UMMTO). IA, Deep Learning, Big Data, méta-heuristiques.",
        contents: [
            "Cahier projet 200 pages",
            "Polycopié Réseaux de neurones & Deep Learning",
            "Polycopié Big Data & méta-heuristiques",
            "Mug code (cadeau bonus motivation)",
            "Stylos + surligneurs + post-it",
            "Sticker pack ML/Python pour ton laptop"
        ],
        thumb: '🤖',
        image: 'pack-master-sii.jpg',
        matieres: ['Intelligence Artificielle', 'IA', 'Deep Learning', 'Big Data'],
        popular: false
    },

    {
        id: 'pack-master-reseaux',
        name: 'Pack Master Réseaux (RMSE)',
        category: 'Informatique',
        subcategory: 'Réseaux',
        filiere: 'Informatique',
        level: ['M1', 'M2'],
        price: 5800,
        description: "Master Réseaux, Mobilité & Systèmes Embarqués (FGEI UMMTO). Cisco, TCP/IP avancé, sécurité réseaux.",
        contents: [
            "Cahier TP réseau",
            "Polycopié TCP/IP avancé + routage dynamique",
            "Câble Ethernet RJ45 1m (pour TP)",
            "Fiches : OSPF, BGP, VLAN, NAT",
            "Stickers Cisco / Wireshark pour PC"
        ],
        thumb: '📡',
        image: 'pack-master-reseaux.jpg',
        matieres: ['Réseaux', 'Master Réseaux'],
        popular: false
    },

    {
        id: 'pack-master-isi',
        name: "Pack Master ISI",
        category: 'Informatique',
        subcategory: 'Base de données',
        filiere: 'Informatique',
        level: ['M1', 'M2'],
        price: 6200,
        description: "Master Ingénierie des Systèmes d'Information (FGEI UMMTO). Génie logiciel, BDD avancées, architecture SI.",
        contents: [
            "Cahier projet 200 pages",
            "Polycopié BDD avancées (NoSQL, XML, réparties)",
            "Aide-mémoire UML + design patterns",
            "Fiches : architectures SOA, microservices",
            "Stickers MongoDB / PostgreSQL"
        ],
        thumb: '💼',
        image: 'pack-master-isi.jpg',
        matieres: ["Système d'information", 'Base de données', 'Génie logiciel'],
        popular: false
    },

    {
        id: 'pack-master-cpi-prog',
        name: 'Pack Master CPI (Conduite de Projets)',
        category: 'Informatique',
        subcategory: 'Programmation',
        filiere: 'Informatique',
        level: ['M1', 'M2'],
        price: 5500,
        description: "Master Conduite de Projets Informatiques (FGEI UMMTO). Architecture logicielle, méthodes Agile, gestion d'équipe.",
        contents: [
            "Cahier projet 200 pages",
            "Polycopié Architecture logicielle (CPI)",
            "Fiches Agile : Scrum, Kanban, XP",
            "Fiches méta-objets, programmation par aspects",
            "Stickers Jira / Trello"
        ],
        thumb: '🛠️',
        image: 'pack-master-cpi-prog.jpg',
        matieres: ['Génie logiciel', 'Conduite de projet', 'Programmation'],
        popular: false
    },

    {
        id: 'pack-cpi',
        name: 'Pack Cycle Préparatoire Ingénieur',
        category: 'Informatique',
        subcategory: 'Programmation',
        filiere: 'Informatique',
        level: ['L1', 'L2'],
        price: 5400,
        description: "CPI FGEI UMMTO. Maths intensives + algo + physique. Le pack qui te suit pendant 2 ans.",
        contents: [
            "Lot de 4 cahiers grand format (Maths, Algo, Physique, Anglais)",
            "Calculatrice scientifique programmable",
            "Compas + équerre + rapporteur + règle",
            "Set de stylos + crayons + surligneurs",
            "Fiches révision concours d'entrée Master ingénieur"
        ],
        thumb: '🎓',
        image: 'pack-cpi.jpg',
        matieres: ['CPI', 'Mathématiques', 'Algorithmique'],
        popular: false
    },

    {
        id: 'pack-cyber',
        name: 'Pack Cybersécurité',
        category: 'Informatique',
        subcategory: 'Cybersécurité',
        filiere: 'Informatique',
        level: ['L3', 'M1', 'M2'],
        price: 3800,
        description: "Initiation cybersécurité : Linux, sécurité web, cryptographie de base.",
        contents: [
            "Polycopié Cybersécurité (concepts de base)",
            "Clé USB Live Kali Linux",
            "Fiches : OWASP Top 10",
            "Fiches : cryptographie symétrique/asymétrique",
            "Stickers HackTheBox / TryHackMe"
        ],
        thumb: '🛡️',
        image: 'pack-cyber.jpg',
        matieres: ['Cybersécurité', 'Sécurité informatique'],
        popular: false
    },

    {
        id: 'pack-setup',
        name: 'Pack Setup Étudiant Informatique',
        category: 'Informatique',
        subcategory: 'Accessoires PC',
        filiere: 'Informatique',
        level: ['L1', 'L2', 'L3', 'M1', 'M2'],
        price: 4500,
        description: "Le setup PC complet pour étudiant Info : ergonomie + productivité.",
        contents: [
            'Support PC ajustable',
            'Souris ergonomique',
            'Tapis de souris XL',
            'Hub USB 4 ports',
            'Câble HDMI 2m',
            'Lampe de bureau LED'
        ],
        thumb: '🖱️',
        image: 'pack-setup.jpg',
        matieres: ['Setup', 'Accessoires'],
        popular: false
    },

    {
        id: 'pack-revision-l2',
        name: 'Pack Révision Info L2 (tout-en-un)',
        category: 'Révision',
        subcategory: 'Révision Informatique L2',
        filiere: 'Informatique',
        level: ['L1', 'L2'],
        price: 1900,
        description: "Le pack EMD : fiches résumé pour TOUS les modules L2 Info UMMTO en un seul lot.",
        contents: [
            'Fiches résumé Algo + ASD3',
            'Fiches Architecture des ordinateurs',
            'Fiches Théorie des graphes',
            'Fiches Théorie des langages',
            "Fiches Système d'exploitation 1",
            'Fiches Bases de données',
            'Surligneurs 6 couleurs',
            'Pochette plastique A4'
        ],
        thumb: '📚',
        image: 'pack-revision-l2.jpg',
        matieres: ['Révision', 'EMD'],
        popular: true
    },

    {
        id: 'pack-medecine',
        name: 'Pack Médecine — Essentiel',
        category: 'Médecine / Biologie',
        subcategory: 'Médecine',
        filiere: 'Médecine',
        level: ['L1', 'L2', 'L3'],
        price: 4800,
        description: "Pack général Faculté de Médecine UMMTO. Fournitures essentielles pour la fac.",
        contents: [
            "Stéthoscope (modèle étudiant)",
            "Blouse blanche taille standard",
            "Atlas d'anatomie format poche",
            "Cahier de cours grand format (×3)",
            "Stylos + surligneurs"
        ],
        thumb: '🩺',
        image: 'pack-medecine.jpg',
        matieres: ['Médecine'],
        popular: false
    },

    {
        id: 'pack-archi',
        name: 'Pack Architecture',
        category: 'Architecture',
        subcategory: 'Architecture',
        filiere: 'Architecture',
        level: ['L1', 'L2', 'L3', 'M1', 'M2'],
        price: 5500,
        description: "Faculté du Génie de la Construction UMMTO. Pour les studios projet et le dessin technique.",
        contents: [
            "Set de crayons graphite (HB → 6B)",
            "Compas + équerres (45° et 60°) + règle 50 cm",
            "Bloc papier calque A3",
            "Cutter + tapis de découpe A3",
            "Marqueurs Promarker (12 couleurs)",
            "Cahier de croquis A4"
        ],
        thumb: '📐',
        image: 'pack-archi.jpg',
        matieres: ['Architecture', 'Dessin'],
        popular: false
    },

    {
        id: 'pack-genie-civil',
        name: 'Pack Génie Civil',
        category: 'Architecture',
        subcategory: 'Architecture',
        filiere: 'Génie Civil',
        level: ['L1', 'L2', 'L3', 'M1', 'M2'],
        price: 4200,
        description: "Pour les étudiants en Génie Civil FGC UMMTO : RDM, béton, structures.",
        contents: [
            "Calculatrice scientifique programmable",
            "Set d'équerres + règle 50 cm + rapporteur",
            "Polycopié RDM (Résistance des Matériaux)",
            "Carnet de calculs grand format",
            "Stylos + crayons mécaniques 0.5/0.7"
        ],
        thumb: '🏗️',
        image: 'pack-genie-civil.jpg',
        matieres: ['Génie civil', 'RDM'],
        popular: false
    },

    {
        id: 'pack-eco-gestion',
        name: 'Pack Sciences Économiques & Gestion',
        category: 'Budget',
        subcategory: '',
        filiere: 'Sciences Économiques',
        level: ['L1', 'L2', 'L3', 'M1'],
        price: 2500,
        description: "FESCSG UMMTO. Pour la compta, la gestion, la microéconomie. Calculatrice + cahiers + fiches.",
        contents: [
            "Calculatrice financière",
            "3 cahiers grand format",
            "Polycopié comptabilité de base",
            "Fiches micro/macroéconomie",
            "Surligneurs 4 couleurs"
        ],
        thumb: '📊',
        image: 'pack-eco-gestion.jpg',
        matieres: ['Économie', 'Gestion', 'Comptabilité'],
        popular: false
    },

    {
        id: 'pack-langues',
        name: 'Pack Lettres et Langues',
        category: 'Accessoires PC',
        subcategory: '',
        filiere: 'Langues',
        level: ['L1', 'L2', 'L3', 'M1'],
        price: 2200,
        description: "Faculté Lettres et Langues UMMTO. Pour la prépa TCF/IELTS et les modules linguistiques.",
        contents: [
            "Cahier vocabulaire 200 pages",
            "Mini-dictionnaire bilingue",
            "Bloc post-it (révision active)",
            "Polycopié grammaire (FR/EN/AR/Tamazight)",
            "Stylos + surligneurs"
        ],
        thumb: '🌍',
        image: 'pack-langues.jpg',
        matieres: ['Langues', 'Anglais', 'Français'],
        popular: false
    },

    {
        id: 'pack-revision-general',
        name: 'Pack Révision EMD général',
        category: 'Révision',
        subcategory: '',
        filiere: 'Toutes',
        level: ['L1', 'L2', 'L3', 'M1', 'M2'],
        price: 1500,
        description: "Le combo classique pour bien réviser : fiches, surligneurs, post-it, planning.",
        contents: [
            'Bloc fiches Bristol (200 fiches)',
            'Surligneurs 6 couleurs',
            'Post-it (3 formats)',
            'Planning de révision A3',
            'Stylos couleur'
        ],
        thumb: '📖',
        image: 'pack-revision-general.jpg',
        matieres: ['Révision', 'EMD'],
        popular: false
    },

    {
        id: 'pack-rentree',
        name: 'Pack Rentrée Universitaire',
        category: 'Organisation',
        subcategory: '',
        filiere: 'Toutes',
        level: ['L1', 'L2', 'L3', 'M1', 'M2'],
        price: 2800,
        description: "Tout pour bien démarrer l'année : agenda, cahiers, trousse complète.",
        contents: [
            'Agenda universitaire 2025/2026',
            '4 cahiers grand format',
            'Trousse complète',
            'Classeur A4 + intercalaires',
            'Sac à dos basique'
        ],
        thumb: '🎒',
        image: 'pack-rentree.jpg',
        matieres: ['Organisation', 'Rentrée'],
        popular: true
    },

    {
        id: 'pack-budget',
        name: 'Pack Budget Étudiant',
        category: 'Budget',
        subcategory: '',
        filiere: 'Toutes',
        level: ['L1', 'L2', 'L3', 'M1', 'M2'],
        price: 900,
        description: "Le pack petit prix : l'essentiel pour démarrer sans casser sa tirelire.",
        contents: [
            'Cahier 96 pages',
            'Lot de 4 stylos',
            'Clé USB 8 Go',
            'Bloc fiches de révision'
        ],
        thumb: '💰',
        image: 'pack-budget.jpg',
        matieres: ['Budget', 'Essentiel'],
        popular: false
    },

    {
        id: 'pack-l1-analyse',
        name: 'Pack Analyse 1 / 2',
        category: 'Informatique',
        subcategory: 'Mathématiques',
        filiere: 'Informatique',
        level: ['L1'],
        price: 2400,
        description: "Spécial L1 Info UMMTO — limites, dérivées, intégrales : tout pour l'Analyse 1 et 2.",
        contents: [
            'Carnet 200 pages quadrillé',
            'Polycopié résumé Analyse 1 & 2',
            'Fiches : limites, continuité, intégrales',
            'Calculatrice scientifique',
            'Set de stylos et surligneurs'
        ],
        thumb: '∫',
        image: 'pack-l1-analyse.jpg',
        matieres: ['Analyse', 'Mathématiques'],
        popular: false
    },
    {
        id: 'pack-l1-algebre',
        name: 'Pack Algèbre 1 / 2',
        category: 'Informatique',
        subcategory: 'Mathématiques',
        filiere: 'Informatique',
        level: ['L1'],
        price: 2400,
        description: "Algèbre linéaire, matrices, espaces vectoriels — le pack L1 Maths-Info pour les EMD.",
        contents: [
            'Carnet quadrillé 200 pages',
            'Polycopié Algèbre 1 & 2',
            'Fiches : matrices, déterminants, espaces vectoriels',
            'Lot de marqueurs effaçables',
            'Pochette protège-cours'
        ],
        thumb: '➕',
        image: 'pack-l1-algebre.jpg',
        matieres: ['Algèbre', 'Mathématiques'],
        popular: false
    },
    {
        id: 'pack-l1-asd1',
        name: 'Pack ASD 1 — Algorithmique de base',
        category: 'Informatique',
        subcategory: 'Programmation',
        filiere: 'Informatique',
        level: ['L1'],
        price: 2700,
        description: "Premier pas en algo : variables, conditions, boucles, tableaux. Pour bien démarrer en L1 Info.",
        contents: [
            'Carnet algos 200 pages',
            "Polycopié ASD 1 (algorithme + Pascal)",
            'Fiches : tableaux, fonctions, récursivité',
            'Set de stylos couleur',
            'Sticker pack programmation pour PC'
        ],
        thumb: '🌱',
        image: 'pack-l1-asd1.jpg',
        matieres: ['Algorithme', 'Programmation', 'ASD1'],
        popular: false
    },
    {
        id: 'pack-l1-physique',
        name: 'Pack Physique 1 / 2',
        category: 'Informatique',
        subcategory: 'Sciences',
        filiere: 'Informatique',
        level: ['L1'],
        price: 2300,
        description: "Mécanique, électricité, thermodynamique — pour les modules Physique 1 et 2 du tronc commun MI.",
        contents: [
            'Carnet quadrillé',
            'Polycopié Physique 1 & 2',
            'Fiches : mécanique, optique, électricité',
            'Calculatrice scientifique',
            'Lot de stylos + crayons HB'
        ],
        thumb: '🔭',
        image: 'pack-l1-physique.jpg',
        matieres: ['Physique'],
        popular: false
    },
    {
        id: 'pack-l1-structure-mach',
        name: 'Pack Structure machine',
        category: 'Informatique',
        subcategory: "Système d'exploitation",
        filiere: 'Informatique',
        level: ['L1'],
        price: 2500,
        description: "Représentation des nombres, circuits logiques, codage — la base avant Architecture en L2.",
        contents: [
            'Cahier dédié schémas logiques',
            'Polycopié Structure machine',
            'Fiches : binaire, hexadécimal, portes logiques',
            'Calculatrice scientifique (binaire/hexa)',
            'Lot de marqueurs couleurs'
        ],
        thumb: '⚙️',
        image: 'pack-l1-structure-mach.jpg',
        matieres: ['Structure machine', 'Architecture'],
        popular: false
    },

    {
        id: 'pack-medecine-anatomie',
        name: 'Pack Anatomie',
        category: 'Médecine / Biologie',
        subcategory: 'Anatomie',
        filiere: 'Médecine',
        level: ['L1', 'L2'],
        price: 4800,
        description: "Atlas anatomique + planches détaillées + cahier de schémas. Spécial 1ère année médecine UMMTO.",
        contents: [
            'Atlas anatomique illustré',
            'Cahier 200 pages avec schémas pré-imprimés',
            'Planches anatomiques plastifiées',
            'Set de stylos fineliner pour annotations',
            'Surligneurs 6 couleurs'
        ],
        thumb: '🦴',
        image: 'pack-medecine-anatomie.jpg',
        matieres: ['Anatomie'],
        popular: true
    },
    {
        id: 'pack-medecine-histologie',
        name: 'Pack Histologie & Cytologie',
        category: 'Médecine / Biologie',
        subcategory: 'Histologie',
        filiere: 'Médecine',
        level: ['L1'],
        price: 3800,
        description: "Cellules et tissus : épithéliums, conjonctifs, musculaire, nerveux. Pour la 1ère année médecine.",
        contents: [
            'Polycopié Histologie illustré',
            'Cahier de schémas histologiques',
            'Fiches résumé : tissus, cellules',
            'Set de crayons de couleur (12)',
            'Loupe étudiante'
        ],
        thumb: '🔬',
        image: 'pack-medecine-histologie.jpg',
        matieres: ['Histologie', 'Cytologie'],
        popular: false
    },
    {
        id: 'pack-medecine-biophysique',
        name: 'Pack Biophysique & Biostatistiques',
        category: 'Médecine / Biologie',
        subcategory: 'Biophysique',
        filiere: 'Médecine',
        level: ['L1'],
        price: 3500,
        description: "Optique, ondes, statistiques médicales — les modules calculatoires de la 1ère année.",
        contents: [
            'Polycopié Biophysique',
            'Polycopié Biostatistiques',
            'Calculatrice scientifique',
            'Cahier quadrillé 200 pages',
            'Fiches méthodes (tests stats, formules)'
        ],
        thumb: '⚛️',
        image: 'pack-medecine-biophysique.jpg',
        matieres: ['Biophysique', 'Biostatistiques'],
        popular: false
    },
    {
        id: 'pack-medecine-physio',
        name: 'Pack Physiologie',
        category: 'Médecine / Biologie',
        subcategory: 'Physiologie',
        filiere: 'Médecine',
        level: ['L2', 'L3'],
        price: 4200,
        description: "Pour les 2ème et 3ème années : système nerveux, circulation, respiration, digestion.",
        contents: [
            'Polycopié Physiologie',
            'Cahier 200 pages avec schémas',
            'Fiches : grands systèmes (nerveux, cardio, respi, digestif)',
            'Set fineliner + surligneurs',
            'Carte mémo des constantes physiologiques'
        ],
        thumb: '❤️',
        image: 'pack-medecine-physio.jpg',
        matieres: ['Physiologie'],
        popular: true
    },
    {
        id: 'pack-medecine-biochimie',
        name: 'Pack Biochimie & Chimie',
        category: 'Médecine / Biologie',
        subcategory: 'Biochimie',
        filiere: 'Médecine',
        level: ['L1', 'L2'],
        price: 3900,
        description: "Chimie organique, métabolisme, enzymologie — les bases moléculaires de la médecine.",
        contents: [
            'Polycopié Biochimie',
            'Polycopié Chimie organique',
            'Cahier laboratoire avec marges',
            'Fiches : métabolismes, enzymes, voies',
            'Set de stylos rouges/noirs/bleus'
        ],
        thumb: '🧪',
        image: 'pack-medecine-biochimie.jpg',
        matieres: ['Biochimie', 'Chimie organique'],
        popular: false
    },
    {
        id: 'pack-medecine-embryo',
        name: 'Pack Embryologie & Génétique',
        category: 'Médecine / Biologie',
        subcategory: 'Embryologie',
        filiere: 'Médecine',
        level: ['L1', 'L2'],
        price: 3600,
        description: "Du gamète au nouveau-né + bases génétiques de la médecine moderne.",
        contents: [
            'Polycopié Embryologie illustré',
            'Polycopié Génétique médicale',
            'Cahier schémas (developpement embryo)',
            'Fiches : étapes embryonnaires + lois mendéliennes',
            'Set surligneurs'
        ],
        thumb: '🧬',
        image: 'pack-medecine-embryo.jpg',
        matieres: ['Embryologie', 'Génétique'],
        popular: false
    },
    {
        id: 'pack-medecine-clinique',
        name: 'Pack Cycle Clinique (4ème-6ème)',
        category: 'Médecine / Biologie',
        subcategory: 'Clinique',
        filiere: 'Médecine',
        level: ['M1', 'M2'],
        price: 6800,
        description: "Stéthoscope + matériel clinique pour les externes en cycle clinique (4-5-6ème année).",
        contents: [
            'Stéthoscope étudiant',
            'Tensiomètre brassard',
            'Marteau réflexe',
            'Cahier clinique format poche',
            'Lampe stylo',
            'Fiches : sémiologie, principaux signes'
        ],
        thumb: '🩺',
        image: 'pack-medecine-clinique.jpg',
        matieres: ['Sémiologie', 'Clinique'],
        popular: true
    },

    {
        id: 'pack-archi-conception',
        name: 'Pack Conception architecturale',
        category: 'Architecture',
        subcategory: 'Conception',
        filiere: 'Architecture',
        level: ['L1', 'L2', 'L3'],
        price: 5200,
        description: "Pour les ateliers de conception : esquisse, perspective, présentation de projet.",
        contents: [
            'Carnet de croquis A4 hard cover',
            'Set de crayons graphite (HB → 6B)',
            'Compas pro + équerre + règle 50 cm',
            'Marqueurs Copic (set de 12)',
            'Papier calque 50 feuilles'
        ],
        thumb: '✏️',
        image: 'pack-archi-conception.jpg',
        matieres: ['Conception', 'Atelier'],
        popular: false
    },
    {
        id: 'pack-archi-dessin',
        name: 'Pack Dessin technique & DAO',
        category: 'Architecture',
        subcategory: 'Dessin',
        filiere: 'Architecture',
        level: ['L1', 'L2'],
        price: 4500,
        description: "Dessin technique manuel + intro à AutoCAD — la base du dessin architectural.",
        contents: [
            'Planche de dessin A3 + té',
            "Set d'équerres + rapporteur pro",
            'Stylos rapidographe (3 tailles)',
            "Manuel d'introduction à AutoCAD",
            'Papier millimétré 100 feuilles'
        ],
        thumb: '📏',
        image: 'pack-archi-dessin.jpg',
        matieres: ['Dessin technique', 'DAO'],
        popular: false
    },
    {
        id: 'pack-archi-histoire',
        name: "Pack Histoire de l'architecture",
        category: 'Architecture',
        subcategory: 'Histoire',
        filiere: 'Architecture',
        level: ['L1', 'L2'],
        price: 3200,
        description: "Antique, médiéval, classique, moderne — pour les modules d'histoire de l'architecture.",
        contents: [
            "Manuel illustré Histoire de l'architecture",
            'Cahier de prise de notes',
            'Fiches : grands courants & architectes',
            'Surligneurs 6 couleurs',
            'Carte mémoire des styles'
        ],
        thumb: '🏛️',
        image: 'pack-archi-histoire.jpg',
        matieres: ['Histoire'],
        popular: false
    },
    {
        id: 'pack-archi-projet',
        name: "Pack Projet d'urbanisme",
        category: 'Architecture',
        subcategory: 'Urbanisme',
        filiere: 'Architecture',
        level: ['L3', 'M1'],
        price: 5800,
        description: "Pour les projets urbains : plans de masse, maquettes, présentations finales.",
        contents: [
            'Carton plume 50x70 cm (×3)',
            'Cutter pro + tapis de découpe',
            'Colle PVA + double-face',
            'Set de figurines échelle 1/100',
            'Papier dessin 200g (50 feuilles)'
        ],
        thumb: '🏙️',
        image: 'pack-archi-projet.jpg',
        matieres: ['Urbanisme', 'Maquette'],
        popular: false
    },

    {
        id: 'pack-genie-civil-rdm',
        name: 'Pack Résistance des matériaux',
        category: 'Architecture',
        subcategory: 'Génie civil',
        filiere: 'Génie Civil',
        level: ['L2', 'L3'],
        price: 3400,
        description: "RDM + structures pour les futurs ingénieurs civils : flexion, torsion, contraintes.",
        contents: [
            'Polycopié RDM',
            'Cahier quadrillé pour calculs',
            'Calculatrice programmable',
            'Fiches : moments, contraintes, flèches',
            'Set de stylos + crayons'
        ],
        thumb: '🏗️',
        image: 'pack-genie-civil-rdm.jpg',
        matieres: ['RDM', 'Structures'],
        popular: false
    },
    {
        id: 'pack-genie-civil-beton',
        name: 'Pack Béton armé',
        category: 'Architecture',
        subcategory: 'Génie civil',
        filiere: 'Génie Civil',
        level: ['L3', 'M1'],
        price: 4200,
        description: "Calcul du béton armé selon les règlements algériens (RPA, BAEL).",
        contents: [
            'Polycopié Béton armé',
            'Règlement RPA 99 v2003',
            'Cahier calcul format ingénieur',
            'Calculatrice scientifique',
            'Fiches : poutres, poteaux, dalles'
        ],
        thumb: '🧱',
        image: 'pack-genie-civil-beton.jpg',
        matieres: ['Béton armé'],
        popular: false
    },

    {
        id: 'pack-eco-micro',
        name: 'Pack Microéconomie',
        category: 'Budget',
        subcategory: 'Économie',
        filiere: 'Sciences Économiques',
        level: ['L1', 'L2'],
        price: 2700,
        description: "Théorie du consommateur, du producteur, équilibre du marché. Module fondamental L1/L2.",
        contents: [
            'Polycopié Microéconomie',
            'Cahier 200 pages quadrillé',
            'Fiches : utilité, élasticité, courbes',
            'Calculatrice scientifique',
            'Set de stylos couleur'
        ],
        thumb: '📈',
        image: 'pack-eco-micro.jpg',
        matieres: ['Microéconomie'],
        popular: false
    },
    {
        id: 'pack-eco-macro',
        name: 'Pack Macroéconomie',
        category: 'Budget',
        subcategory: 'Économie',
        filiere: 'Sciences Économiques',
        level: ['L1', 'L2'],
        price: 2700,
        description: "PIB, inflation, chômage, politiques économiques — le pack pour la macro.",
        contents: [
            'Polycopié Macroéconomie',
            'Cahier 200 pages',
            'Fiches : agrégats, IS-LM, balance des paiements',
            'Calculatrice',
            'Surligneurs'
        ],
        thumb: '🌍',
        image: 'pack-eco-macro.jpg',
        matieres: ['Macroéconomie'],
        popular: false
    },
    {
        id: 'pack-eco-comptabilite',
        name: 'Pack Comptabilité',
        category: 'Budget',
        subcategory: 'Comptabilité',
        filiere: 'Sciences Économiques',
        level: ['L1', 'L2', 'L3'],
        price: 3100,
        description: "Comptabilité générale + analytique. Plan comptable algérien (SCF) inclus.",
        contents: [
            'Polycopié Comptabilité générale',
            'Plan comptable SCF Algérie',
            'Journal + grand livre',
            'Calculatrice',
            'Stylos rouges/bleus/noirs'
        ],
        thumb: '🧮',
        image: 'pack-eco-comptabilite.jpg',
        matieres: ['Comptabilité', 'SCF'],
        popular: true
    },
    {
        id: 'pack-eco-management',
        name: 'Pack Management & Marketing',
        category: 'Budget',
        subcategory: 'Gestion',
        filiere: 'Sciences Économiques',
        level: ['L2', 'L3', 'M1'],
        price: 3300,
        description: "Pour les filières gestion et commerce : management stratégique, marketing, RH.",
        contents: [
            'Polycopié Management',
            'Polycopié Marketing',
            'Cahier études de cas',
            'Fiches : matrices SWOT, BCG, Porter',
            'Stylos + surligneurs'
        ],
        thumb: '💼',
        image: 'pack-eco-management.jpg',
        matieres: ['Management', 'Marketing'],
        popular: false
    },

    {
        id: 'pack-langues-traduction',
        name: 'Pack Traduction & Linguistique',
        category: 'Accessoires PC',
        subcategory: 'Langues',
        filiere: 'Langues',
        level: ['L1', 'L2', 'L3'],
        price: 2900,
        description: "Pour les étudiants en traduction et linguistique : dictionnaires + outils.",
        contents: [
            'Dictionnaire bilingue (FR/EN ou FR/AR)',
            'Cahier traduction parallèle',
            'Polycopié Linguistique générale',
            'Fiches : grammaire, syntaxe',
            'Stylos + surligneurs 6 couleurs'
        ],
        thumb: '🌐',
        image: 'pack-langues-traduction.jpg',
        matieres: ['Traduction', 'Linguistique'],
        popular: false
    },
    {
        id: 'pack-langues-litterature',
        name: 'Pack Littérature',
        category: 'Accessoires PC',
        subcategory: 'Langues',
        filiere: 'Langues',
        level: ['L1', 'L2', 'L3'],
        price: 2600,
        description: "Pour l'analyse littéraire : carnet de lecture, marque-pages, fiches d'auteurs.",
        contents: [
            'Cahier de lecture A5',
            "Lot de 10 marque-pages réutilisables",
            'Fiches : grands courants littéraires',
            'Surligneurs effet pastel (6)',
            'Stylos plume + cartouches'
        ],
        thumb: '📖',
        image: 'pack-langues-litterature.jpg',
        matieres: ['Littérature'],
        popular: false
    },
    {
        id: 'pack-langues-tamazight',
        name: 'Pack Langue & culture amazighes',
        category: 'Accessoires PC',
        subcategory: 'Tamazight',
        filiere: 'Langues',
        level: ['L1', 'L2', 'L3'],
        price: 2800,
        description: "Pack DLCA UMMTO — pour le département de Langue et culture amazighes.",
        contents: [
            'Dictionnaire Tamazight-Français',
            'Cahier prise de notes',
            'Polycopié Grammaire amazighe',
            'Fiches : alphabet tifinagh + grammaire',
            'Stylos + surligneurs'
        ],
        thumb: 'ⵣ',
        image: 'pack-langues-tamazight.jpg',
        matieres: ['Tamazight', 'DLCA'],
        popular: false
    }
];

function formatPrice(price) {
    return price.toLocaleString('fr-FR') + ' DA';
}

function getProductById(id) {
    return PRODUCTS.find(p => p.id === id);
}

function escapeHtmlProd(str) {
    return String(str)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;')
        .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function imagesBasePath() {
    return window.location.pathname.includes('/content/') ? '../images/' : 'images/';
}

function buildProductCard(product) {
    const levelStr = Array.isArray(product.level)
        ? product.level.join(' · ')
        : product.level;

    const isInfo = product.filiere === 'Informatique';
    const cardClass = isInfo ? 'product-card product-info' : 'product-card';

    const imageFile = product.image || (product.id + '.jpg');
    const imageSrc = imagesBasePath() + imageFile;

    return `
        <article class="${cardClass}" data-id="${escapeHtmlProd(product.id)}">
            <div class="product-thumb">
                <img class="product-img"
                     src="${escapeHtmlProd(imageSrc)}"
                     alt="${escapeHtmlProd(product.name)}"
                     onerror="this.remove();">
                <span class="product-emoji">${product.thumb}</span>
            </div>
            <div class="product-body">
                <span class="product-cat">${escapeHtmlProd(product.category)}${product.subcategory ? ' · ' + escapeHtmlProd(product.subcategory) : ''}</span>
                <h3 class="product-name">${escapeHtmlProd(product.name)}</h3>
                <p class="product-desc">${escapeHtmlProd(product.description)}</p>
                <div class="product-meta">
                    <span>🎓 ${escapeHtmlProd(product.filiere)}</span>
                    <span>📘 ${escapeHtmlProd(levelStr)}</span>
                </div>
                <div class="product-footer">
                    <span class="product-price">${formatPrice(product.price)}</span>
                    <button class="product-add" data-add="${escapeHtmlProd(product.id)}">+ Panier</button>
                </div>
            </div>
        </article>
    `;
}

function renderPopularPacks(containerId, limit) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const popular = PRODUCTS.filter(p => p.popular).slice(0, limit || 4);
    container.innerHTML = popular.map(buildProductCard).join('');

    container.querySelectorAll('[data-add]').forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            if (typeof addToCart === 'function') {
                addToCart(btn.getAttribute('data-add'), 1);
            }
        });
    });
}

let SHOP_STATE = {
    search:    '',
    category:  'Toutes',
    filiere:   'Toutes',
    subcat:    'all',
    sort:      'default'
};

function initShopPage() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    const params = new URLSearchParams(window.location.search);
    const presetCat = params.get('cat');
    if (presetCat) SHOP_STATE.category = presetCat;
    const presetFil = params.get('fil');
    if (presetFil) SHOP_STATE.filiere = presetFil;

    const cats = [...new Set(PRODUCTS.map(p => p.category))].sort();
    const fils = [...new Set(PRODUCTS.map(p => p.filiere))].sort();

    const catSel = document.getElementById('categoryFilter');
    const filSel = document.getElementById('filiereFilter');
    if (catSel) {
        catSel.innerHTML = '<option value="Toutes">Toutes les catégories</option>'
            + cats.map(c => `<option value="${escapeHtmlProd(c)}">${escapeHtmlProd(c)}</option>`).join('');
        catSel.value = SHOP_STATE.category;
        catSel.addEventListener('change', () => {
            SHOP_STATE.category = catSel.value;
            SHOP_STATE.subcat = 'all';
            document.querySelectorAll('#subcatChips .chip').forEach(c => c.classList.remove('chip-active'));
            const allChip = document.querySelector('#subcatChips .chip[data-sub="all"]');
            if (allChip) allChip.classList.add('chip-active');
            renderProducts();
        });
    }
    if (filSel) {
        filSel.innerHTML = '<option value="Toutes">Toutes les filières</option>'
            + fils.map(f => `<option value="${escapeHtmlProd(f)}">${escapeHtmlProd(f)}</option>`).join('');
        filSel.value = SHOP_STATE.filiere;
        filSel.addEventListener('change', () => {
            SHOP_STATE.filiere = filSel.value;
            renderProducts();
        });
    }

    const search = document.getElementById('searchInput');
    if (search) {
        search.addEventListener('input', () => {
            SHOP_STATE.search = search.value.toLowerCase().trim();
            renderProducts();
        });
    }

    const sort = document.getElementById('sortSelect');
    if (sort) {
        sort.addEventListener('change', () => {
            SHOP_STATE.sort = sort.value;
            renderProducts();
        });
    }

    document.querySelectorAll('#subcatChips .chip').forEach(chip => {
        chip.addEventListener('click', () => {
            document.querySelectorAll('#subcatChips .chip').forEach(c => c.classList.remove('chip-active'));
            chip.classList.add('chip-active');
            const sub = chip.getAttribute('data-sub');
            SHOP_STATE.subcat = sub;
            if (sub !== 'all') {
                SHOP_STATE.category = 'Informatique';
                if (catSel) catSel.value = 'Informatique';
            }
            renderProducts();
        });
    });

    const resetBtn = document.getElementById('resetFilters');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            SHOP_STATE = { search: '', category: 'Toutes', filiere: 'Toutes', subcat: 'all', sort: 'default' };
            if (catSel) catSel.value = 'Toutes';
            if (filSel) filSel.value = 'Toutes';
            if (search) search.value = '';
            if (sort) sort.value = 'default';
            document.querySelectorAll('#subcatChips .chip').forEach(c => c.classList.remove('chip-active'));
            const allChip = document.querySelector('#subcatChips .chip[data-sub="all"]');
            if (allChip) allChip.classList.add('chip-active');
            renderProducts();
        });
    }

    renderProducts();
}

function renderProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    const subcatBar = document.getElementById('subcatBar');
    if (subcatBar) {
        subcatBar.hidden = false;
    }

    let filtered = PRODUCTS.slice();

    if (SHOP_STATE.search) {
        const q = SHOP_STATE.search;
        filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(q) ||
            p.description.toLowerCase().includes(q) ||
            (p.matieres && p.matieres.some(m => m.toLowerCase().includes(q)))
        );
    }
    if (SHOP_STATE.category !== 'Toutes') {
        filtered = filtered.filter(p => p.category === SHOP_STATE.category);
    }
    if (SHOP_STATE.filiere !== 'Toutes') {
        filtered = filtered.filter(p => p.filiere === SHOP_STATE.filiere || p.filiere === 'Toutes');
    }
    if (SHOP_STATE.category === 'Informatique' && SHOP_STATE.subcat !== 'all') {
        filtered = filtered.filter(p => p.subcategory === SHOP_STATE.subcat);
    }

    if (SHOP_STATE.sort === 'price-asc') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (SHOP_STATE.sort === 'price-desc') {
        filtered.sort((a, b) => b.price - a.price);
    } else {
        filtered.sort((a, b) => {
            if (a.filiere === 'Informatique' && b.filiere !== 'Informatique') return -1;
            if (a.filiere !== 'Informatique' && b.filiere === 'Informatique') return 1;
            return a.name.localeCompare(b.name);
        });
    }

    const counter = document.getElementById('resultsCount');
    if (counter) {
        counter.textContent = filtered.length === 0
            ? "Aucun pack ne correspond à tes filtres."
            : `${filtered.length} pack${filtered.length > 1 ? 's' : ''} trouvé${filtered.length > 1 ? 's' : ''}.`;
    }

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="empty-state">
                <p>😕 Aucun résultat avec ces filtres.</p>
                <button id="resetFromEmpty" class="btn btn-secondary">Réinitialiser</button>
            </div>`;
        const btn = document.getElementById('resetFromEmpty');
        if (btn) btn.addEventListener('click', () => {
            const reset = document.getElementById('resetFilters');
            if (reset) reset.click();
        });
        return;
    }

    grid.innerHTML = filtered.map(buildProductCard).join('');

    grid.querySelectorAll('[data-add]').forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            if (typeof addToCart === 'function') {
                addToCart(btn.getAttribute('data-add'), 1);
            }
        });
    });
}
