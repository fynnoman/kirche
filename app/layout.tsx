import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kath. Kirchenchor Cäcilia Herz-Jesu Köllerbach",
    template: "%s · Kirchenchor Cäcilia Köllerbach",
  },
  description:
    "Seit 1827 trägt der Kirchenchor Cäcilia Herz-Jesu Köllerbach die Kirchenmusik unserer Pfarrgemeinde. Im Jahr 2027 feiert der Chor sein 200-jähriges Bestehen.",
  openGraph: {
    title: "Kath. Kirchenchor Cäcilia Herz-Jesu Köllerbach",
    description:
      "Seit 1827. Zweihundert Jahre Kirchenmusik in Köllerbach. Zum Jubiläum 2027.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
