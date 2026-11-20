import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import { CHRONIK, TERMINE } from "@/lib/data";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "200 Jahre Cäcilia",
  description:
    "Im Jahr 2027 feiert der Kirchenchor Cäcilia Herz-Jesu Köllerbach sein 200-jähriges Bestehen. Chronik, Festjahr und Veranstaltungen.",
};

export default function Jubilaeum() {
  const jubilee = TERMINE.filter((t) => t.kind === "Jubiläum" || t.kind === "Konzert");
  const chronImages = [
    IMG.archiveParchment,
    IMG.stainedGlass,
    IMG.churchTower,
    IMG.candles,
    IMG.choirSinging,
    IMG.cathedralNave,
  ];

  return (
    <>
      <section className="relative">
        <div className="relative h-[100svh] min-h-[560px] sm:min-h-[640px] w-full photo photo-archive photo-overlay">
          <Image
            src={IMG.archiveParchment}
            alt="Historisches Pergament"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 z-10 flex">
            <Container className="flex flex-col justify-end pb-14 sm:pb-20 md:pb-28">
              <span className="rule rule-light fade-in">
                Jubiläumsjahr 2027
              </span>
              <h1 className="mt-5 sm:mt-6 font-display text-[2.6rem] sm:text-6xl md:text-[7rem] text-cream leading-[1] sm:leading-[0.94] fade-in fade-in-d1">
                Zweihundert
                <br />
                <span className="italic">Jahre</span>
                <br />
                Cæcilia.
              </h1>
              <div className="mt-10 sm:mt-14 flex flex-wrap items-baseline gap-5 sm:gap-10 md:gap-12 fade-in fade-in-d2">
                <div>
                  <p className="font-display text-4xl sm:text-6xl md:text-7xl text-cream leading-none">
                    1827
                  </p>
                  <p className="mt-2 text-[10px] sm:text-xs tracking-[0.3em] uppercase text-cream/70">
                    Gründung
                  </p>
                </div>
                <span className="font-display text-3xl sm:text-5xl text-gold">·</span>
                <div>
                  <p className="font-display text-4xl sm:text-6xl md:text-7xl text-cream leading-none">
                    2027
                  </p>
                  <p className="mt-2 text-[10px] sm:text-xs tracking-[0.3em] uppercase text-cream/70">
                    200 Jahre
                  </p>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </section>

      <section className="bg-cream">
        <Container className="py-16 sm:py-24 md:py-32">
          <SectionHeading
            eyebrow="Chronik"
            title={
              <>
                Zwei Jahrhunderte
                <br />
                <span className="italic text-forest">in Stationen.</span>
              </>
            }
          />

          <ol className="mt-12 sm:mt-20 space-y-14 sm:space-y-24">
            {CHRONIK.map((item, i) => {
              const alignLeft = i % 2 === 0;
              return (
                <li
                  key={item.year}
                  className="grid gap-10 md:gap-16 md:grid-cols-12 items-center"
                >
                  <div
                    className={`md:col-span-6 ${
                      alignLeft ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <div className="photo photo-archive aspect-[4/3] relative">
                      <Image
                        src={chronImages[i % chronImages.length]}
                        alt={item.title}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div
                    className={`md:col-span-6 ${
                      alignLeft ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <p className="font-display text-3xl sm:text-4xl md:text-5xl text-gold tracking-wider">
                      {item.year}
                    </p>
                    <h3 className="mt-3 sm:mt-4 font-display text-2xl sm:text-3xl md:text-4xl text-ink leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-4 sm:mt-6 max-w-xl text-ink-soft text-base sm:text-lg leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </Container>
      </section>

      <section className="bg-paper hairline-top hairline-bottom">
        <Container className="py-16 sm:py-24">
          <SectionHeading eyebrow="Festjahr" title={<>Höhepunkte 2027.</>} lede="Das Jubiläum wird mit einer Reihe besonderer Gottesdienste und Konzerte begangen. Weitere Termine ergänzen wir laufend." />

          <div className="mt-10 sm:mt-14 grid gap-5 sm:gap-6 md:grid-cols-2">
            {jubilee.map((t, i) => (
              <article
                key={t.date}
                className="group card overflow-hidden"
              >
                <div className="photo photo-warm aspect-[16/10] relative">
                  <Image
                    src={[IMG.altar, IMG.candles, IMG.stainedGlass, IMG.cathedralNave][i % 4]}
                    alt={t.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute top-5 left-5 bg-cream/95 px-4 py-3">
                    <p className="text-[11px] tracking-[0.22em] uppercase text-gold">
                      {t.kind}
                    </p>
                    <p className="font-display text-xl text-forest mt-1">
                      {t.dateLabel}
                    </p>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-ink leading-tight">
                    {t.title}
                  </h3>
                  {t.note && (
                    <p className="mt-3 sm:mt-4 text-ink-soft leading-relaxed text-sm sm:text-base">
                      {t.note}
                    </p>
                  )}
                  <p className="mt-5 sm:mt-6 text-sm text-muted">{t.place}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative">
        <div className="absolute inset-0 photo photo-duotone photo-overlay-top">
          <Image
            src={IMG.cathedralNave}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <Container size="sm" className="relative py-16 sm:py-24 md:py-32 text-center">
          <span className="rule rule-light center">Zeugen gesucht</span>
          <h2 className="mt-6 sm:mt-8 font-display text-3xl sm:text-4xl md:text-6xl text-cream leading-[1.1]">
            Haben Sie historische
            <br />
            <span className="italic">Fotos oder Noten?</span>
          </h2>
          <p className="mt-6 sm:mt-8 text-cream/85 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Für unsere Chronik sammeln wir Bilder, Programme, Erinnerungen und
            Noten aus zwei Jahrhunderten Chorgeschichte. Wenn Sie etwas
            beitragen möchten, melden Sie sich gerne bei uns.
          </p>
          <a
            href="/kontakt"
            className="mt-10 inline-flex items-center gap-3 px-7 py-4 bg-cream text-forest text-sm tracking-[0.22em] uppercase hover:bg-gold hover:text-cream transition-colors"
          >
            Zum Kontakt
          </a>
        </Container>
      </section>
    </>
  );
}
