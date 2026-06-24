import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, SectionLabel } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Über re:velop — App · Web · KI Freelancer" },
      {
        name: "description",
        content:
          "re:velop entwickelt Apps, Web-Plattformen und KI-Integrationen. Technisch. Produktorientiert. Mit KI-Rückenwind.",
      },
      { property: "og:title", content: "Über re:velop" },
      {
        property: "og:description",
        content: "Technisch. Produktorientiert. KI-gestützt.",
      },
      { property: "og:url", content: "https://re-velop.de/about" },
      { property: "og:image", content: "https://re-velop.de/og-image.jpg" },
      { name: "twitter:title", content: "Über re:velop" },
      {
        name: "twitter:description",
        content:
          "Freelance App-, Web- & KI-Entwicklung. Technisch. Produktorientiert. Mit KI-Rückenwind.",
      },
      {
        name: "keywords",
        content:
          "re:velop, Freelance Entwickler Deutschland, App Entwicklung Remote, KI Integration Freelancer, Flutter Entwickler, IT Beratung Friedrichshafen, Software Entwicklung Bodensee, Web Entwicklung Freelancer, MVP Entwicklung Deutschland",
      },
    ],
    links: [{ rel: "canonical", href: "https://re-velop.de/about" }],
  }),
  component: AboutPage,
});

const stack = [
  { k: "Mobile", v: "Flutter / Dart" },
  { k: "Web", v: "Next.js / TypeScript" },
  { k: "UI & Design", v: "Tailwind / Figma" },
  { k: "KI", v: "OpenAI / LangChain" },
  { k: "Backend", v: "Node · Postgres · Supabase" },
  { k: "Hosting", v: "Vercel · Edge" },
];

const workflow = [
  {
    n: "01",
    title: "Verstehen",
    desc: "Kurzer Kick-off, klare Ziele, ehrliche Einschätzung — kein Sales-Geschwurbel.",
  },
  {
    n: "02",
    title: "Bauen",
    desc: "Wöchentliche Updates, sichtbarer Fortschritt, frühe Previews statt Black Box.",
  },
  {
    n: "03",
    title: "Ausliefern",
    desc: "Getestet, dokumentiert, deployed. Mit Übergabe oder laufender Betreuung.",
  },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Über re:velop</SectionLabel>
          <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[1.05] md:text-7xl">
            Technisch. Produktorientiert. <span className="text-primary">KI-gestützt.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            re:velop entwickelt digitale Produkte von Grund auf — Apps, Web-Plattformen und
            KI-Integrationen. Saubere Architektur, durchdachtes UX-Handwerk und kurze
            Time-to-Market. Statt Overhead bekommst du direkten Kontakt, klare Kommunikation und
            ausgelieferte Software.
          </p>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            KI ist dabei kein Trend, sondern ein Werkzeug — eingesetzt überall dort, wo es Prozesse
            beschleunigt, Produkte intelligenter macht und echten Mehrwert schafft.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-block rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
          >
            Lass uns sprechen →
          </Link>
        </div>
      </section>

      <section className="border-b border-border/60 bg-card/30 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Stack</SectionLabel>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">Womit wir arbeiten.</h2>
          <dl className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-6">
            {stack.map((s) => (
              <div key={s.k} className="rounded-2xl border border-border bg-background p-6">
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">{s.k}</dt>
                <dd className="mt-2 font-mono text-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Wie wir arbeiten</SectionLabel>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {workflow.map((w) => (
              <div key={w.n} className="rounded-2xl border border-border bg-card p-8">
                <div className="font-mono text-sm text-primary">{w.n}</div>
                <h3 className="mt-4 text-xl font-semibold">{w.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
