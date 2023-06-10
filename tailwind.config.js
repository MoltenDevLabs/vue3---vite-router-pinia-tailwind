/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    fontFamily: {
      header: ["Lato", "sans-serif"], //Header, subtitle
      body: ["Merriweather", "sans-serif"], //Body, button, caption, overline
    },
  },
  plugins: [],
};
