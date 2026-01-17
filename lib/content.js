// Contenu centralisé (pricing + SEO). Objectif: cohérence et maintenance simple.

export const PRICING_PLANS = [
  {
    slug: 'depart',
    name: 'Forfait départ',
    monthlyPrice: 199,
    activationFee: 0,
    popular: false,
    description: 'Pour partir propre, sans se battre avec la technique.',
    included: [
      'Site vitrine rapide et optimisé mobile (1 page + sections)',
      'Hébergement, SSL et mises à jour de sécurité',
      'Formulaire de demande de soumission (courriel)',
      'Base Google Business Profile (infos, catégories, description)',
      'Suivi mensuel léger (petites corrections incluses)',
    ],
    notes: [
      "Aucune promesse de résultats, on met en place un système mesurable.",
    ],
  },
  {
    slug: 'pro',
    name: 'Forfait pro',
    monthlyPrice: 349,
    activationFee: 499,
    popular: true,
    description: "Pour convertir davantage et structurer le SEO local.",
    included: [
      'Tout ce qui est inclus dans le forfait départ',
      'Pages services (2) et zones (2) pour le SEO local',
      'Système d’avis (process + modèles SMS/courriel)',
      'Support prioritaire par courriel (réponse cible 24 h ouvrables)',
      '4 petites modifications incluses par mois',
    ],
    notes: [
      'Activation: onboarding + collecte des accès + mise en place des fondations.',
    ],
  },
  {
    slug: 'croissance',
    name: 'Forfait croissance',
    monthlyPrice: 549,
    activationFee: 799,
    popular: false,
    description: 'Pour pousser la cadence de contenu et l’itération.',
    included: [
      'Tout ce qui est inclus dans le forfait pro',
      'Pages services/zones additionnelles (jusqu’à 4 au total)',
      '1 contenu de blogue par mois (court et utile)',
      'Support prioritaire (réponse cible 12 h ouvrables)',
      '8 petites modifications incluses par mois',
    ],
    notes: [
      'Pensé pour les entreprises en croissance qui veulent itérer régulièrement.',
    ],
  },
]

export const ENGAGEMENT_INITIAL_MOIS = 3

