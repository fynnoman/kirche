import type { Metadata } from "next";
import Container from "@/components/container";

export const metadata: Metadata = {
  title: "Datenschutz",
};

export default function Datenschutz() {
  return (
    <section className="hairline-bottom">
      <Container size="sm" className="pt-28 sm:pt-32 pb-16 sm:pb-24 md:pt-36 fade-in">
        <span className="rule">Rechtliches</span>
        <h1 className="mt-6 sm:mt-8 font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-tight">
          Datenschutz
        </h1>

        <div className="mt-14 space-y-10 text-ink-soft leading-relaxed">
          <div>
            <h2 className="font-display text-2xl text-ink">
              1. Allgemeines
            </h2>
            <p className="mt-3">
              Wir freuen uns über Ihr Interesse am Kath. Kirchenchor Cäcilia
              Herz-Jesu Köllerbach. Datenschutz hat für uns einen hohen
              Stellenwert. Diese Erklärung informiert über Art, Umfang und
              Zweck der Verarbeitung personenbezogener Daten auf dieser
              Website.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink">
              2. Verantwortliche Stelle
            </h2>
            <p className="mt-3">
              Verantwortlich im Sinne der DSGVO ist der Vorstand des
              Kirchenchors Cäcilia Herz-Jesu Köllerbach.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink">
              3. Hosting und Server-Logfiles
            </h2>
            <p className="mt-3">
              Beim Aufruf dieser Seiten werden technisch notwendige Daten wie
              IP-Adresse, Datum und Uhrzeit verarbeitet, um die Auslieferung
              der Website sicherzustellen.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink">
              4. Kontaktformular
            </h2>
            <p className="mt-3">
              Wenn Sie uns über das Formular Nachrichten zukommen lassen,
              werden Ihre Angaben zur Bearbeitung der Anfrage gespeichert.
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink">
              5. Ihre Rechte
            </h2>
            <p className="mt-3">
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung,
              Löschung und Einschränkung der Verarbeitung Ihrer Daten. Wenden
              Sie sich hierfür an den Vorstand des Chores.
            </p>
          </div>

          <p className="text-sm text-muted">
            Diese Datenschutzerklärung ist ein Entwurf. Vor Veröffentlichung
            wird sie durch den Verein geprüft und ergänzt.
          </p>
        </div>
      </Container>
    </section>
  );
}
