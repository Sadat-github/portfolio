"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skills, softSkills } from "@/data/site";

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <SectionHeading index="02" title="skills" subtitle="The toolkit I reach for under pressure." />

      <div className="grid gap-5 md:grid-cols-3">
        {skills.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: gi * 0.1 }}
            className="glass rounded-lg p-5 transition-colors hover:border-phosphor/30"
          >
            <div className="mb-4 flex items-center justify-between font-mono text-sm">
              <span className="text-bright">{group.title}</span>
              <span className="text-muted">~/{group.tag}</span>
            </div>
            <ul className="space-y-2 font-mono text-sm">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-text">
                  <span className="text-phosphor">›</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {softSkills.map((s) => (
          <span key={s} className="chip">
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
