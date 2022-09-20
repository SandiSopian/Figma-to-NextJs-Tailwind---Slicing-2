/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./node_modules/flowbite-react/**/*.js", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    plugin(function ({ addUtilities }) {
      const utilities = {
        ".bg-hero-4": {
          "background-image": "url(/bg-hero-4.jpg)",
          backgroundSize: "cover",
          opacity: "50",
        },
      };

      addUtilities(utilities);
    }),
  ],
};
