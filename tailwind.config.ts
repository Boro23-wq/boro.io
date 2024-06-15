/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  theme: {
    extend: {
      fontFamily: {
        newsreader: ["var(--font-newsreader)"],
      },
      animation: {
        fadeIn: "fadeIn .5s ease-in-out",
        fadeOut: "fadeOut .5s ease-in-out",
      },

      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      },
    },
  },
  plugin: [],
  // ...
};
