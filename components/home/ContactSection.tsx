"use client";

import { Phone, Mail, MapPin } from "lucide-react";

import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import { motion } from "framer-motion";

import SectionHeading from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";

const socials = [
  {
    icon: FaFacebookF,
    href: "#",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    href: "#",
    label: "Instagram",
  },
  {
    icon: FaTwitter,
    href: "#",
    label: "Twitter",
  },
  {
    icon: FaYoutube,
    href: "#",
    label: "YouTube",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Contact"
          title="Let's get your child the right tutor"
          description="Reach out and our coordinator will respond within a day."
        />

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {/* PHONE */}
            <div className="glass rounded-3xl p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <Phone className="h-5 w-5" />
                </span>

                <div>
                  <div className="text-sm text-muted-foreground">Call us</div>

                  <div className="font-display text-lg font-semibold">
                    +91 98765 43210
                  </div>
                </div>
              </div>
            </div>

            {/* EMAIL */}
            <div className="glass rounded-3xl p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-warm text-secondary-foreground">
                  <Mail className="h-5 w-5" />
                </span>

                <div>
                  <div className="text-sm text-muted-foreground">Email</div>

                  <div className="font-display text-lg font-semibold">
                    hello@satwikhometutorial.in
                  </div>
                </div>
              </div>
            </div>

            {/* ADDRESS */}
            <div className="glass rounded-3xl p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-cool text-accent-foreground">
                  <MapPin className="h-5 w-5" />
                </span>

                <div>
                  <div className="text-sm text-muted-foreground">Office</div>

                  <div className="font-display text-lg font-semibold">
                    Civil Lines, Prayagraj, UP 211001
                  </div>
                </div>
              </div>
            </div>

            {/* SOCIALS */}
            <div className="flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white transition hover:bg-primary hover:text-primary-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            className="glass rounded-3xl p-6 shadow-soft sm:p-8"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
