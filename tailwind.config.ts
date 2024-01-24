import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        lato: "'Lato', sans-serif",
        nunito: "'Nunito', sans-serif",
        figtree: "'Figtree', sans-serif",
        montserrat: "'Montserrat', sans-serif",
      },
      colors: {
        primaryBackground: "#F8FAFF",
        primary: "#605BFF",
        secondaryText: "#858585",
        link: "#346BD4",
        sidebar: "#030229",
        trunks: "#999CA0",
      },
    },
  },
  plugins: [],
};
export default config;
