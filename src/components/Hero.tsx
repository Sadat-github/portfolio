"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { hero, profile } from "@/data/site";

type Line = { cmd: string; out: string[] };

/** Commands the interactive terminal understands. */
function run(cmd: string): string[] {
  const c = cmd.trim().toLowerCase();
  switch (c) {
    case "":
      return [];
    case "help":
      return ["available: whoami, about, skills, contact, social, clear"];
    case "whoami":
      return [hero.whoami];
    case "about":
    case "cat about.txt":
      return hero.about;
    case "skills":
      return ["systems · network · data — scroll to #skills for the full list"];
    case "contact":
      return [`email: ${profile.email}`];
    case "social":
      return profile.socials.map((s) => `${s.label.padEnd(9)} ${s.href}`);
    default:
      return [`command not found: ${cmd} — try 'help'`];
  }
}

export default function Hero() {
  const [history, setHistory] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const [typed, setTyped] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-type the intro commands on load.
  useEffect(() => {
    const script = hero.commands;
    let line = 0;
    let char = 0;
    const out: Line[] = [];
    const id = setInterval(() => {
      if (line >= script.length) {
        clearInterval(id);
        setTyped("");
        return;
      }
      const current = script[line];
      char += 1;
      setTyped(current.slice(0, char));
      if (char >= current.length) {
        out.push({ cmd: current, out: run(current) });
        setHistory([...out]);
        line += 1;
        char = 0;
        setTyped("");
      }
    }, 70);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [history, typed]);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim().toLowerCase() === "clear") {
      setHistory([]);
      setInput("");
      return;
    }
    setHistory((h) => [...h, { cmd: input, out: run(input) }]);
    setInput("");
  };

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px animate-scan bg-gradient-to-r from-transparent via-phosphor/40 to-transparent" />

      <div className="section-pad grid items-center gap-12 pt-32 sm:pt-40 lg:grid-cols-2">
        {/* Left: intro */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 font-mono text-sm text-phosphor">
            <span className="animate-blink">▍</span> {profile.availability}
          </p>
          <h1 className="text-4xl font-bold leading-tight text-bright sm:text-6xl">
            Hi, I'm{" "}
            <span className="text-phosphor text-glow">{profile.name}</span>.
          </h1>
          <h2 className="mt-3 font-mono text-lg text-muted sm:text-xl">
            {profile.role}
          </h2>
          <p className="mt-6 max-w-md text-lg text-text">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-sm">
            <a
              href="#contact"
              className="rounded-md border border-phosphor/50 bg-phosphor/10 px-4 py-2.5 text-phosphor shadow-glow-sm transition hover:bg-phosphor/20"
            >
              get in touch
            </a>
            <a
              href="#work"
              className="rounded-md border border-border px-4 py-2.5 text-text transition hover:border-phosphor/40 hover:text-phosphor"
            >
              view case studies
            </a>
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                className="px-2 py-2.5 text-muted underline-offset-4 hover:text-phosphor hover:underline"
              >
                résumé ↗
              </a>
            )}
          </div>

          <div className="mt-8 flex gap-4 font-mono text-sm text-muted">
            {profile.socials.map((s) => (
              <a key={s.label} href={s.href} className="hover:text-phosphor">
                {s.label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right: interactive terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass overflow-hidden rounded-xl shadow-glow"
          onClick={() => inputRef.current?.focus()}
        >
          <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red" />
            <span className="h-3 w-3 rounded-full bg-amber" />
            <span className="h-3 w-3 rounded-full bg-phosphor" />
            <span className="ml-3 font-mono text-xs text-muted">{profile.name.toLowerCase()} — zsh</span>
          </div>

          <div ref={scrollRef} className="h-80 overflow-y-auto p-4 font-mono text-sm leading-7">
            {history.map((line, i) => (
              <div key={i}>
                <div>
                  <span className="text-phosphor">{hero.prompt}</span>{" "}
                  <span className="text-bright">{line.cmd}</span>
                </div>
                {line.out.map((o, j) => (
                  <div key={j} className="text-text">
                    {o}
                  </div>
                ))}
              </div>
            ))}

            {typed && (
              <div>
                <span className="text-phosphor">{hero.prompt}</span>{" "}
                <span className="text-bright">{typed}</span>
                <span className="animate-blink">▍</span>
              </div>
            )}

            <form onSubmit={submit} className="flex items-center">
              <span className="text-phosphor">{hero.prompt}</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                spellCheck={false}
                autoComplete="off"
                className="ml-2 flex-1 bg-transparent text-bright caret-phosphor outline-none"
                placeholder="type 'help'"
              />
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
