import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#000",
        },
        white: {
          DEFAULT: "#FFF",
        },
        primary: {
          DEFAULT: "#1391AD",
        },
        Accent: {
          DEFAULT: "#F4CD00",
        },
      },
    },
  },
  plugins: [],
};
export default config;
