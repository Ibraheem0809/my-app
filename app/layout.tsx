import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL("https://satwikhometutorial.in"),

  title: {
    default: "SATWIK HOME TUTORIAL",
    template: "%s | SATWIK HOME TUTORIAL",
  },

  description: "Premium home tuition services in Prayagraj for Classes 1-12.",

  keywords: [
    "Home Tuition Prayagraj",
    "Best Tutors Prayagraj",
    "CBSE Tuition",
    "ICSE Tuition",
    "UP Board Tuition",
    "SATWIK HOME TUTORIAL",
  ],

  openGraph: {
    title: "SATWIK HOME TUTORIAL",
    description: "Premium tutoring services in Prayagraj.",
    url: "https://satwikhometutorial.in",
    siteName: "SATWIK HOME TUTORIAL",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SATWIK HOME TUTORIAL",
    description: "Premium tutoring services in Prayagraj.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          <ScrollToTop />

          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
