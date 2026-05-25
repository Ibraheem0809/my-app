"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How does the demo class work?",
    a: "We arrange a free trial session at home or online so you can experience the tutor before committing.",
  },
  {
    q: "Which boards do you support?",
    a: "CBSE, ICSE, and UP Board for Classes 1–12 across Prayagraj.",
  },
  {
    q: "How do you select tutors?",
    a: "All tutors are interviewed, background-checked, and mentored by senior educators on our team.",
  },
  {
    q: "What are the fees?",
    a: "Fees depend on class, subject, and frequency. Share your requirement and we'll send a tailored quote.",
  },
  {
    q: "Do you also offer online tuition?",
    a: "Yes — fully online and hybrid options are available for students who prefer it.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-display text-3xl font-semibold md:text-4xl">
          Frequently asked questions
        </h2>

        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`q${i}`}
              className="border-b border-border"
            >
              <AccordionTrigger className="text-left font-display text-base">
                {f.q}
              </AccordionTrigger>

              <AccordionContent className="text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
