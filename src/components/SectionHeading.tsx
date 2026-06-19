"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <div className="flex items-center gap-3 font-mono text-sm text-phosphor">
        <span className="text-muted">{index}.</span>
        <span className="text-glow">{title}</span>
        <span className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
      </div>
      {subtitle && <p className="mt-3 max-w-2xl text-lg text-bright">{subtitle}</p>}
    </motion.div>
  );
}
