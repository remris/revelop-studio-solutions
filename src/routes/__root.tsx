import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
// Vercel Analytics
import { Analytics } from "@vercel/analytics/react";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "re:velop",
  url: "https://re-velop.de",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://re-velop.de/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "re:velop",
  url: "https://re-velop.de",
  email: "kontakt@re-velop.de",
  description:
    "Freelance Software-Entwicklung — Apps, Web-Plattformen und KI-Integration. Remote für Kunden in ganz Deutschland. Ansässig in Friedrichshafen am Bodensee.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Eichenmühleweg 23",
    addressLocality: "Friedrichshafen",
    postalCode: "88048",
    addressCountry: "DE",
    addressRegion: "Baden-Württemberg",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "47.6553",
    longitude: "9.4786",
  },
  areaServed: [
    { "@type": "City", name: "Friedrichshafen" },
    { "@type": "City", name: "Ravensburg" },
    { "@type": "City", name: "Überlingen" },
    { "@type": "City", name: "Lindau" },
    { "@type": "City", name: "Konstanz" },
    { "@type": "City", name: "Meersburg" },
    { "@type": "AdministrativeArea", name: "Bodenseekreis" },
    { "@type": "AdministrativeArea", name: "Baden-Württemberg" },
    { "@type": "Country", name: "Deutschland" },
  ],
  knowsAbout: [
    "App-Entwicklung",
    "Web-Entwicklung",
    "KI-Integration",
    "IT-Beratung",
    "Flutter",
    "Next.js",
    "TypeScript",
    "iOS Entwicklung",
    "Android Entwicklung",
    "React",
    "MVP Entwicklung",
    "SaaS Entwicklung",
    "Digitalisierung",
    "Webdesign",
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "re:velop — App · Web · KI · MVP" },
      {
        name: "description",
        content:
          "Freelance Software-Entwicklung — Apps, Web-Plattformen und KI-Integration. Remote verfügbar für Kunden in ganz Deutschland. Ansässig in Friedrichshafen am Bodensee.",
      },
      {
        name: "keywords",
        content:
          "Software Entwicklung Friedrichshafen, App Entwicklung Bodenseekreis, Web Entwicklung Friedrichshafen, IT Beratung Bodenseekreis, Freelancer Bodensee, KI Integration Friedrichshafen, Flutter Entwickler Bodensee, App Entwicklung Bodensee, Software Fischbach, Webseite erstellen Friedrichshafen, Webdesign Friedrichshafen, iOS Entwicklung Bodensee, Android Entwicklung Bodenseekreis, Mobile App Bodensee, MVP Entwicklung, SaaS Development Freelancer, Digitalisierung Bodenseekreis, IT Dienstleistungen Friedrichshafen, Software Entwicklung Ravensburg, Web Entwicklung Überlingen, App Entwicklung Lindau, Software Entwicklung Konstanz, Freelancer Süddeutschland, React Entwickler Bodensee, TypeScript Entwickler, Freelance Entwickler Deutschland, Remote Software Entwicklung, App Entwicklung Freelancer Deutschland, KI Integration Deutschland, Flutter Entwickler Deutschland, Next.js Freelancer Deutschland, Startup Entwicklung, Mobile App Entwicklung Deutschland, Web Entwicklung Remote, Freelance App Entwickler, Softwareentwicklung Freelancer, KI Entwickler Freelancer, MVP Entwickler Deutschland, SaaS Entwicklung Deutschland",
      },
      { name: "author", content: "re:velop" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://re-velop.de/" },
      { property: "og:site_name", content: "re:velop" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@revelop_de" },
      { property: "og:image", content: "https://re-velop.de/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "re:velop — App · Web · KI · MVP" },
      { name: "twitter:image", content: "https://re-velop.de/og-image.jpg" },
      { name: "geo.region", content: "DE-BW" },
      { name: "geo.placename", content: "Friedrichshafen, Bodenseekreis" },
      { name: "geo.position", content: "47.6553;9.4786" },
      { name: "ICBM", content: "47.6553, 9.4786" },
      // Theme color for mobile browsers / Chrome on Android
      { name: "theme-color", content: "#00aaff" },
    ],
    links: [
      // Prefer SVG for modern browsers (sharp, scalable)
      { rel: "icon", href: "/favicon-re.png", type: "image/png", sizes: "64x64" },
      { rel: "shortcut icon", href: "/favicon-re.png" },
      { rel: "apple-touch-icon", href: "/favicon-re.png", sizes: "180x180" },
      // Safari pinned tab (uses monochrome SVG, color accents)
      { rel: "mask-icon", href: "/favicon.svg", color: "#00aaff" },
      { rel: "canonical", href: "https://re-velop.de/" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(websiteSchema),
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="de" className="dark">
      <head>
        <title>re:velop — App · Web · KI · MVP</title>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-re.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/favicon-re.png" sizes="180x180" />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
        <Analytics />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
