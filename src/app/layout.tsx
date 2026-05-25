import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { KNA_EMAIL_COMPANY, KNA_EMAIL_KRIS } from "@/lib/contact";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mining Maintenance Consultant Australia | SAP PM Expert | KNA (Aust) Pty Ltd",
  description:
    "KNA (Aust) Pty Ltd, 36+ years of maintenance consulting, SAP PM optimisation, shutdown planning and labour hire across Australia's mining and industrial sectors.",
  keywords:
    "mining maintenance consultant Australia, SAP PM consultant, shutdown planner, maintenance planner WA VIC TAS",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "KNA (Aust) Pty Ltd",
  description:
    "Professional maintenance consulting, SAP PM optimisation, shutdown planning, labour hire and critical parts procurement for Australia's mining and industrial sector.",
  telephone: "+61467817535",
  email: [KNA_EMAIL_COMPANY, KNA_EMAIL_KRIS],
  address: {
    "@type": "PostalAddress",
    streetAddress: "151 Lake Road",
    addressLocality: "Daylesford",
    addressRegion: "VIC",
    postalCode: "3460",
    addressCountry: "AU",
  },
  areaServed: "Australia",
  founder: {
    "@type": "Person",
    name: "Kris Nahuys",
  },
  foundingDate: "2025",
  identifier: {
    "@type": "PropertyValue",
    name: "ABN",
    value: "61 680 925 384",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-navy-900 text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
