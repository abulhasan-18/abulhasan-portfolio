"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const nav = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Activities", href: "#activities" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-b bg-white/70 dark:bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40">
      {/* Top bar */}
      <div className="container flex h-14 items-center justify-between">
        {/* Brand */}
        <motion.div
          initial={{ y: -8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center gap-2"
        >
          <Link
            href="/"
            className="font-semibold tracking-tight leading-none pl-5"
            onClick={() => setOpen(false)}
          >
            Mohammed Abulhasan M
          </Link>
        </motion.div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <Link
              key={n.label}
              href={n.href}
              className="text-sm hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
            >
              <span className="relative after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-current after:transition-[width] after:duration-200 hover:after:w-full">
                {n.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile actions */}
        <div className="md:hidden flex items-center gap-2">
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 dark:border-white/10"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-black/10 dark:border-white/10 bg-white/90 dark:bg-black/70 backdrop-blur"
          >
            <ul className="container py-1">
              {nav.map((n) => (
                <li key={n.label}>
                  <Link
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block px-2 py-3 rounded-lg text-base hover:bg-black/5 dark:hover:bg-white/10 transition"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
