import { createFileRoute, Link } from "@tanstack/react-router";
import heroBg from "@/assets/hero-bg.jpg";
import { SiteLayout, SectionLabel } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "re:velop — Software · KI · Produkte" },
      {
        name: "description",
        content:
          "re:velop — Freelance Software-Entwicklung für Kunden in ganz Deutschland. Apps, Web-Plattformen und KI-Integration. Von der Idee zur produktiven Anwendung.",
      },
      { property: "og:title", content: "re:velop — App · Web · KI · MVP" },
      {
        property: "og:description",
        content: "Von der Idee zur produktiven Anwendung.",
      },
      { property: "og:url", content: "https://re-velop.de/" },
      { property: "og:image", content: "https://re-velop.de/og-image.jpg" },
      { name: "twitter:title", content: "re:velop — App · Web · KI · MVP" },
      { name: "twitter:description", content: "Von der Idee zur produktiven Anwendung." },
      {
        name: "keywords",
        content:
          "Software Entwicklung, App Entwicklung, Web Entwicklung, KI Integration, Freelancer, Flutter, Next.js, Friedrichshafen, Deutschland",      },
    ],
    links: [{ rel: "canonical", href: "https://re-velop.de/" }],
  }),
  component: HomePage,
});

const services = [
  {
    title: "App-Entwicklung",
    desc: "Cross-Platform Apps mit nativem Look & Feel — iOS und Android aus einer Codebase, ausgeliefert in den Stores.",
  },
  {
    title: "Web-Entwicklung",
    desc: "Schnelle, SEO-starke Plattformen und SaaS-Dashboards — gebaut auf moderner Edge-Infrastruktur.",
  },
  {
    title: "KI-Integration",
    desc: "Intelligente Features direkt ins Produkt eingebaut — Chatbots, Automatisierungen, LLM-Workflows und AI-Schnittstellen.",
  },
  {
    title: "Produkt & MVP",
    desc: "Vom Konzept zum Live-Produkt in Wochen statt Monaten — klarer Scope, wöchentliche Releases, messbares Ergebnis.",
  },
];

const steps = [
  {
    n: "01",
    title: "Discovery",
    desc: "Workshop, Scope, Architektur. 1–2 Wochen, fixe Pauschale, dokumentiertes Ergebnis.",
  },
  {
    n: "02",
    title: "Design",
    desc: "Wireframes, Designsystem, klickbarer Prototyp — die Software bevor sie gebaut wird.",
  },
  {
    n: "03",
    title: "Build",
    desc: "Wöchentliche Releases. Du testest live im Produkt, nicht im Slide-Deck.",
  },
  {
    n: "04",
    title: "Launch & Care",
    desc: "Deployment, Monitoring, optional laufende Wartung und Weiterentwicklung.",
  },
];

const stack = [
  "Flutter",
  "Dart",
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "Vercel",
  "Edge",
  "Postgres",
  "Stripe",
  "OpenAI",
  "Figma",
];

