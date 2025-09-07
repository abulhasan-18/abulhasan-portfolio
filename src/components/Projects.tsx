"use client";

import { motion } from "framer-motion";
import { Server, GitBranch, Radio, Layers3, Database } from "lucide-react";

type Project = {
  title: string;
  org: string;
  period: string;
  points: string[];
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const projects: Project[] = [
  {
    title: "Website Build & TNPSC Prime",
    org: "Cloudpixels Consultancy Services",
    period: "Jun 2023 – Mar 2024",
    points: [
      "Built portals with HTML/CSS/JS and Spring Boot + Supabase backend.",
      "Clean REST API architecture and user feedback flows to improve UX.",
      "Reduced hosting costs by offloading PDFs to OneDrive.",
    ],
    Icon: Layers3,
  },
  {
    title: "Online Compiler Platform",
    org: "Cloudpixels Consultancy Services",
    period: "Aug 2024 – Present",
    points: [
      "Spring Boot backend with WebSockets for real-time interactive execution.",
      "Integrated with Next.js frontend; containerized with Docker, CI/CD aligned.",
      "Extended with SDKs to support multiple languages.",
    ],
    Icon: Server,
  },
  {
    title: "Madha FM — Flutter Community App",
    org: "Cloudpixels Consultancy Services",
    period: "May 2024 – Jun 2025",
    points: [
      "Cross-platform Flutter app with seamless audio streaming.",
      "Supabase DB & OAuth-based auth; admin mobile portal for content.",
      "Low-cost, scalable architecture optimized for performance.",
    ],
    Icon: Radio,
  },
  {
    title: "Flutter Quiz App",
    org: "Cloudpixels Consultancy Services",
    period: "Mar 2025 – Present",
    points: [
      "Real-time quiz content via REST APIs with performance tracking.",
      "Supabase authentication & data store; secure and scalable.",
    ],
    Icon: GitBranch,
  },
  {
    title: "Database & Data Engineering Projects",
    org: "Cloudpixels Consultancy Services",
    period: "Current",
    points: [
      "PostgreSQL schema design, optimization, and management.",
      "Advancing DBT-based data modeling and transformation pipelines.",
    ],
    Icon: Database,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-14 md:py-20">
      <h2 className="text-center text-2xl md:text-3xl font-bold">
        Projects & Experience
      </h2>

      <div className="mt-10 space-y-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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
                  <span className="text-xs text-gray-500">{p.period}</span>
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
