import "./globals.css";
import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import { Providers } from "./Providers";

const inter = Inter({ subsets: ["latin"] });
const fira = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohammed Abulhasan M — Portfolio",
  description:
    "Software & Data Engineer — Java (Spring Boot), Flutter, PostgreSQL/Supabase, Next.js, AWS, DBT.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} ${fira.className} bg-white dark:bg-black text-gray-900 dark:text-gray-100`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
