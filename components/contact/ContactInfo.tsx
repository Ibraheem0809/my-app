"use client";

import { Mail, MapPin, Phone } from "lucide-react";

import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const socials = [
  {
    icon: FaFacebookF,
    href: "#",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/satwikhometutorials/",
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

const contactItems = [
  {
    icon: Phone,
    label: "Call us",
    value: "+91 83037 70035",
    gradient: "bg-gradient-primary text-primary-foreground",
  },
  {
    icon: Mail,
    label: "Email",
    value: "satwikhometutorials@gmail.com",
    gradient: "bg-gradient-warm text-secondary-foreground",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Kamala Lounge near KP College, Jhalwa, Prayagraj",
    gradient: "bg-gradient-cool text-accent-foreground",
  },
];

const ContactInfo = () => {
  return (
    <div className="space-y-5">
      {/* CONTACT CARDS */}
      {contactItems.map((item) => {
        const Icon = item.icon;

        return (
          <div key={item.label} className="glass rounded-3xl p-6 shadow-soft">
            <div className="flex items-start gap-4">
              <span
                className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.gradient}`}
              >
                <Icon className="h-5 w-5" />
              </span>

              <div className="min-w-0">
                <p className="text-sm text-muted-foreground">{item.label}</p>

                <h3 className="mt-1 font-display text-lg font-semibold leading-snug">
                  {item.value}
                </h3>
              </div>
            </div>
          </div>
        );
      })}

      {/* SOCIALS */}
      <div className="flex flex-wrap items-center gap-3 pt-2">
        {socials.map((social) => {
          const Icon = social.icon;

          return (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground"
            >
              <Icon className="h-4 w-4" />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ContactInfo;
