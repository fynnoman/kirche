import Link from "next/link";
import Image from "next/image";
import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import { CHOIR, TERMINE, REPERTOIRE } from "@/lib/data";
import { IMG } from "@/lib/images";

export default function Home() {
  const nextThree = TERMINE.slice(0, 3);

  return (
    <>
      {/* HERO — full-bleed cathedral with editorial type */}
      <section className="relative">
        <div className="relative h-[100svh] min-h-[560px] sm:min-h-[640px] w-full photo photo-duotone photo-overlay">
          <Image
            src={IMG.gothicInterior}
            alt="Gewölbe einer gotischen Kirche"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 z-10 flex">
            <Container className="flex flex-col justify-end pb-14 sm:pb-20 md:pb-28">
              <span className="rule rule-light fade-in">
                Seit 1827 · Herz-Jesu Köllerbach
              </span>
              <h1 className="mt-6 sm:mt-8 font-display text-[2.4rem] sm:text-6xl md:text-[6.5rem] leading-[1.02] sm:leading-[0.95] text-cream max-w-5xl fade-in fade-in-d1">
                Zweihundert Jahre
                <br />
                <span className="italic">Kirchenmusik.</span>
                <br />
                Eine Stimme.
              </h1>
              <div className="mt-8 sm:mt-12 flex flex-wrap items-center gap-5 sm:gap-8 fade-in fade-in-d2">
                <Link
                  href="/jubilaeum"
                  className="inline-flex items-center gap-3 px-6 sm:px-7 py-3.5 sm:py-4 bg-cream text-forest text-xs sm:text-sm tracking-[0.22em] uppercase hover:bg-gold hover:text-cream transition-colors"
                >
                  200 Jahre entdecken
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/mitsingen"
                  className="text-cream/90 hover:text-gold text-xs sm:text-sm tracking-[0.22em] uppercase border-b border-cream/40 hover:border-gold pb-1 transition-colors"
                >
                  Mitsingen im Chor
                </Link>
              </div>
            </Container>
          </div>

          <div className="absolute top-0 right-0 z-10 p-6 md:p-8 hidden md:block">
            <div className="text-right">
              <p className="text-cream/70 text-[11px] tracking-[0.3em] uppercase">
                Patronin
              </p>
              <p className="font-display text-cream text-2xl italic mt-2">
                Hl. Cæcilia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Band — number + motto */}
      <section className="hairline-bottom bg-cream">
        <Container className="py-14 sm:py-16 md:py-20">
          <div className="grid gap-8 md:gap-10 md:grid-cols-12 items-end">
            <div className="md:col-span-5">
              <p className="font-display text-[5.5rem] sm:text-[8rem] md:text-[12rem] leading-[0.82] text-forest tracking-tight">
                200
              </p>
              <p className="mt-2 text-[10px] sm:text-xs tracking-[0.3em] uppercase text-muted">
                Jahre · 1827 bis 2027
              </p>
            </div>
            <div className="md:col-span-7 md:pl-10 md:border-l md:border-line">
              <p className="font-display italic text-2xl sm:text-3xl md:text-4xl text-ink leading-[1.25]">
                &bdquo;Wer singt, betet doppelt.&ldquo;
              </p>
              <p className="mt-6 text-ink-soft leading-relaxed max-w-xl">
                Jeden Dienstagabend treffen wir uns zur Chorprobe und
                gestalten Festmessen, Hochämter und Konzerte in Köllerbach
                und Riegelsberg.
              </p>
              <p className="mt-4 text-xs tracking-[0.22em] uppercase text-muted">
                Nach dem heiligen Augustinus
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Editorial split — photo + content */}
      <section className="bg-paper">
        <Container className="py-16 sm:py-24 md:py-32">
          <div className="grid gap-14 md:gap-20 md:grid-cols-12 items-center">
            <div className="md:col-span-6 relative">
              <div className="photo photo-warm aspect-[4/5] relative">
                <Image
                  src={IMG.sheetMusic}
                  alt="Historische Notenblätter"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="hidden md:block absolute -bottom-10 -right-8 bg-cream card px-8 py-6 shadow-sm max-w-xs">
                <p className="text-xs tracking-[0.3em] uppercase text-muted">
                  Repertoire
                </p>
                <p className="mt-2 font-display text-xl text-forest leading-snug">
                  Gregorianik, Palestrina, Mozart, Rheinberger und zeitgenössische Werke.
                </p>
              </div>
            </div>

            <div className="md:col-span-6">
              <SectionHeading
                eyebrow="Zum Jubiläum 2027"
                title={
                  <>
                    Zwei Jahrhunderte
                    <br />
                    <span className="italic text-forest">
                      im Dienst der Liturgie.
                    </span>
                  </>
                }
                lede="Als der Chor 1827 gegründet wurde, war Köllerbach ein kleines Dorf. Heute, nach Generationen von Sängerinnen und Sängern, tragen wir dieses Erbe weiter. Zum Jubiläum laden wir ein zu Festgottesdiensten, Konzerten und Begegnungen."
              />
              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                {[
                  { k: "Gegründet", v: String(CHOIR.foundedYear) },
                  { k: "Patronin", v: "Hl. Cäcilia" },
                  { k: "Pfarrei", v: "Oberes Köllertal" },
                ].map((it) => (
                  <div key={it.k} className="hairline-top pt-5">
                    <p className="text-xs tracking-[0.22em] uppercase text-muted">
                      {it.k}
                    </p>
                    <p className="mt-2 font-display text-xl text-ink">
                      {it.v}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                href="/jubilaeum"
                className="mt-10 inline-flex items-center gap-2 link text-sm tracking-[0.18em] uppercase"
              >
                Chronik ansehen
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Bento gallery row — three photos */}
      <section className="bg-cream">
        <Container className="pt-0 pb-16 sm:pb-20 md:pb-24">
          <div className="grid gap-3 sm:gap-4 md:grid-cols-12">
            <div className="md:col-span-5 photo photo-warm aspect-[4/5] md:aspect-auto md:h-[520px] relative">
              <Image
                src={IMG.candles}
                alt="Kerzen in der Kirche"
                fill
                sizes="(min-width: 768px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="md:col-span-7 grid gap-3 sm:gap-4">
              <div className="photo photo-duotone aspect-[16/9] relative">
                <Image
                  src={IMG.pipeOrgan}
                  alt="Pfeifenorgel"
                  fill
                  sizes="(min-width: 768px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                <div className="photo photo-warm aspect-[4/3] relative">
                  <Image
                    src={IMG.altar}
                    alt="Altar in der Pfarrkirche"
                    fill
                    sizes="(min-width: 768px) 29vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="bg-forest text-cream p-6 sm:p-8 aspect-[4/3] flex flex-col justify-between">
                  <span className="rule rule-light">Festjahr 2027</span>
                  <div>
                    <p className="font-display text-2xl sm:text-3xl leading-tight">
                      Vier Konzerte,
                      <br />
                      <span className="italic">zwölf Monate,</span>
                      <br />
                      eine Stimme.
                    </p>
                    <Link
                      href="/jubilaeum"
                      className="mt-5 sm:mt-6 inline-flex text-[11px] sm:text-xs tracking-[0.22em] uppercase border-b border-cream/40 pb-1 hover:border-gold hover:text-gold transition-colors"
                    >
                      Zum Festjahr →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Termine — with event imagery */}
      <section className="relative">
        <div className="absolute inset-0">
          <Image
            src={IMG.cathedralNave}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream/92 to-cream" />
        </div>
        <Container className="relative py-16 sm:py-24 md:py-32">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <SectionHeading
              eyebrow="Nächste Termine"
              title={
                <>
                  Hören Sie uns
                  <br />
                  <span className="italic text-forest">im Kirchenjahr.</span>
                </>
              }
            />
            <Link
              href="/termine"
              className="link text-sm tracking-[0.18em] uppercase"
            >
              Alle Termine ansehen →
            </Link>
          </div>

          <div className="mt-10 sm:mt-14 grid gap-5 sm:gap-6 md:grid-cols-3">
            {nextThree.map((t, i) => {
              const img = [IMG.chapelLight, IMG.stainedGlass, IMG.villageChurch][i];
              return (
                <article key={t.date} className="group card overflow-hidden">
                  <div className="photo photo-warm aspect-[4/3] relative">
                    <Image
                      src={img}
                      alt={t.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-cream/95 px-3 py-2">
                      <p className="font-display text-2xl text-forest leading-none">
                        {new Date(t.date).getDate()}
                      </p>
                      <p className="text-[10px] tracking-[0.22em] uppercase text-muted mt-1">
                        {t.dateLabel.split(" ").slice(1, 3).join(" ")}
                      </p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-[11px] tracking-[0.22em] uppercase text-gold">
                      {t.kind}
                    </p>
                    <h3 className="mt-3 font-display text-2xl text-ink leading-tight">
                      {t.title}
                    </h3>
                    {t.note && (
                      <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                        {t.note}
                      </p>
                    )}
                    <p className="mt-5 text-xs text-muted">{t.place}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Mitsingen — big photo band */}
      <section className="relative">
        <div className="grid md:grid-cols-12">
          <div className="md:col-span-6 relative min-h-[360px] sm:min-h-[460px] md:min-h-[520px] photo photo-duotone photo-overlay">
            <Image
              src={IMG.choirSinging}
              alt="Chorprobe"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 z-10 flex items-end p-7 sm:p-10 md:p-16">
              <div>
                <span className="rule rule-light">Mitsingen</span>
                <p className="mt-5 sm:mt-6 font-display text-cream text-3xl sm:text-4xl md:text-5xl leading-[1.05]">
                  Ihre Stimme
                  <br />
                  <span className="italic">gehört dazu.</span>
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 bg-forest text-cream p-8 sm:p-10 md:p-16 flex flex-col justify-center">
            <p className="text-[11px] tracking-[0.3em] uppercase text-cream/60">
              Probe
            </p>
            <p className="mt-3 sm:mt-4 font-display text-3xl sm:text-4xl md:text-5xl">
              {CHOIR.rehearsal.weekday}
              <br />
              <span className="italic text-gold-soft">
                {CHOIR.rehearsal.time}
              </span>
            </p>
            <div className="h-px w-14 sm:w-16 bg-gold-soft my-8 sm:my-10" />
            <p className="text-[11px] tracking-[0.3em] uppercase text-cream/60">
              Probenort
            </p>
            <p className="mt-3 text-base sm:text-lg">{CHOIR.rehearsal.location}</p>
            <p className="mt-6 sm:mt-8 text-cream/75 leading-relaxed max-w-md text-sm sm:text-base">
              {CHOIR.partnership}. Wir proben als Chorgemeinschaft gemeinsam
              in Riegelsberg und singen in beiden Pfarreien.
            </p>
            <Link
              href="/mitsingen"
              className="mt-8 sm:mt-10 inline-flex items-center gap-3 px-6 sm:px-7 py-3.5 sm:py-4 bg-cream text-forest text-xs sm:text-sm tracking-[0.22em] uppercase w-fit hover:bg-gold hover:text-cream transition-colors"
            >
              Zur Probe kommen
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Repertoire */}
      <section className="bg-paper hairline-top">
        <Container className="py-16 sm:py-24 md:py-28">
          <SectionHeading
            align="center"
            eyebrow="Repertoire"
            title={
              <>
                Von der Gregorianik
                <br />
                <span className="italic text-forest">
                  bis in die Gegenwart.
                </span>
              </>
            }
          />
          <ul className="mx-auto mt-12 sm:mt-16 max-w-3xl">
            {REPERTOIRE.map((item, i) => (
              <li
                key={item}
                className="flex items-baseline gap-4 sm:gap-8 py-5 sm:py-6 hairline-bottom"
              >
                <span className="font-display text-xs sm:text-sm text-gold w-8 sm:w-12">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-lg sm:text-2xl md:text-3xl text-ink flex-1">
                  {item}
                </span>
                <span className="ornament text-sm">✦</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
