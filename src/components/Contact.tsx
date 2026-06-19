"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { contact, profile } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="section-pad">
      <SectionHeading index="06" title="contact" />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="glass mx-auto max-w-2xl rounded-xl p-8 text-center shadow-glow"
      >
        <p className="font-mono text-sm text-phosphor">$ ./say-hello.sh</p>
        <h3 className="mt-3 text-2xl font-bold text-bright sm:text-3xl">{contact.lead}</h3>
        <p className="mx-auto mt-4 max-w-md text-text">
          The fastest way to reach me is email. I read everything and reply quickly.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-7 inline-flex items-center gap-2 rounded-md border border-phosphor/50 bg-phosphor/10 px-6 py-3 font-mono text-phosphor shadow-glow-sm transition hover:bg-phosphor/20"
        >
          {contact.cta} ↗
        </a>

        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-sm text-muted">
          {profile.socials.map((s) => (
            <a key={s.label} href={s.href} className="hover:text-phosphor">
              {s.label} <span className="text-border">/</span> {s.handle}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
