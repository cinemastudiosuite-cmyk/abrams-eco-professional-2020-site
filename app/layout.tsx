import type { Metadata } from "next";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollEnhancements } from "./components/ScrollEnhancements";
import { company, siteUrl } from "./lib/content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} | Професионални управник у Смедереву`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  applicationName: company.name,
  keywords: [
    "професионални управник",
    "управљање стамбеним заједницама",
    "Смедерево",
    "одржавање зграда",
    "стамбена заједница",
    "ABRAMS ECO PROFESSIONAL 2020",
  ],
  authors: [{ name: company.contactPerson }],
  creator: company.name,
  publisher: company.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: "/",
    siteName: company.name,
    title: `${company.name} | Професионални управник`,
    description: company.description,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: `${company.name} - професионално управљање стамбеним заједницама`,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.name,
  legalName: company.legalName,
  description: company.description,
  url: siteUrl,
  telephone: "+38169747303",
  email: company.email,
  taxID: company.pib,
  identifier: company.mb,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.streetAddress,
    addressLocality: company.locality,
    addressCountry: company.country,
  },
  areaServed: {
    "@type": "City",
    name: "Смедерево",
  },
  founder: {
    "@type": "Person",
    name: company.contactPerson,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr-Cyrl-RS">
      <body>
        <Header />
        {children}
        <Footer />
        <ScrollEnhancements />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
