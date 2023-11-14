/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGray: "#7e7e7e",
        thickRed: "#d3122a",
      },
    },
  },
  plugins: [],
};
