/* EINFACHER REDAKTIONSBEREICH: Texte zwischen Anführungszeichen ändern. */
window.SITE_CONTENT = {
  hero: {
    kicker: "Tattoo Studio · Konstanz · Seit 1999",
    title: "Willkommen im<br>Nadelwerk.",
    text: "Individuelle Tattoos in persönlicher Atmosphäre – mitten in der Konstanzer Altstadt.",
    image: "images/about-gallery/9.png"
  },
  about: {
    title: "Tätowieren ist für uns Vertrauenssache.",
    text: "Seit 1999 entstehen im Nadelwerk mitten in der Konstanzer Altstadt individuelle Tätowierungen. Wir hören zu, entwickeln deine Idee weiter und übersetzen sie in ein Motiv, das zu dir passt.",
    note: "Kreativität, sauberes Handwerk und ein ruhiger, persönlicher Umgang stehen dabei an erster Stelle. Wir bieten ausschließlich Tätowierungen und keine Piercings an."
  },
  artist: {
    name: "Frank Dietzel",
    text: "Gründer, Tätowierer und kreativer Kopf des Nadelwerks. Frank verbindet langjährige Erfahrung mit einem sicheren Gespür für Komposition, Linie und die Geschichte hinter einem Motiv.",
    image: "images/team-member-1.png"
  },
  contact: {
    email: "frank@nadelwerk.de",
    address: "Rheingasse 14",
    city: "78462 Konstanz",
    map: "https://www.google.com/maps/search/?api=1&query=Nadelwerk+Tattoo+Rheingasse+14+Konstanz",
    instagram: "https://www.instagram.com/nadelwerk_tattoo/",
    hours: ["Di–Fr · 11–15 Uhr", "Sa–Mo · geschlossen", "Weitere Termine nach Vereinbarung"]
  },
  steps: [
    ["01", "Idee senden", "Schick uns Motiv, Stil, Größe und Körperstelle per E-Mail."],
    ["02", "Besprechen", "Wir klären deine Wünsche, den Entwurf und einen passenden Termin."],
    ["03", "Tätowieren", "In ruhiger Atmosphäre wird aus deiner Idee ein persönliches Unikat."]
  ],

  /* Galerien: true = bei jedem Laden zufällig, false = Reihenfolge aus galleries.json */
  galleryOptions: {
    randomVenue: false,
    randomWorks: true
  },

  secondArtist: {
    enabled: false,
    label: "Artist · Vorschau",
    name: "Zweiter Artist",
    dates: "",
    text: "Hier stehen später Name, Stil, Erfahrung und eine kurze persönliche Vorstellung.",
    image: "images/logo(transparent).png",
    imageAlt: "Platzhalter für das Porträt des zweiten Artists",
    instagram: "https://www.instagram.com/nadelwerk_tattoo/"
  },
  guestArtist: {
    enabled: false,
    label: "Zu Gast im Nadelwerk · Vorschau",
    name: "Gasttätowierer",
    dates: "Zeitraum folgt",
    text: "Hier stehen später Name, Stil, Besuchszeitraum und verfügbare Termine.",
    image: "images/logo(transparent).png",
    imageAlt: "Platzhalter für das Porträt des Gasttätowierers",
    instagram: "https://www.instagram.com/nadelwerk_tattoo/",
    email: "frank@nadelwerk.de"
  }
};
