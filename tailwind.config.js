module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx,json}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        brand: {
          teal: "#2dd4bf",
          navy: "#020617",
        },
      },
      boxShadow: {
        glow: "0 10px 40px rgba(45, 212, 191, 0.4)",
      },
    },
    fontFamily: {
      sans: ["Space Grotesk", "ui-sans-serif", "system-ui"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