export const SECTOR_PAGES = [
  {
    slug: 'construction-renovation',
    title: 'Construction et rénovation',
    metaTitle: 'Construction et rénovation | BureauWeb',
    metaDescription: 'Infrastructure web claire pour les entreprises de construction et rénovation : site, fiche Google, suivi des demandes.',
    intro:
      'BureauWeb agit comme votre département web externe : on gère le site, la fiche Google et le suivi des demandes pour que vos équipes restent concentrées sur le terrain.',
    typicalTrades: [
      'Rénovation résidentielle, agrandissements, travaux de structure.',
      'Toiture, fondations, finition intérieure et chantiers spécialisés.',
    ],
    relatedTrades: ['renovation', 'toiture', 'plomberie', 'electricite'],
  },
  {
    slug: 'services-techniques',
    title: 'Services techniques du bâtiment',
    metaTitle: 'Services techniques du bâtiment | BureauWeb',
    metaDescription: 'Présence en ligne structurée pour les services techniques du bâtiment : clarté des services et demandes qualifiées.',
    intro:
      'BureauWeb agit comme votre département web externe : base technique solide, pages services claires et demandes mieux qualifiées, sans promesse inventée.',
    typicalTrades: [
      'Électricité, plomberie, chauffage et climatisation.',
      'Installation, entretien, dépannage et inspections.',
    ],
    relatedTrades: ['electricite', 'plomberie', 'cvac', 'autre'],
  },
  {
    slug: 'amenagement-exterieur',
    title: 'Aménagement et entretien extérieur',
    metaTitle: 'Aménagement et entretien extérieur | BureauWeb',
    metaDescription: 'Site rapide et positionnement local pour les services d’aménagement et d’entretien extérieur.',
    intro:
      'BureauWeb agit comme votre département web externe : on structure votre présence locale et on clarifie les services pour générer des demandes pertinentes.',
    typicalTrades: [
      'Paysagement, pavé-uni, clôtures et terrasses.',
      'Entretien saisonnier, déneigement, irrigation.',
    ],
    relatedTrades: ['paysagement', 'deneigement', 'renovation', 'autre'],
  },
  {
    slug: 'services-residentiels',
    title: 'Services résidentiels spécialisés',
    metaTitle: 'Services résidentiels spécialisés | BureauWeb',
    metaDescription: 'Infrastructure web claire pour les services résidentiels spécialisés : site, fiche Google et demandes triées.',
    intro:
      'BureauWeb agit comme votre département web externe : on gère l’infrastructure web et les parcours de demande pour vos services résidentiels.',
    typicalTrades: [
      'Menuiserie, vitrerie, isolation et revêtements.',
      'Salles de bain, planchers, installations spécialisées.',
    ],
    relatedTrades: ['renovation', 'plomberie', 'electricite', 'cvac'],
  },
  {
    slug: 'commercial-industriel',
    title: 'Services commerciaux et industriels',
    metaTitle: 'Services commerciaux et industriels | BureauWeb',
    metaDescription: 'Positionnement web sobre pour les services commerciaux et industriels, avec pages services et demandes structurées.',
    intro:
      'BureauWeb agit comme votre département web externe : on met en place une base web fiable qui soutient vos services commerciaux et industriels.',
    typicalTrades: [
      'Maintenance d’immeubles, mécanique industrielle, mises aux normes.',
      'Installations techniques et interventions planifiées.',
    ],
    relatedTrades: ['electricite', 'cvac', 'plomberie', 'autre'],
  },
  {
    slug: 'services-mobiles',
    title: 'Services mobiles et locaux',
    metaTitle: 'Services mobiles et locaux | BureauWeb',
    metaDescription: 'Présence locale optimisée pour les services mobiles : site rapide, fiche Google et demandes filtrées.',
    intro:
      'BureauWeb agit comme votre département web externe : on optimise votre présence locale pour les interventions mobiles et les appels urgents.',
    typicalTrades: [
      'Réparations mobiles, services sur route, dépannage rapide.',
      'Interventions locales récurrentes et urgences.',
    ],
    relatedTrades: ['deneigement', 'plomberie', 'electricite', 'autre'],
  },
  {
    slug: 'autre-service-terrain',
    title: 'Autre service terrain',
    metaTitle: 'Autre service terrain | BureauWeb',
    metaDescription: 'Infrastructure web simple pour les services terrain non listés : site clair, fiche Google et demandes triées.',
    intro:
      'BureauWeb agit comme votre département web externe : on structure votre présence web même si votre service terrain ne rentre pas dans une catégorie standard.',
    typicalTrades: [
      'Services manuels sur site, interventions ponctuelles.',
      'Métiers spécialisés non listés ailleurs.',
    ],
    relatedTrades: ['autre', 'renovation', 'paysagement', 'electricite'],
  },
]

