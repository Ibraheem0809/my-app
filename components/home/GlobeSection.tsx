// components/home/GlobeSection.tsx

"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

import SectionHeading from "@/components/ui/SectionHeading";

const Globe = dynamic(() => import("react-globe.gl"), {
  ssr: false,
});

const points = [
  {
    lat: 25.4358,
    lng: 81.8463,
    size: 0.42,
    color: "#1e3a8a",
  },
  {
    lat: 28.6139,
    lng: 77.209,
    size: 0.3,
    color: "#f97316",
  },
  {
    lat: 19.076,
    lng: 72.8777,
    size: 0.28,
    color: "#14b8a6",
  },
];

export default function GlobeSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-hero" />

      {/* Animated Blobs */}
      <motion.div
        aria-hidden
        animate={{
          x: [0, 20, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-24 left-0 -z-10 h-72 w-72 md:h-80 md:w-80 rounded-full bg-primary/10 blur-3xl"
      />

      <motion.div
        aria-hidden
        animate={{
          x: [0, -20, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-0 -z-10 h-80 w-80 md:h-96 md:w-96 rounded-full bg-secondary/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
        {/* Left Content */}
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
            duration: 0.6,
          }}
          className="order-1"
        >
          <SectionHeading
            badge="Expanding reach"
            title="Connecting students with trusted tutors across cities"
            description="SATWIK HOME TUTORIAL delivers personalized learning experiences with expert tutors and modern teaching methods."
          />

          {/* Stats */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <motion.div
              whileHover={{ y: -4 }}
              className="glass rounded-3xl border border-white/60 p-5 md:p-6 shadow-soft"
            >
              <div className="text-2xl md:text-3xl font-display font-semibold text-primary">
                15+
              </div>

              <p className="mt-2 text-sm text-muted-foreground">
                Areas Covered
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="glass rounded-3xl border border-white/60 p-5 md:p-6 shadow-soft"
            >
              <div className="text-2xl md:text-3xl font-display font-semibold text-secondary">
                1000+
              </div>

              <p className="mt-2 text-sm text-muted-foreground">
                Successful Sessions
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Globe */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="order-2 relative flex justify-center"
        >
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-primary opacity-10 blur-3xl" />

          <div className="glass overflow-hidden rounded-[2rem] border border-white/60 p-2 sm:p-3 shadow-soft">
            <div className="h-[260px] w-[260px] sm:h-[360px] sm:w-[360px] md:h-[450px] md:w-[450px] lg:h-[520px] lg:w-[520px]">
              <Globe
                width={
                  typeof window !== "undefined"
                    ? window.innerWidth < 640
                      ? 260
                      : window.innerWidth < 768
                      ? 360
                      : window.innerWidth < 1024
                      ? 450
                      : 520
                    : 520
                }
                height={
                  typeof window !== "undefined"
                    ? window.innerWidth < 640
                      ? 260
                      : window.innerWidth < 768
                      ? 360
                      : window.innerWidth < 1024
                      ? 450
                      : 520
                    : 520
                }
                backgroundColor="rgba(0,0,0,0)"
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                pointsData={points}
                pointAltitude="size"
                pointColor="color"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
