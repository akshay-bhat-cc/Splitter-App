/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: "#feffff",
      "muted-teal": "#9fb3b2",
      teal: "#2cc0ad",
      "dark-teal": "#00474b",
      green: "#00474b",
      "soft-blue": "#f3f8fb",
      error: "hsl(13deg, 31%, 58%)",
      grey: "#5d6d6c",
    },
    fontFamily: {
      mono: ['"Space Mono"', "monospace"],
    },
    screens: {
      "2xl": { max: "1500px" },

      xl: { max: "1366px" },

      lg: { max: "1100px" },

      md: { max: "550px" },
    },
  },
  plugins: [],
};
