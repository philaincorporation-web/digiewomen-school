export const stats = [
  { value: "+11K", label: "Personnes formées au Gabon et à l'international de 2018 à 2026", color: "green" },
  { value: "+100", label: "Formations dispensées au Gabon et à l'international de 2018 à 2026", color: "blue" },
  { value: "+4", label: "Prix remportés à l'international", color: "purple" },
  { value: "+35", label: "Partenaires stratégiques depuis 2018", color: "green" },
  { value: "+40", label: "Experts formateurs dans les métiers du Numérique et Agro-Pastoral", color: "blue" },
  { value: "+20", label: "Formations clés dans les métiers du Numérique et Agro-Pastoral", color: "purple" },
  { value: "4", label: "Éditions organisées des DIGIEWOMEN AWARDS (DIWA)", color: "green" },
  { value: "5", label: "Solutions de transformations digitales : la GED", color: "blue" },
  { value: "1", label: "Plateforme d'E-Agriculture (e-Agri361)", color: "purple" },
];

export const formations = [
  // ============================================================
  // FORMATIONS ENRICHIES (page détail complète)
  // ============================================================
  {
    id: "cybersecurite",
    slug: "cybersecurite",
    title: "Cybersécurité",
    category: "Numérique",
    icon: "Shield",
    description:
      "Protégez les systèmes d'information et sécurisez les infrastructures numériques.",
    subtitle: "Protégez les systèmes et devenez actrice de la sécurité numérique",
    level: "Débutant → Intermédiaire",
    duration: "8 semaines",
    format: "Présentiel + en ligne",
    image: "/images/formations/cybersécurité.jpg",
    overview:
      "Cette formation te donne les bases et les bonnes pratiques pour sécuriser les systèmes d'information, détecter les menaces et réagir face aux incidents. Idéale pour démarrer une carrière en cybersécurité ou renforcer les compétences de ton équipe.",
    skills: [
      "Analyse des risques",
      "Sécurisation des réseaux",
      "Gestion des incidents",
      "Bonnes pratiques ISO 27001",
      "Sensibilisation des utilisateurs",
    ],
    tools: [
      { name: "Wireshark" },
      { name: "Nmap" },
      { name: "Kali Linux" },
      { name: "ISO 27001" },
    ],
    roadmap: [
      {
        id: "1",
        title: "Niveau 1 — Fondamentaux",
        description: "Comprendre les enjeux de la cybersécurité",
        modules: [
          "Introduction à la cybersécurité",
          "Types de menaces et d'attaques",
          "Principes de confidentialité, intégrité, disponibilité",
        ],
      },
      {
        id: "2",
        title: "Niveau 2 — Pratique",
        description: "Mettre en place des mesures de protection",
        modules: [
          "Sécurisation des postes et réseaux",
          "Gestion des mots de passe et accès",
          "Détection et réponse aux incidents",
        ],
      },
      {
        id: "3",
        title: "Niveau 3 — Projet",
        description: "Appliquer sur un cas concret",
        modules: [
          "Audit de sécurité simplifié",
          "Plan de sensibilisation",
          "Présentation du projet final",
        ],
      },
    ],
    projects: [
      {
        id: "1",
        title: "Audit de sécurité d'une PME",
        description: "Identifier les vulnérabilités et proposer un plan d'action.",
      },
      {
        id: "2",
        title: "Campagne de sensibilisation",
        description: "Créer un support de formation pour les utilisateurs.",
      },
    ],
    careers: [
      "Assistante cybersécurité",
      "Analyste SOC junior",
      "Consultante en sécurité de l'information",
      "Responsable sécurité en entreprise",
    ],
    certification: {
      title: "Certificat DigieWomen — Cybersécurité",
      description: "Délivré après validation des modules et du projet final.",
    },
    testimonials: [
      {
        id: "1",
        name: "Amina O.",
        role: "Apprenante - Cybersécurité",
        content:
          "La formation en cybersécurité m'a ouvert les portes d'un nouveau métier. Les formateurs sont experts et pédagogues.",
        rating: 5,
      },
    ],
    faq: [
      {
        question: "Faut-il des prérequis techniques ?",
        answer:
          "Non. Un niveau débutant en informatique suffit. Nous repartons des bases.",
      },
      {
        question: "La formation est-elle certifiante ?",
        answer:
          "Oui. Un certificat DigieWomen est délivré après validation du parcours.",
      },
      {
        question: "Puis-je suivre la formation à distance ?",
        answer:
          "Oui, une partie est disponible en ligne. Le présentiel reste recommandé pour la pratique.",
      },
    ],
  },

  {
    id: "digital-marketing",
    slug: "digital-marketing",
    title: "Digital Marketing",
    category: "Numérique",
    icon: "Megaphone",
    description:
      "Développez des stratégies marketing digital efficaces pour booster votre présence en ligne.",
    subtitle: "Maîtrise les leviers du marketing digital et booste ta visibilité",
    level: "Débutant → Avancé",
    duration: "10 semaines",
    format: "Présentiel + en ligne",
    image: "/images/formations/digitaleMarketing.png",
    overview:
      "Apprends à construire une stratégie marketing digital complète : réseaux sociaux, contenu, publicité en ligne, emailing et analyse des performances. Formation orientée pratique, avec des projets concrets pour ton business ou ton employeur.",
    skills: [
      "Stratégie de contenu",
      "Community management",
      "Publicité Meta & Google",
      "SEO / SEA de base",
      "Email marketing",
      "Analyse de performances",
    ],
    tools: [
      { name: "Canva" },
      { name: "Meta Business Suite" },
      { name: "Google Analytics" },
      { name: "Mailchimp" },
      { name: "CapCut" },
    ],
    roadmap: [
      {
        id: "1",
        title: "Niveau 1 — Fondamentaux",
        description: "Comprendre le marketing digital",
        modules: [
          "Écosystème digital",
          "Persona et parcours client",
          "Positionnement et offre",
        ],
      },
      {
        id: "2",
        title: "Niveau 2 — Canaux & contenu",
        description: "Produire et diffuser",
        modules: [
          "Réseaux sociaux & calendrier éditorial",
          "Création de contenus visuels et vidéo",
          "Publicité payante (Meta Ads)",
        ],
      },
      {
        id: "3",
        title: "Niveau 3 — Conversion & mesure",
        description: "Transformer et optimiser",
        modules: [
          "Landing pages et tunnels simples",
          "Emailing et automatisation de base",
          "Tableaux de bord et KPI",
        ],
      },
    ],
    projects: [
      {
        id: "1",
        title: "Stratégie social media",
        description: "Calendrier éditorial + 10 contenus pour une marque.",
      },
      {
        id: "2",
        title: "Campagne publicitaire",
        description: "Lancer et analyser une campagne Meta Ads.",
      },
    ],
    careers: [
      "Community Manager",
      "Chargée de marketing digital",
      "Assistante communication digitale",
      "Consultante freelance",
    ],
    certification: {
      title: "Certificat DigieWomen — Digital Marketing",
      description: "Délivré après validation des projets et du parcours.",
    },
    testimonials: [
      {
        id: "1",
        name: "Fatoumata B.",
        role: "Apprenante - Digital Marketing",
        content:
          "Une expérience enrichissante qui m'a permis de moderniser la communication de mon entreprise.",
        rating: 5,
      },
    ],
    faq: [
      {
        question: "Ai-je besoin d'un diplôme en marketing ?",
        answer: "Non. La formation est accessible sans prérequis académique.",
      },
      {
        question: "Faut-il un budget pub pour la formation ?",
        answer:
          "Un petit budget test est recommandé pour la pratique Ads, mais pas obligatoire pour valider le parcours.",
      },
      {
        question: "Est-ce adapté aux entrepreneures ?",
        answer:
          "Oui. Plusieurs modules sont conçus pour appliquer directement à ton activité.",
      },
    ],
  },

  {
    id: "e-agriculture",
    slug: "e-agriculture",
    title: "E-Agriculture",
    category: "Agro-pastoral",
    icon: "Sprout",
    description:
      "Solutions digitales pour l'agriculture intelligente et le développement agro-pastoral.",
    subtitle: "Digitalise l'agriculture et développe des projets agro-innovants",
    level: "Tous niveaux",
    duration: "6 semaines",
    format: "Présentiel + terrain",
    image: "/images/formations/agriculture.jpg",
    overview:
      "Découvre comment le digital transforme l'agriculture : formation agro-digitale, accès au marché, météo, traçabilité et outils intelligents. Une formation pensée pour les femmes et les jeunes engagé·e·s dans l'agro-pastoral, en lien avec la plateforme e-Agri361.",
    skills: [
      "Agriculture digitale",
      "Utilisation d'applications agricoles",
      "Accès au marché en ligne",
      "Suivi de production",
      "Notions de traçabilité",
    ],
    tools: [
      { name: "e-Agri361" },
      { name: "e-Agri361 Météo" },
      { name: "Outils de mapping" },
      { name: "Chatbot agricole" },
    ],
    roadmap: [
      {
        id: "1",
        title: "Niveau 1 — Enjeux & outils",
        description: "Comprendre l'e-agriculture",
        modules: [
          "Défis de l'agriculture moderne",
          "Panorama des solutions digitales",
          "Présentation de e-Agri361",
        ],
      },
      {
        id: "2",
        title: "Niveau 2 — Pratique terrain",
        description: "Utiliser les outils au quotidien",
        modules: [
          "Formation agro-digitale",
          "Accès aux intrants et marketplace",
          "Météo et aide à la décision",
        ],
      },
      {
        id: "3",
        title: "Niveau 3 — Projet",
        description: "Construire son parcours agro-digital",
        modules: [
          "Diagnostic de son activité",
          "Plan digital simple",
          "Présentation du projet",
        ],
      },
    ],
    projects: [
      {
        id: "1",
        title: "Diagnostic agro-digital",
        description: "Analyser une exploitation et proposer des outils digitaux adaptés.",
      },
      {
        id: "2",
        title: "Parcours e-Agri361",
        description: "Créer et configurer un profil producteur sur la plateforme.",
      },
    ],
    careers: [
      "Animatrice agro-digitale",
      "Conseillère en e-agriculture",
      "Entrepreneure agricole innovante",
      "Agente de terrain digital",
    ],
    certification: {
      title: "Certificat DigieWomen — E-Agriculture",
      description: "Délivré après validation du projet terrain.",
    },
    testimonials: [],
    faq: [
      {
        question: "Faut-il être agricultrice pour suivre cette formation ?",
        answer:
          "Non. Elle s'adresse aussi aux jeunes, porteuses de projet et actrices du développement rural.",
      },
      {
        question: "La formation est-elle liée à e-Agri361 ?",
        answer:
          "Oui. Tu apprendras à utiliser la plateforme et ses services (formation, marché, météo, etc.).",
      },
      {
        question: "Y a-t-il des sorties terrain ?",
        answer:
          "Oui, des sessions pratiques et études de cas terrain sont prévues selon le calendrier.",
      },
    ],
  },

  // ============================================================
  // AUTRES FORMATIONS (slug ajouté — à enrichir plus tard)
  // ============================================================
  {
    id: "modelisation-3d",
    slug: "modelisation-3d",
    title: "Modélisation 3D",
    category: "Numérique",
    icon: "Box",
    description:
      "Maîtrisez les outils de modélisation 3D pour le design produit, l'architecture et l'animation.",
      image: "/images/formations/Modélisation3D.jpg",
  },
  {
    id: "intelligence-artificielle",
    slug: "intelligence-artificielle",
    title: "Initiation à l'Intelligence Artificielle",
    category: "Numérique",
    icon: "Brain",
    description:
      "Découvrez les fondamentaux de l'IA, du machine learning et des applications pratiques.",
      image: "/images/formations/intelligenceA.jpg",
  },
  {
    id: "web-design",
    slug: "web-design",
    title: "Web Design UX/UI",
    category: "Design et Créatif",
    icon: "Palette",
    description:
      "Concevez des interfaces utilisateur modernes, intuitives et centrées sur l'expérience.",
       image: "/images/formations/webDesign.jpg",
  },
  {
    id: "ged",
    slug: "ged",
    title: "Gestion Électronique de Documents",
    category: "Numérique",
    icon: "FolderOpen",
    description:
      "Modernisez la gestion documentaire avec des solutions GED innovantes.",
      image: "/images/formations/ged.jpg",
  },
  {
    id: "infographie",
    slug: "infographie",
    title: "Infographie Photoshop et Illustrator",
    category: "Design et Créatif",
    icon: "Image",
    description:
      "Créez des visuels professionnels avec les outils de référence de l'industrie.",
       image: "/images/formations/webDesign.jpg",
  },
  {
    id: "community-management",
    slug: "community-management",
    title: "Community Management",
    category: "Numérique",
    icon: "Users",
    description: "Animez et développez des communautés en ligne engagées.",
    image: "/images/formations/cm.jpg",
  },
  {
    id: "initiation-informatique",
    slug: "initiation-informatique",
    title: "Initiation à l'Informatique",
    category: "Numérique",
    icon: "Monitor",
    description: "Les bases essentielles de l'informatique pour tous les niveaux.",
    image: "/images/formations/informatique.jpg",
    
  },
  {
    id: "informatique-appliquee",
    slug: "informatique-appliquee",
    title: "Informatique Appliquée",
    category: "Numérique",
    icon: "Laptop",
    description:
      "Applications concrètes de l'informatique dans le monde professionnel.",
       image: "/images/formations/bureautique.jpg",
  },
  {
    id: "bureautique",
    slug: "bureautique",
    title: "Bureautique Appliquée",
    category: "Numérique",
    icon: "FileText",
    description: "Maîtrisez Word, Excel, PowerPoint et les outils collaboratifs.",
     image: "/images/formations/bureautique.jpg",
    
  },
  {
    id: "realite-va",
    slug: "realite-va",
    title: "Réalité Virtuelle / Augmentée",
    category: "Numérique",
    icon: "Glasses",
    description: "Explorez les technologies immersives VR et AR.",
    image: "/images/formations/bureautique.jpg",
  },
  {
    id: "dev-web-mobile",
    slug: "dev-web-mobile",
    title: "Développement Web et Mobile",
    category: "Numérique",
    icon: "Code",
    description:
      "Créez des applications web et mobiles modernes et performantes.",
      image: "/images/formations/developpement.jpg",
     
  },
  {
    id: "big-data",
    slug: "big-data",
    title: "Big Data & Data Science",
    category: "Numérique",
    icon: "Database",
    description:
      "Analysez et valorisez les données massives pour la prise de décision.",
      image: "/images/formations/dtata2.jpg",
      
  },
];

