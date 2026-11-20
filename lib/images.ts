// Local placeholder images in /public/images (sourced from Wikimedia Commons, CC-licensed).
// Vor Veröffentlichung durch echte Aufnahmen des Chors ersetzen.

export const IMG = {
  // Church interiors
  cathedralNave: "/images/cathedral-nave.jpg",
  gothicInterior: "/images/gothic-interior.jpg",
  chapelLight: "/images/chapel-light.jpg",
  stainedGlass: "/images/stained-glass.jpg",
  altar: "/images/altar.jpg",

  // Music & liturgy
  sheetMusic: "/images/sheet-music.jpg",
  sheetMusicClose: "/images/sheet-music-close.jpg",
  pipeOrgan: "/images/pipe-organ.jpg",
  candles: "/images/candles.jpg",
  singingHands: "/images/choir-good-friday.jpg",

  // Choir / people
  choirSinging: "/images/choir-singing.jpg",
  rehearsal: "/images/choir-singing.jpg",

  // Village / exterior
  villageChurch: "/images/village-church.jpg",
  churchTower: "/images/church-tower.jpg",

  // Historic feel
  archiveParchment: "/images/archive-parchment.jpg",
} as const;

export type ImageKey = keyof typeof IMG;
