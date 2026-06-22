import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, SectionLabel } from "@/components/SiteLayout";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [{ title: "Impressum — re:velop" }, { name: "robots", content: "noindex" }],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <SiteLayout>
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionLabel>Rechtliches</SectionLabel>
          <h1 className="mt-6 text-4xl font-bold md:text-5xl">Impressum</h1>

          <div className="mt-12 space-y-10 text-sm leading-relaxed text-foreground/80">
            <div>
              <h2 className="mb-3 text-base font-semibold text-foreground">
                Angaben gemäß § 5 TMG
              </h2>
              <p>
                {/* TODO: Deinen vollständigen Namen oder Firmennamen eintragen */}
                [Vorname Nachname / Firmenname]
                <br />
                [Straße Hausnummer]
                <br />
                [PLZ Ort]
                <br />
                Deutschland
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-base font-semibold text-foreground">Kontakt</h2>
              <p>
                E-Mail:{" "}
                <a href="mailto:hello@revelop.dev" className="text-primary hover:underline">
                  hello@revelop.dev
                </a>
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-base font-semibold text-foreground">Steuerliche Angaben</h2>
              <p>
                {/* TODO: Steuernummer oder USt-IdNr eintragen */}
                Steuernummer: [Steuernummer]
                <br />
                {/* Falls vorhanden: */}
                {/* Umsatzsteuer-Identifikationsnummer gem. § 27a UStG: DE... */}
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-base font-semibold text-foreground">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p>
                {/* TODO: Name und Adresse eintragen */}
                [Vorname Nachname]
                <br />
                [Straße Hausnummer]
                <br />
                [PLZ Ort]
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-base font-semibold text-foreground">Haftungsausschluss</h2>
              <p className="text-muted-foreground">
                Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die
                Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr
                übernommen werden. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
                bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die
                auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
            </div>

            <div>
              <h2 className="mb-3 text-base font-semibold text-foreground">Urheberrecht</h2>
              <p className="text-muted-foreground">
                Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
