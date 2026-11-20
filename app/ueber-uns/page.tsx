import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/container";
import SectionHeading from "@/components/section-heading";
import { CHOIR, REPERTOIRE } from "@/lib/data";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Der Kath. Kirchenchor Cäcilia Herz-Jesu Köllerbach seit 1827. Chorleitung, Vorstand und musikalische Ausrichtung.",
};

export default function UeberUns() {
  return (
    <>
      <section className="relative">
        <div className="relative h-[75svh] min-h-[440px] sm:min-h-[520px] w-full photo photo-duotone photo-overlay">
          <Image
            src={IMG.chapelLight}
            alt="Licht in der Kirche"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 z-10 flex">
            <Container className="flex flex-col justify-end pb-14 sm:pb-20">
              <span className="rule rule-light fade-in">Über den Chor</span>
              <h1 className="mt-5 sm:mt-6 font-display text-4xl sm:text-5xl md:text-7xl text-cream leading-[1.02] max-w-4xl fade-in fade-in-d1">
                Eine Gemeinschaft aus
                <br />
                <span className="italic">Stimmen, Glauben und Geschichte.</span>
              </h1>
            </Container>
          </div>
        </div>
      </section>

      <section>
        <Container className="py-16 sm:py-24 md:py-28">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <SectionHeading
                eyebrow="Unser Weg"
                title={<>Seit <span className="italic text-forest">1827.</span></>}
              />
            </div>
            <div className="md:col-span-7 text-ink-soft text-[1.05rem] leading-relaxed space-y-6">
              <p>
                Der Kirchenchor Cäcilia wurde im Jahr {CHOIR.foundedYear}{" "}
                gegründet und steht seitdem im Dienst der Pfarrgemeinde
                Herz-Jesu Köllerbach. Unsere Patronin ist die heilige Cäcilia,
                Schutzpatronin der Kirchenmusik.
              </p>
              <p>
                Über zwei Jahrhunderte hinweg haben Generationen von
                Sängerinnen und Sängern die Kirchenmusik in unserer Gemeinde
                getragen. Durch Kriege, Umbrüche und Veränderungen hat der
                Gesang nie aufgehört. Das ist das Erbe, in dem wir heute
                stehen.
              </p>
              <p>
                Seit der Pandemie proben wir gemeinsam mit dem Kirchenchor
                St. Josef Riegelsberg. Aus der Zusammenarbeit ist eine
                Chorgemeinschaft gewachsen, die in beiden Pfarreien zu Hause
                ist.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Photo mosaic */}
      <section className="bg-cream">
        <Container className="pb-24">
          <div className="grid gap-4 md:grid-cols-12">
            <div className="md:col-span-7 photo photo-warm aspect-[16/10] relative">
              <Image
                src={IMG.choirSinging}
                alt="Chor bei der Probe"
                fill
                sizes="(min-width: 768px) 58vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="md:col-span-5 photo photo-duotone aspect-[16/10] md:aspect-auto relative">
              <Image
                src={IMG.pipeOrgan}
                alt="Orgel"
                fill
                sizes="(min-width: 768px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper hairline-top hairline-bottom">
        <Container className="py-16 sm:py-24">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="card p-8 sm:p-10">
              <p className="text-xs tracking-[0.22em] uppercase text-muted">
                Chorleitung
              </p>
              <p className="mt-4 font-display text-3xl text-ink">
                {CHOIR.conductor}
              </p>
              <div className="gold-rule my-8" />
              <p className="text-ink-soft leading-relaxed">
                Unter seiner Leitung erarbeiten wir das liturgische Repertoire
                und bereiten uns auf Konzerte und Festgottesdienste vor.
              </p>
            </div>

            <div className="card p-8 sm:p-10">
              <p className="text-xs tracking-[0.22em] uppercase text-muted">
                Vorsitz
              </p>
              <p className="mt-4 font-display text-3xl text-ink">
                {CHOIR.chairperson}
              </p>
              <div className="gold-rule my-8" />
              <p className="text-ink-soft leading-relaxed">
                Der Vorsitzende vertritt den Chor nach außen, organisiert das
                Vereinsleben und ist Ansprechpartner für die Pfarrei.
              </p>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 grid gap-8 sm:gap-10 sm:grid-cols-3">
            <div className="hairline-top pt-6">
              <p className="text-xs tracking-[0.22em] uppercase text-muted">
                Aktive Sängerinnen und Sänger
              </p>
              <p className="mt-3 font-display text-4xl sm:text-5xl text-forest">
                {CHOIR.members.active}
              </p>
            </div>
            <div className="hairline-top pt-6">
              <p className="text-xs tracking-[0.22em] uppercase text-muted">
                Fördernde Mitglieder
              </p>
              <p className="mt-3 font-display text-4xl sm:text-5xl text-forest">
                {CHOIR.members.inactive}
              </p>
            </div>
            <div className="hairline-top pt-6">
              <p className="text-xs tracking-[0.22em] uppercase text-muted">
                Probentag
              </p>
              <p className="mt-3 font-display text-2xl text-ink">
                {CHOIR.rehearsal.weekday}, {CHOIR.rehearsal.time}
              </p>
              <p className="mt-2 text-sm text-ink-soft">
                {CHOIR.rehearsal.location}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-16 sm:py-24">
          <div className="grid gap-16 md:grid-cols-12 items-center">
            <div className="md:col-span-5 photo photo-warm aspect-[4/5] relative">
              <Image
                src={IMG.sheetMusicClose}
                alt="Notenblatt"
                fill
                sizes="(min-width: 768px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="md:col-span-7">
              <SectionHeading
                eyebrow="Musikalische Ausrichtung"
                title={
                  <>
                    Breit im Repertoire,
                    <br />
                    <span className="italic text-forest">
                      verankert im Glauben.
                    </span>
                  </>
                }
                lede="Unser Repertoire reicht von lateinischen Messen über klassische Chormusik bis zu zeitgenössischen Werken. Dabei bleibt die Liturgie unser Mittelpunkt."
              />
              <ul className="mt-10 grid gap-px bg-line hairline-top hairline-bottom">
                {REPERTOIRE.map((item, i) => (
                  <li
                    key={item}
                    className="bg-cream flex items-baseline gap-6 px-2 py-5 md:p-6"
                  >
                    <span className="font-display text-sm text-gold w-10">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-xl md:text-2xl text-ink">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
