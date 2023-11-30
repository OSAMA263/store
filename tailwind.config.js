/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightGray: "#75758a",
        thickRed: "#d3122a",
      },
    },
  },
  plugins: [],
};
