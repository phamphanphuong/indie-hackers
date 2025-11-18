module.exports = {
  darkMode: "class",
  content: ["./index.html","./src/**/*.{js,jsx,md}"],
  theme: {
    extend: {
      colors: {
        brand: { 500: "#0ea5e9" }
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15,23,42,0.35)"
      }
    }
  },
  plugins:[require("@tailwindcss/typography")]
};