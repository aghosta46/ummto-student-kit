

(function () {
    'use strict';

    const MODULES_UMMTO = {
        Informatique: {
            L1: [
                { v: 'analyse',        l: 'Analyse 1 / 2',                e: '∫' },
                { v: 'algebre',        l: 'Algèbre 1 / 2',                e: '➕' },
                { v: 'asd1',           l: 'Algorithmique & Structures 1', e: '🌱' },
                { v: 'structure-mach', l: 'Structure machine',            e: '⚙️' },
                { v: 'physique',       l: 'Physique 1 / 2',               e: '🔭' },
                { v: 'anglais',        l: 'Anglais',                      e: '🇬🇧' }
            ],
            L2: [

                { v: 'algo',           l: 'Algorithmique 3 + TP',           e: '🌳', sem: 'S3' },
                { v: 'archi',          l: 'Architecture des ordinateurs',   e: '🖥️', sem: 'S3' },
                { v: 'systemes-info',  l: "Système d'information (MERISE)", e: '🗃️', sem: 'S3' },
                { v: 'graphes',        l: 'Théorie des graphes',            e: '🕸️', sem: 'S3' },
                { v: 'methode-num',    l: 'Méthode numérique',              e: '🔢', sem: 'S3' },
                { v: 'logique-math',   l: 'Logique mathématique',           e: '🧠', sem: 'S3' },

                { v: 'reseaux',        l: 'Réseaux + TP',                   e: '🔌', sem: 'S4' },
                { v: 'se',             l: "Système d'exploitation + TP",    e: '🐧', sem: 'S4' },
                { v: 'bdd',            l: 'Bases de données + TP',          e: '🗄️', sem: 'S4' },
                { v: 'langages',       l: 'Théorie des langages + TP',      e: '🔠', sem: 'S4' },
                { v: 'poo',            l: 'Programmation orientée objet + TP', e: '☕', sem: 'S4' },
                { v: 'web',            l: 'Développement Web + TP',         e: '🌐', sem: 'S4' },
                { v: 'anglais',        l: 'Anglais',                        e: '🇬🇧' }
            ],
            L3: [

                { v: 'se2',            l: "Système d'exploitation 2",       e: '⚙️', sem: 'S5' },
                { v: 'compilation',    l: 'Compilation',                    e: '🔧', sem: 'S5' },
                { v: 'genie-log',      l: 'Génie logiciel',                 e: '📐', sem: 'S5' },
                { v: 'ihm',            l: 'Interfaces Homme-Machine (IHM)', e: '🖱️', sem: 'S5' },
                { v: 'prog-lin',       l: 'Programmation linéaire',         e: '📊', sem: 'S5' },
                { v: 'probas',         l: 'Probabilités & statistiques',    e: '🎲', sem: 'S5' },

                { v: 'mobile',         l: 'Applications mobiles',           e: '📱', sem: 'S6' },
                { v: 'cyber',          l: 'Sécurité informatique',          e: '🛡️', sem: 'S6' },
                { v: 'ia',             l: 'Intelligence artificielle',      e: '🤖', sem: 'S6' },
                { v: 'donnees-semi',   l: 'Données semi-structurées (XML)', e: '📑', sem: 'S6' },
                { v: 'startup',        l: 'Créer & développer une startup', e: '🚀', sem: 'S6' }
            ],
            M1: [
                { v: 'sii',            l: 'Master SII (IA, Deep Learning)', e: '🧠' },
                { v: 'reseaux',        l: 'Master Réseaux & Mobilité',      e: '📡' },
                { v: 'isi',            l: "Master ISI (Ingénierie SI)",     e: '💼' },
                { v: 'cpi',            l: 'Master Conduite de Projets',     e: '🛠️' },
                { v: 'cyber',          l: 'Cybersécurité',                  e: '🛡️' }
            ],
            M2: [
                { v: 'sii',            l: 'Master SII — projet IA',         e: '🧠' },
                { v: 'reseaux',        l: 'Master Réseaux & embarqués',     e: '📡' },
                { v: 'isi',            l: "Master ISI — stage entreprise",  e: '💼' },
                { v: 'cyber',          l: 'Cybersécurité avancée',          e: '🛡️' }
            ]
        },

        Médecine: {
            L1: [
                { v: 'anatomie',     l: 'Anatomie',                  e: '🦴' },
                { v: 'histologie',   l: 'Histologie / Cytologie',    e: '🔬' },
                { v: 'biophysique',  l: 'Biophysique',               e: '⚛️' },
                { v: 'biochimie',    l: 'Biochimie / Chimie',        e: '🧪' },
                { v: 'embryologie',  l: 'Embryologie / Génétique',   e: '🧬' },
                { v: 'biostats',     l: 'Biostatistiques',           e: '📊' }
            ],
            L2: [
                { v: 'anatomie',     l: 'Anatomie 2',                e: '🦴' },
                { v: 'physiologie',  l: 'Physiologie',               e: '❤️' },
                { v: 'biochimie',    l: 'Biochimie 2',               e: '🧪' },
                { v: 'microbio',    l: 'Microbiologie',              e: '🦠' }
            ],
            L3: [
                { v: 'physiologie',  l: 'Physiologie 2',             e: '❤️' },
                { v: 'pharmaco',     l: 'Pharmacologie',             e: '💊' },
                { v: 'patho',        l: 'Pathologie',                e: '🏥' }
            ],
            M1: [
                { v: 'clinique',     l: 'Sémiologie clinique',       e: '🩺' },
                { v: 'cardio',       l: 'Cardiologie',               e: '💓' },
                { v: 'neuro',        l: 'Neurologie',                e: '🧠' }
            ],
            M2: [
                { v: 'clinique',     l: 'Stage hospitalier',         e: '🏥' },
                { v: 'urgences',     l: 'Urgences',                  e: '🚑' }
            ]
        },

        Architecture: {
            L1: [
                { v: 'conception',  l: 'Atelier conception',         e: '✏️' },
                { v: 'dessin',      l: 'Dessin technique',           e: '📏' },
                { v: 'histoire',    l: "Histoire de l'architecture", e: '🏛️' }
            ],
            L2: [
                { v: 'conception',  l: 'Atelier conception 2',       e: '✏️' },
                { v: 'dao',         l: 'DAO / AutoCAD',              e: '🖥️' },
                { v: 'histoire',    l: "Histoire de l'architecture 2", e: '🏛️' }
            ],
            L3: [
                { v: 'urbanisme',   l: 'Urbanisme',                  e: '🏙️' },
                { v: 'projet',      l: 'Projet final',               e: '📐' }
            ],
            M1: [
                { v: 'urbanisme',   l: 'Urbanisme avancé',           e: '🏙️' },
                { v: 'projet',      l: 'Projet master',              e: '📐' }
            ],
            M2: [
                { v: 'memoire',     l: 'Mémoire',                    e: '📜' }
            ]
        },

        'Sciences Économiques': {
            L1: [
                { v: 'micro',       l: 'Microéconomie',              e: '📈' },
                { v: 'macro',       l: 'Macroéconomie',              e: '🌍' },
                { v: 'compta',      l: 'Comptabilité générale',      e: '🧮' }
            ],
            L2: [
                { v: 'micro',       l: 'Microéconomie 2',            e: '📈' },
                { v: 'macro',       l: 'Macroéconomie 2',            e: '🌍' },
                { v: 'compta',      l: 'Comptabilité analytique',    e: '🧮' },
                { v: 'management',  l: 'Management',                 e: '💼' }
            ],
            L3: [
                { v: 'management',  l: 'Management stratégique',     e: '💼' },
                { v: 'marketing',   l: 'Marketing',                  e: '📢' },
                { v: 'finance',     l: "Finance d'entreprise",       e: '💰' }
            ],
            M1: [
                { v: 'management',  l: 'Management avancé',          e: '💼' },
                { v: 'finance',     l: 'Finance internationale',     e: '🌐' }
            ],
            M2: [
                { v: 'memoire',     l: 'Mémoire master',             e: '📜' }
            ]
        },

        Langues: {
            L1: [
                { v: 'traduction',  l: 'Traduction',                 e: '🔤' },
                { v: 'litterature', l: 'Littérature',                e: '📖' },
                { v: 'tamazight',   l: 'Tamazight (DLCA)',           e: 'ⵣ' }
            ],
            L2: [
                { v: 'traduction',  l: 'Traduction 2',               e: '🔤' },
                { v: 'litterature', l: 'Littérature 2',              e: '📖' },
                { v: 'linguistique',l: 'Linguistique',               e: '🗣️' }
            ],
            L3: [
                { v: 'litterature', l: 'Littérature comparée',       e: '📚' },
                { v: 'memoire',     l: 'Mémoire de fin de cycle',    e: '📜' }
            ],
            M1: [
                { v: 'memoire',     l: 'Mémoire master',             e: '📜' }
            ],
            M2: [
                { v: 'memoire',     l: 'Mémoire master',             e: '📜' }
            ]
        }
    };

    function hasModulesFor(filiere, niveau) {
        return MODULES_UMMTO[filiere] && MODULES_UMMTO[filiere][niveau] &&
               MODULES_UMMTO[filiere][niveau].length > 0;
    }

    const MODULE_TO_PACK = {

        'analyse':        ['pack-l1-analyse'],
        'algebre':        ['pack-l1-algebre'],
        'asd1':           ['pack-l1-asd1'],
        'structure-mach': ['pack-l1-structure-mach'],
        'physique':       ['pack-l1-physique'],
        'anglais':        ['pack-anglais-info'],

        'algo':           ['pack-asd3'],
        'archi':          ['pack-archi-ord'],
        'systemes-info':  ['pack-systemes-info'],
        'graphes':        ['pack-graphes'],
        'methode-num':    ['pack-methode-num'],
        'logique-math':   ['pack-logique-math'],
        'reseaux':        ['pack-reseaux'],
        'se':             ['pack-se1'],
        'bdd':            ['pack-bdd'],
        'langages':       ['pack-langages'],
        'poo':            ['pack-poo'],
        'web':            ['pack-web'],

        'se2':            ['pack-se'],
        'compilation':    ['pack-langages'],
        'genie-log':      ['pack-l3-genie-log'],
        'ihm':            ['pack-web'],
        'prog-lin':       ['pack-master-sii'],
        'probas':         ['pack-master-sii'],
        'mobile':         ['pack-web'],
        'cyber':          ['pack-cyber'],
        'ia':             ['pack-master-sii'],
        'donnees-semi':   ['pack-bdd'],
        'startup':        ['pack-master-cpi-prog'],

        'sii':            ['pack-master-sii'],
        'isi':            ['pack-master-isi'],
        'cpi':            ['pack-master-cpi-prog'],

        'anatomie':       ['pack-medecine-anatomie'],
        'histologie':     ['pack-medecine-histologie'],
        'biophysique':    ['pack-medecine-biophysique'],
        'biochimie':      ['pack-medecine-biochimie'],
        'embryologie':    ['pack-medecine-embryo'],
        'biostats':       ['pack-medecine-biophysique'],
        'physiologie':    ['pack-medecine-physio'],
        'microbio':       ['pack-medecine-biochimie'],
        'pharmaco':       ['pack-medecine-physio'],
        'patho':          ['pack-medecine-physio'],
        'clinique':       ['pack-medecine-clinique'],
        'cardio':         ['pack-medecine-clinique'],
        'neuro':          ['pack-medecine-clinique'],
        'urgences':       ['pack-medecine-clinique'],

        'conception':     ['pack-archi-conception'],
        'dessin':         ['pack-archi-dessin'],
        'dao':            ['pack-archi-dessin'],
        'histoire':       ['pack-archi-histoire'],
        'urbanisme':      ['pack-archi-projet'],
        'projet':         ['pack-archi-projet'],

        'micro':          ['pack-eco-micro'],
        'macro':          ['pack-eco-macro'],
        'compta':         ['pack-eco-comptabilite'],
        'management':     ['pack-eco-management'],
        'marketing':      ['pack-eco-management'],
        'finance':        ['pack-eco-comptabilite'],

        'traduction':     ['pack-langues-traduction'],
        'litterature':    ['pack-langues-litterature'],
        'linguistique':   ['pack-langues-traduction'],
        'tamazight':      ['pack-langues-tamazight'],

        'memoire':        ['pack-l3-genie-log']
    };

    const state = {
        answers: {},
        history: [],
        currentStep: null
    };

    function getNextStep() {
        const a = state.answers;

        if (!a.filiere) return STEP_FILIERE;

        if (!a.niveau) return STEP_NIVEAU;

        if (!a.besoin) return STEP_BESOIN;

        if (a.besoin === 'rentree') {
            if (!a.budget) return STEP_BUDGET;
            return null;
        }

        if (a.besoin === 'rien') {
            if (!a.budget) return STEP_BUDGET;
            return null;
        }

        if (a.besoin === 'emd' || a.besoin === 'rattrap') {
            if (hasModulesFor(a.filiere, a.niveau) && !a.modules) {
                return buildStepModules(a, true);
            }
            if (!a.budget) return STEP_BUDGET;
            return null;
        }

        if (a.besoin === 'projet' || a.besoin === 'stage') {
            if (a.filiere === 'Informatique' && !a.domaine) {
                return STEP_DOMAINE_INFO;
            }
            if (!a.budget) return STEP_BUDGET;
            return null;
        }

        if (a.besoin === 'concours') {
            if (a.filiere === 'Informatique' && !a.spe) {
                return STEP_SPE_MASTER_INFO;
            }
            if (!a.budget) return STEP_BUDGET;
            return null;
        }

        if (!a.budget) return STEP_BUDGET;
        return null;
    }

    const STEP_FILIERE = {
        id: 'filiere',
        title: "Quelle est ta filière à l'UMMTO ?",
        hint: "Ta filière détermine les modules et packs que je peux te proposer.",
        cols: 2,
        type: 'single',
        options: [
            { value: 'Informatique', label: 'Informatique', emoji: '💻' },
            { value: 'Mathématiques', label: 'Mathématiques', emoji: '➗' },
            { value: 'Médecine', label: 'Médecine / Biologie', emoji: '🩺' },
            { value: 'Architecture', label: 'Architecture / Génie civil', emoji: '📐' },
            { value: 'Génie électrique', label: 'Génie électrique / Électronique', emoji: '⚡' },
            { value: 'Sciences Économiques', label: 'Sciences éco / Gestion', emoji: '📊' },
            { value: 'Droit', label: 'Droit / Sciences politiques', emoji: '⚖️' },
            { value: 'Langues', label: 'Lettres et Langues', emoji: '🌍' }
        ]
    };

    const STEP_NIVEAU = {
        id: 'niveau',
        title: 'Quel est ton niveau ?',
        hint: 'Ton année universitaire en cours.',
        cols: 2,
        type: 'single',
        options: [
            { value: 'L1', label: 'Licence 1', emoji: '1️⃣' },
            { value: 'L2', label: 'Licence 2', emoji: '2️⃣' },
            { value: 'L3', label: 'Licence 3', emoji: '3️⃣' },
            { value: 'M1', label: 'Master 1', emoji: '🎓' },
            { value: 'M2', label: 'Master 2', emoji: '🎓' }
        ]
    };

    const STEP_BESOIN = {
        id: 'besoin',
        title: 'Pourquoi tu cherches un pack maintenant ?',
        hint: "Choisis ce qui décrit le mieux TA situation. Le quiz s'adapte ensuite à ta réponse.",
        cols: 1,
        type: 'single',
        options: [
            { value: 'rentree',  label: "🎒 Je commence l'année universitaire",          emoji: '🎒' },
            { value: 'emd',      label: '📚 Je révise pour les EMD',                       emoji: '📚' },
            { value: 'rattrap',  label: '📝 Je prépare un rattrapage',                     emoji: '📝' },
            { value: 'projet',   label: '💡 Je travaille sur un projet / mémoire',         emoji: '💡' },
            { value: 'stage',    label: '💼 Je prépare un stage en entreprise',            emoji: '💼' },
            { value: 'concours', label: '🏆 Je prépare le concours Master / Ingénieur',    emoji: '🏆' },
            { value: 'rien',     label: '✨ Rien de spécial, je veux du matériel solide',  emoji: '✨' }
        ]
    };

    function buildStepModules(a, multi) {
        const list = MODULES_UMMTO[a.filiere][a.niveau];
        const opts = list.map(m => ({
            value: m.v,
            label: m.sem ? `[${m.sem}] ${m.l}` : m.l,
            emoji: m.e
        }));

        const verbe = (a.besoin === 'rattrap') ? 'rattraper' : 'réviser';
        return {
            id: 'modules',
            title: `Quel(s) module(s) tu veux ${verbe} ?`,
            hint: `Programme officiel UMMTO pour ${a.filiere} ${a.niveau}. ✅ Tu peux en sélectionner plusieurs.`,
            cols: 2,
            type: multi ? 'multi' : 'single',
            options: opts,
            minSelect: 1
        };
    }

    const STEP_DOMAINE_INFO = {
        id: 'domaine',
        title: 'Sur quel domaine porte ton projet / stage ?',
        hint: "Le domaine détermine le pack technique le plus utile.",
        cols: 2,
        type: 'single',
        options: [
            { value: 'web',      label: 'Web / Mobile',           emoji: '🌐' },
            { value: 'data',     label: 'IA / Data / Big Data',   emoji: '🧠' },
            { value: 'systeme',  label: 'Systèmes / Réseaux',     emoji: '🖧' },
            { value: 'cyber',    label: 'Cybersécurité',          emoji: '🛡️' },
            { value: 'genie-log',label: 'Génie logiciel / Architecture', emoji: '📐' },
            { value: 'business', label: 'Gestion de projet / Startup',   emoji: '🚀' }
        ]
    };

    const STEP_SPE_MASTER_INFO = {
        id: 'spe',
        title: 'Quelle spécialité de Master vises-tu ?',
        hint: 'Les 5 spécialités de Master Informatique de la FGEI UMMTO.',
        cols: 2,
        type: 'single',
        options: [
            { value: 'sii',      label: 'SII — IA & Big Data',            emoji: '🧠' },
            { value: 'reseaux',  label: 'Réseaux & Mobilité',             emoji: '📡' },
            { value: 'isi',      label: "ISI — Ingénierie SI",            emoji: '💼' },
            { value: 'cpi',      label: 'Conduite de Projets',            emoji: '🛠️' },
            { value: 'cyber',    label: 'Cybersécurité',                  emoji: '🛡️' }
        ]
    };

    const STEP_BUDGET = {
        id: 'budget',
        title: 'Et ton budget pour ce pack ?',
        hint: '💰 On te montrera UNIQUEMENT des packs ≤ ton budget. Aucune mauvaise surprise.',
        cols: 1,
        type: 'single',
        options: [
            { value: 'eco',   label: "💰 Économique — jusqu'à 2 500 DA",   emoji: '💰' },
            { value: 'moyen', label: '💵 Moyen — 2 500 à 4 500 DA',         emoji: '💵' },
            { value: 'large', label: '💎 Large — plus de 4 500 DA',         emoji: '💎' },
            { value: 'sans',  label: '🚀 Pas de limite — montre le meilleur', emoji: '🚀' }
        ]
    };

    function budgetMax(b) {
        switch (b) {
            case 'eco':   return 2500;
            case 'moyen': return 4500;
            case 'large': return Infinity;
            case 'sans':  return Infinity;
            default:      return Infinity;
        }
    }

    function scorePack(pack, a) {
        let score = 0;

        if (pack.filiere === a.filiere) score += 30;
        else if (pack.filiere === 'Toutes') score += 8;
        else return -Infinity;

        const levels = Array.isArray(pack.level) ? pack.level : [pack.level];
        if (levels.includes(a.niveau)) score += 20;
        else {
            const order = ['L1', 'L2', 'L3', 'M1', 'M2'];
            const ix = order.indexOf(a.niveau);
            const minDist = Math.min(...levels.map(l => Math.abs(order.indexOf(l) - ix)));
            if (minDist === 1) score += 5;
            else score -= 10;
        }

        if (Array.isArray(a.modules) && a.modules.length > 0) {
            for (const mod of a.modules) {
                const targets = MODULE_TO_PACK[mod] || [];
                if (targets.includes(pack.id)) {
                    score += 50;
                }
            }
        }

        if (a.domaine) {
            const domToKW = {
                'web':       ['web', 'mobile'],
                'data':      ['sii', 'master-sii', 'bdd', 'ia', 'probas', 'donnees'],
                'systeme':   ['reseaux', 'se', 'archi', 'master-reseaux'],
                'cyber':     ['cyber'],
                'genie-log': ['genie-log', 'prog', 'poo', 'asd', 'master-isi'],
                'business':  ['cpi', 'startup', 'isi', 'master-cpi']
            };
            const kws = domToKW[a.domaine] || [];
            for (const kw of kws) {
                if (pack.id.includes(kw)) { score += 25; break; }
            }
        }

        if (a.spe) {
            const speToPack = {
                'sii':     'pack-master-sii',
                'reseaux': 'pack-master-reseaux',
                'isi':     'pack-master-isi',
                'cpi':     'pack-master-cpi-prog',
                'cyber':   'pack-cyber'
            };
            if (pack.id === speToPack[a.spe]) score += 40;
        }

        if (a.besoin === 'rentree' && /rentree|cpi/.test(pack.id)) score += 15;
        if (a.besoin === 'concours' && /master|cpi/.test(pack.id)) score += 12;
        if (a.besoin === 'rien' && pack.popular) score += 8;

        if (pack.popular) score += 2;

        score -= pack.price * 0.0005;

        return score;
    }

    function recommendPacks(topN) {
        topN = topN || 3;
        const a = state.answers;
        const max = budgetMax(a.budget);
        const all = (typeof PRODUCTS !== 'undefined') ? PRODUCTS : [];

        const scored = all.map(p => ({ p, s: scorePack(p, a) }))
                          .filter(x => x.s > -Infinity)
                          .sort((x, y) => y.s - x.s);

        if (scored.length === 0) return { primary: null, others: [], withinBudget: false, fallback: false };

        const top1 = scored[0];
        const inBudget = scored.filter(x => x.p.price <= max);

        const top1MatchesModule = top1.s >= 80;
        const tolerableOverBudget = top1.p.price <= max * 1.3;

        if (inBudget.length > 0 && inBudget[0] === top1) {
            return {
                primary: top1.p,
                others: inBudget.slice(1, topN).map(x => x.p),
                withinBudget: true,
                fallback: false
            };
        }

        if (top1MatchesModule && tolerableOverBudget) {
            const others = scored.slice(1, topN + 1).map(x => x.p);
            return {
                primary: top1.p,
                others,
                withinBudget: false,
                fallback: true
            };
        }

        if (inBudget.length > 0) {
            return {
                primary: inBudget[0].p,
                others: inBudget.slice(1, topN).map(x => x.p),
                withinBudget: true,
                fallback: false
            };
        }

        const top5 = scored.slice(0, 5);
        top5.sort((x, y) => x.p.price - y.p.price);
        return {
            primary: top5[0].p,
            others: top5.slice(1, topN).map(x => x.p),
            withinBudget: false,
            fallback: true
        };
    }

    function renderCurrentStep() {
        const step = getNextStep();
        const content     = document.getElementById('quizContent');
        const indicator   = document.getElementById('quizStepIndicator');
        const progressBar = document.getElementById('quizProgressBar');
        const prevBtn     = document.getElementById('quizPrev');
        const nextBtn     = document.getElementById('quizNext');
        if (!content) return;

        if (!step) {
            state.currentStep = null;
            showResult();
            return;
        }

        state.currentStep = step;

        const past = state.history.length;
        const total = past + estimateRemaining(state.answers);
        indicator.textContent = `Étape ${past + 1} / ${total}`;
        progressBar.style.width = ((past + 1) / total * 100) + '%';

        const colsClass = step.cols === 2 ? 'cols-2' : '';
        const isMulti = step.type === 'multi';
        const currentVal = state.answers[step.id];
        const selectedSet = isMulti
            ? new Set(Array.isArray(currentVal) ? currentVal : [])
            : null;

        const optionsHTML = step.options.map(opt => {
            const sel = isMulti
                ? selectedSet.has(opt.value)
                : (currentVal === opt.value);
            return `
                <button type="button" class="quiz-option ${sel ? 'selected' : ''}" data-value="${escAttr(opt.value)}">
                    <span class="quiz-opt-emoji">${opt.emoji}</span>
                    <span class="quiz-opt-text">${escHTML(opt.label)}</span>
                    ${isMulti ? '<span class="quiz-opt-check">✓</span>' : ''}
                </button>`;
        }).join('');

        const multiHint = isMulti
            ? `<p class="quiz-multi-hint">📌 Sélection multiple — clique sur plusieurs options puis "Suivant".</p>`
            : '';

        content.innerHTML = `
            <div class="quiz-question">
                <h2>${escHTML(step.title)}</h2>
                <p class="quiz-question-hint">${escHTML(step.hint)}</p>
                ${multiHint}
                <div class="quiz-options ${colsClass}">${optionsHTML}</div>
                ${isMulti ? `<p class="quiz-multi-counter" id="quizMultiCounter">0 module(s) sélectionné(s)</p>` : ''}
            </div>`;

        content.querySelectorAll('.quiz-option').forEach(btn => {
            btn.addEventListener('click', () => {
                const v = btn.getAttribute('data-value');

                if (isMulti) {
                    if (selectedSet.has(v)) selectedSet.delete(v);
                    else selectedSet.add(v);
                    btn.classList.toggle('selected');

                    state.answers[step.id] = Array.from(selectedSet);

                    const counter = document.getElementById('quizMultiCounter');
                    if (counter) {
                        const n = selectedSet.size;
                        counter.textContent = `${n} module${n > 1 ? 's' : ''} sélectionné${n > 1 ? 's' : ''}`;
                    }
                    nextBtn.disabled = (selectedSet.size < (step.minSelect || 1));
                } else {
                    state.answers[step.id] = v;
                    content.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
                    btn.classList.add('selected');
                    nextBtn.disabled = false;
                }
            });
        });

        if (isMulti) {
            const counter = document.getElementById('quizMultiCounter');
            const n = selectedSet.size;
            if (counter) counter.textContent = `${n} module${n > 1 ? 's' : ''} sélectionné${n > 1 ? 's' : ''}`;
        }

        prevBtn.hidden = (state.history.length === 0);
        const hasValue = isMulti
            ? (Array.isArray(currentVal) && currentVal.length >= (step.minSelect || 1))
            : !!currentVal;
        nextBtn.disabled = !hasValue;

        const isLastStep = isLastStepBeforeResult(step.id, state.answers);
        nextBtn.textContent = isLastStep ? '🎯 Voir mon pack' : 'Suivant →';
    }

    function estimateRemaining(a) {
        let n = 0;
        if (!a.filiere) n++;
        if (!a.niveau) n++;
        if (!a.besoin) n++;
        if (a.besoin === 'emd' || a.besoin === 'rattrap') {
            if (hasModulesFor(a.filiere, a.niveau) && !a.modules) n++;
        }
        if ((a.besoin === 'projet' || a.besoin === 'stage') && a.filiere === 'Informatique' && !a.domaine) n++;
        if (a.besoin === 'concours' && a.filiere === 'Informatique' && !a.spe) n++;
        if (!a.budget) n++;
        return Math.max(n, 1);
    }

    function isLastStepBeforeResult(currentStepId, answers) {

        const afterAnswer = Object.assign({}, answers);
        afterAnswer[currentStepId] = '__simulated__';

        const remain = estimateRemaining(afterAnswer);
        return remain <= 1;
    }

    function showResult() {
        const { primary, others, withinBudget, fallback } = recommendPacks(3);

        const quizCard    = document.querySelector('.quiz-card');
        const resultBox   = document.getElementById('quizResult');
        const resultCard  = document.getElementById('quizResultCard');
        const resultTitle = document.getElementById('quizResultTitle');
        const resultLead  = document.getElementById('quizResultLead');

        if (!primary) {
            resultCard.innerHTML = `<p>Aucun pack ne correspond à ton profil pour le moment.
                Va explorer la <a href="produits.html">boutique</a>.</p>`;
            quizCard.hidden = true;
            resultBox.hidden = false;
            return;
        }

        resultTitle.textContent = primary.name;
        resultLead.innerHTML = buildLead(state.answers, primary, withinBudget, fallback);

        const imgFile = primary.image || (primary.id + '.jpg');
        const imgBase = (typeof imagesBasePath === 'function') ? imagesBasePath() : '../images/';
        const imgSrc  = imgBase + imgFile;

        const includes = primary.contents.map(c => `<li>${escHTML(c)}</li>`).join('');

        const budgetWarning = !withinBudget && fallback ? `
            <div class="quiz-budget-warning">
                ⚠️ <strong>Note budget :</strong> ce pack dépasse légèrement ton budget mais c'est le plus pertinent
                pour ton profil. <a href="produits.html">Explore la boutique</a> en triant par "prix croissant"
                pour voir des alternatives moins chères.
            </div>` : '';

        const othersHTML = others.length > 0 ? `
            <div class="quiz-result-others">
                <h4>📦 Autres packs qui pourraient t'intéresser</h4>
                <div class="quiz-others-grid">
                    ${others.map(p => {
                        const oImg = imgBase + (p.image || (p.id + '.jpg'));
                        return `
                            <a href="produits.html?cat=${encodeURIComponent(p.category)}" class="quiz-other-card">
                                <div class="quiz-other-thumb">
                                    <img src="${oImg}" alt="${escAttr(p.name)}" onerror="this.remove();">
                                    <span>${p.thumb}</span>
                                </div>
                                <strong>${escHTML(p.name)}</strong>
                                <small>${formatPrice(p.price)}</small>
                            </a>`;
                    }).join('')}
                </div>
            </div>` : '';

        resultCard.innerHTML = `
            ${budgetWarning}
            <div class="quiz-result-thumb">
                <img class="quiz-result-img" src="${imgSrc}" alt="${escAttr(primary.name)}" onerror="this.remove();">
                <span class="quiz-result-emoji">${primary.thumb}</span>
            </div>
            <h3>${escHTML(primary.name)}</h3>
            <p class="product-desc">${escHTML(primary.description)}</p>
            <div class="quiz-result-includes">
                <strong>📦 Contenu du pack</strong>
                <ul>${includes}</ul>
            </div>
            <div class="quiz-result-price">${formatPrice(primary.price)}</div>
            <div class="quiz-result-cta">
                <button id="quizAddCart" class="btn btn-primary">🛒 Ajouter au panier</button>
                <a href="produits.html?cat=${encodeURIComponent(primary.category)}" class="btn btn-ghost">
                    Voir des packs similaires
                </a>
            </div>
            ${othersHTML}
        `;

        quizCard.hidden = true;
        resultBox.hidden = false;
        document.getElementById('quizProgressBar').style.width = '100%';

        document.getElementById('quizAddCart').addEventListener('click', () => {
            if (typeof addToCart === 'function') addToCart(primary.id, 1);
        });

        resultBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function buildLead(a, product, withinBudget, fallback) {
        const parts = [];

        const fil = a.filiere || '';
        const niv = a.niveau || '';
        parts.push(`<strong>${escHTML(fil)} ${escHTML(niv)}</strong>`);

        const besoinLabels = {
            'rentree':  'rentrée universitaire',
            'emd':      'révision EMD',
            'rattrap':  'rattrapage',
            'projet':   'projet / mémoire',
            'stage':    'stage en entreprise',
            'concours': 'concours Master',
            'rien':     'matériel solide'
        };
        if (a.besoin) parts.push(`focus <strong>${escHTML(besoinLabels[a.besoin] || a.besoin)}</strong>`);

        if (Array.isArray(a.modules) && a.modules.length > 0) {
            const list = (MODULES_UMMTO[a.filiere] && MODULES_UMMTO[a.filiere][a.niveau]) || [];
            const labels = a.modules.map(m => {
                const found = list.find(x => x.v === m);
                return found ? found.l : m;
            });
            if (labels.length === 1) {
                parts.push(`module <strong>${escHTML(labels[0])}</strong>`);
            } else {
                parts.push(`${labels.length} modules sélectionnés`);
            }
        }

        if (a.domaine) {
            const domLabels = {
                'web': 'web/mobile',
                'data': 'IA/Data',
                'systeme': 'systèmes/réseaux',
                'cyber': 'cybersécurité',
                'genie-log': 'génie logiciel',
                'business': 'gestion de projet'
            };
            parts.push(`domaine <strong>${escHTML(domLabels[a.domaine] || a.domaine)}</strong>`);
        }

        if (a.spe) {
            const speLabels = {
                'sii': 'Master SII',
                'reseaux': 'Master Réseaux',
                'isi': 'Master ISI',
                'cpi': 'Master CPI',
                'cyber': 'Master Cybersécurité'
            };
            parts.push(`vise <strong>${escHTML(speLabels[a.spe])}</strong>`);
        }

        const lead = parts.join(' · ');

        if (!withinBudget && fallback) {
            return `${lead} — c'est le pack le plus pertinent pour toi.`;
        }
        return `${lead} — voici le pack qui colle parfaitement à ton profil.`;
    }

    function goNext() {

        const step = state.currentStep;
        if (!step) {

            renderCurrentStep();
            return;
        }

        const v = state.answers[step.id];
        const isMulti = step.type === 'multi';
        const valid = isMulti
            ? (Array.isArray(v) && v.length >= (step.minSelect || 1))
            : (v !== undefined && v !== null && v !== '');

        if (!valid) {

            return;
        }

        state.history.push(step.id);

        renderCurrentStep();
    }

    function goPrev() {
        if (state.history.length === 0) return;

        const lastStepId = state.history.pop();
        delete state.answers[lastStepId];

        cleanupDependentAnswers(lastStepId);
        renderCurrentStep();
    }

    function cleanupDependentAnswers(stepId) {
        const a = state.answers;
        if (stepId === 'filiere') {
            delete a.niveau;
            delete a.besoin;
            delete a.modules;
            delete a.domaine;
            delete a.spe;
            delete a.budget;

            state.history = [];
        } else if (stepId === 'niveau') {
            delete a.besoin;
            delete a.modules;
            delete a.domaine;
            delete a.spe;
            delete a.budget;
        } else if (stepId === 'besoin') {
            delete a.modules;
            delete a.domaine;
            delete a.spe;
            delete a.budget;
        } else if (stepId === 'modules' || stepId === 'domaine' || stepId === 'spe') {
            delete a.budget;
        }
    }

    function restart() {
        state.answers = {};
        state.history = [];
        document.querySelector('.quiz-card').hidden = false;
        document.getElementById('quizResult').hidden = true;
        renderCurrentStep();
        document.querySelector('.quiz-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function escHTML(s) {
        return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
            .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }
    function escAttr(s) { return escHTML(s).replace(/'/g, '&#39;'); }

    document.addEventListener('DOMContentLoaded', () => {
        if (!document.getElementById('quizContent')) return;
        renderCurrentStep();
        document.getElementById('quizPrev').addEventListener('click', goPrev);
        document.getElementById('quizNext').addEventListener('click', goNext);
        document.getElementById('quizRestart').addEventListener('click', restart);
    });

})();
