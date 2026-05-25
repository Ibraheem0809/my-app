"use client";

import Link from "next/link";

import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";

import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const quickLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/students",
    label: "Students",
  },
  {
    href: "/tutors",
    label: "Tutors",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

const services = [
  "Home Tuition",
  "Online Tuition",
  "Exam Preparation",
  "Group Classes",
];

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

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-white">
      {/* TOP */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        {/* BRAND */}
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft">
              <GraduationCap className="h-5 w-5" />
            </span>

            <span className="font-display text-lg font-semibold tracking-tight">
              Satwik Home Tutorial
            </span>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Personalized home tuition across Prayagraj for Classes 1–12. Trusted
            tutors, mentored progress, and parent peace of mind.
          </p>

          {/* SOCIALS */}
          <div className="mt-5 flex gap-3">
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-muted transition hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="mb-4 font-display font-semibold">Quick Links</h4>

          <ul className="space-y-2 text-sm text-muted-foreground">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="mb-4 font-display font-semibold">Services</h4>

          <ul className="space-y-2 text-sm text-muted-foreground">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="mb-4 font-display font-semibold">Contact</h4>

          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-primary" />

              <span>Civil Lines, Prayagraj, UP 211001</span>
            </li>

            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 text-primary" />

              <span>+91 98765 43210</span>
            </li>

            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 text-primary" />

              <span>hello@satwikhometutorial.in</span>
            </li>
          </ul>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-muted-foreground sm:px-6 lg:px-8">
          © 2026 Satwik Home Tutorial, Prayagraj. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
