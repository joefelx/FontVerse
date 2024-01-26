/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightwhite: "#f8f6f3",
        white: "#ffffff",
        tan: "#E1D1BE",
        black: "#212121",
        gray: "#A3A3A3",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
