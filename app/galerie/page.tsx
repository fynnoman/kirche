import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/container";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Eindrücke aus dem Vereinsleben, den Proben und den Auftritten des Kirchenchors Cäcilia Herz-Jesu Köllerbach.",
};

type Shot = {
  src: string;
  title: string;
  year: string;
  treatment?: "photo-warm" | "photo-duotone" | "photo-archive";
  tall?: boolean;
};

const GALLERY: Shot[] = [
  { src: IMG.cathedralNave, title: "Festmesse", year: "2025", treatment: "photo-warm", tall: true },
  { src: IMG.choirSinging, title: "Chorprobe", year: "2025", treatment: "photo-warm" },
  { src: IMG.pipeOrgan, title: "Konzertabend", year: "2024", treatment: "photo-duotone" },
  { src: IMG.candles, title: "Patronatsfest", year: "2024", treatment: "photo-warm" },
  { src: IMG.stainedGlass, title: "Christmette", year: "2024", treatment: "photo-duotone", tall: true },
  { src: IMG.sheetMusicClose, title: "Noten aus dem Archiv", year: "o. J.", treatment: "photo-archive" },
  { src: IMG.altar, title: "Hochamt", year: "2023", treatment: "photo-warm" },
  { src: IMG.villageChurch, title: "Unsere Pfarrkirche", year: "2023", treatment: "photo-warm" },
  { src: IMG.archiveParchment, title: "Chronik-Seite", year: "ca. 1950", treatment: "photo-archive" },
  { src: IMG.chapelLight, title: "Advent", year: "2022", treatment: "photo-duotone" },
  { src: IMG.churchTower, title: "Der Turm", year: "2022", treatment: "photo-warm" },
  { src: IMG.sheetMusic, title: "Partitur", year: "o. J.", treatment: "photo-archive", tall: true },
];

export default function Galerie() {
  return (
    <>
      <section className="relative">
        <div className="relative h-[65svh] min-h-[380px] sm:min-h-[440px] w-full photo photo-warm photo-overlay">
          <Image
            src={IMG.choirSinging}
            alt="Chorgemeinschaft"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 z-10 flex">
            <Container className="flex flex-col justify-end pb-12 sm:pb-16">
              <span className="rule rule-light fade-in">Galerie</span>
              <h1 className="mt-5 sm:mt-6 font-display text-4xl sm:text-5xl md:text-7xl text-cream leading-[1.02] max-w-4xl fade-in fade-in-d1">
                Zweihundert Jahre
                <br />
                <span className="italic">in Bildern.</span>
              </h1>
            </Container>
          </div>
        </div>
      </section>

      <section>
        <Container className="py-14 sm:py-20 md:py-24">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 sm:gap-4">
            {GALLERY.map((shot, i) => (
              <figure
                key={i}
                className="mb-3 sm:mb-4 break-inside-avoid group card overflow-hidden"
              >
                <div
                  className={`photo ${shot.treatment ?? "photo-warm"} relative ${
                    shot.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={shot.src}
                    alt={shot.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="flex items-baseline justify-between px-5 py-4 hairline-top">
                  <span className="font-display text-lg text-ink">
                    {shot.title}
                  </span>
                  <span className="text-xs tracking-[0.22em] uppercase text-muted">
                    {shot.year}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mt-16 text-center text-sm text-muted">
            Die endgültigen Bilder werden vom Verein bereitgestellt. Aktuell
            sind Stock-Aufnahmen als Platzhalter eingesetzt.
          </p>
        </Container>
      </section>
    </>
  );
}
