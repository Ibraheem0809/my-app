"use client";

import Link from "next/link";

import TutorCard from "@/components/tutors/TutorCard";
import SectionHeading from "@/components/ui/SectionHeading";

import { tutors } from "@/data/tutors";

export default function TopTutors() {
  const topTutors = tutors.slice(0, 4);

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Top Tutors"
          title="Meet the educators families trust"
          description="Hand-picked tutors with proven results across Prayagraj."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {topTutors.map((tutor) => (
            <TutorCard key={tutor.id} tutor={tutor} />
          ))}
        </div>

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
  );
}
