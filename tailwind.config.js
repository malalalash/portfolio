/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "bkack-ops": ["Black Ops One", "cursive"],
        "monsterrat": ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
