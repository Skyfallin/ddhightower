import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#262a33",
        wine: {
          DEFAULT: "#990f3d",
          hover: "#BA124A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      maxWidth: {
        "84rem": "84rem",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
} satisfies Config;
