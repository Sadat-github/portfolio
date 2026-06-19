"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { caseStudies } from "@/data/site";

const sevColor: Record<string, string> = {
  "SEV-1": "border-red/50 text-red",
  "SEV-2": "border-amber/50 text-amber",
  "SEV-3": "border-phosphor/50 text-phosphor",
};

export default function CaseStudies() {
  const [open, setOpen] = useState<string | null>(caseStudies[0]?.id ?? null);

  return (
    <section id="work" className="section-pad">
      <SectionHeading
        index="04"
        title="case studies"
        subtitle="Real incidents — problem, diagnosis, durable fix."
      />

      <div className="space-y-3">
        {caseStudies.map((c, i) => {
          const isOpen = open === c.id;
          return (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass overflow-hidden rounded-lg"
            >
              <button
                onClick={() => setOpen(isOpen ? null : c.id)}
                className="flex w-full items-center gap-4 px-5 py-4 text-left"
              >
                <span className={`shrink-0 rounded border px-2 py-0.5 font-mono text-xs ${sevColor[c.severity]}`}>
                  {c.severity}
                </span>
                <span className="flex-1 font-medium text-bright">{c.title}</span>
                <span className={`font-mono text-phosphor transition-transform ${isOpen ? "rotate-90" : ""}`}>
                  ›
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-4 border-t border-border px-5 py-5 text-sm">
                      <Field label="problem" value={c.problem} tone="text-text" />
                      <Field label="diagnosis" value={c.diagnosis} tone="text-text" />
                      <Field label="fix" value={c.fix} tone="text-bright" />
                      <div className="flex flex-wrap gap-2 pt-1">
                        {c.tags.map((t) => (
                          <span key={t} className="chip">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function Field({ label, value, tone }: { label: string; value: string; tone: string }) {
  return (
    <div className="grid gap-1 sm:grid-cols-[7rem_1fr] sm:gap-4">
      <div className="font-mono text-xs uppercase tracking-wide text-phosphor">{label}</div>
      <p className={`leading-relaxed ${tone}`}>{value}</p>
    </div>
  );
}
