"use client";

import { useEffect, useState } from "react";

import StudentCard from "@/components/students/StudentCard";

import SectionHeading from "@/components/ui/SectionHeading";

import type { Student } from "@/types/student";

import { getStudents } from "@/services/student.service";

export default function TopStudents() {
  const [students, setStudents] = useState<Student[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const data = await getStudents();

        setStudents(data.slice(0, 4));
      } catch (error) {
        console.error("Failed to fetch students:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  return (
    <section className="bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Top Students"
          title="Celebrating our learners"
          description="A glimpse of the bright students we're mentoring this year."
        />

        {/* LOADING */}
        {loading ? (
          <div className="mt-12 text-center text-muted-foreground">
            Loading students...
          </div>
        ) : (
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {students.map((student) => (
              <StudentCard key={student._id} student={student} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
