"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

type Edu = { degree: string; org: string; detail?: string };

const education: Edu[] = [
  {
    degree: "B.Sc. Computer Science",
    org: "Islamiah College (Autonomous)",
    detail: "CGPA: 7.89",
  },
  { degree: "MCA (Ongoing)", org: "Jain University (Online)" },
  {
    degree: "Full Stack Development Program",
    org: "SmartCliff Learning Solutions",
    detail: "HTML, CSS, JS + Java Spring Boot with Oracle DB",
  },
  {
    degree: "Courses",
    org: "Edureka & Great Learning",
    detail: "Multiple courses in Java & HTML",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-14 md:py-20">
      <h2 className="text-center text-2xl md:text-3xl font-bold">Education</h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {education.map((e, i) => (
          <motion.article
            key={`${e.degree}-${e.org}`}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.05 }}
            className="card p-6 hover:-translate-y-0.5 transition-transform"
          >
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-[rgba(43,121,255,0.09)] p-2">
                <GraduationCap className="h-5 w-5 text-[rgb(43,121,255)]" />
              </div>
              <div>
                <h3 className="font-semibold">{e.degree}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {e.org}
                </p>
                {e.detail ? (
                  <p className="mt-1 text-sm text-gray-500">{e.detail}</p>
                ) : null}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
