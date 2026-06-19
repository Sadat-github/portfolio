"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { education, certifications } from "@/data/site";

export default function Education() {
  return (
    <section id="education" className="section-pad">
      <SectionHeading index="05" title="education" />

      <div className="space-y-4">
        {education.map((e, i) => (
          <motion.div
            key={e.school + i}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45 }}
            className="glass rounded-lg p-5"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-bright">{e.degree}</h3>
              <span className="font-mono text-xs text-muted">{e.period}</span>
            </div>
            <p className="mt-1 font-mono text-sm text-phosphor">{e.school}</p>
            {e.note && <p className="mt-3 text-sm text-text">{e.note}</p>}
          </motion.div>
        ))}
      </div>

      {certifications.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {certifications.map((c) => (
            <span key={c} className="chip">
              ✓ {c}
            </span>
          ))}
        </div>
      )}
    </section>
  );
}
