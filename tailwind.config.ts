import type { Config } from "tailwindcss";

/** 全站主色 #046ba7；深浅仅为同色相明度变化 */
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
      },
      animation: {
        "ambient-fade-in": "ambientFadeIn 1.15s ease-out forwards",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        imu: {
          50: "#f1f7fa",
          100: "#e2eef5",
          200: "#c5dce8",
          300: "#94bdd4",
          400: "#5a9cc0",
          500: "#046ba7",
          600: "#046ba7",
          700: "#046ba7",
          800: "#046ba7",
          900: "#046ba7",
          950: "#046ba7",
          brand: {
            DEFAULT: "#046ba7",
            deep: "#046ba7",
            darker: "#046ba7",
          },
          highlight: "#046ba7",
        },
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(15, 23, 42, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15, 23, 42, 0.06) 1px, transparent 1px)",
        "dot-subtle":
          "radial-gradient(rgba(15, 23, 42, 0.08) 0.5px, transparent 0.5px)",
        "grid-on-brand":
          "linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)",
        /** 顶部 Hero 横幅：背景图 + 品牌蓝叠层（保留可读性，且呈现学术蓝调） */
        "hero-imu":
          "linear-gradient(155deg, rgba(4,107,167,0.86) 0%, rgba(4,107,167,0.92) 100%), url('/background/bg.avif')",
        /** 主色（深蓝）区块：背景图 + 更厚的蓝色叠层 */
        "brand-photo":
          "linear-gradient(180deg, rgba(4,107,167,0.88), rgba(4,107,167,0.94)), url('/background/bg.avif')",
        /** 页脚更深一层，保持品牌色但更沉稳 */
        "brand-darker-photo":
          "linear-gradient(180deg, rgba(2,71,114,0.93), rgba(2,71,114,0.97)), url('/background/bg.avif')",
        /** 浅色区块：半透明白色遮罩 + SIRC 水印底图（模仿 brand-photo 方式） */
        "light-photo":
          "linear-gradient(180deg, rgba(248,250,252,0.7), rgba(241,245,249,0.75)), url('/background/bg.png')",
      },
      boxShadow: {
        card: "0 1px 3px rgba(15, 23, 42, 0.06), 0 4px 12px rgba(15, 23, 42, 0.04)",
        "card-brand":
          "0 8px 24px rgba(4, 107, 167, 0.16), 0 2px 8px rgba(4, 107, 167, 0.07)",
      },
    },
  },
  plugins: [],
};

export default config;
