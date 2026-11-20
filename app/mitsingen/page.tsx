import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import { CHOIR } from "@/lib/data";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Mitsingen",
  description:
    "Probenzeiten, Probenort und Voraussetzungen, um im Kirchenchor Cäcilia Köllerbach mitzusingen.",
};

export default function Mitsingen() {
  return (
    <>
      <section className="relative">
        <div className="relative h-[85svh] min-h-[480px] sm:min-h-[540px] w-full photo photo-duotone photo-overlay">
          <Image
            src={IMG.choirSinging}
            alt="Chor im Gesang"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 z-10 flex">
            <Container className="flex flex-col justify-end pb-14 sm:pb-20">
              <span className="rule rule-light fade-in">Mitsingen</span>
              <h1 className="mt-5 sm:mt-6 font-display text-4xl sm:text-5xl md:text-7xl text-cream leading-[1.02] max-w-4xl fade-in fade-in-d1">
                Ihre Stimme
                <br />
                <span className="italic">gehört dazu.</span>
              </h1>
              <p className="mt-6 sm:mt-8 max-w-2xl text-cream/85 text-base sm:text-lg leading-relaxed fade-in fade-in-d2">
                Wir suchen Sängerinnen und Sänger in allen Stimmlagen. Kommen
                Sie unverbindlich zu einer Probe, hören Sie zu, singen Sie
                mit.
              </p>
            </Container>
          </div>
        </div>
      </section>

      <section className="bg-paper hairline-bottom">
        <Container className="py-16 sm:py-24">
          <div className="grid gap-5 sm:gap-10 md:grid-cols-3">
            <div className="card p-8 sm:p-10">
              <p className="text-xs tracking-[0.22em] uppercase text-muted">
                Wann
              </p>
              <p className="mt-4 font-display text-3xl text-ink leading-tight">
                {CHOIR.rehearsal.weekday}
                <br />
                {CHOIR.rehearsal.time}
              </p>
              <div className="gold-rule my-8" />
              <p className="text-sm text-ink-soft leading-relaxed">
                Wöchentliche Chorprobe. Vor Festzeiten ergänzen wir zusätzliche
                Termine.
              </p>
            </div>

            <div className="card p-8 sm:p-10">
              <p className="text-xs tracking-[0.22em] uppercase text-muted">
                Wo
              </p>
              <p className="mt-4 font-display text-2xl text-ink leading-tight">
                {CHOIR.rehearsal.location}
              </p>
              <div className="gold-rule my-8" />
              <p className="text-sm text-ink-soft leading-relaxed">
                Seit der Zusammenarbeit mit dem Chor St. Josef Riegelsberg
                proben wir gemeinsam im Pfarrzentrum.
              </p>
            </div>

            <div className="card p-8 sm:p-10">
              <p className="text-xs tracking-[0.22em] uppercase text-muted">
                Was Sie mitbringen
              </p>
              <ul className="mt-4 space-y-3 text-ink">
                <li className="flex gap-3">
                  <span className="text-gold">✦</span>
                  <span>Freude am Singen</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold">✦</span>
                  <span>Lust auf Gemeinschaft</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold">✦</span>
                  <span>Regelmäßige Teilnahme</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-gold">✦</span>
                  <span>Noten lesen hilft, ist aber keine Voraussetzung</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Form + photo */}
      <section>
        <Container className="py-16 sm:py-24">
          <div className="grid gap-10 sm:gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="photo photo-warm aspect-[4/5] relative">
                <Image
                  src={IMG.sheetMusic}
                  alt="Notenblatt am Pult"
                  fill
                  sizes="(min-width: 768px) 42vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-7">
              <SectionHeading
                eyebrow="Schnupperprobe anfragen"
                title={
                  <>
                    Schreiben Sie uns
                    <br />
                    <span className="italic text-forest">
                      ein paar Zeilen.
                    </span>
                  </>
                }
                lede="Wir melden uns, vereinbaren einen Termin für eine erste Probe und beantworten Ihre Fragen."
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
                    Stimmlage (falls bekannt)
                  </span>
                  <select
                    name="stimme"
                    defaultValue=""
                    className="mt-2 block w-full bg-transparent border-b border-line focus:border-forest outline-none py-3 text-ink"
                  >
                    <option value="" disabled>
                      Bitte wählen
                    </option>
                    <option>Sopran</option>
                    <option>Alt</option>
                    <option>Tenor</option>
                    <option>Bass</option>
                    <option>Noch unklar</option>
                  </select>
                </label>
                <label className="block">
                  <span className="text-xs tracking-[0.22em] uppercase text-muted">
                    Nachricht
                  </span>
                  <textarea
                    name="nachricht"
                    rows={5}
                    className="mt-2 block w-full bg-transparent border-b border-line focus:border-forest outline-none py-3 text-ink"
                    placeholder="Ein paar Worte zu Ihnen und Ihrer Chorerfahrung."
                  />
                </label>

                <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-6">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-forest text-cream text-sm tracking-[0.22em] uppercase hover:bg-gold hover:text-cream transition-colors"
                  >
                    Anfrage senden
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
