"use client";

import { PageHero } from "@/components/ui/PageHero";

import { ContactForm } from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

import FAQ from "@/components/contact/FAQ";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="We'd love to hear from you"
        subtitle="Our coordinator typically responds within a few hours."
      />

      {/* CONTACT SECTION */}
      <section className="py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* LEFT */}
          <div className="space-y-5">
            <ContactInfo />
          </div>

          {/* RIGHT */}
          <div className="glass rounded-3xl p-6 shadow-soft sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-border shadow-soft">
            <iframe
              title="Satwik Home Tutorial — Prayagraj"
              src="https://www.google.com/maps?q=Civil+Lines,+Prayagraj,+Uttar+Pradesh&output=embed"
              width="100%"
              height="400"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />
    </>
  );
}
