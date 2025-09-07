"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Network, Menu, X, CircuitBoard } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const nav = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Activities", href: "#activities" },
  { label: "Declaration", href: "#declaration" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40">
      <div className="container flex items-center justify-between py-3">
        {/* Brand + icons */}
        <motion.div
          initial={{ y: -8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center gap-2"
        >
          <Cpu className="h-5 w-5 text-brand-600 dark:text-brand-400" />
          <CircuitBoard className="h-5 w-5 text-brand-600 dark:text-brand-400" />
          <Network className="h-5 w-5 text-brand-600 dark:text-brand-400" />
          <span className="font-semibold tracking-tight">
            Mohammed Abulhasan M
          </span>
        </motion.div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <Link
              key={n.label}
              href={n.href}
              className="text-sm hover:text-brand-600 dark:hover:text-brand-400"
            >
              <span className="link-underline">{n.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {open && (
          <motion.nav
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden border-t border-black/10 dark:border-white/10"
          >
            <ul className="container py-2">
              {nav.map((n) => (
                <li key={n.label}>
                  <Link
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block px-2 py-3 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
