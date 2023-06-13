/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
/*   darkMode: "class", */
   theme: {
    extend: {
      keyframes: {
        ripple: {
          "0%": {width: "0px", height: "0px", opacity: 0.5},
          "50%": {width: "500px", height: "500px", opacity: 0.3},
          "100%": {width: "1000px", height: "1000px", opacity: 0}
        },
      },
      animation: {
        ripple: "ripple 1s linear infinite",
      },
    },
  },
  plugins: [],
};