export const formateurs = [
  {
    id: "samir-messaoudi",
    name: "Samir Messaoudi",
    title: "Expert en cybersécurité stratégique",
    specialty: "Certifié ISO 27001",
    photo: "/images/formateurs/samirr.png",
  },
  {
    id: "paul-malekou",
    name: "Paul Malekou Boutet",
    title: "Analyste Programmeur & Formateur de Formateurs TIC",
    specialty: "Consultant en Maintenance",
    photo: "/images/formateurs/paul.png",
  },
  {
    id: "marina-bakita",
    name: "Marina Michelle Bakita",
    title: "Docteure en Psychologie de l'environnement",
    specialty: "Environnement & Développement durable",
    photo: "/images/formateurs/marina.png",
  },
  {
    id: "mouyombi-walter",
    name: "Mouyombi Guy Walter",
    title: "Ingénieur Réseaux Télécom & Consultant en Cybersécurité",
    specialty: "Formateur Intervenant",
    photo: "/images/formateurs/mouyombi.png",
  },
  {
    id: "charly-minlang",
    name: "Charly Minlang-Bekale Ep Dyel",
    title: "Pétrophysicienne Senior | Data Scientiste",
    specialty: "Experte IA & Big Data | Formatrice | Auteure",
    photo: "/images/formateurs/charly.png",
  },
  {
    id: "dave-ongouori",
    name: "Dave Ongouori",
    title: "Ingénieur Agronome",
    specialty: "Spécialiste en Agriculture Durable et Innovation Rurale",
    photo: "/images/formateurs/dave.png",
  },
];

