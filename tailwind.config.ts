import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      container: { center: true, padding: "1rem" },
      fontFamily: {
        // from next/font variables set in layout.tsx
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        mono: [
          "var(--font-fira)",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
      colors: {
        brand: {
          50: "#eef6ff",
          100: "#d9e9ff",
          200: "#b3d2ff",
          300: "#85b7ff",
          400: "#5596ff",
          500: "#2b79ff",
          600: "#175de6",
          700: "#1249b4",
          800: "#0f3b8f",
          900: "#0d3275",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
