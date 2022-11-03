module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {},
    fontFamily: {
      sans: ["IBM Plex sans", "ui-sans-serif", "system-ui"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
