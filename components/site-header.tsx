"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/data";
import { cn } from "@/lib/cn";

const HERO_ROUTES = new Set([
  "/",
  "/ueber-uns",
  "/jubilaeum",
  "/termine",
  "/galerie",
  "/mitsingen",
  "/kontakt",
]);

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const overHero = HERO_ROUTES.has(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const onLight = overHero && !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-colors duration-300",
        onLight
          ? "bg-transparent text-cream"
          : "bg-cream/92 backdrop-blur-sm text-ink hairline-bottom"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-6 md:px-10 h-16 sm:h-20">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 group"
        >
          <span
            aria-hidden
            className={cn(
              "font-display text-2xl leading-none transition-colors",
              onLight ? "text-cream" : "text-forest"
            )}
          >
            Cæcilia
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span
              className={cn(
                "text-[11px] tracking-[0.22em] uppercase transition-colors",
                onLight ? "text-cream/70" : "text-muted"
              )}
            >
              Kirchenchor seit 1827
            </span>
            <span
              className={cn(
                "text-[11px] tracking-[0.22em] uppercase transition-colors",
                onLight ? "text-cream/90" : "text-forest/80"
              )}
            >
              Herz-Jesu Köllerbach
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm transition-colors",
                  onLight
                    ? active
                      ? "text-cream"
                      : "text-cream/75 hover:text-cream"
                    : active
                    ? "text-forest"
                    : "text-ink-soft hover:text-forest"
                )}
              >
                <span
                  className={cn(
                    "border-b pb-1 border-transparent",
                    active && (onLight ? "border-gold" : "border-gold")
                  )}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
          <Link
            href="/mitsingen"
            className={cn(
              "ml-3 inline-flex items-center px-4 py-2 text-xs tracking-[0.22em] uppercase transition-colors",
              onLight
                ? "bg-cream text-forest hover:bg-gold hover:text-cream"
                : "bg-forest text-cream hover:bg-gold hover:text-cream"
            )}
          >
            Mitsingen
          </Link>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menü"
          className="lg:hidden h-10 w-10 inline-flex flex-col items-center justify-center gap-1.5"
        >
          <span
            className={cn(
              "block h-px w-6 transition-transform",
              onLight ? "bg-cream" : "bg-ink",
              open && "translate-y-[6px] rotate-45"
            )}
          />
          <span
            className={cn(
              "block h-px w-6 transition-opacity",
              onLight ? "bg-cream" : "bg-ink",
              open && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block h-px w-6 transition-transform",
              onLight ? "bg-cream" : "bg-ink",
              open && "-translate-y-[6px] -rotate-45"
            )}
          />
        </button>
      </div>

      {open && (
        <div className="lg:hidden hairline-top bg-cream text-ink max-h-[calc(100svh-4rem)] overflow-y-auto">
          <nav className="mx-auto max-w-6xl px-5 sm:px-6 py-6 flex flex-col gap-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-ink-soft hover:text-forest text-lg py-2"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/mitsingen"
              className="mt-2 inline-flex items-center justify-center px-4 py-4 text-xs tracking-[0.22em] uppercase text-cream bg-forest"
            >
              Mitsingen
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
