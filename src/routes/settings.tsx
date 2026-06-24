import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, SectionLabel } from "@/components/SiteLayout";
import { useTheme, type ThemeId } from "@/hooks/use-theme";

export const Route = createFileRoute("/settings")({
  component: SettingsPage,
});

type ThemeEntry = {
  id: ThemeId;
  name: string;
  label: string;
  bg: string;
  primary: string;
  card: string;
  muted: string;
  foreground: string;
};

const themeGroups: { family: string; accent: string; themes: ThemeEntry[] }[] = [
  {
    family: "Cyan",
    accent: "oklch(0.79 0.16 230)",
    themes: [
      {
        id: "cyan-snow",
        name: "Snow",
        label: "Hell · Reinweiß",
        bg: "oklch(0.99 0.003 230)",
        primary: "oklch(0.79 0.16 230)",
        card: "oklch(0.96 0.005 230)",
        muted: "oklch(0.92 0.005 230)",
        foreground: "oklch(0.12 0.015 230)",
      },
      {
        id: "cyan-frost",
        name: "Frost",
        label: "Hell · Eisblau",
        bg: "oklch(0.94 0.014 228)",
        primary: "oklch(0.79 0.16 230)",
        card: "oklch(0.90 0.018 228)",
        muted: "oklch(0.86 0.014 228)",
        foreground: "oklch(0.12 0.018 232)",
      },
      {
        id: "cyan-navy",
        name: "Navy",
        label: "Dunkel · Navy",
        bg: "oklch(0.16 0.035 250)",
        primary: "oklch(0.79 0.16 230)",
        card: "oklch(0.205 0.04 252)",
        muted: "oklch(0.23 0.035 252)",
        foreground: "oklch(0.97 0.01 240)",
      },
      {
        id: "cyan-abyss",
        name: "Abyss",
        label: "Dunkel · Tiefsee",
        bg: "oklch(0.10 0.025 250)",
        primary: "oklch(0.79 0.16 230)",
        card: "oklch(0.14 0.030 250)",
        muted: "oklch(0.16 0.026 250)",
        foreground: "oklch(0.97 0.01 240)",
      },
    ],
  },
  {
    family: "Amber",
    accent: "oklch(0.62 0.20 60)",
    themes: [
      {
        id: "amber-cloud",
        name: "Cloud",
        label: "Hell · Reinweiß",
        bg: "oklch(0.99 0.004 75)",
        primary: "oklch(0.62 0.20 60)",
        card: "oklch(0.96 0.007 75)",
        muted: "oklch(0.92 0.008 75)",
        foreground: "oklch(0.14 0.018 55)",
      },
      {
        id: "amber-cream",
        name: "Cream",
        label: "Hell · Warmes Creme",
        bg: "oklch(0.95 0.022 82)",
        primary: "oklch(0.62 0.20 60)",
        card: "oklch(0.91 0.028 80)",
        muted: "oklch(0.87 0.023 80)",
        foreground: "oklch(0.14 0.018 55)",
      },
      {
        id: "amber-dusk",
        name: "Dusk",
        label: "Dunkel · Warmes Dunkel",
        bg: "oklch(0.14 0.025 50)",
        primary: "oklch(0.62 0.20 60)",
        card: "oklch(0.19 0.030 50)",
        muted: "oklch(0.21 0.026 50)",
        foreground: "oklch(0.97 0.01 50)",
      },
      {
        id: "amber-coal",
        name: "Coal",
        label: "Dunkel · Schwarz",
        bg: "oklch(0.09 0.018 50)",
        primary: "oklch(0.62 0.20 60)",
        card: "oklch(0.13 0.022 50)",
        muted: "oklch(0.15 0.019 50)",
        foreground: "oklch(0.97 0.01 50)",
      },
    ],
  },
  {
    family: "Coral",
    accent: "oklch(0.68 0.22 35)",
    themes: [
      {
        id: "coral-snow",
        name: "Snow",
        label: "Hell · Reinweiß",
        bg: "oklch(0.99 0.003 30)",
        primary: "oklch(0.68 0.22 35)",
        card: "oklch(0.96 0.006 30)",
        muted: "oklch(0.92 0.006 30)",
        foreground: "oklch(0.14 0.018 25)",
      },
      {
        id: "coral-blush",
        name: "Blush",
        label: "Hell · Warmes Rosa",
        bg: "oklch(0.96 0.014 28)",
        primary: "oklch(0.68 0.22 35)",
        card: "oklch(0.92 0.018 27)",
        muted: "oklch(0.88 0.014 27)",
        foreground: "oklch(0.14 0.018 25)",
      },
      {
        id: "coral-slate",
        name: "Slate",
        label: "Dunkel · Graphit",
        bg: "oklch(0.155 0.008 250)",
        primary: "oklch(0.68 0.22 35)",
        card: "oklch(0.205 0.010 250)",
        muted: "oklch(0.22 0.009 250)",
        foreground: "oklch(0.96 0.005 250)",
      },
      {
        id: "coral-void",
        name: "Void",
        label: "Dunkel · Tiefschwarz",
        bg: "oklch(0.09 0.005 250)",
        primary: "oklch(0.68 0.22 35)",
        card: "oklch(0.13 0.007 250)",
        muted: "oklch(0.16 0.006 250)",
        foreground: "oklch(0.96 0.005 250)",
      },
    ],
  },
];

