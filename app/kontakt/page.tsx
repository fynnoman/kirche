import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import { CHOIR } from "@/lib/data";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontakt zum Kirchenchor Cäcilia Herz-Jesu Köllerbach. Vorstand, Chorleitung, Pfarrei.",
};

export default function Kontakt() {
  return (
    <>
      <section className="relative">
        <div className="relative h-[60svh] min-h-[380px] sm:min-h-[420px] w-full photo photo-duotone photo-overlay">
          <Image
            src={IMG.churchTower}
            alt="Kirchturm von Köllerbach"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 z-10 flex">
            <Container className="flex flex-col justify-end pb-12 sm:pb-16">
              <span className="rule rule-light fade-in">Kontakt</span>
              <h1 className="mt-5 sm:mt-6 font-display text-4xl sm:text-5xl md:text-7xl text-cream leading-[1.02] max-w-4xl fade-in fade-in-d1">
                Wir hören
                <br />
                <span className="italic">gerne von Ihnen.</span>
              </h1>
            </Container>
          </div>
        </div>
      </section>

      <section>
        <Container className="py-14 sm:py-20">
          <div className="grid gap-5 sm:gap-10 md:grid-cols-2">
            <div className="card p-8 sm:p-10">
              <p className="text-xs tracking-[0.22em] uppercase text-muted">
                Vorsitz
              </p>
              <p className="mt-4 font-display text-3xl text-ink">
                {CHOIR.chairperson}
              </p>
              <div className="gold-rule my-8" />
              <p className="text-sm text-ink-soft leading-relaxed">
                Allgemeine Anfragen, Vereinsleben, Jubiläum.
              </p>
              <p className="mt-6 text-sm text-muted">
                Kontaktdaten auf Anfrage über die Pfarrei.
              </p>
            </div>

            <div className="card p-8 sm:p-10">
              <p className="text-xs tracking-[0.22em] uppercase text-muted">
                Chorleitung
              </p>
              <p className="mt-4 font-display text-3xl text-ink">
                {CHOIR.conductor}
              </p>
              <div className="gold-rule my-8" />
              <p className="text-sm text-ink-soft leading-relaxed">
                Musikalische Fragen, Repertoire, Proben.
              </p>
              <p className="mt-6 text-sm text-muted">
                Kontaktdaten auf Anfrage über die Pfarrei.
              </p>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 grid gap-8 sm:gap-10 md:grid-cols-3 hairline-top pt-8 sm:pt-10">
            <div>
              <p className="text-xs tracking-[0.22em] uppercase text-muted">
                Pfarrei
              </p>
              <p className="mt-3 font-display text-xl text-ink">
                {CHOIR.parish}
              </p>
              <p className="mt-2 text-sm text-ink-soft">
                Pfarrkirche Herz-Jesu
                <br />
                Köllerbach
              </p>
            </div>
            <div>
              <p className="text-xs tracking-[0.22em] uppercase text-muted">
                Probenort
              </p>
              <p className="mt-3 font-display text-xl text-ink">
                Pfarrzentrum St. Josef
              </p>
              <p className="mt-2 text-sm text-ink-soft">Riegelsberg</p>
            </div>
            <div>
              <p className="text-xs tracking-[0.22em] uppercase text-muted">
                Chorgemeinschaft
              </p>
              <p className="mt-3 font-display text-xl text-ink">
                Köllerbach · Riegelsberg
              </p>
              <p className="mt-2 text-sm text-ink-soft">
                Gemeinsame Proben seit der Pandemiezeit.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper hairline-top">
        <Container className="py-16 sm:py-24">
          <div className="grid gap-10 sm:gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="photo photo-warm aspect-[4/5] relative">
                <Image
                  src={IMG.villageChurch}
                  alt="Pfarrkirche Herz-Jesu"
                  fill
                  sizes="(min-width: 768px) 42vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-7">
              <SectionHeading
                eyebrow="Nachricht an den Chor"
                title={
                  <>
                    Oder schreiben Sie uns
                    <br />
                    <span className="italic text-forest">direkt hier.</span>
                  </>
                }
              />

              <form className="mt-12 grid gap-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-xs tracking-[0.22em] uppercase text-muted">
                      Name
                    </span>
                    <input
                      type="text"
                      name="name"
                      required
                      className="mt-2 block w-full bg-transparent border-b border-line focus:border-forest outline-none py-3 text-ink"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs tracking-[0.22em] uppercase text-muted">
                      E-Mail
                    </span>
                    <input
                      type="email"
                      name="email"
                      required
                      className="mt-2 block w-full bg-transparent border-b border-line focus:border-forest outline-none py-3 text-ink"
                    />
                  </label>
                </div>
                <label className="block">
                  <span className="text-xs tracking-[0.22em] uppercase text-muted">
                    Betreff
                  </span>
                  <input
                    type="text"
                    name="betreff"
                    className="mt-2 block w-full bg-transparent border-b border-line focus:border-forest outline-none py-3 text-ink"
                  />
                </label>
                <label className="block">
                  <span className="text-xs tracking-[0.22em] uppercase text-muted">
                    Nachricht
                  </span>
                  <textarea
                    name="nachricht"
                    rows={6}
                    required
                    className="mt-2 block w-full bg-transparent border-b border-line focus:border-forest outline-none py-3 text-ink"
                  />
                </label>
                <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-6">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-forest text-cream text-sm tracking-[0.22em] uppercase hover:bg-gold hover:text-cream transition-colors"
                  >
                    Nachricht senden
                  </button>
                  <p className="text-xs text-muted">
                    Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