const faqs = [
  {
    q: "Wie viel kostet ein Projekt?",
    a: "MVPs starten typischerweise bei 8–15 k €. Größere Vorhaben werden modular budgetiert. Vor Projektstart bekommst du einen festen Rahmen — keine offenen Tagessätze.",
  },
  {
    q: "Wie lange dauert es bis zum Launch?",
    a: "Ein fokussierter MVP geht in 4–8 Wochen live. Größere Produkte planen wir in zweiwöchigen Releases, damit du früh produktiv testen kannst.",
  },
  {
    q: "Übernehmt ihr auch bestehende Projekte?",
    a: "Ja — wenn der Stack passt. Vorab gibt es immer ein Code-Audit, damit klar ist, was tragfähig ist und wo technische Schuld liegt.",
  },
  {
    q: "Wie nutzt ihr KI in Projekten?",
    a: "KI ist bei re:velop kein Buzzword, sondern Werkzeug. Vom AI-Copiloten im Entwicklungsprozess bis zum eingebetteten LLM-Feature im Produkt — immer dort eingesetzt, wo es echten Mehrwert bringt.",
  },
  {
    q: "Wem gehört der Code?",
    a: "Dir. Vollständig. Repo-Übergabe, dokumentierte Architektur, kein Vendor-Lock-in.",
  },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-40"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-28 md:pt-32 md:pb-36">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Verfügbar für neue Projekte
          </div>
          <h1 className="mt-8 max-w-4xl text-5xl font-bold leading-[1.05] md:text-7xl">
            Von der Idee zur <span className="text-primary">produktiven Anwendung.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            re:velop entwickelt digitale Produkte von Grund auf — Apps, Web-Plattformen,
            KI-Integrationen und Branding. Ein verbindlicher Ansprechpartner vom ersten
            Konzept bis zum Deployment.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[0_0_40px_-5px_color-mix(in_oklch,var(--primary)_60%,transparent)] transition-transform hover:scale-[1.02]"
            >
              Projekt anfragen →
            </Link>
            <Link
              to="/services"
              className="rounded-full border border-border bg-card/40 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card"
            >
              Leistungen ansehen
            </Link>
          </div>

          <dl className="mt-20 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-border/60 pt-8 md:grid-cols-4">
            {[
              ["Leistungen", "App · Web · KI"],
              ["Hosting", "Vercel · Edge"],
              ["Fokus", "Produkt & Qualität"],
              ["Standort", "Remote · Deutschland"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">{k}</dt>
                <dd className="mt-1 font-mono text-sm text-foreground">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-t border-border/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionLabel>Leistungen</SectionLabel>
              <h2 className="mt-4 max-w-2xl text-4xl font-bold md:text-5xl">
                Klare Leistungen, eine konsistente Handschrift.
              </h2>
            </div>
            <Link to="/services" className="text-sm text-primary hover:underline">
              Alle Details →
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <article
                key={s.title}
                className="group relative rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/40"
              >
                <div className="font-mono text-xs text-muted-foreground">0{i + 1}</div>
                <h3 className="mt-3 text-2xl font-semibold">{s.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-t border-border/60 bg-card/30 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Vorgehen</SectionLabel>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">
            Vier Schritte. Schlanker Loop, klare Ergebnisse.
          </h2>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            Jedes Projekt durchläuft denselben fokussierten Prozess. Du weißt zu jedem Zeitpunkt, wo
            re:velop steht — und was als Nächstes ausgeliefert wird.
          </p>
          <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <li key={s.n} className="rounded-2xl border border-border bg-background p-6">
                <div className="font-mono text-sm text-primary">{s.n}</div>
                <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* STACK */}
      <section className="border-t border-border/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Stack</SectionLabel>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">
            Bewährte Technologien. Bewusst gewählt.
          </h2>
          <p className="mt-6 max-w-2xl text-muted-foreground">
            Kein Framework-Hopping. re:velop arbeitet tief in einem fokussierten Stack — das spart
            Zeit, Budget und Architektur-Diskussionen.
          </p>
          <ul className="mt-12 flex flex-wrap gap-3 font-mono text-sm">
            {stack.map((t) => (
              <li
                key={t}
                className="rounded-full border border-border bg-card px-4 py-2 text-foreground/90"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border/60 bg-card/30 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Häufig gestellte Fragen.</h2>
          <div className="mt-12 divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium">
                  {f.q}
                  <span className="text-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-bold md:text-6xl">
            Du hast eine Idee. <span className="text-primary">Wir bauen sie.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            Ob App, Webplattform oder MVP — kurze Wege, klare Kommunikation, ausgelieferte Software.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-block rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow-[0_0_50px_-5px_color-mix(in_oklch,var(--primary)_60%,transparent)] hover:scale-[1.02]"
          >
            Gespräch starten →
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
