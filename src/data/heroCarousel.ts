export type HeroSlide = {
  id: string;
  image: string;
  alt: string;
  label: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  contentPosition: "left" | "center" | "right";
  objectPosition?: string;
  mobileObjectPosition?: string;
};

export const carouselConfig = {
  autoplay: true,
  interval: 3500,
  transitionDuration: 190,
  pauseOnHover: true,
  kenBurns: true,
  showControls: true,
  showProgress: true,
} as const;

export const heroSlides: HeroSlide[] = [
  {
    id: "formation",
    image: "/acceuilbg1.png",
    alt: "Apprenants DigieWomen School réunis après une formation",
    label: "Formation numérique",
    title: "Formez-vous aux métiers d'avenir avec DigieWomen School",
    description: "Depuis 2018, nous accompagnons les femmes, les jeunes et les organisations dans leur transformation digitale au Gabon et à l'international.",
    buttonText: "Découvrir nos formations",
    buttonLink: "/formations",
    secondaryButtonText: "Nous contacter",
    secondaryButtonLink: "/contact",
    contentPosition: "left",
    objectPosition: "center 42%",
    mobileObjectPosition: "55% center",
  },
  {
    id: "Agriculture",
    image: "/poulet.jpg",
    alt: "Élevage de volailles dans un environnement agro-pastoral",
    label: "E-agriculture",
    title: "Cultivons l'avenir ensemble",
    description: "Des solutions innovantes pour accompagner les acteurs de l'agriculture vers une transformation durable, connectée et créatrice d'opportunités.",
    buttonText: "Découvrir e-Agri361",
    buttonLink: "/specialisations",
    contentPosition: "right",
    objectPosition: "center center",
    mobileObjectPosition: "57% center",
  },
  {
    id: "savoir-faire",
    image: "/personnel.png",
    alt: "Jeunes volailles dans un espace d'élevage",
    label: "Accompagnement terrain",
    title: "Du savoir-faire aux opportunités concrètes",
    description: "Des parcours conçus pour relier les compétences numériques, l'entrepreneuriat et le développement agro-pastoral.",
    buttonText: "Voir nos spécialisations",
    buttonLink: "/specialisations",
    contentPosition: "left",
    objectPosition: "center center",
    mobileObjectPosition: "center center",
  },
];



