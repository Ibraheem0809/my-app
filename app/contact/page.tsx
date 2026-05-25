"use client";

import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { PageHero } from "@/components/ui/PageHero";

import { ContactForm } from "@/components/contact/ContactForm";

import FAQ from "@/components/contact/FAQ";

const contactCards = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 98765 43210",
    grad: "bg-gradient-primary text-primary-foreground",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@satwikhometutorial.in",
    grad: "bg-gradient-warm text-secondary-foreground",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Civil Lines, Prayagraj, UP 211001",
    grad: "bg-gradient-cool text-accent-foreground",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Sat · 9:00 AM – 8:00 PM",
    grad: "bg-foreground text-background",
  },
];

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
            {contactCards.map((c) => (
              <div
                key={c.label}
                className="glass flex items-start gap-4 rounded-2xl p-5 shadow-soft"
              >
                <span
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${c.grad}`}
                >
                  <c.icon className="h-5 w-5" />
                </span>

                <div>
                  <div className="text-xs text-muted-foreground">{c.label}</div>

                  <div className="font-display font-semibold">{c.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="glass rounded-3xl p-6 shadow-soft sm:p-8">
            <h2 className="mb-5 font-display text-2xl font-semibold">
              Send us a message
            </h2>

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
