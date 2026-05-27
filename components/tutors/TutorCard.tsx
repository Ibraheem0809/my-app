// components/cards/TutorCard.tsx

"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { Star, MapPin, Clock, BookOpen } from "lucide-react";

import type { Tutor } from "@/data/tutors";

interface TutorCardProps {
  tutor: Tutor;
  onView?: (tutor: Tutor) => void;
}

export default function TutorCard({ tutor, onView }: TutorCardProps) {
  return (
    <motion.article
      whileHover={{
        y: -6,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="glass flex h-full flex-col rounded-3xl border border-white/60 p-6 shadow-soft"
    >
      {/* Top */}
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-muted ring-2 ring-white">
          <Image
            src={tutor.photo}
            alt={tutor.name}
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="truncate font-display text-lg font-semibold text-foreground">
            {tutor.name}
          </h3>

          <p className="truncate text-xs text-muted-foreground">
            {tutor.qualification}
          </p>
        </div>

        <div className="ml-auto inline-flex items-center gap-1 rounded-full bg-secondary/10 px-2.5 py-1 text-xs font-medium text-secondary">
          <Star className="h-3.5 w-3.5 fill-current" />
          {tutor.rating}
        </div>
      </div>

      {/* Subjects */}
      <div className="mt-5 flex flex-wrap gap-1.5">
        {tutor.subjects.map((subject) => (
          <span
            key={subject}
            className="rounded-full bg-primary/10 px-2.5 py-1 text-xs text-primary"
          >
            {subject}
          </span>
        ))}
      </div>

      {/* Details */}
      <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
        <li className="flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-accent" />
          {tutor.experience} experience
        </li>

        <li className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-accent" />
          {tutor.timings}
        </li>

        <li className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-accent" />
          {tutor.areas.slice(0, 2).join(", ")}
          {tutor.areas.length > 2 ? ` +${tutor.areas.length - 2}` : ""}
        </li>
      </ul>

      {/* CTA */}
      <div className="mt-auto pt-6">
        <button
          type="button"
          onClick={() => onView?.(tutor)}
          className="inline-flex w-full items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:bg-primary"
        >
          View Profile
        </button>
      </div>
    </motion.article>
  );
}
