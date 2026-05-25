// app/students/page.tsx

"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { students } from "@/data/students";
import { cn } from "@/lib/utils";

import StudentCard from "@/components/students/StudentCard";
import { PageHero } from "@/components/ui/PageHero";

const tabs = [
  {
    key: "1-5",
    label: "Classes 1–5",
    classes: ["1", "2", "3", "4", "5"],
  },
  {
    key: "6-8",
    label: "Classes 6–8",
    classes: ["6", "7", "8"],
  },
  {
    key: "9-10",
    label: "Classes 9–10",
    classes: ["9", "10"],
  },
  {
    key: "11-12",
    label: "Classes 11–12",
    classes: ["11", "12"],
  },
] as const;

export default function StudentsPage() {
  const [active, setActive] = useState<(typeof tabs)[number]["key"]>("1-5");

  const filtered = useMemo(() => {
    const selected = tabs.find((t) => t.key === active)?.classes || [];

    return students.filter((student) => selected.includes(student.className));
  }, [active]);

  return (
    <>
      <PageHero
        eyebrow="Students"
        title="The learners we mentor"
        subtitle="Bright students across Prayagraj, from primary years to board exams."
      />

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={cn(
                  "relative rounded-full border px-5 py-2.5 text-sm font-medium transition",
                  active === tab.key
                    ? "border-transparent text-primary-foreground"
                    : "border-border bg-white text-foreground hover:border-primary"
                )}
              >
                {active === tab.key && (
                  <motion.span
                    layoutId="tab-bg"
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-primary"
                  />
                )}

                {tab.label}
              </button>
            ))}
          </div>

          {/* Students Grid */}
          <motion.div
            layout
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((student) => (
                <motion.div
                  key={student.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <StudentCard s={student} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="mt-12 text-center text-muted-foreground">
              No students in this range yet.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
