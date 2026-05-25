"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import {
  ClipboardList,
  Search,
  Users,
  PlayCircle,
  LineChart,
  MessageSquareHeart,
} from "lucide-react";

import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    icon: ClipboardList,
    title: "Student Registration",
    desc: "Share class, subject, and learning goals through a quick form.",
  },
  {
    icon: Search,
    title: "Requirement Analysis",
    desc: "Our coordinator understands learning style, schedule, and budget.",
  },
  {
    icon: Users,
    title: "Tutor Matching",
    desc: "We shortlist tutors who fit subject, board, and location.",
  },
  {
    icon: PlayCircle,
    title: "Demo Class",
    desc: "Free trial session at home or online. No commitment until you're sure.",
  },
  {
    icon: LineChart,
    title: "Progress Monitoring",
    desc: "Monthly assessments and parent updates to keep learning on track.",
  },
  {
    icon: MessageSquareHeart,
    title: "Parent Feedback",
    desc: "Ongoing two-way feedback to keep the experience excellent.",
  },
];

export default function ProcessTimeline() {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="How We Manage"
          title="A clear path from sign-up to results"
          description="Six carefully designed steps to make tutoring feel effortless."
        />

        <div ref={ref} className="relative mt-16">
          {/* Timeline Base Line */}
          <div className="absolute bottom-0 left-6 top-0 w-px bg-border md:left-1/2 md:-translate-x-1/2" />

          {/* Animated Gradient Line */}
          <motion.div
            style={{
              scaleY: lineScale,
              transformOrigin: "top",
            }}
            className="absolute bottom-0 left-6 top-0 w-px bg-gradient-primary md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-12 md:space-y-20">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={step.title}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    margin: "-80px",
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                  className="relative grid items-center gap-6 md:grid-cols-2"
                >
                  {/* Timeline Node */}
                  <div className="absolute left-6 z-10 -translate-x-1/2 md:left-1/2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-soft ring-8 ring-background">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Timeline Card */}
                  <div
                    className={
                      isLeft
                        ? "md:pr-16 md:text-right"
                        : "md:col-start-2 md:pl-16"
                    }
                  >
                    <motion.div
                      whileHover={{
                        y: -4,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="glass ml-16 rounded-2xl p-6 shadow-soft md:ml-0"
                    >
                      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                        Step {String(index + 1).padStart(2, "0")}
                      </div>

                      <h3 className="mt-1 font-display text-xl font-semibold text-foreground">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-muted-foreground">
                        {step.desc}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
