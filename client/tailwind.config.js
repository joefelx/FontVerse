/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#f8f6f3",
        white: "#ffffff",
        tan: "#00a6ff",
        black: "#111111",
        darkGray: "#2b2b2b",
        gray: "#555555",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
