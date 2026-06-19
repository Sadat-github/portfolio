"use client";

import { useEffect, useState } from "react";
import { nav, profile } from "@/data/site";

export default function Navbar() {
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = nav
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => Boolean(el));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-border bg-bg/80 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="group flex items-center gap-2 font-mono text-sm">
          <span className="grid h-8 w-8 place-items-center rounded-md border border-border bg-surface text-phosphor shadow-glow-sm">
            {profile.initials}
          </span>
          <span className="text-bright">{profile.name}</span>
          <span className="hidden text-muted sm:inline">/ {profile.role.toLowerCase()}</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 font-mono text-sm md:flex">
          {nav.map((n, i) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                className={`rounded px-3 py-2 transition-colors hover:text-phosphor ${
                  active === n.id ? "text-phosphor" : "text-muted"
                }`}
              >
                <span className="text-border">0{i + 1}.</span> {n.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="ml-2 rounded-md border border-phosphor/40 px-3 py-2 text-phosphor transition-colors hover:bg-phosphor/10"
            >
              hire me
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="font-mono text-phosphor md:hidden"
        >
          {open ? "[ ✕ ]" : "[ ≡ ]"}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="flex flex-col gap-1 border-t border-border bg-bg/95 px-5 py-3 font-mono text-sm backdrop-blur md:hidden">
          {nav.map((n, i) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className={`block rounded px-3 py-2 ${active === n.id ? "text-phosphor" : "text-muted"}`}
              >
                <span className="text-border">0{i + 1}.</span> {n.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
