"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layers, Smartphone, Cloud, Cpu } from "lucide-react";

const items = [
  {
    icon: Code2,
    title: "Programming",
    list: ["Java", "Dart (Flutter)", "Python"],
  },
  {
    icon: Database,
    title: "Backend / DB",
    list: ["Spring Boot", "Oracle DB", "MySQL", "PostgreSQL", "Supabase"],
  },
  {
    icon: Layers,
    title: "Frontend",
    list: ["HTML", "CSS", "JavaScript", "Next.js"],
  },
  { icon: Smartphone, title: "Mobile", list: ["Flutter (Android & iOS)"] },
  {
    icon: Cloud,
    title: "Cloud & Data",
    list: [
      "SQL",
      "AWS Glue",
      "S3",
      "EventBridge",
      "Lambda",
      "Step Functions",
      "DBT",
      "Apache Iceberg",
      "Snowflake",
    ],
  },
  {
    icon: Cpu,
    title: "Dev Practices",
    list: ["REST APIs", "Unit Testing", "Docker", "Git", "CI/CD"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-14 md:py-20">
      <h2 className="text-center text-2xl md:text-3xl font-bold">
        Technical Skills
      </h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="card p-6 hover:-translate-y-0.5 transition-transform"
            >
              <Icon className="h-8 w-8 text-[rgb(43,121,255)]" />
              <h3 className="mt-3 font-semibold">{s.title}</h3>
              <ul className="mt-2 text-sm text-gray-600 dark:text-gray-300 space-y-1">
                {s.list.map((t) => (
                  <li key={t}>• {t}</li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
