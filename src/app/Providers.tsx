"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class" // adds/removes 'dark' on <html>
      defaultTheme="system" // follows OS by default
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
}
