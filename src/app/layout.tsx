import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KNA Aust Pty Ltd — Coming Soon",
  description:
    "Professional Maintenance & Industrial Support Services. Delivering reliable maintenance consulting, skilled labour, equipment hire, and strategic supply solutions across Australia's mining and manufacturing industries.",
  keywords: [
    "maintenance consulting",
    "mining Australia",
    "SAP PM",
    "shutdown planning",
    "labour hire",
    "equipment hire",
    "WA mining",
    "KNA Aust",
  ],
  openGraph: {
    title: "KNA Aust Pty Ltd — Coming Soon",
    description:
      "Backed by 26+ years of hands-on industry experience across Australia's mining and industrial sector.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-midnight text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
