"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { BookOpen, Clock, GraduationCap, MapPin, Star } from "lucide-react";

import TutorCard from "@/components/tutors/TutorCard";

import SectionHeading from "@/components/ui/SectionHeading";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

import { getTutors } from "@/services/tutor.service";

import type { Tutor } from "@/types/tutor";

export default function TopTutors() {
  const [tutors, setTutors] = useState<Tutor[]>([]);
  const [loading, setLoading] = useState(true);

  const [active, setActive] = useState<Tutor | null>(null);

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const data = await getTutors();

        setTutors(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTutors();
  }, []);

  const topTutors = tutors.slice(0, 3);

  return (
    <>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Top Tutors"
            title="Meet the educators families trust"
            description="Hand-picked tutors with proven results across Prayagraj."
          />

          {loading ? (
            <div className="mt-12 text-center text-muted-foreground">
              Loading tutors...
            </div>
          ) : (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {topTutors.map((tutor) => (
                <TutorCard key={tutor._id} tutor={tutor} onView={setActive} />
              ))}
            </div>
          )}

          <div className="mt-10 text-center">
            <Link
              href="/tutors"
              className="inline-flex items-center rounded-full border border-border bg-white px-6 py-3 text-sm font-medium transition hover:border-primary hover:text-primary"
            >
              See all tutors
            </Link>
          </div>
        </div>
      </section>

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
                  {active.subjects.map((s) => (
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
                    Classes {active.classes.join(", ")} ·{" "}
                    {active.boards.join(", ")}
                  </li>

                  <li className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-accent" />
                    {active.timing}
                  </li>

                  <li className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-accent" />
                    {active.areas.join(", ")}
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
