import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, SectionLabel } from "@/components/SiteLayout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Leistungen — re:velop" },
      {
        name: "description",
        content:
          "App-Entwicklung mit Flutter, Web-Plattformen mit Next.js, MVP- und Produktentwicklung — die Leistungen des re:velop Studios.",
      },
      { property: "og:title", content: "Leistungen — re:velop" },
      {
        property: "og:description",
        content: "App-, Web- und Produktentwicklung aus einem Studio.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    label: "Flutter · iOS · Android",
    title: "App-Entwicklung",
    desc: "Eine Codebase, zwei Plattformen. Wir bauen performante, native-feeling Apps inklusive State-Management, Offline-Support und CI/CD-Pipeline.",
    points: [
      "Cross-Platform iOS & Android",
      "Saubere Architektur (Riverpod / BLoC)",
      "App-Store & Play-Store Deployment",
      "Push, Auth, Payments, Offline",
    ],
  },
  {
    label: "Next.js · TypeScript · Vercel",
    title: "Web-Entwicklung",
    desc: "Marketing-Sites, SaaS-Dashboards, Webshops — gebaut mit Next.js, deployed auf Edge-Infrastruktur. Schnell, SEO-stark, skalierbar.",
    points: [
      "Server Components & Edge Runtime",
      "TypeScript end-to-end",
      "SEO, Sitemap, OG-Images",
      "Headless-CMS-Integrationen",
    ],
  },
  {
    label: "Discovery → Launch",
    title: "Produkt & MVP",
    desc: "Vom Whiteboard zum Live-Produkt. Wir schärfen Idee, Scope und UX und bringen einen MVP in Wochen statt Monaten an den Markt.",
    points: [
      "Konzept- & Scoping-Workshop",
      "UI/UX in Figma",
      "MVP in 4–8 Wochen",
      "Iteration nach Live-Daten",
    ],
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Leistungen</SectionLabel>
          <h1 className="mt-6 max-w-3xl text-5xl font-bold md:text-6xl">
            Was wir für dich bauen.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Klare Pakete, ehrliche Einschätzungen, sauberer Code. Auswahl statt
            Bauchladen — das Studio konzentriert sich auf das, was es richtig
            gut kann.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-8"
            >
              <div className="font-mono text-xs text-primary">{s.label}</div>
              <h2 className="mt-3 text-2xl font-semibold">{s.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
              <ul className="mt-6 space-y-2 text-sm">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-3 text-foreground/90">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Passt etwas davon zu deinem Projekt?
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground"
          >
            Anfrage senden →
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
