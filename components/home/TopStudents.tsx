"use client";

import { students } from "@/data/students";

import StudentCard from "@/components/students/StudentCard";

import SectionHeading from "@/components/ui/SectionHeading";

export default function TopStudents() {
  const topStudents = students.slice(0, 4);

  return (
    <section className="bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Top Students"
          title="Celebrating our learners"
          description="A glimpse of the bright students we're mentoring this year."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {topStudents.map((student) => (
            <StudentCard key={student.id} s={student} />
          ))}
        </div>
      </div>
    </section>
  );
}