export const pageHeroSlides: Record<string, HeroSlide[]> = {
  parcours: [
    { id: "parcours-vision", image: "/ceodigie.png", alt: "Innovation numérique", label: "Depuis 2018", title: "Un parcours au service des talents", description: "DigieWomen School accompagne les femmes, les jeunes et les organisations vers des compétences durables.", buttonText: "Découvrir nos formations", buttonLink: "/formations", contentPosition: "left" },
    { id: "parcours-impact", image: "/Image3.jpg", alt: "Participants à une formation", label: "Notre impact", title: "Des compétences qui transforment les parcours", description: "Plus de 11 000 personnes formées au Gabon et à l'international depuis notre création.", buttonText: "Voir nos chiffres clés", buttonLink: "#chiffres-cles", contentPosition: "left" },
    { id: "parcours-agri", image: "/trophet.png", alt: "Edition spéciale", label: "Edition spécial", title: "Innover avec les communautés", description: "Nous relions le numérique, l'entrepreneuriat et le développement des talents Africain.", buttonText: "Voir plus", buttonLink: "/specialisations", contentPosition: "right" },
  ],
  formations: [
    { id: "formations-digital", image: "/Image2ggg.jpg", alt: "Univers de formation numérique", label: "Nos offres", title: "Apprenez les métiers qui façonnent demain", description: "Des formations certifiantes et professionnalisantes pour développer vos compétences.", buttonText: "Voir les formations", buttonLink: "#catalogue", contentPosition: "left" },
    { id: "formations-experts", image: "/imagformation.png", alt: "Professionnels suivant une formation", label: "Apprendre avec des experts", title: "Transformez votre ambition en expertise", description: "Des parcours concrets, animés par des professionnels du numérique et de l'agro-pastoral.", buttonText: "Rencontrer nos formateurs", buttonLink: "/formateurs", contentPosition: "left" },
    { id: "formations-agri", image: "/formation222.png", alt: "Élevage agro-pastoral", label: "E-agriculture", title: "Développez des compétences utiles sur le terrain", description: "Des solutions et formations pour construire une agriculture innovante et durable.", buttonText: "Découvrir e-Agri361", buttonLink: "/specialisations", contentPosition: "right" },
  ],
  specialisations: [
    { id: "specialisations-ged", image: "/responsponsive.png", alt: "Innovation numérique", label: "Transformation digitale", title: "Des solutions numériques pour aller plus loin", description: "GED, e-agriculture et accompagnement sur mesure pour les organisations et les entrepreneurs.", buttonText: "Découvrir la GED", buttonLink: "#ged", contentPosition: "left" },
    { id: "specialisations-eagri", image: "/elevage.png", alt: "Projet d'élevage", label: "E-agri361", title: "L'agriculture connectée au service des opportunités", description: "Une plateforme intégrée pour accompagner chaque étape du développement agro-pastoral.", buttonText: "Explorer e-Agri361", buttonLink: "#e-agri361", contentPosition: "right" },
    { id: "specialisations-accompagnement", image: "/accompagnement.png", alt: "Session d'accompagnement", label: "Accompagnement", title: "Concevoir aujourd'hui les solutions de demain", description: "Nous faisons grandir les idées grâce à la formation, au conseil et aux outils numériques.", buttonText: "Nous contacter", buttonLink: "/contact", contentPosition: "left" },
  ],
  formateurs: [
    { id: "formateurs-expertise", image: "/formation1111.png", alt: "Experts en session de formation", label: "Équipe d'experts", title: "Des formateurs qui transmettent leur savoir-faire", description: "Une équipe expérimentée, engagée pour rendre les métiers du numérique accessibles.", buttonText: "Découvrir l'équipe", buttonLink: "#equipe", contentPosition: "left" },
    { id: "formateurs-digital", image: "/NNNNNNNNNNNN.png", alt: "Créativité et technologies", label: "Expertises numériques", title: "Apprendre au contact des professionnels", description: "Nos intervenants partagent une expertise pratique et connectée aux besoins du marché.", buttonText: "Voir les formations", buttonLink: "/formations", contentPosition: "left" },
    { id: "formateurs-terrain", image: "/formateur4.png", alt: "Activité agro-pastorale", label: "Expertises terrain", title: "Des compétences ancrées dans le réel", description: "Du numérique à l'agriculture intelligente, nos experts vous accompagnent dans vos projets.", buttonText: "Nous contacter", buttonLink: "/contact", contentPosition: "right" },
  ],
  actualites: [
    { id: "actualites-evenements", image: "/bga.png", alt: "Événement DigieWomen", label: "Événements & réalisations", title: "Expansion panafricaine des DigieWomen Awards (DIWA)", description: "La 4ème édition en 2026 s'ouvre aux candidates de toute l'Afrique, élargissant sa portée au-delà du Gabon.", buttonText: "Voir les actualités", buttonLink: "#actualites", contentPosition: "left" },
    { id: "actualites-innovation", image: "/hhtr.png", alt: "Innovation numérique", label: "Innovation", title: "Imaginer de nouvelles opportunités", description: "Nos programmes rapprochent les talents des technologies qui transforment le quotidien.", buttonText: "Découvrir les formations", buttonLink: "/formations", contentPosition: "left" },
    { id: "actualites-eagri", image: "/certif26.png", alt: "Projet agro-pastoral", label: "Impact terrain", title: "L'innovation au plus près des communautés", description: "Aux côtés de nos partenaires, nos actions placent la formation au cœur de la croissance et du développement économique", buttonText: "Découvrir nos solutions", buttonLink: "/specialisations", contentPosition: "right" },
  ],
  contact: [
    { id: "contact-echange", image: "/contacte.jpg", alt: "Échange avec des professionnels", label: "Contact", title: "Parlons de votre projet", description: "Entreprise, administration, particulier ou entrepreneur : trouvez l'accompagnement adapté à vos besoins.", buttonText: "Nous écrire", buttonLink: "#formulaire", contentPosition: "left" },
    { id: "contact-solutions", image: "/ambition.jpg", alt: "Solutions numériques", label: "Solutions sur mesure", title: "Donnez vie à vos ambitions", description: "Nos équipes vous aident à transformer vos besoins en solutions concrètes.", buttonText: "Découvrir nos spécialisations", buttonLink: "/specialisations", contentPosition: "left" },
    { id: "contact-terrain", image: "/projet.jpg", alt: "Projet agro-pastoral", label: "Accompagnement", title: "Construisons des opportunités durables", description: "De la formation au conseil, nous sommes à vos côtés pour faire avancer vos projets.", buttonText: "Voir les formations", buttonLink: "/formations", contentPosition: "right" },
  ],
};
