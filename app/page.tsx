import type { Metadata } from "next";

import Hero from "@/components/home/Hero";
import AboutBento from "@/components/home/AboutBento";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import TopTutors from "@/components/home/TopTutors";
import TopStudents from "@/components/home/TopStudents";
import GlobeSection from "@/components/home/GlobeSection";
import ContactSection from "@/components/home/ContactSection";
import FAQ from "@/components/contact/FAQ";

export const metadata: Metadata = {
  title: "SATWIK HOME TUTORIAL | Best Home Tuition in Prayagraj",

  description: "Premium home tuition services for Classes 1-12 in Prayagraj.",

  keywords: [
    "Home Tuition Prayagraj",
    "Tutors in Prayagraj",
    "CBSE Tuition",
    "ICSE Tuition",
    "UP Board Tuition",
    "SATWIK HOME TUTORIAL",
  ],

  openGraph: {
    title: "SATWIK HOME TUTORIAL | Best Home Tuition in Prayagraj",

    description: "Premium home tuition services for Classes 1-12 in Prayagraj.",

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
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",

    "@type": "EducationalOrganization",

    name: "SATWIK HOME TUTORIAL",

    address: {
      "@type": "PostalAddress",

      addressLocality: "Prayagraj",

      addressRegion: "Uttar Pradesh",

      addressCountry: "India",
    },

    url: "https://satwikhometutorial.in",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <Hero />

      <AboutBento />

      <ProcessTimeline />

      <TopTutors />

      <TopStudents />

      <GlobeSection />

      <ContactSection />

      <FAQ />
    </main>
  );
}
