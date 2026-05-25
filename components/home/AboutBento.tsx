"use client";

import { motion } from "framer-motion";

import {
  Users,
  ShieldCheck,
  Sparkles,
  BookOpen,
  Award,
  Target,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";

import { cn } from "@/lib/utils";

type Card = {
  title: string;
  desc: string;
  icon: React.ElementType;
  className?: string;
  gradient: string;
};

const cards: Card[] = [
  {
    title: "Who We Are",
    desc: "A Prayagraj-based collective of teachers helping students learn at their own pace, in their own home.",
    icon: Users,
    className: "md:col-span-2 md:row-span-2",
    gradient: "bg-gradient-primary text-white",
  },
  {
    title: "Trusted Tutors",
    desc: "Background-checked, interviewed, and continuously mentored.",
    icon: ShieldCheck,
    gradient: "glass",
  },
  {
    title: "Personalized Learning",
    desc: "Lesson plans built around each student's pace and goals.",
    icon: Sparkles,
    gradient: "glass",
  },
  {
    title: "Classes 1–12",
    desc: "From early foundation to board-exam mastery.",
    icon: BookOpen,
    className: "md:col-span-2",
    gradient: "bg-gradient-warm text-white",
  },
  {
    title: "CBSE · ICSE · UP Board",
    desc: "All major boards supported with curriculum-aligned tutors.",
    icon: Award,
    gradient: "glass",
  },
  {
    title: "Our Mission",
    desc: "Make quality 1-on-1 tutoring accessible to every home in Prayagraj.",
    icon: Target,
    gradient: "bg-gradient-cool text-white",
  },
];

export default function AboutBento() {
  return (
    <section id="about" className="section-spacing relative overflow-hidden">
      <div className="container-padding mx-auto max-w-7xl">
        <SectionHeading
          badge="About Us"
          title="A Modern Home For Home Tuition"
          description="Six things that make Satwik Home Tutorial different."
        />

        <div className="mt-12 grid auto-rows-[180px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                whileHover={{
                  y: -4,
                }}
                viewport={{
                  once: true,
                  margin: "-60px",
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className={cn(
                  "relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/60 p-6 shadow-soft",
                  card.className,
                  card.gradient
                )}
              >
                {/* Glow Effect */}
                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-white/10 blur-3xl" />

                {/* Icon */}
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md">
                  <Icon className="h-7 w-7 opacity-90" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-display text-xl font-semibold">
                    {card.title}
                  </h3>

                  <p
                    className={cn(
                      "mt-2 text-sm leading-6",
                      card.gradient.includes("glass")
                        ? "text-muted-foreground"
                        : "text-white/90"
                    )}
                  >
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
