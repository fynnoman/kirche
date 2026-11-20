import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/container";
import { TERMINE } from "@/lib/data";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Termine & Aktuelles",
  description:
    "Festmessen, Konzerte und Veranstaltungen des Kirchenchors Cäcilia Herz-Jesu Köllerbach.",
};

const KIND_IMG: Record<string, string> = {
  Gottesdienst: IMG.candles,
  Konzert: IMG.pipeOrgan,
  Probe: IMG.sheetMusic,
  Jubiläum: IMG.stainedGlass,
  Vereinsleben: IMG.choirSinging,
};

function groupByYear(items: typeof TERMINE) {
  const map = new Map<string, typeof TERMINE>();
  for (const t of items) {
    const y = t.date.slice(0, 4);
    if (!map.has(y)) map.set(y, []);
    map.get(y)!.push(t);
  }
  return Array.from(map.entries()).sort((a, b) => Number(a[0]) - Number(b[0]));
}

export default function Termine() {
  const grouped = groupByYear(TERMINE);

  return (
    <>
      <section className="relative">
        <div className="relative h-[65svh] min-h-[380px] sm:min-h-[440px] w-full photo photo-duotone photo-overlay">
          <Image
            src={IMG.stainedGlass}
            alt="Kirchenfenster"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 z-10 flex">
            <Container className="flex flex-col justify-end pb-12 sm:pb-16">
              <span className="rule rule-light fade-in">
                Termine & Aktuelles
              </span>
              <h1 className="mt-5 sm:mt-6 font-display text-4xl sm:text-5xl md:text-7xl text-cream leading-[1.02] max-w-4xl fade-in fade-in-d1">
                Das Kirchenjahr,
                <br />
                <span className="italic">Stimme für Stimme.</span>
              </h1>
            </Container>
          </div>
        </div>
      </section>

      {grouped.map(([year, items]) => (
        <section key={year}>
          <Container className="py-14 sm:py-20 md:py-24">
            <div className="flex items-end justify-between gap-4 sm:gap-6 hairline-bottom pb-5 sm:pb-6">
              <p className="font-display text-5xl sm:text-6xl md:text-7xl text-forest leading-none">
                {year}
              </p>
              <p className="text-[10px] sm:text-xs tracking-[0.22em] uppercase text-muted">
                {items.length} Termine
              </p>
            </div>

            <div className="mt-8 sm:mt-10 space-y-8 sm:space-y-10">
              {items.map((t) => (
                <article
                  key={t.date}
                  className="grid gap-5 md:gap-6 md:grid-cols-12 md:items-center hairline-bottom pb-8 sm:pb-10"
                >
                  <div className="md:col-span-4 photo photo-warm aspect-[16/10] md:aspect-[4/3] relative">
                    <Image
                      src={KIND_IMG[t.kind] ?? IMG.chapelLight}
                      alt={t.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="md:col-span-2 flex items-baseline gap-3 md:block">
                    <p className="font-display text-4xl sm:text-5xl text-ink leading-none">
                      {new Date(t.date).getDate()}
                    </p>
                    <p className="md:mt-2 text-xs sm:text-sm tracking-[0.22em] uppercase text-muted">
                      {t.dateLabel.split(" ").slice(1, 2).join(" ")}
                    </p>
                  </div>
                  <div className="md:col-span-4">
                    <p className="text-[10px] sm:text-xs tracking-[0.22em] uppercase text-gold">
                      {t.kind}
                    </p>
                    <h3 className="mt-2 font-display text-xl sm:text-2xl md:text-3xl text-ink leading-tight">
                      {t.title}
                    </h3>
                    {t.note && (
                      <p className="mt-3 text-ink-soft leading-relaxed text-sm sm:text-base">
                        {t.note}
                      </p>
                    )}
                  </div>
                  <div className="md:col-span-2 text-sm text-ink-soft md:text-right">
                    {t.place}
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      ))}

      <section>
        <Container size="sm" className="py-16 sm:py-24 text-center">
          <p className="ornament">✦ ✦ ✦</p>
          <h2 className="mt-6 sm:mt-8 font-display text-2xl sm:text-3xl md:text-4xl text-ink leading-tight">
            Alle Angaben ohne Gewähr.
          </h2>
          <p className="mt-4 text-ink-soft leading-relaxed">
            Kurzfristige Änderungen entnehmen Sie bitte den Aushängen der
            Pfarrei und dem Pfarrbrief.
          </p>
        </Container>
      </section>
    </>
  );
}