export const TRADE_PAGES = [
  {
    slug: 'plomberie',
    title: 'Sites web pour plombiers au Québec',
    hero: 'On met en place une présence en ligne qui aide vos clients à vous trouver et à vous contacter.',
    bullets: [
      'CTA clair « soumission » sur mobile',
      'Pages services et zones pour le SEO local',
      'Fiche Google structurée pour les appels',
    ],
    dropdownLabel: 'Plombier',
  },
  {
    slug: 'toiture',
    title: 'Sites web pour couvreurs au Québec',
    hero: 'Un site simple, rapide, et orienté conversion, sans promesses inventées.',
    bullets: [
      'Photos de réalisations + avis',
      'Pages services (bardeaux, tôle, etc.)',
      'Zones desservies',
    ],
    dropdownLabel: 'Couvreur',
  },
  {
    slug: 'paysagement',
    title: 'Sites web pour paysagistes au Québec',
    hero: 'On vous aide à être trouvable sur Google et à recevoir des demandes claires.',
    bullets: [
      'Galerie avant/après',
      'Services saisonniers',
      'Formulaire qui filtre mieux les demandes',
    ],
    dropdownLabel: 'Paysagiste',
  },
  {
    slug: 'deneigement',
    title: 'Sites web pour entrepreneurs en déneigement au Québec',
    hero: 'On montre vos services hivernaux, vos forfaits et vos interventions d\'urgence pour que les clients sachent qui appeler dès la première chute de neige.',
    bullets: [
      'CTA 24/7 pour les urgences',
      'Pages « contrat hivernal » et « déneigement commercial »',
      'Zones desservies et temps de réponse clairs',
    ],
    dropdownLabel: 'Entrepreneur en déneigement',
  },
  {
    slug: 'renovation',
    title: 'Sites web pour entrepreneurs en rénovation au Québec',
    hero: 'Mettons en valeur vos projets de rénovation, votre méthode et votre sérieux pour convaincre les propriétaires de vous confier leur chantier.',
    bullets: [
      'Avant/après et chantiers types',
      'Pages services par spécialité (salle de bain, cuisine, sous-sol)',
      'Processus de soumission clair',
    ],
    dropdownLabel: 'Entrepreneur en rénovation',
  },
  {
    slug: 'electricite',
    title: 'Sites web pour électriciens au Québec',
    hero: 'On clarifie vos services électriques, vos certifications et vos secteurs pour que vos clients sachent exactement ce que vous faites.',
    bullets: [
      'Services (résidentiel, commercial, urgences)',
      'Certifications et assurances affichées',
      'Demande de soumission rapide avec type de service',
    ],
    dropdownLabel: 'Électricien',
  },
  {
    slug: 'cvac',
    title: 'Sites web pour entrepreneurs CVAC au Québec',
    hero: 'Chauffage, ventilation et climatisation, on explique vos remplacements, votre maintenance et vos interventions d\'urgence.',
    bullets: [
      'Page chauffage + climatisation + ventilation',
      'Formulaire qui filtre type d’équipement et urgences',
      'Photos d’installations propres',
    ],
    dropdownLabel: 'Entrepreneur CVAC',
  },
  {
    slug: 'autre',
    title: 'Sites web pour entrepreneurs en services manuels',
    hero: 'Si vous ne trouvez pas votre métier ici, on construit un site sur mesure qui présente vos compétences et vos zones locales.',
    bullets: [
      'Processus d’onboarding personnalisé',
      'Contenu centré sur vos services et différenciation',
      'Mis à jour rapide selon vos priorités',
    ],
    dropdownLabel: 'Entrepreneur général',
  },
]

export const REGION_PAGES = [
  {
    slug: 'montreal',
    title: 'Présence en ligne pour entrepreneurs à Montréal',
    hero: 'Site + fiche Google, pensés pour le local.',
  },
  {
    slug: 'rive-sud',
    title: 'Présence en ligne pour entrepreneurs sur la Rive-Sud',
    hero: 'On s’occupe de la technique, vous faites vos chantiers.',
  },
]

export const BLOG_POSTS = [
  {
    slug: 'avis-google-entrepreneurs',
    title: 'Avis Google: ce qui change vraiment pour un entrepreneur local',
    excerpt: 'Sans promesse magique, juste ce qui est observable et utile pour mieux convertir.',
    publishedAt: '2026-01-15',
    sections: [
      { h2: 'Pourquoi les avis comptent', p: 'Ils servent surtout de preuve sociale au moment où un client hésite.' },
      { h2: 'Ce qui est sous votre contrôle', p: 'Demande structurée, lien direct, et suivi simple.' },
      { h2: 'Ce qui ne l’est pas', p: 'Vous ne contrôlez pas qui laisse un avis, ni son contenu.' },
    ],
  },
  {
    slug: 'site-vitrine-conversion',
    title: 'Un site vitrine qui convertit: la base (sans se compliquer)',
    excerpt: 'Le strict nécessaire pour recevoir des appels et des demandes claires.',
    publishedAt: '2026-01-15',
    sections: [
      { h2: 'Mobile d’abord', p: 'CTA visible, téléphone cliquable, formulaire court.' },
      { h2: 'Une seule action principale', p: 'Appel ou soumission, pas dix liens.' },
      { h2: 'Mesurer sans se mentir', p: 'On suit les demandes, pas des vanity metrics.' },
    ],
  },
]
