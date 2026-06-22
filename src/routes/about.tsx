import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, SectionLabel } from "@/components/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Studio — re:velop" },
      {
        name: "description",
        content:
          "re:velop ist ein unabhängiges Software-Studio. Unabhängig. Technisch. Produktorientiert.",
      },
      { property: "og:title", content: "Studio — re:velop" },
      {
        property: "og:description",
        content: "Unabhängig. Technisch. Produktorientiert.",
      },
    ],
  }),
  component: AboutPage,
});

const stack = [
  { k: "Mobile", v: "Flutter / Dart" },
  { k: "Web", v: "Next.js / TypeScript" },
  { k: "UI", v: "Tailwind / Design Systems" },
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
            Unabhängig. Technisch.{" "}
            <span className="text-primary">Produktorientiert.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            re:velop ist ein unabhängiges Software-Studio mit Fokus auf saubere
            Architektur, durchdachtes UX-Handwerk und kurze Time-to-Market.
            Statt Agentur-Overhead bekommst du direkten Kontakt zum Team, klare
            Kommunikation und ausgelieferte Software.
          </p>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Zwischen Kundenprojekten entwickeln wir eigene Produkte — weil uns
            die Frage „Wie macht man Software wirklich gut?" antreibt.
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
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Womit wir arbeiten.
          </h2>
          <dl className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {stack.map((s) => (
              <div
                key={s.k}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                  {s.k}
                </dt>
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
              <div
                key={w.n}
                className="rounded-2xl border border-border bg-card p-8"
              >
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
