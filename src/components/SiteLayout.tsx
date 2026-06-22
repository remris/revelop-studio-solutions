import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

function Logo() {
  return (
    <Link to="/" className="font-display text-xl font-bold tracking-tight">
      <span className="text-foreground">re</span>
      <span className="text-primary">:</span>
      <span className="text-foreground">velop</span>
    </Link>
  );
}

const nav = [
  { to: "/", label: "Start" },
  { to: "/services", label: "Leistungen" },
  { to: "/products", label: "Produkte" },
  { to: "/about", label: "Studio" },
  { to: "/contact", label: "Kontakt" },
];

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="transition-colors hover:text-foreground [&.active]:text-foreground"
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/contact"
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-[0_0_30px_-5px_color-mix(in_oklch,var(--primary)_60%,transparent)] transition-transform hover:scale-[1.02]"
          >
            Projekt anfragen
          </Link>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-border/60 bg-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              re:velop ist ein unabhängiges Software-Studio für moderne App- und
              Web-Entwicklung. Produktorientiert. Technisch fundiert. Sauber
              ausgeliefert.
            </p>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {nav.slice(1).map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-foreground/80 hover:text-primary">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Kontakt
            </h4>
            <a
              href="mailto:hello@revelop.dev"
              className="text-sm text-foreground/80 hover:text-primary"
            >
              hello@revelop.dev
            </a>
          </div>
        </div>
        <div className="border-t border-border/50">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row md:items-center">
            <p>© {new Date().getFullYear()} re:velop — Alle Rechte vorbehalten.</p>
            <p className="font-mono">studio · flutter · next.js · edge</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">
      <span className="h-px w-8 bg-primary/60" />
      {children}
    </div>
  );
}
