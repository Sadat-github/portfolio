import { profile } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-5 py-8 font-mono text-xs text-muted sm:flex-row sm:px-8">
        <p>
          © {profile.name} — built with Next.js + Tailwind.{" "}
          <span className="text-phosphor">exit 0</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-phosphor shadow-glow-sm" />
          {profile.availability}
        </p>
      </div>
    </footer>
  );
}
