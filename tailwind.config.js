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
    extend: {
      colors: {
        light: {
          primary: "#d8dee9",
        },
        dark: {
          primary: "#2e3440",
          text: "#ECEFF4",
        },
      },
    },
    fontFamily: {
      sans: ["IBM Plex sans", "ui-sans-serif", "system-ui"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
