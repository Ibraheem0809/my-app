"use client";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { ArrowRight, Users, GraduationCap, MapPin } from "lucide-react";

import GridBackground from "@/components/ui/GridBackground";

const stats = [
  {
    icon: Users,
    value: "200+",
    label: "Students",
  },
  {
    icon: GraduationCap,
    value: "50+",
    label: "Tutors",
  },
  {
    icon: MapPin,
    value: "20+",
    label: "Areas Covered",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pb-20 pt-28 md:pb-28 md:pt-36">
      {/* Grid Background */}
      <GridBackground />

      {/* Animated Gradient Blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          aria-hidden
          animate={{
            y: [0, 20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-[var(--primary)]/20 blur-3xl"
        />

        <motion.div
          aria-hidden
          animate={{
            y: [0, -25, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-32 right-0 h-[28rem] w-[28rem] rounded-full bg-[var(--secondary)]/20 blur-3xl"
        />

        <motion.div
          aria-hidden
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-1/3 top-1/3 h-72 w-72 rounded-full bg-[var(--accent)]/20 blur-3xl"
        />
      </div>

      <div className="container-padding mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{
            opacity: 0,
            y: 24,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="relative z-10"
        >
          {/* Badge */}
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-[var(--primary)]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--accent)]" />
            Trusted in Prayagraj since 2018
          </span>

          {/* Heading */}
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Personalized <span className="text-gradient">Home Tuition</span> in
            Prayagraj
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-xl text-lg text-slate-600">
            Connecting students with trusted tutors for Classes 1–12 across
            CBSE, ICSE, and UP Board.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/tutors"
              className="shadow-soft inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-white transition hover:scale-[1.02]"
            >
              Find a Tutor
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLScvOEtpsCz24PFMkIf54TUW8H3ZdFoCcsJd_NHeb07J2zdqjg/viewform"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-6 py-3 text-sm font-medium transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              Become a Tutor
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-10 grid max-w-lg grid-cols-3 gap-3 sm:gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.3 + i * 0.1,
                  duration: 0.5,
                }}
                className="glass rounded-2xl p-3 text-center sm:p-4"
              >
                <stat.icon className="mx-auto h-5 w-5 text-[var(--secondary)]" />

                <div className="mt-1.5 font-display text-xl font-semibold sm:text-2xl">
                  {stat.value}
                </div>

                <div className="text-[11px] text-slate-500 sm:text-xs">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          className="relative"
        >
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Glow */}
            <div className="absolute inset-0 -z-10 rotate-3 rounded-[2.5rem] bg-gradient-primary opacity-20 blur-2xl" />

            {/* Glass Card */}
            <div className="glass shadow-soft rounded-[2rem] p-3">
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/hero/hero-image.jpg"
                  alt="Tutor teaching a student"
                  width={1200}
                  height={1200}
                  priority
                  className="h-auto w-full rounded-[1.5rem] object-cover"
                />
              </div>
            </div>

            {/* Floating Card 1 */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="glass shadow-soft absolute -left-4 top-10 hidden rounded-2xl px-4 py-3 text-sm sm:-left-8 sm:block"
            >
              <div className="font-medium">⭐ 4.9 / 5</div>

              <div className="text-xs text-slate-500">Parent rating</div>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="glass shadow-soft absolute -right-2 bottom-10 hidden rounded-2xl px-4 py-3 text-sm sm:-right-6 sm:block"
            >
              <div className="font-medium">🎓 95% pass rate</div>

              <div className="text-xs text-slate-500">Board exams</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
