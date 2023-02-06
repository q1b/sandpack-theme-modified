/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/*.tsx", "./components/**/*.{tsx,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
