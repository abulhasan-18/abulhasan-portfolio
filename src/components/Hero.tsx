"use client";

import { Mail, Phone, Linkedin, ArrowRight, BadgeCheck } from "lucide-react";
import Balancer from "react-wrap-balancer";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative py-16 md:py-24">
      {/* gradient glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-[rgba(43,121,255,0.25)] blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="card mx-auto max-w-4xl p-8 md:p-12 text-center"
      >
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          <Balancer>MOHAMMED ABULHASAN M</Balancer>
        </h1>

        <p className="mt-3 text-base md:text-lg text-gray-600 dark:text-gray-300">
          Software &amp; Data Engineer{" "}
          <BadgeCheck className="inline h-5 w-5 text-[rgb(43,121,255)] ml-1 align-middle" />
        </p>

        <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed">
          Software &amp; Data Engineer with 2+ years of experience in Java
          (Spring Boot) backend and Flutter mobile apps. Skilled in scalable
          REST APIs, data-driven systems, and user-focused apps. Experience with
          PostgreSQL/Supabase, MySQL, Git, Docker, DBT, and AWS (Glue, S3,
          EventBridge, Lambda, Step Functions, Iceberg). Involved in migrations
          from HDFS to AWS Snowflake. Recognized for problem-solving,
          adaptability, and reliable delivery under tight deadlines.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:mdyahasan18@gmail.com"
            className="inline-flex items-center gap-2 rounded-xl bg-[rgb(43,121,255)] px-4 py-2 text-white hover:brightness-95 transition"
          >
            <Mail className="h-4 w-4" /> Email
          </a>

          <a
            href="tel:+918870948248"
            className="inline-flex items-center gap-2 rounded-xl border border-black/10 dark:border-white/20 px-4 py-2 hover:bg-black/5 dark:hover:bg-white/10 transition"
          >
            <Phone className="h-4 w-4" /> Call
          </a>

          <a
            href="https://www.linkedin.com/in/mohammed-abulhasan-256767235/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-black/10 dark:border-white/20 px-4 py-2 hover:bg-black/5 dark:hover:bg-white/10 transition"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn{" "}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
