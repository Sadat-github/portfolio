"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/site";

function Counter({ value, suffix, decimals = 0 }: { value: number; suffix: string; decimals?: number }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const duration = 1400;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(value * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <span ref={ref} className="font-mono text-3xl font-bold text-phosphor text-glow sm:text-4xl">
      {n.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="border-y border-border bg-surface/40">
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-px sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="px-5 py-8 text-center">
            <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
            <p className="mt-2 font-mono text-xs uppercase tracking-wider text-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
