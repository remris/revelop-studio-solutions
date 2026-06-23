import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { SiteLayout, SectionLabel } from "@/components/SiteLayout";

type ContactData = {
  name: string;
  email: string;
  type: string;
  message: string;
};

const sendEmail = createServerFn({ method: "POST" }).handler(
  async (input: { data: ContactData }) => {
    const { name, email, type, message } = input.data;
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) throw new Error("RESEND_API_KEY nicht gesetzt");

    const html = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#0a0a0a;color:#e5e5e5;border-radius:12px">
        <h2 style="margin:0 0 24px;font-size:20px;color:#ffffff">Neue Projektanfrage</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#888;width:120px;vertical-align:top">Name</td><td style="padding:8px 0;color:#e5e5e5">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#888;vertical-align:top">E-Mail</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#6366f1">${email}</a></td></tr>
          <tr><td style="padding:8px 0;color:#888;vertical-align:top">Projekttyp</td><td style="padding:8px 0;color:#e5e5e5">${type}</td></tr>
          <tr><td style="padding:8px 0;color:#888;vertical-align:top">Nachricht</td><td style="padding:8px 0;color:#e5e5e5;white-space:pre-wrap">${message}</td></tr>
        </table>
        <hr style="border:none;border-top:1px solid #2a2a2a;margin:24px 0"/>
        <p style="margin:0;font-size:12px;color:#555">re-velop.de · Kontaktformular</p>
      </div>`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "re:velop Kontaktformular <onboarding@resend.dev>",
        to: "kontakt@re-velop.de",
        reply_to: email,
        subject: `Neue Anfrage: ${type} — ${name}`,
        html,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Resend error: ${err}`);
    }

    return { success: true };
  },
);

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
      await sendEmail({
        data: {
          name: fd.get("name") as string,
          email: fd.get("email") as string,
          type: fd.get("type") as string,
          message: fd.get("message") as string,
        },
      });
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
                    defaultValue=""
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
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
