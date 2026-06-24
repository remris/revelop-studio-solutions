import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, SectionLabel } from "@/components/SiteLayout";
import { useTheme, type ThemeId } from "@/hooks/use-theme";

export const Route = createFileRoute("/settings")({
  component: SettingsPage,
});

const themes: {
  id: ThemeId;
  name: string;
  description: string;
  bg: string;
  primary: string;
  card: string;
  muted: string;
  foreground: string;
}[] = [
  {
    id: "cyber-navy",
    name: "Cyber Navy",
    description: "Tiefes Navy mit Cyan-Akzent — der Original-Look.",
    bg: "oklch(0.16 0.035 250)",
    primary: "oklch(0.79 0.16 230)",
    card: "oklch(0.205 0.04 252)",
    muted: "oklch(0.23 0.035 252)",
    foreground: "oklch(0.97 0.01 240)",
  },
  {
    id: "void-green",
    name: "Void Green",
    description: "Fast-Schwarz mit satten Smaragd-Akzenten.",
    bg: "oklch(0.13 0.025 155)",
    primary: "oklch(0.76 0.19 155)",
    card: "oklch(0.18 0.03 155)",
    muted: "oklch(0.20 0.025 155)",
    foreground: "oklch(0.96 0.01 155)",
  },
  {
    id: "velvet-purple",
    name: "Velvet Purple",
    description: "Dunkel-Violett mit leuchtendem Lila-Akzent.",
    bg: "oklch(0.14 0.04 290)",
    primary: "oklch(0.73 0.22 295)",
    card: "oklch(0.19 0.045 290)",
    muted: "oklch(0.21 0.035 290)",
    foreground: "oklch(0.97 0.01 290)",
  },
  {
    id: "ember",
    name: "Ember Studio",
    description: "Warmes Fast-Schwarz mit sattem Bernstein-Akzent.",
    bg: "oklch(0.14 0.025 50)",
    primary: "oklch(0.79 0.18 55)",
    card: "oklch(0.19 0.03 50)",
    muted: "oklch(0.21 0.025 50)",
    foreground: "oklch(0.97 0.01 50)",
  },
  {
    id: "studio-light",
    name: "Studio Light",
    description: "Klares Weiß mit Indigo-Akzent — hell und aufgeräumt.",
    bg: "oklch(0.98 0.005 250)",
    primary: "oklch(0.55 0.22 265)",
    card: "oklch(0.95 0.008 250)",
    muted: "oklch(0.91 0.01 250)",
    foreground: "oklch(0.15 0.02 250)",
  },
  {
    id: "rose-light",
    name: "Rose Light",
    description: "Cremeweiß mit sattem Rosa-Akzent.",
    bg: "oklch(0.99 0.004 15)",
    primary: "oklch(0.58 0.22 15)",
    card: "oklch(0.96 0.007 15)",
    muted: "oklch(0.92 0.009 15)",
    foreground: "oklch(0.18 0.02 15)",
  },
  {
    id: "sage-light",
    name: "Sage Light",
    description: "Warmes Weiß mit ruhigem Salbei-Grün.",
    bg: "oklch(0.98 0.006 145)",
    primary: "oklch(0.50 0.18 145)",
    card: "oklch(0.95 0.009 145)",
    muted: "oklch(0.91 0.01 145)",
    foreground: "oklch(0.17 0.02 145)",
  },
  {
    id: "amber-light",
    name: "Amber Light",
    description: "Warmes Creme mit goldenem Bernstein-Akzent.",
    bg: "oklch(0.98 0.012 80)",
    primary: "oklch(0.62 0.20 60)",
    card: "oklch(0.95 0.016 78)",
    muted: "oklch(0.91 0.015 78)",
    foreground: "oklch(0.18 0.025 60)",
  },
  {
    id: "arctic-light",
    name: "Arctic Light",
    description: "Kühles Reinweiß mit Teal — modern und klar.",
    bg: "oklch(0.985 0.003 220)",
    primary: "oklch(0.50 0.17 215)",
    card: "oklch(0.955 0.005 220)",
    muted: "oklch(0.90 0.006 220)",
    foreground: "oklch(0.12 0.015 220)",
  },
  {
    id: "paper-light",
    name: "Paper Light",
    description: "Warmes Papier-Weiß mit dunkler Tinte.",
    bg: "oklch(0.97 0.012 88)",
    primary: "oklch(0.26 0.12 255)",
    card: "oklch(0.94 0.016 88)",
    muted: "oklch(0.90 0.015 88)",
    foreground: "oklch(0.14 0.018 55)",
  },
  {
    id: "midnight",
    name: "Midnight",
    description: "Tiefschwarz mit reinem Weiß — ultra-minimal.",
    bg: "oklch(0.09 0 0)",
    primary: "oklch(0.95 0 0)",
    card: "oklch(0.13 0 0)",
    muted: "oklch(0.17 0 0)",
    foreground: "oklch(0.95 0 0)",
  },
  {
    id: "carbon",
    name: "Carbon",
    description: "Graphit-Dunkel mit leuchtendem Coral-Akzent.",
    bg: "oklch(0.155 0.008 250)",
    primary: "oklch(0.68 0.22 35)",
    card: "oklch(0.205 0.010 250)",
    muted: "oklch(0.22 0.009 250)",
    foreground: "oklch(0.96 0.005 250)",
  },
];

