"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-10">
      {/* subtle gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-black/10 to-transparent dark:via-white/10" />
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35 }}
        className="container py-8 text-sm text-gray-600 dark:text-gray-400 flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <p>
          © {new Date().getFullYear()} Mohammed Abulhasan M. All rights
          reserved.
        </p>

        <div className="flex items-center gap-3">
          <a
            href="mailto:mdyahasan18@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg border border-black/10 dark:border-white/20 px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10 transition"
          >
            <Mail className="h-4 w-4" />
            Email
          </a>
          <a
            href="tel:+918870948248"
            className="inline-flex items-center gap-2 rounded-lg border border-black/10 dark:border-white/20 px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10 transition"
          >
            <Phone className="h-4 w-4" />
            Call
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-abulhasan-256767235/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[rgb(43,121,255)] px-3 py-2 text-white hover:brightness-95 transition"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
