/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lexend Deca", "sans-serif"],
      },
      textShadow: {
        sm: "0 1px 2px rgba(0, 0, 0, 0.25)",
        md: "0 2px 4px rgba(0, 0, 0, 0.25)",
        lg: "0 4px 8px rgba(0, 0, 0, 0.25), 0 2px 4px rgba(0, 0, 0, 0.3)",
        xl: "0 15px 30px rgba(0, 0, 0, 0.25), 0 5px 15px rgba(0, 0, 0, 0.3)",
        glow: "0 0 5px rgba(56, 189, 248, 0.5), 0 0 20px rgba(56, 189, 248, 0.3)",
      },
    },
  },
  plugins: [
    tailwindScrollbar,
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-sm": {
          textShadow: "0 1px 2px rgba(0, 0, 0, 0.25)",
        },
        ".text-shadow": {
          textShadow: "0 2px 4px rgba(0, 0, 0, 0.25)",
        },
        ".text-shadow-md": {
          textShadow: "0 2px 4px rgba(0, 0, 0, 0.25)",
        },
        ".text-shadow-lg": {
          textShadow:
            "0 4px 8px rgba(0, 0, 0, 0.25), 0 2px 4px rgba(0, 0, 0, 0.3)",
        },
        ".text-shadow-xl": {
          textShadow:
            "0 15px 30px rgba(0, 0, 0, 0.25), 0 5px 15px rgba(0, 0, 0, 0.3)",
        },
        ".text-shadow-glow": {
          textShadow:
            "0 0 5px rgba(56, 189, 248, 0.5), 0 0 20px rgba(56, 189, 248, 0.3)",
        },
        ".text-shadow-none": {
          textShadow: "none",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
