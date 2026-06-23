import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout, SectionLabel } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Kontakt — re:velop" },
      {
        name: "description",
        content: "Schreib re:velop. Wir antworten innerhalb von 1–2 Werktagen.",
      },
      { property: "og:title", content: "Kontakt — re:velop" },
      {
        property: "og:description",
        content: "Erzähl uns von deinem Projekt.",
      },
    ],
    links: [{ rel: "canonical", href: "https://re-velop.de/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          email: fd.get("email"),
          type: fd.get("type"),
          message: fd.get("message"),
        }),
      });
      if (!res.ok) throw new Error();
      setSent(true);
    } catch {
      setError("Senden fehlgeschlagen — bitte direkt per E-Mail melden.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <SiteLayout>
      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2">
          <div>
            <SectionLabel>Kontakt</SectionLabel>
            <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl">
              Erzähl uns von deinem Projekt.
            </h1>
            <p className="mt-6 text-muted-foreground">
              Idee, Skizze, ganzes Pflichtenheft — alles ist okay. Wir antworten innerhalb von 1–2
              Werktagen.
            </p>
            <a
              href="mailto:kontakt@re-velop.de"
              className="mt-10 inline-flex items-center gap-3 rounded-full border border-border bg-card px-5 py-3 font-mono text-sm text-foreground hover:border-primary/50"
            >
              kontakt@re-velop.de
            </a>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-8">
            {sent ? (
              <div className="py-12 text-center">
                <div className="text-4xl">✦</div>
                <h2 className="mt-4 text-xl font-semibold">Danke, wir melden uns.</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Antwort innerhalb von 1–2 Werktagen.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                <Field label="Name">
                  <input
                    name="name"
                    required
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                  />
                </Field>
                <Field label="E-Mail">
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                  />
                </Field>
                <Field label="Projekttyp">
                  <select
                    name="type"
                    required
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Auswählen …
                    </option>
                    <option>App-Entwicklung</option>
                    <option>Web-Entwicklung</option>
                    <option>KI-Integration</option>
                    <option>Beratung / MVP</option>
                    <option>Sonstiges</option>
                  </select>
                </Field>
                <Field label="Worum geht's?">
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                  />
                </Field>
                {error && (
                  <p className="rounded-lg bg-destructive/10 px-4 py-3 text-sm text-destructive">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground disabled:opacity-60"
                >
                  {loading ? "Wird gesendet …" : "Anfrage senden →"}
                </button>
              </div>
            )}
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {children}
    </label>
  );
}
