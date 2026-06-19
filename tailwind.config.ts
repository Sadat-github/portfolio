import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Infrastructure / terminal palette
        bg: "#0a0e0d",
        surface: "#0f1513",
        panel: "#111917",
        border: "#1d2a26",
        muted: "#5c6f69",
        text: "#c8d6d0",
        bright: "#e9f2ee",
        phosphor: {
          DEFAULT: "#39ff8b",
          dim: "#2ee07a",
          glow: "#39ff8b",
        },
        amber: "#ffb454",
        red: "#ff5f56",
      },
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 24px -4px rgba(57,255,139,0.35)",
        "glow-sm": "0 0 12px -2px rgba(57,255,139,0.30)",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        scan: "scan 6s linear infinite",
        float: "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
