"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { about } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="section-pad">
      <SectionHeading index="01" title="about" subtitle={about.lead} />
      <div className="grid gap-10 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-text lg:col-span-2"
        >
          {about.body.map((p, i) => (
            <p key={i} className="leading-relaxed">
              {p}
            </p>
          ))}
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass divide-y divide-border rounded-lg font-mono text-sm"
        >
          {about.facts.map((f) => (
            <div key={f.k} className="flex gap-3 px-4 py-3">
              <dt className="w-20 shrink-0 text-phosphor">{f.k}</dt>
              <dd className="text-text">{f.v}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
