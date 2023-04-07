/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {},
      textColor: {
        vivid: "#0A1929",
        dim: "#3E5060",
      },
      fontSize: {
        "cover-caption": "36px",
        "cover-title": "128px",
      },
    },
  },
  plugins: [],
};
