export const CHOIR = {
  name: "Kath. Kirchenchor Cäcilia Herz-Jesu Köllerbach",
  short: "Kirchenchor Cäcilia Köllerbach",
  foundedYear: 1827,
  jubileeYear: 2027,
  parish: "Pfarrei Oberes Köllertal",
  conductor: "Wolfgang Münchow",
  chairperson: "Carlo Del Fabro",
  partnership:
    "Chorgemeinschaft mit dem Kirchenchor St. Josef Riegelsberg",
  rehearsal: {
    weekday: "Dienstag",
    time: "19:00 Uhr",
    location: "Pfarrzentrum St. Josef, Riegelsberg",
  },
  members: {
    active: 20,
    inactive: 41,
  },
};

export const NAV = [
  { href: "/", label: "Startseite" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/jubilaeum", label: "200 Jahre" },
  { href: "/termine", label: "Termine" },
  { href: "/galerie", label: "Galerie" },
  { href: "/mitsingen", label: "Mitsingen" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export type Termin = {
  date: string;
  dateLabel: string;
  title: string;
  kind: "Gottesdienst" | "Konzert" | "Probe" | "Jubiläum" | "Vereinsleben";
  place: string;
  note?: string;
};

export const TERMINE: Termin[] = [
  {
    date: "2026-11-22",
    dateLabel: "22. November 2026",
    title: "Cäcilienmesse zum Patronatsfest",
    kind: "Gottesdienst",
    place: "Pfarrkirche Herz-Jesu, Köllerbach",
    note: "Festmesse mit dem Chor und Instrumentalisten der Pfarrei.",
  },
  {
    date: "2026-12-24",
    dateLabel: "24. Dezember 2026",
    title: "Christmette",
    kind: "Gottesdienst",
    place: "Pfarrkirche Herz-Jesu, Köllerbach",
    note: "Festliche Gestaltung der Christmette mit Werken aus dem Chorrepertoire.",
  },
  {
    date: "2027-01-10",
    dateLabel: "10. Januar 2027",
    title: "Auftakt zum Jubiläumsjahr",
    kind: "Jubiläum",
    place: "Pfarrkirche Herz-Jesu, Köllerbach",
    note: "Eröffnung des Festjahres zum 200-jährigen Bestehen.",
  },
  {
    date: "2027-04-18",
    dateLabel: "18. April 2027",
    title: "Frühjahrskonzert",
    kind: "Konzert",
    place: "Pfarrkirche Herz-Jesu, Köllerbach",
    note: "Konzertabend der Chorgemeinschaft Köllerbach und Riegelsberg.",
  },
  {
    date: "2027-09-19",
    dateLabel: "19. September 2027",
    title: "Festmesse 200 Jahre Cäcilia",
    kind: "Jubiläum",
    place: "Pfarrkirche Herz-Jesu, Köllerbach",
    note: "Zentrale Festmesse im Jubiläumsjahr mit anschließendem Empfang.",
  },
  {
    date: "2027-11-21",
    dateLabel: "21. November 2027",
    title: "Festliche Cäcilienmesse",
    kind: "Gottesdienst",
    place: "Pfarrkirche Herz-Jesu, Köllerbach",
    note: "Abschluss des Jubiläumsjahres am Patronatsfest.",
  },
];

export const CHRONIK = [
  {
    year: "1827",
    title: "Gründung",
    body: "In Köllerbach entsteht der Kirchenchor Cäcilia. Die Gemeinde beginnt, die Liturgie durch mehrstimmigen Gesang zu tragen.",
  },
  {
    year: "19. Jhd.",
    title: "Verankerung in der Gemeinde",
    body: "Der Chor wird fester Bestandteil des gottesdienstlichen Lebens der Pfarrei Herz-Jesu Köllerbach.",
  },
  {
    year: "20. Jhd.",
    title: "Durch zwei Weltkriege",
    body: "Trotz schwerer Zeiten bleibt der Chor bestehen und begleitet die Gemeinde durch Kriege, Wiederaufbau und Wandel.",
  },
  {
    year: "1977",
    title: "150 Jahre Cäcilia",
    body: "Zum 150-jährigen Bestehen feiert die Gemeinde ein Festjahr mit Konzerten und einer Festmesse.",
  },
  {
    year: "2020",
    title: "Chorgemeinschaft mit Riegelsberg",
    body: "Ab der Zeit der Pandemie proben die Chöre Cäcilia Köllerbach und St. Josef Riegelsberg gemeinsam und wachsen zu einer Chorgemeinschaft zusammen.",
  },
  {
    year: "2027",
    title: "200 Jahre",
    body: "Der Chor begeht sein 200-jähriges Bestehen mit einem Festjahr aus Konzerten, Festgottesdiensten und besonderen Begegnungen.",
  },
];

export const REPERTOIRE = [
  "Lateinische Messen und Motetten",
  "Werke aus Barock, Klassik und Romantik",
  "Deutschsprachige geistliche Chorliteratur",
  "Zeitgenössische Kirchenmusik",
  "Weihnachtliche und österliche Festmusik",
];
