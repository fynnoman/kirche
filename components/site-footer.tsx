import Link from "next/link";
import { CHOIR } from "@/lib/data";

export default function SiteFooter() {
  return (
    <footer className="mt-24 bg-cream-deep/60 hairline-top">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10 py-12 sm:py-16 grid gap-8 sm:gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-2xl text-forest">Cæcilia</p>
          <p className="mt-2 text-sm text-ink-soft max-w-sm">
            Kath. Kirchenchor Cäcilia Herz-Jesu Köllerbach. Seit 1827
            Kirchenmusik aus unserer Pfarrgemeinde.
          </p>
          <p className="mt-6 text-xs tracking-[0.2em] uppercase text-muted">
            200 Jahre im Jahr 2027
          </p>
        </div>

        <div>
          <p className="text-xs tracking-[0.22em] uppercase text-muted">
            Chor
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link className="hover:text-forest text-ink-soft" href="/ueber-uns">Über uns</Link></li>
            <li><Link className="hover:text-forest text-ink-soft" href="/jubilaeum">200 Jahre</Link></li>
            <li><Link className="hover:text-forest text-ink-soft" href="/termine">Termine</Link></li>
            <li><Link className="hover:text-forest text-ink-soft" href="/galerie">Galerie</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-[0.22em] uppercase text-muted">
            Kontakt
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link className="hover:text-forest text-ink-soft" href="/mitsingen">Mitsingen</Link></li>
            <li><Link className="hover:text-forest text-ink-soft" href="/kontakt">Kontakt</Link></li>
            <li><Link className="hover:text-forest text-ink-soft" href="/impressum">Impressum</Link></li>
            <li><Link className="hover:text-forest text-ink-soft" href="/datenschutz">Datenschutz</Link></li>
          </ul>
        </div>
      </div>

      <div className="hairline-top">
        <div className="mx-auto max-w-6xl px-5 sm:px-6 md:px-10 py-5 sm:py-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-muted">
          <p>© 2026 {CHOIR.name}.</p>
          <p>{CHOIR.partnership}.</p>
        </div>
      </div>
    </footer>
  );
}
