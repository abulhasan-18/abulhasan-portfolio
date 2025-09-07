"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group relative inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/20 px-3 py-2 transition hover:bg-black/5 dark:hover:bg-white/10"
    >
      {isDark ? (
        <Sun className="h-4 w-4 transition-transform group-hover:rotate-12" />
      ) : (
        <Moon className="h-4 w-4 transition-transform group-hover:-rotate-12" />
      )}
      <span className="text-sm">{isDark ? "Light" : "Dark"}</span>
      <span className="pointer-events-none absolute -inset-px rounded-full border border-transparent group-hover:border-brand-400/40" />
    </button>
  );
}
