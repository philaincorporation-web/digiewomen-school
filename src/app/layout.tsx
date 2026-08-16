import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "DigieWomen School | Formation Numérique & Agro-Pastorale au Gabon",
  description:
    "DigieWomen School forme aux métiers du numérique et de l'agro-pastoral. +11K personnes formées, solutions GED et plateforme e-Agri361.",
  keywords: [
    "formation numérique",
    "Gabon",
    "DigieWomen",
    "GED",
    "e-Agri361",
    "cybersécurité",
    "développement web",
    "agriculture digitale",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "DigieWomen School",
    description: "Portail de formation aux métiers du numérique et de l'agro-pastoral",
    url: "https://www.digiewomenschool.com",
    siteName: "DigieWomen School",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-20">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}