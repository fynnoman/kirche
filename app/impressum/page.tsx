import type { Metadata } from "next";
import Container from "@/components/container";

export const metadata: Metadata = {
  title: "Impressum",
};

export default function Impressum() {
  return (
    <section className="hairline-bottom">
      <Container size="sm" className="pt-28 sm:pt-32 pb-16 sm:pb-24 md:pt-36 fade-in">
        <span className="rule">Rechtliches</span>
        <h1 className="mt-6 sm:mt-8 font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-tight">
          Impressum
        </h1>

        <div className="mt-14 space-y-10 text-ink-soft leading-relaxed">
          <div>
            <p className="text-xs tracking-[0.22em] uppercase text-muted">
              Herausgeber
            </p>
            <p className="mt-3 text-ink">
              Kath. Kirchenchor Cäcilia Herz-Jesu Köllerbach
              <br />
              [Vereinsadresse zu ergänzen]
              <br />
              Köllerbach
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.22em] uppercase text-muted">
              Vertreten durch
            </p>
            <p className="mt-3 text-ink">
              Carlo Del Fabro (Vorsitzender)
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.22em] uppercase text-muted">
              Kontakt
            </p>
            <p className="mt-3 text-ink">
              [E-Mail zu ergänzen]
              <br />
              [Telefon zu ergänzen]
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.22em] uppercase text-muted">
              Verantwortlich für den Inhalt
            </p>
            <p className="mt-3 text-ink">
              Vorstand des Kirchenchors Cäcilia Herz-Jesu Köllerbach
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.22em] uppercase text-muted">
              Haftungshinweis
            </p>
            <p className="mt-3">
              Für die Inhalte externer Links übernehmen wir keine Haftung.
              Für den Inhalt der verlinkten Seiten sind ausschließlich deren
              Betreiber verantwortlich.
            </p>
          </div>

          <p className="text-sm text-muted">
            Dieses Impressum ist ein Entwurf und wird vor Veröffentlichung
            durch den Verein ergänzt und freigegeben.
          </p>
        </div>
      </Container>
    </section>
  );
}
