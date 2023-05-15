/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "system-text-dark": "#AF7B00",
        "system-text-light": "#EDF2F4",
        "system-red": "#FF453A",
        "system-orange": "#FF9F0A",
        "system-yellow": "#FFD60A",
        "system-green": "#30D158",
        "system-blue": "#0A84FF",
        "system-indigo": "#5E5CE6",
        "system-purple": "#BF5AF2",
        gray: {
          "system-1": "#d7d7d7",
          "system-2": "#636366",
          "system-3": "#48484A",
          "system-4": "#3A3A3C",
          "system-5": "#2C2C2E",
          "system-6": "#1C1C1E",
        },
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },
    },
  },
  plugins: [],
};
