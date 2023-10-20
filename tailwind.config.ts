import type {Config} from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "95rem",
      },
      padding: {
        navbar: "5rem",
      },
      margin: {
        navbar: "5rem",
      },
    },
  },
  plugins: [],
};
export default config;
