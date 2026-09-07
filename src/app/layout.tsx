import type { Metadata, Viewport } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ChatbaseWidget from "@/components/ChatbaseWidget";
import PageTransitionLoader from "@/components/PageTransitionLoader";
import SWRegister from "@/components/pwa/SWRegister";
import PWAInstallPrompt from "@/components/pwa/PWAInstallPrompt";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#189000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

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
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "DigieWomen School",
  },
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
    <html lang="fr" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <SWRegister />
          <PageTransitionLoader />
          <Navbar />
          <main className="min-h-screen pt-20">{children}</main>
          <Footer />
          <WhatsAppButton />
          <ChatbaseWidget />
          <PWAInstallPrompt />
        </ThemeProvider>
      </body>
    </html>
  );
}