function ThemePreview({ t }: { t: (typeof themes)[number] }) {
  return (
    <div className="h-40 w-full overflow-hidden rounded-xl" style={{ background: t.bg }}>
      <div className="flex h-full flex-col justify-between p-4">
        {/* Fake nav */}
        <div className="flex items-center gap-2">
          <div className="h-2 w-14 rounded-full" style={{ background: t.primary }} />
          <div className="h-1.5 w-8 rounded-full opacity-50" style={{ background: t.foreground }} />
          <div className="h-1.5 w-8 rounded-full opacity-50" style={{ background: t.foreground }} />
          <div className="ml-auto">
            <div
              className="h-6 w-20 rounded-full"
              style={{ background: t.primary, opacity: 0.9 }}
            />
          </div>
        </div>

        {/* Fake hero text */}
        <div>
          <div
            className="mb-1.5 h-3 w-3/4 rounded-full"
            style={{ background: t.foreground, opacity: 0.9 }}
          />
          <div className="mb-4 h-3 w-1/2 rounded-full" style={{ background: t.primary }} />

          {/* Fake card row */}
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex-1 rounded-lg p-2" style={{ background: t.card }}>
                <div
                  className="mb-1 h-1.5 w-10 rounded-full"
                  style={{ background: t.primary, opacity: 0.8 }}
                />
                <div className="h-1 w-full rounded-full" style={{ background: t.muted }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function SettingsPage() {
  const { theme, setTheme } = useTheme();

  return (
    <SiteLayout>
      <section className="min-h-screen py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionLabel>Einstellungen</SectionLabel>
          <h1 className="mt-6 text-5xl font-bold tracking-tight">Farbschema wählen</h1>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Klick auf ein Design — es wird sofort angewendet und im Browser gespeichert.
          </p>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {themes.map((t) => {
              const isActive = theme === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id)}
                  className={`group relative cursor-pointer rounded-2xl border p-5 text-left transition-all duration-200 hover:scale-[1.02] ${
                    isActive
                      ? "border-primary ring-2 ring-primary ring-offset-2 ring-offset-background"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  {/* Active badge */}
                  {isActive && (
                    <div className="absolute right-3 top-3 z-10 rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">
                      Aktiv
                    </div>
                  )}

                  {/* Mini site preview */}
                  <ThemePreview t={t} />

                  {/* Info */}
                  <div className="mt-4">
                    <h3 className="font-semibold">{t.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{t.description}</p>
                  </div>

                  {/* Color swatches */}
                  <div className="mt-4 flex gap-2">
                    <div
                      title="Hintergrund"
                      className="h-5 w-5 rounded-full border border-white/10"
                      style={{ background: t.bg }}
                    />
                    <div
                      title="Akzent"
                      className="h-5 w-5 rounded-full border border-white/10"
                      style={{ background: t.primary }}
                    />
                    <div
                      title="Karte"
                      className="h-5 w-5 rounded-full border border-white/10"
                      style={{ background: t.card }}
                    />
                    <div
                      title="Gedämpft"
                      className="h-5 w-5 rounded-full border border-white/10"
                      style={{ background: t.muted }}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-16 border-t border-border/60 pt-8">
            <Link
              to="/"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              ← Zurück zur Website
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
