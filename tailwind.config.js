/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        input: "inset 0 2px 3px #0006",
        table: " 0 6px 10px #0009",
        after: "0 2px 0 rgb(59 130 246), 0 -2px 0 rgb(59 130 246)",
      },
      dropShadow: {
        app: " 0 6px 8px #0006",
      },
    },
  },
  plugins: [],
};
