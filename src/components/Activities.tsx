"use client";

import { motion } from "framer-motion";
import { HeartHandshake, ExternalLink, Mail } from "lucide-react";

const activities = [
  "Organized blood donation & donation camps with Lion’s Club.",
  "Participated in cricket & football charity tournaments.",
  "Built an open-source YouTube watch-party app in Next.js and deployed on Vercel during college.",
];

export default function Activities() {
  return (
    <section id="activities" className="py-14 md:py-20">
      <h2 className="text-center text-2xl md:text-3xl font-bold">
        Other Activities
      </h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="card mt-8 p-6 md:p-8"
      >
        <ul className="space-y-2 text-gray-700 dark:text-gray-300">
          {activities.map((a) => (
            <li key={a} className="flex items-start gap-2">
              <HeartHandshake className="mt-0.5 h-4 w-4 text-[rgb(43,121,255)]" />
              <span>{a}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href="https://www.linkedin.com/in/mohammed-abulhasan-256767235/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-black/10 dark:border-white/20 px-3 py-2 hover:bg-black/5 dark:hover:bg-white/10 transition"
          >
            LinkedIn <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href="mailto:mdyahasan18@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg bg-[rgb(43,121,255)] px-3 py-2 text-white hover:brightness-95 transition"
          >
            <Mail className="h-4 w-4" /> Contact Me
          </a>
        </div>
      </motion.div>
    </section>
  );
}
