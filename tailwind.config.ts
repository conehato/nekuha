import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "main-green": "#b5d692",
        "main-blue": "#d5e6f5",
        "main-blue-dark": "#435E75",
      },
      fontSize: {
        "xs": ["0.5rem", "1rem"],
        "sm": ["0.75rem", "1rem"]
      },
    },
  },
  plugins: [],
};
export default config;
