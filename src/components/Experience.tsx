"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { experience } from "@/data/site";

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <SectionHeading index="03" title="experience" subtitle="Where I've kept the lights on." />

      <div className="relative space-y-8 border-l border-border pl-6 sm:pl-8">
        {experience.map((job, i) => (
          <motion.div
            key={job.company + i}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="relative"
          >
            <span
              className={`absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 sm:-left-[39px] ${
                job.current ? "border-phosphor bg-phosphor shadow-glow-sm" : "border-muted bg-bg"
              }`}
            />
            <div className="glass rounded-lg p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-bright">
                  {job.role} <span className="text-phosphor">@ {job.company}</span>
                </h3>
                <span className="font-mono text-xs text-muted">{job.period}</span>
              </div>
              <ul className="mt-3 space-y-2 text-sm text-text">
                {job.points.map((p, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="text-phosphor">▹</span>
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.stack.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
