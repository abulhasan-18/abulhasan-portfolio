"use client";

import { motion } from "framer-motion";
import { Server, GitBranch, Radio, Layers3, Database } from "lucide-react";
import * as React from "react";

type Project = {
  title: string;
  org: string;
  start: string; // ISO like "2025-03-01"
  end?: string | null; // null/undefined => Present
  points: string[];
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const projects: Project[] = [
  // Newest first will be handled by sorter below
  {
    title: "Flutter Based Quiz App",
    org: "CloudPixels Pvt Ltd",
    start: "2025-03-01",
    end: null,
    points: [
      "Shipped a cross-platform Flutter app (Android/iOS) tailored for competitive exams with adaptive, responsive UI.",
      "Delivered real-time quiz content via REST with session analytics and performance tracking.",
      "Implemented Supabase Auth with RLS; designed schemas for quizzes, attempts, and results at scale.",
    ],
    Icon: GitBranch,
  },
  {
    title: "Online Compiler Platform",
    org: "CloudPixels Pvt Ltd",
    start: "2024-08-01",
    end: null,
    points: [
      "Built Spring Boot backend with STOMP WebSockets for real-time interactive + non-interactive code execution.",
      "Integrated Next.js frontend for streamed output, prompt handling, and back-pressure safe updates.",
      "Containerized with Docker; CI/CD ready; added pluggable SDK runners to support multiple languages.",
    ],
    Icon: Server,
  },
  {
    title: "Data Platform Modernization",
    org: "CloudPixels Pvt Ltd",
    start: "2024-06-01",
    end: null,
    points: [
      "Orchestrated ADF pipelines moving Postgres → ADLS with parameterized, reusable, and cost-aware designs.",
      "Migrated HDFS → Amazon S3 using Step Functions, Lambda, and Glue with schema evolution + checkpointing.",
      "Moved 2,000+ objects via manual runs and EventBridge-driven automations with monitoring and retries.",
      "Leveling up in dbt: modular models, tests, docs—accelerating engineering enablement.",
    ],
    Icon: Database,
  },
  {
    title: "Madha FM — Flutter Community App",
    org: "CloudPixels Pvt Ltd",
    start: "2024-05-01",
    end: "2025-06-30",
    points: [
      "Delivered seamless audio streaming in Flutter using a low-cost pipeline backed by Google Drive.",
      "Integrated Supabase for OAuth auth and content management; built an admin mobile portal for uploads.",
      "Optimized for long-term sustainability: caching, prefetching, and battery/data-friendly playback.",
    ],
    Icon: Radio,
  },
  {
    title: "Website Build & TNPSC Prime",
    org: "CloudPixels Pvt Ltd",
    start: "2023-06-01",
    end: "2024-03-31",
    points: [
      "Built portals with HTML/CSS/JS and a Spring Boot + Supabase backend for dynamic content via REST.",
      "Defined clean API boundaries and in-site feedback loops that improved UX and content iteration speed.",
      "Cut hosting costs by offloading downloadable PDFs to OneDrive without affecting DX/UX.",
    ],
    Icon: Layers3,
  },
];

// --- Helpers ---
function formatMonthYear(d: Date) {
  return d.toLocaleString("en-US", { month: "short", year: "numeric" });
}

function formatPeriod(p: Project) {
  const start = new Date(p.start);
  const startStr = formatMonthYear(start);
  if (!p.end) return `${startStr} – Present`;
  const end = new Date(p.end);
  return `${startStr} – ${formatMonthYear(end)}`;
}

function compareByRecency(a: Project, b: Project) {
  const aOngoing = !a.end;
  const bOngoing = !b.end;
  if (aOngoing && !bOngoing) return -1; // ongoing first
  if (!aOngoing && bOngoing) return 1;

  // both ongoing → newer start first
  if (aOngoing && bOngoing) {
    return new Date(b.start).getTime() - new Date(a.start).getTime();
  }

  // both ended → newer end first; tie-break by newer start
  const aEnd = new Date(a.end!).getTime();
  const bEnd = new Date(b.end!).getTime();
  if (bEnd !== aEnd) return bEnd - aEnd;
  return new Date(b.start).getTime() - new Date(a.start).getTime();
}

export default function Projects() {
  const ordered = React.useMemo(() => [...projects].sort(compareByRecency), []);

  return (
    <section id="projects" className="py-14 md:py-20">
      <h2 className="text-center text-2xl md:text-3xl font-bold">
        Projects & Experience
      </h2>

      <div className="mt-10 space-y-6">
        {ordered.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="card p-6"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-[rgba(43,121,255,0.09)] p-3">
                <p.Icon className="h-5 w-5 text-[rgb(43,121,255)]" />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold">{p.title}</h3>
                  <span className="text-xs rounded-full bg-black/5 dark:bg-white/10 px-2 py-0.5">
                    {p.org}
                  </span>
                  <span className="text-xs text-gray-500">
                    {formatPeriod(p)}
                  </span>
                </div>

                <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