export const temoignagesApprenants = [
  {
    id: 1,
    name: "Amina O.",
    role: "Apprenante - Cybersécurité",
    content: "La formation en cybersécurité m'a ouvert les portes d'un nouveau métier. Les formateurs sont experts et pédagogues.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jean-Paul K.",
    role: "Apprenant - Développement Web",
    content: "Grâce à DigieWomen School, j'ai pu créer mon premier site web professionnel et lancer mon activité freelance.",
    rating: 5,
  },
  {
    id: 3,
    name: "Fatoumata B.",
    role: "Apprenante - Digital Marketing",
    content: "Une expérience enrichissante qui m'a permis de moderniser la communication de mon entreprise.",
    rating: 5,
  },
];

export const temoignagesEntreprises = [
  {
    id: 1,
    name: "Direction des Ressources Humaines",
    role: "Administration Publique",
    content: "La mise en place de la GED avec DigieWomen School a transformé notre gestion documentaire. Un gain de temps considérable.",
    rating: 5,
  },
  {
    id: 2,
    name: "Moov Africa Gabon Telecom",
    role: "Partenaire Entreprise",
    content: "Un partenaire de confiance pour le renforcement des capacités de nos équipes dans les métiers du numérique.",
    rating: 5,
  },
];

export const specialisations = {
  ged: {
    title: "La Gestion Électronique des Documents (GED)",
    description: "DIGIEWOMEN SCHOOL accompagne les organisations publiques et privées dans leur transformation digitale à travers la mise en place de solutions innovantes de Gestion Électronique des Documents (GED).",
    details: "Notre approche vise à moderniser les méthodes de travail, optimiser la circulation de l'information et sécuriser la gestion documentaire au sein des entreprises, administrations et institutions.",
    benefits: [
      "Modernisation des méthodes de travail",
      "Optimisation de la circulation de l'information",
      "Sécurisation de la gestion documentaire",
      "Réduction des coûts liés au papier",
      "Amélioration de la productivité",
    ],
  },
  eagri: {
    title: "E-Agriculture : Application e-Agri361",
    description: "L'application e-Agri361 est une plateforme digitale intégrée qui offre aux femmes et aux jeunes des solutions adaptées à chaque étape de leur développement agropastoral : formation digitale, production agricole intelligente, accès numérique au marché agricole, accompagnement digital...",
    features: [
      { title: "Formation Agro-digitale", icon: "GraduationCap" },
      { title: "Accès aux intrants Agro-pastoraux", icon: "Leaf" },
      { title: "Market place agricole", icon: "ShoppingCart" },
      { title: "FEAID Météo", icon: "CloudSun" },
      { title: "Agriculture intelligente: IA et chat bot", icon: "Bot" },
      { title: "Traçabilité et Tracking", icon: "MapPin" },
    ],
  },
};

export const contactInfo = {
  email: "digiewomen@gmail.com",
  phone: "+241 66 89 55 26",
  website: "www.digiewomenschool.com",
  whatsapp: "24166895526",
};

export const partners = [
  "Ministère de l'Économie Numérique",
  "Moov Africa Gabon Telecom",
  "Mairie de Libreville",
  "IOM Afrique Gabon",
  "Organisation Internationale de la Francophonie",
  "ANPI-GABON",
  "Hub Africa",
];