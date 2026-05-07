import type { Config } from "tailwindcss";

/** 
 * Sky Horizon — Inner Mongolia research center theme
 * Brand: deep sky blue #046ba7
 * Accent: amber-gold #c88a3d (steppe sunset)
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        ambientFadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "ambient-fade-in": "ambientFadeIn 1.15s ease-out forwards",
        shimmer: "shimmer 2.5s ease-in-out infinite",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        imu: {
          50: "#eef5fa",
          100: "#d9eaf5",
          200: "#b4d6eb",
          300: "#7eb7d9",
          400: "#4a98c4",
          500: "#046ba7",
          600: "#035a8c",
          700: "#034a72",
          800: "#023b5b",
          900: "#022d46",
          950: "#011e30",
          brand: {
            DEFAULT: "#046ba7",
            deep: "#034a72",
            darker: "#022d46",
          },
          highlight: "#046ba7",
        },
        amber: {
          DEFAULT: "#c88a3d",
          light: "#e8c89e",
          pale: "#f5e6d3",
        },
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(15, 23, 42, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15, 23, 42, 0.05) 1px, transparent 1px)",
        "dot-subtle":
          "radial-gradient(rgba(15, 23, 42, 0.07) 0.5px, transparent 0.5px)",
        "grid-on-brand":
          "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "hero-imu":
          "linear-gradient(160deg, rgba(4,107,167,0.88) 0%, rgba(2,45,70,0.94) 100%), url('/background/bg.avif')",
        "brand-photo":
          "linear-gradient(175deg, rgba(4,107,167,0.9), rgba(2,55,88,0.95)), url('/background/bg.avif')",
        "brand-darker-photo":
          "linear-gradient(180deg, rgba(2,55,88,0.94), rgba(1,30,48,0.97)), url('/background/bg.avif')",
        "light-photo":
          "linear-gradient(180deg, rgba(248,250,252,0.65), rgba(240,244,248,0.72)), url('/background/bg.png')",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 23, 42, 0.04), 0 3px 8px rgba(15, 23, 42, 0.03)",
        "card-hover": "0 4px 20px -2px rgba(4, 107, 167, 0.12), 0 2px 6px rgba(4, 107, 167, 0.06)",
        "card-brand":
          "0 6px 20px rgba(4, 107, 167, 0.14), 0 2px 6px rgba(4, 107, 167, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
