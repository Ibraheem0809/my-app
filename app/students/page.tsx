"use client";

import { useEffect, useMemo, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { BookOpen, GraduationCap, MapPin, Search, User, X } from "lucide-react";

import { PageHero } from "@/components/ui/PageHero";

import type { Student } from "@/types/student";

import { getStudents } from "@/services/student.service";

const boards = ["CBSE", "ICSE", "UP Board"];

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

export default function StudentsPage() {
  const [students, setStudents] = useState<Student[]>([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [q, setQ] = useState("");

  const [board, setBoard] = useState("");

  const [className, setClassName] = useState("");

  const [location, setLocation] = useState("");

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);

        const data = await getStudents();

        setStudents(data);
      } catch (err) {
        console.error(err);

        setError("Failed to load students");
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const allClasses = useMemo(() => {
    return Array.from(new Set(students.map((s) => s.className))).sort();
  }, [students]);

  const allLocations = useMemo(() => {
    return Array.from(new Set(students.map((s) => s.location))).sort();
  }, [students]);

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      if (
        q &&
        !`${student.name} ${student.subject?.join(" ")} ${student.location}`
          .toLowerCase()
          .includes(q.toLowerCase())
      ) {
        return false;
      }

      if (board && student.board !== board) {
        return false;
      }

      if (className && student.className !== className) {
        return false;
      }

      if (location && student.location !== location) {
        return false;
      }

      return true;
    });
  }, [students, q, board, className, location]);

  const clearFilters = () => {
    setQ("");
    setBoard("");
    setClassName("");
    setLocation("");
  };

  const hasFilter = q || board || className || location;

  return (
    <>
      <PageHero
        eyebrow="Students"
        title="Our brilliant students"
        subtitle="Meet the students learning with Satwik Home Tutorials."
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
                placeholder="Search by student name, subject, or area..."
                className="w-full rounded-xl border border-border bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
              />
            </div>

            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              <Select
                value={board}
                onChange={setBoard}
                options={boards}
                placeholder="Board"
              />

              <Select
                value={className}
                onChange={setClassName}
                options={allClasses}
                placeholder="Class"
              />

              <Select
                value={location}
                onChange={setLocation}
                options={allLocations}
                placeholder="Location"
              />
            </div>

            {hasFilter && (
              <button
                onClick={clearFilters}
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
              Loading students...
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
                {filteredStudents.length} student
                {filteredStudents.length === 1 ? "" : "s"} found
              </div>

              {/* GRID */}
              <motion.div
                layout
                className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              >
                <AnimatePresence mode="popLayout">
                  {filteredStudents.map((student) => (
                    <motion.div
                      key={student._id}
                      layout
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="glass rounded-3xl border border-white/60 p-6 shadow-soft"
                    >
                      {/* TOP */}
                      <div className="flex items-center gap-4">
                        <img
                          src={student.photo}
                          alt={student.name}
                          className="h-16 w-16 rounded-2xl object-cover bg-muted"
                        />

                        <div>
                          <h2 className="font-display text-lg font-semibold">
                            {student.name}
                          </h2>

                          <p className="text-sm text-muted-foreground">
                            Class {student.className}
                          </p>
                        </div>
                      </div>

                      {/* SUBJECTS */}
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {student.subject?.map((subject) => (
                          <span
                            key={subject}
                            className="rounded-full bg-primary/10 px-2.5 py-1 text-xs text-primary"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>

                      {/* DETAILS */}
                      <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <GraduationCap className="h-4 w-4 text-accent" />
                          {student.board}
                        </li>

                        <li className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-accent" />
                          {student.location}
                        </li>

                        <li className="flex items-center gap-2">
                          <User className="h-4 w-4 text-accent" />
                          Mentor: {student.mentor}
                        </li>

                        <li className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-accent" />
                          {student.subject?.length} Subjects
                        </li>
                      </ul>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              {filteredStudents.length === 0 && (
                <p className="mt-12 text-center text-muted-foreground">
                  No students match these filters.
                </p>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
