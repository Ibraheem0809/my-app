"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { MapPin, UserCheck, GraduationCap, BookOpen } from "lucide-react";

import type { Student } from "@/types/student";

interface StudentCardProps {
  s?: Student;
  student?: Student;
}

export default function StudentCard({ s, student }: StudentCardProps) {
  const data = s || student;

  if (!data) return null;

  return (
    <motion.article
      layout
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
      {/* TOP */}
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-muted ring-2 ring-white">
          <Image
            src={data.photo}
            alt={data.name}
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="truncate font-display text-lg font-semibold text-foreground">
            {data.name}
          </h3>

          <p className="text-sm text-muted-foreground">
            Class {data.className}
          </p>
        </div>
      </div>

      {/* SUBJECTS */}
      {data.subject?.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-1.5">
          {data.subject.map((subject) => (
            <span
              key={subject}
              className="rounded-full bg-primary/10 px-2.5 py-1 text-xs text-primary"
            >
              {subject}
            </span>
          ))}
        </div>
      )}

      {/* DETAILS */}
      <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
        <li className="flex items-center gap-2">
          <GraduationCap className="h-4 w-4 text-accent" />
          {data.board}
        </li>

        <li className="flex items-center gap-2">
          <BookOpen className="h-4 w-4 text-accent" />
          {data.subject?.length || 0} Subject
          {(data.subject?.length || 0) !== 1 ? "s" : ""}
        </li>

        <li className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-accent" />
          {data.location}
        </li>

        {/*<li className="flex items-center gap-2">
          <UserCheck className="h-4 w-4 text-accent" />
          Mentored by {data.mentor}
        </li>*/}
      </ul>
    </motion.article>
  );
}
