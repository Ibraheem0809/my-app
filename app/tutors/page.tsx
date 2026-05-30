"use client";

import { useEffect, useMemo, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import {
  BookOpen,
  Clock,
  GraduationCap,
  MapPin,
  Search,
  Star,
  X,
} from "lucide-react";

import { PageHero } from "@/components/ui/PageHero";

import TutorCard from "@/components/tutors/TutorCard";

import { DialogTitle, Dialog, DialogContent } from "@/components/ui/dialog";

import type { Tutor } from "@/types/tutor";

import { getTutors } from "@/services/tutor.service";

const allClasses = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
];

const allBoards = ["CBSE", "ICSE", "UP Board"];

const availabilities = ["Morning", "Evening", "Both"] as const;

function Select({
  value,
  onChange,
  options,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder: string;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-xl border border-border bg-white px-3.5 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
    >
      <option value="">{placeholder}</option>

      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}

export default function TutorsPage() {
  const [tutors, setTutors] = useState<Tutor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [q, setQ] = useState("");
  const [subject, setSubject] = useState("");
  const [cls, setCls] = useState("");
  const [area, setArea] = useState("");
  const [avail, setAvail] = useState("");
  const [board, setBoard] = useState("");

  const [active, setActive] = useState<Tutor | null>(null);

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        setLoading(true);

        const data = await getTutors();

        setTutors(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load tutors");
      } finally {
        setLoading(false);
      }
    };

    fetchTutors();
  }, []);

  const allSubjects = useMemo(() => {
    return Array.from(new Set(tutors.flatMap((t) => t.subjects || []))).sort();
  }, [tutors]);

  const allAreas = useMemo(() => {
    return Array.from(new Set(tutors.flatMap((t) => t.areas || []))).sort();
  }, [tutors]);

  const filtered = useMemo(() => {
    return tutors.filter((t) => {
      if (
        q &&
        !`${t.name} ${t.subjects?.join(" ")} ${t.areas?.join(" ")}`
          .toLowerCase()
          .includes(q.toLowerCase())
      ) {
        return false;
      }

      if (subject && !t.subjects?.includes(subject)) {
        return false;
      }

      if (cls && !t.classes?.includes(cls)) {
        return false;
      }

      if (area && !t.areas?.includes(area)) {
        return false;
      }

      if (avail && t.availability !== avail) {
        return false;
      }

      if (board && !t.boards?.includes(board)) {
        return false;
      }

      return true;
    });
  }, [tutors, q, subject, cls, area, avail, board]);

  const clear = () => {
    setQ("");
    setSubject("");
    setCls("");
    setArea("");
    setAvail("");
    setBoard("");
  };

  const hasFilter = q || subject || cls || area || avail || board;

  return (
    <>
      <PageHero
        eyebrow="Tutors"
        title="Find your perfect tutor"
        subtitle="Filter by subject, class, area, board, and availability."
      />

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* FILTERS */}
          <div className="glass rounded-3xl border border-white/60 p-5 shadow-soft">
            <div className="relative mb-4">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search by name, subject, or area..."
                className="w-full rounded-xl border border-border bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
            </div>

            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-5">
              <Select
                value={subject}
                onChange={setSubject}
                options={allSubjects}
                placeholder="Subject"
              />

              <Select
                value={cls}
                onChange={setCls}
                options={allClasses}
                placeholder="Class"
              />

              <Select
                value={area}
                onChange={setArea}
                options={allAreas}
                placeholder="Location"
              />

              <Select
                value={board}
                onChange={setBoard}
                options={allBoards}
                placeholder="Board"
              />

              <Select
                value={avail}
                onChange={setAvail}
                options={[...availabilities]}
                placeholder="Availability"
              />
            </div>

            {hasFilter && (
              <button
                onClick={clear}
                className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary transition hover:underline"
              >
                <X className="h-3.5 w-3.5" />
                Clear filters
              </button>
            )}
          </div>

          {/* LOADING */}
          {loading && (
            <div className="mt-10 text-center text-muted-foreground">
              Loading tutors...
            </div>
          )}

          {/* ERROR */}
          {error && (
            <div className="mt-10 text-center text-red-500">{error}</div>
          )}

          {/* CONTENT */}
          {!loading && !error && (
            <>
              {/* COUNT */}
              <div className="mt-8 text-sm text-muted-foreground">
                {filtered.length} tutor
                {filtered.length === 1 ? "" : "s"} found
              </div>

              {/* GRID */}
              <motion.div
                layout
                className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                <AnimatePresence mode="popLayout">
                  {filtered.map((t) => (
                    <motion.div
                      key={t._id}
                      layout
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <TutorCard tutor={t} onView={setActive} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              {filtered.length === 0 && (
                <p className="mt-12 text-center text-muted-foreground">
                  No tutors match these filters.
                </p>
              )}
            </>
          )}
        </div>
      </section>

      {/* MODAL */}
      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-lg overflow-hidden rounded-3xl border-0 bg-white p-0">
          {active && (
            <div className="p-6">
              {/* Accessibility Title */}
              <DialogTitle className="sr-only">
                {active.name} Tutor Profile
              </DialogTitle>

              <div className="flex items-center gap-4">
                <img
                  src={active.photo}
                  alt={active.name}
                  className="h-16 w-16 rounded-2xl bg-muted object-cover"
                />

                <div>
                  <h2 className="font-display text-2xl font-semibold">
                    {active.name}
                  </h2>

                  <p className="text-sm text-muted-foreground">
                    {active.qualification}
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-4 text-sm">
                <p className="leading-7 text-muted-foreground">{active.bio}</p>

                <div className="flex flex-wrap gap-1.5">
                  {active.subjects?.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-primary/10 px-2.5 py-1 text-xs text-primary"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <ul className="space-y-3 pt-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-secondary" />
                    {active.rating} rating
                  </li>

                  <li className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-accent" />
                    {active.experience} experience
                  </li>

                  <li className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-accent" />
                    Classes {active.classes?.join(", ")} ·{" "}
                    {active.boards?.join(", ")}
                  </li>

                  <li className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-accent" />
                    {active.timing}
                  </li>

                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-accent" />
                    {active.areas?.join(", ")}
                  </li>
                </ul>

                <a
                  href="/contact"
                  className="mt-4 inline-flex w-full justify-center rounded-full bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                >
                  Contact tutor
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
