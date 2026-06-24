import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, SectionLabel } from "@/components/SiteLayout";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Produkte — re:velop" },
      {
        name: "description",
        content: "Eigene Produkte aus dem re:velop Studio — ehrliche Roadmap von Beta bis Konzept.",
      },
      { property: "og:title", content: "Produkte — re:velop" },
      {
        property: "og:description",
        content: "Die Produkt-Pipeline des Studios — transparent.",
      },
      { property: "og:url", content: "https://re-velop.de/products" },
      { property: "og:image", content: "https://re-velop.de/og-image.jpg" },
      { name: "twitter:title", content: "Produkte — re:velop" },
      {
        name: "twitter:description",
        content:
          "Eigene SaaS-Produkte aus dem re:velop Studio — transparent und mit ehrlicher Roadmap.",
      },
      {
        name: "keywords",
        content:
          "re:velop Produkte, SaaS Studio, Software Produkte, MVP, Codename Atlas, Projekt-Roadmap Software",
      },
    ],
    links: [{ rel: "canonical", href: "https://re-velop.de/products" }],
  }),
  component: ProductsPage,
});

const products = [
  {
    n: "01",
    tag: "SaaS · Web",
    status: "In Entwicklung",
    name: "Codename Atlas",
    desc: "Ein Werkzeug, mit dem kleine Teams ihre Projekt-Roadmap visualisieren — ohne den Overhead großer PM-Suites.",
    eta: "Q4 2026",
  },
  {
    n: "02",
    tag: "Mobile · Flutter",
    status: "Closed Beta",
    name: "Codename Drift",
    desc: "Eine fokussierte Mobile-App für tägliche Routinen, die sich nativ anfühlt — weil sie es im Verhalten ist.",
    eta: "Beta läuft",
  },
  {
    n: "03",
    tag: "Developer Tool",
    status: "Konzept",
    name: "Codename Forge",
    desc: "Automatisiert wiederkehrende Setup-Aufgaben für Studios und Produktteams — von Repo bis Deployment.",
    eta: "2027",
  },
  {
    n: "04",
    tag: "Experimentell",
    status: "Research",
    name: "Codename Echo",
    desc: "Ein Side-Project an der Schnittstelle von KI-Agents und alltäglichen Workflows. Wir forschen — vielleicht wird mehr daraus.",
    eta: "TBD",
  },
];

function ProductsPage() {
  return (
    <SiteLayout>
      <section className="border-b border-border/60 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Produkte · Roadmap</SectionLabel>
          <h1 className="mt-6 max-w-3xl text-5xl font-bold md:text-6xl">
            Was als Nächstes <span className="text-primary">live geht.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Parallel zu Kundenprojekten entstehen im re:velop Studio eigene Produkte. Manche stehen
            kurz vor der Beta, andere sind noch Skizzen — hier ist die ehrliche Pipeline.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <ul className="divide-y divide-border border-y border-border">
            {products.map((p) => (
              <li
                key={p.n}
                className="grid gap-6 py-10 md:grid-cols-[80px_1fr_180px] md:items-center"
              >
                <div className="font-mono text-2xl text-muted-foreground">{p.n}</div>
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="font-mono uppercase tracking-widest text-primary">
                      {p.tag}
                    </span>
                    <span className="rounded-full border border-border px-2 py-0.5 text-muted-foreground">
                      {p.status}
                    </span>
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold">{p.name}</h3>
                  <p className="mt-2 max-w-xl text-sm text-muted-foreground">{p.desc}</p>
                </div>
                <div className="md:text-right">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">ETA</div>
                  <div className="mt-1 font-mono text-foreground">{p.eta}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border/60 py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Frühzugang als Erste:r?</h2>
          <p className="mt-4 text-muted-foreground">
            Schreib uns kurz — du landest auf der Closed-Beta-Liste, sobald das jeweilige Produkt
            bereit ist.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground"
          >
            Auf die Liste →
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