function ThemePreview({ t }: { t: ThemeEntry }) {
  return (
    <div className="h-36 w-full overflow-hidden rounded-xl" style={{ background: t.bg }}>
      <div className="flex h-full flex-col justify-between p-3">
        <div className="flex items-center gap-1.5">
          <div className="h-1.5 w-12 rounded-full" style={{ background: t.primary }} />
          <div className="h-1 w-6 rounded-full opacity-40" style={{ background: t.foreground }} />
          <div className="h-1 w-6 rounded-full opacity-40" style={{ background: t.foreground }} />
          <div
            className="ml-auto h-5 w-16 rounded-full"
            style={{ background: t.primary, opacity: 0.9 }}
          />
        </div>
        <div>
          <div
            className="mb-1 h-2.5 w-3/4 rounded-full opacity-90"
            style={{ background: t.foreground }}
          />
          <div className="mb-3 h-2.5 w-1/2 rounded-full" style={{ background: t.primary }} />
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex-1 rounded-lg p-1.5" style={{ background: t.card }}>
                <div
                  className="mb-1 h-1 w-8 rounded-full opacity-80"
                  style={{ background: t.primary }}
                />
                <div className="h-0.5 w-full rounded-full" style={{ background: t.muted }} />
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
        <div className="mx-auto max-w-7xl px-6">
          <SectionLabel>Einstellungen</SectionLabel>
          <h1 className="mt-6 text-5xl font-bold tracking-tight">Farbschema</h1>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Wähle eine Akzentfarbe und deinen bevorzugten Hintergrund — hell oder dunkel.
          </p>

          <div className="mt-16 space-y-16">
            {themeGroups.map((group) => (
              <div key={group.family}>
                {/* Group header */}
                <div className="mb-6 flex items-center gap-3">
                  <div
                    className="h-4 w-4 rounded-full ring-2 ring-offset-2 ring-offset-background"
                    style={{ background: group.accent }}
                  />
                  <h2 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                    {group.family}
                  </h2>
                  <div className="h-px flex-1 bg-border" />
                </div>

                {/* 4 cards */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {group.themes.map((t) => {
                    const isActive = theme === t.id;
                    return (
                      <button
                        key={t.id}
                        onClick={() => setTheme(t.id)}
                        className={`relative cursor-pointer rounded-2xl border p-4 text-left transition-all duration-200 hover:scale-[1.02] ${
                          isActive
                            ? "border-primary ring-2 ring-primary ring-offset-2 ring-offset-background"
                            : "border-border hover:border-primary/40"
                        }`}
                      >
                        {isActive && (
                          <div className="absolute right-3 top-3 z-10 rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">
                            Aktiv
                          </div>
                        )}
                        <ThemePreview t={t} />
                        <div className="mt-3">
                          <h3 className="font-semibold">{t.name}</h3>
                          <p className="mt-0.5 text-xs text-muted-foreground">{t.label}</p>
                        </div>
                        <div className="mt-3 flex gap-1.5">
                          {[t.bg, t.primary, t.card, t.muted].map((c, i) => (
                            <div
                              key={i}
                              className="h-4 w-4 rounded-full border border-black/10"
                              style={{ background: c }}
                            />
                          ))}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
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
