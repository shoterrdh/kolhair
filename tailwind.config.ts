import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FAFAF8",
          100: "#F5F3EE",
          200: "#EDE9E0",
        },
        brown: {
          50: "#F7F0EB",
          100: "#E8D5C4",
          200: "#C9A882",
          300: "#A67C52",
          400: "#8B5E3C",
          500: "#6B4226",
          600: "#4E2F18",
          700: "#3D2314",
          800: "#2A1709",
          900: "#1A0D05",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
