"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { MapPin, UserCheck } from "lucide-react";

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
      whileHover={{ y: -4 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="flex flex-col rounded-3xl border border-border/60 bg-white p-5 shadow-soft"
    >
      {/* TOP */}
      <div className="flex items-center gap-3">
        <div className="relative h-14 w-14 overflow-hidden rounded-2xl bg-muted">
          <Image
            src={data.photo}
            alt={data.name}
            fill
            sizes="56px"
            className="object-cover"
          />
        </div>

        <div className="min-w-0">
          <h3 className="truncate font-display font-semibold text-foreground">
            {data.name}
          </h3>

          <p className="text-xs text-muted-foreground">
            Class {data.className} · {data.board}
          </p>
        </div>
      </div>

      {/* SUBJECTS */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {data.subject?.map((subject) => (
          <span
            key={subject}
            className="rounded-full bg-accent/10 px-2 py-0.5 text-[11px] text-accent"
          >
            {subject}
          </span>
        ))}
      </div>

      {/* DETAILS */}
      <div className="mt-4 space-y-1.5 text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5 shrink-0" />

          <span>{data.location}</span>
        </div>

        <div className="flex items-center gap-1.5">
          <UserCheck className="h-3.5 w-3.5 shrink-0" />

          <span>Mentored by {data.mentor}</span>
        </div>
      </div>
    </motion.article>
  );
}
