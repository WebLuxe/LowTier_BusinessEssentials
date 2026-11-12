/* ==========================================================================
   config.js: EVERYTHING ABOUT THE CLIENT LIVES IN THIS FILE.
   To set up a new client, change the values below and save. You never need
   to touch index.html, the css or the js folders.

   Rules of thumb:
   - Text that changes with the language is written { en: "...", fr: "..." }.
   - Leave a value empty ("") or remove a list item to hide it on the site.
     A whole section disappears if you set  enabled: false  on it.
   - Photos: paste an Unsplash link, or put your own file in /assets and
     write its path, for example "assets/photos/office.jpg".
   ========================================================================== */
window.SITE = {

  /* ---------- 1. The business ---------- */
  name: "Harbourline Freight",                 // shown in the menu, footer and Google
  legalName: "Harbourline Freight & Logistics Ltd",
  tagline: {
    en: "Sea, air and road freight from Port Louis to the world, cleared and delivered on time.",
    fr: "Fret maritime, aérien et routier de Port-Louis vers le monde, dédouané et livré à l'heure.",
  },
  logo: {
    image: "",          // e.g. "assets/logo.svg". Leave empty to use the letter mark + name below
    mark: "H",          // the letter in the coloured square
    text: "Harbourline", // the word next to it
  },

  /* ---------- 2. Brand colours and fonts ---------- */
  colors: {
    primary: "#0E2240",  // main brand colour (navy): header logo, buttons, the dark band
    accent:  "#F2A33A",  // highlight colour: call-to-action buttons, lines, icons
    dark:    "#07142A",  // footer and dark mode background
    light:   "#F3F6FA",  // soft background of every other section
  },
  fonts: {                 // any Google Fonts name, written exactly as on fonts.google.com
    heading: "Manrope", headingWeights: "600;700;800",
    body: "Inter", bodyWeights: "400;500;600;700",
  },
  darkMode: false,         // add-on: true shows a light/dark switch
  languages: ["en"],       // add-on: ["en", "fr"] adds the French version (all French text is already below)
  defaultLanguage: "en",
  timeZone: "Indian/Mauritius", // used for the "Open now" badge

  /* ---------- 3. Contact details ---------- */
  contact: {
    phone: "+230 5123 4567",
    whatsapp: "23051234567",            // country code + number, digits only. Empty hides WhatsApp
    whatsappMessage: { en: "Hello Harbourline, I would like a freight quote.", fr: "Bonjour Harbourline, je voudrais un devis de transport." },
    email: "hello@harbourline.mu",
    street: "Les Salines, Caudan Waterfront",
    city: "Port Louis",
    region: "",
    postalCode: "11307",
    country: { en: "Mauritius", fr: "Maurice" },
    countryCode: "MU",
    lat: -20.1609, lng: 57.4977,
    // Google Maps > Share > Embed a map > copy the link inside src="..."
    mapEmbed: "https://www.google.com/maps?q=Caudan+Waterfront+Port+Louis+Mauritius&z=15&output=embed",
    mapsLink: "",   // optional link for "Get directions"; empty builds one from the address
  },

  /* Opening hours: "08:00-17:00", or "" when closed. Days with the same hours are grouped automatically. */
  hours: { mon: "08:00-17:00", tue: "08:00-17:00", wed: "08:00-17:00", thu: "08:00-17:00", fri: "08:00-16:30", sat: "08:30-12:30", sun: "" },

  social: { facebook: "https://facebook.com", linkedin: "https://linkedin.com", instagram: "", tiktok: "", youtube: "" },

  /* ---------- 4. Google and link previews ---------- */
  seo: {
    title: { en: "Harbourline Freight | Sea, air & road freight in Mauritius", fr: "Harbourline Freight | Fret maritime, aérien et routier à Maurice" },
    description: { en: "Freight forwarding, customs clearance and warehousing in Port Louis. Get a quote within one working day.", fr: "Transit, dédouanement et entreposage à Port-Louis. Devis en un jour ouvré." },
    image: "https://images.unsplash.com/photo-1590496793907-4d66e2994b4d?auto=format&fit=crop&q=70", // picture shown when the link is shared
    favicon: "assets/favicon.svg",
    schemaType: "LocalBusiness", // e.g. "AccountingService", "LegalService", "ProfessionalService"
    siteUrl: "",                 // the final address, e.g. "https://harbourline.mu"
  },

  /* ---------- 5. Contact form ---------- */
  form: {
    // Paste a Formspree (or similar) link to receive messages by email, e.g. "https://formspree.io/f/abcdwxyz".
    // Leave empty and the form opens the visitor's email app instead.
    endpoint: "",
  },

  /* ---------- 6. The page, section by section ---------- */
  sections: {
    hero: {
      image: "https://images.unsplash.com/photo-1590496793907-4d66e2994b4d?auto=format&fit=crop&q=70",
      eyebrow: { en: "Freight forwarding · Port Louis", fr: "Transit international · Port-Louis" },
      title: { en: "Your cargo, cleared and delivered on time.", fr: "Votre fret, dédouané et livré à l'heure." },
      text: { en: "Sea, air and road freight for Mauritian importers and exporters, with customs handled by our own licensed brokers.", fr: "Fret maritime, aérien et routier pour les importateurs et exportateurs mauriciens, avec un dédouanement assuré par nos propres déclarants agréés." },
      primary: { label: { en: "Get in touch", fr: "Nous contacter" }, href: "#contact" },
      secondary: { label: { en: "Our services", fr: "Nos services" }, href: "#services" },
      trust: [
        { en: "Licensed customs broker", fr: "Déclarant en douane agréé" },
        { en: "Quotes within one working day", fr: "Devis en un jour ouvré" },
        { en: "Since 2006", fr: "Depuis 2006" },
      ],
    },

    about: {
      eyebrow: { en: "About us", fr: "Qui sommes-nous" },
      title: { en: "A Mauritian freight partner that answers the phone.", fr: "Un partenaire fret mauricien qui décroche le téléphone." },
      text: [
        { en: "Harbourline started in 2006 with two people and one desk at the port. Today a team of 38 moves containers, air shipments and project cargo for more than 600 businesses across the island.", fr: "Harbourline a démarré en 2006 avec deux personnes et un bureau au port. Aujourd'hui, une équipe de 38 personnes gère conteneurs, envois aériens et cargaisons spéciales pour plus de 600 entreprises de l'île." },
        { en: "Every client has one named coordinator who follows the shipment from the supplier's door to yours, so you never have to chase anyone for an update.", fr: "Chaque client a un coordinateur attitré qui suit l'envoi de la porte du fournisseur jusqu'à la vôtre : vous n'avez jamais à courir après une information." },
      ],
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=70",
      stats: [   // numbers count up when they appear on screen
        { value: 18, suffix: "+", label: { en: "Years in business", fr: "Années d'activité" } },
        { value: 600, suffix: "+", label: { en: "Businesses served", fr: "Entreprises clientes" } },
        { value: 12500, label: { en: "Shipments a year", fr: "Envois par an" } },
        { value: 98, suffix: "%", label: { en: "Delivered on time", fr: "Livrés à l'heure" } },
      ],
    },

    services: {
      eyebrow: { en: "What we do", fr: "Ce que nous faisons" },
      title: { en: "Everything between the supplier and your door", fr: "Tout, du fournisseur jusqu'à votre porte" },
      lead: { en: "Book one service or hand us the whole chain. Either way you get one contact and one invoice.", fr: "Réservez un seul service ou confiez-nous toute la chaîne. Dans les deux cas : un seul contact, une seule facture." },
      // icon names: truck, ship, plane, box, warehouse, doc, shield, clock, globe, handshake, chart, users, tool, award, leaf, home, key, lock
      items: [
        { icon: "ship", title: { en: "Sea freight", fr: "Fret maritime" }, text: { en: "Full and shared containers from Asia, Europe, India and South Africa, with weekly sailings.", fr: "Conteneurs complets et groupage depuis l'Asie, l'Europe, l'Inde et l'Afrique du Sud, départs chaque semaine." } },
        { icon: "plane", title: { en: "Air freight", fr: "Fret aérien" }, text: { en: "Urgent parts, samples and perishables through SSR Airport, door to door in 3 to 5 days.", fr: "Pièces urgentes, échantillons et denrées périssables via l'aéroport SSR, porte à porte en 3 à 5 jours." } },
        { icon: "doc", title: { en: "Customs clearance", fr: "Dédouanement" }, text: { en: "Declarations, duty calculations and permits prepared by our licensed brokers, usually within 24 hours.", fr: "Déclarations, calcul des droits et permis préparés par nos déclarants agréés, en général sous 24 heures." } },
        { icon: "warehouse", title: { en: "Warehousing", fr: "Entreposage" }, text: { en: "2,400 m² of bonded and general storage in Riche Terre, with stock reports every week.", fr: "2 400 m² d'entrepôt sous douane et général à Riche-Terre, avec un état des stocks chaque semaine." } },
        { icon: "truck", title: { en: "Island delivery", fr: "Livraison dans l'île" }, text: { en: "Our own trucks deliver containers and pallets anywhere in Mauritius, including Saturday mornings.", fr: "Nos propres camions livrent conteneurs et palettes partout à Maurice, y compris le samedi matin." } },
        { icon: "shield", title: { en: "Cargo insurance", fr: "Assurance marchandises" }, text: { en: "All-risk cover arranged in minutes, so a damaged shipment never comes out of your margin.", fr: "Une couverture tous risques en quelques minutes, pour qu'un envoi abîmé ne vienne jamais grignoter votre marge." } },
      ],
    },

    why: {
      eyebrow: { en: "Why choose us", fr: "Pourquoi nous choisir" },
      title: { en: "Freight without the follow-up calls", fr: "Le fret, sans les relances" },
      lead: { en: "Most clients come to us after a missed deadline somewhere else. They stay for these reasons.", fr: "La plupart de nos clients arrivent après un délai manqué ailleurs. Ils restent pour ces raisons." },
      image: "https://images.unsplash.com/photo-1672552226380-486fe900b322?auto=format&fit=crop&q=70",
      badge: { en: "Licensed by the Mauritius Revenue Authority", fr: "Agréé par la Mauritius Revenue Authority" },
      points: [
        { icon: "users", title: { en: "One coordinator, start to finish", fr: "Un seul coordinateur, du début à la fin" }, text: { en: "The same person answers every call and email about your shipment.", fr: "La même personne répond à chaque appel et e-mail concernant votre envoi." } },
        { icon: "clock", title: { en: "Quotes within one working day", fr: "Devis en un jour ouvré" }, text: { en: "All-in prices with duties estimated, so the invoice holds no surprises.", fr: "Des prix tout compris avec les droits estimés : aucune surprise sur la facture." } },
        { icon: "chart", title: { en: "Tracking you can read", fr: "Un suivi lisible" }, text: { en: "A short WhatsApp update at every step: loaded, sailed, landed, cleared, delivered.", fr: "Un court message WhatsApp à chaque étape : chargé, parti, arrivé, dédouané, livré." } },
        { icon: "handshake", title: { en: "Partners on four continents", fr: "Des partenaires sur quatre continents" }, text: { en: "Long-standing agents in Shanghai, Mumbai, Durban, Dubai and Le Havre.", fr: "Des agents de longue date à Shanghai, Mumbai, Durban, Dubaï et au Havre." } },
      ],
      logosTitle: { en: "Trusted by importers across Mauritius", fr: "La confiance des importateurs de toute l'île" },
      logos: [   // add-on: client logos scrolling under this section, e.g. { name: "Lagoon Foods", image: "assets/logos/lagoon.svg" }
      ],
    },

    cta: {   // the dark band before the contact section. Set enabled: false to hide it
      title: { en: "Shipping something soon?", fr: "Un envoi à prévoir ?" },
      text: { en: "Tell us what, from where and by when. You will have a full quote within one working day.", fr: "Dites-nous quoi, d'où et pour quand. Vous recevez un devis complet en un jour ouvré." },
      button: { en: "Request a quote", fr: "Demander un devis" },
    },

    contact: {
      eyebrow: { en: "Contact", fr: "Contact" },
      title: { en: "Talk to a coordinator today", fr: "Parlez à un coordinateur aujourd'hui" },
      lead: { en: "Call, WhatsApp or send the form. We reply to every message within two working hours.", fr: "Appelez, écrivez sur WhatsApp ou envoyez le formulaire. Nous répondons à chaque message sous deux heures ouvrées." },
      formTitle: { en: "Send us a message", fr: "Envoyez-nous un message" },
    },
  },

  /* ---------- 7. Credit link in the footer ---------- */
  credit: { name: "WebLuxe", url: "https://webluxe.github.io/WebLuxe/" },

  /* ---------- 8. Demo mode (for WebLuxe sales demos). Set enabled: false for a real client ---------- */
  demo: {
    enabled: true,
    studioWhatsapp: "",   // WebLuxe's own WhatsApp, for the "Get a site like this" button
    tiers: [
      { label: { en: "Essentials", fr: "Essentiel" }, url: "https://webluxe.github.io/LowTier_BusinessEssentials/", current: true },
      { label: { en: "Portfolio", fr: "Portfolio" }, url: "https://webluxe.github.io/MidTier_PortfolioQuotes/" },
      { label: { en: "Bookings", fr: "Réservations" }, url: "https://webluxe.github.io/HighTier_Bookings/" },
    ],
  },

  /* ---------- 9. All the small words on buttons and labels ---------- */
  text: {
    en: {
      // ----- words used on every WebLuxe template (menus, buttons, messages) -----
      home: "Home", skip: "Skip to content", menu: "Menu", switchLang: "Voir le site en français", toggleTheme: "Switch light or dark mode",
      explore: "Explore", footerNav: "Footer links", contactTitle: "Contact", hoursTitle: "Opening hours", rights: "All rights reserved.", websiteBy: "Website by",
      whatsappUs: "Chat on WhatsApp", phone: "Phone", email: "Email", address: "Address", chatNow: "Chat with us now",
      closed: "Closed", today: "today", tomorrow: "tomorrow", openUntil: "Open now, until {time}", closedOpens: "Closed now. Opens {day} at {time}",
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      introSkip: "Skip", close: "Close", ok: "OK", prev: "Previous", next: "Next", slide: "Go to slide {n}", showMap: "Show the map", mapTitle: "Map showing our location",
      formSending: "Sending…", formSent: "Thank you. Your message has been sent and we will reply soon.", formError: "Sorry, the message could not be sent. Please call us on {phone}.",
      formMailto: "Your email app has opened with your message. Press send there to finish.", formDemoDone: "Demo: nothing was sent.",
      demoLabel: "About this demo", demoBadge: "Demo", demoNote: "Example website by WebLuxe. The business, prices and reviews are samples.",
      demoTitle: "This is a demo", demoWa: "On the real website, this opens WhatsApp with this message ready to send:", demoTel: "On the real website, this calls the business:",
      demoMail: "On the real website, this opens an email to the business.", demoForm: "On the real website, the business receives this:",
      demoStudio: "Get a site like this", demoStudioMsg: "Hello WebLuxe, I saw the {site} demo and would like a website like it.",
      // ----- this template -----
      navAbout: "About", navServices: "Services", navWhy: "Why us", navContact: "Contact",
      getInTouch: "Get in touch", scrollDown: "Scroll down", contactEyebrow: "Contact",
      formTitle: "Send us a message", formSubject: "New message from the {name} website", formPrivacy: "We only use your details to reply to you.",
      fName: "Your name", fPhone: "Phone", fEmail: "Email", fMessage: "How can we help?", fSend: "Send message",
    },
    fr: {
      // ----- mots utilisés sur tous les modèles WebLuxe (menus, boutons, messages) -----
      home: "Accueil", skip: "Aller au contenu", menu: "Menu", switchLang: "View the site in English", toggleTheme: "Passer en mode clair ou sombre",
      explore: "Explorer", footerNav: "Liens du pied de page", contactTitle: "Contact", hoursTitle: "Horaires", rights: "Tous droits réservés.", websiteBy: "Site web par",
      whatsappUs: "Écrire sur WhatsApp", phone: "Téléphone", email: "E-mail", address: "Adresse", chatNow: "Écrivez-nous maintenant",
      closed: "Fermé", today: "aujourd'hui", tomorrow: "demain", openUntil: "Ouvert, jusqu'à {time}", closedOpens: "Fermé. Ouvre {day} à {time}",
      days: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"], daysShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
      introSkip: "Passer", close: "Fermer", ok: "OK", prev: "Précédent", next: "Suivant", slide: "Aller à la diapositive {n}", showMap: "Afficher la carte", mapTitle: "Carte de notre adresse",
      formSending: "Envoi…", formSent: "Merci. Votre message a été envoyé et nous vous répondrons très vite.", formError: "Désolé, le message n'a pas pu être envoyé. Appelez-nous au {phone}.",
      formMailto: "Votre messagerie s'est ouverte avec votre message. Appuyez sur envoyer pour terminer.", formDemoDone: "Démo : rien n'a été envoyé.",
      demoLabel: "À propos de cette démo", demoBadge: "Démo", demoNote: "Exemple de site par WebLuxe. L'entreprise, les prix et les avis sont fictifs.",
      demoTitle: "Ceci est une démo", demoWa: "Sur le vrai site, ceci ouvre WhatsApp avec ce message prêt à envoyer :", demoTel: "Sur le vrai site, ceci appelle l'entreprise :",
      demoMail: "Sur le vrai site, ceci ouvre un e-mail vers l'entreprise.", demoForm: "Sur le vrai site, l'entreprise reçoit ceci :",
      demoStudio: "Je veux un site comme celui-ci", demoStudioMsg: "Bonjour WebLuxe, j'ai vu la démo {site} et je voudrais un site comme celui-ci.",
      // ----- ce modèle -----
      navAbout: "À propos", navServices: "Services", navWhy: "Nos atouts", navContact: "Contact",
      getInTouch: "Nous contacter", scrollDown: "Faire défiler", contactEyebrow: "Contact",
      formTitle: "Envoyez-nous un message", formSubject: "Nouveau message depuis le site {name}", formPrivacy: "Vos coordonnées servent uniquement à vous répondre.",
      fName: "Votre nom", fPhone: "Téléphone", fEmail: "E-mail", fMessage: "Comment pouvons-nous vous aider ?", fSend: "Envoyer",
    },
  },
};
