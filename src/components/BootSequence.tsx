 "use client";

  import { useEffect, useState } from "react";
  import { AnimatePresence, motion } from "framer-motion";
  import { hero, profile } from "@/data/site";

  /**
   * A one-time terminal "boot" overlay shown on first load.
   * Lines print sequentially, then the overlay slides away.
   */
  export default function BootSequence() {
    const [visible, setVisible] = useState(true);
    const [lines, setLines] = useState<string[]>([]);

    useEffect(() => {
      // Respect users who have already seen it this session.
      if (typeof window !== "undefined" && sessionStorage.getItem("booted")) {
        setVisible(false);
        return;
      }
      let i = 0;
      const id = setInterval(() => {
        // Capture the line BEFORE incrementing. The previous code read
        // `hero.boot[i]` inside the functional updater, which React runs
        // during render — after `i += 1` had already executed — so the last
        // tick read hero.boot[length] === undefined and crashed on `.slice`.
        const line = hero.boot[i];
        if (line !== undefined) {
          setLines((prev) => [...prev, line]);
        }
        i += 1;
        if (i >= hero.boot.length) {
          clearInterval(id);
          setTimeout(() => {
            sessionStorage.setItem("booted", "1");
            setVisible(false);
          }, 650);
        }
      }, 320);
      return () => clearInterval(id);
    }, []);

    return (
      <AnimatePresence>
        {visible && (
          <motion.div
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
          >
            <div className="w-full max-w-lg px-6 font-mono text-sm">
              <div className="mb-4 text-muted">
                booting {profile.name.toLowerCase().replace(/\s+/g, "-")}.portfolio ...
              </div>
              {lines.map((l, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="leading-7 text-text"
                >
                  <span className="text-phosphor">{l.slice(0, 6)}</span>
                  {l.slice(6)}
                </motion.div>
              ))}
              <span className="inline-block h-4 w-2 animate-blink bg-phosphor align-middle" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
