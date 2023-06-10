/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: { // Colors for MoltenDev Labs
        primary: {
          0: "#000000", /* Black */
          1: "#120505",
          2: "#240a09",
          3: "#360f0e",
          4: "#481412",
          5: "#5b1a17",
          6: "#6d1f1c",
          7: "#7f2420",
          8: "#912925",
          9: "#a32e29",
          10: "#b5332e", /* Base color */
          11: "#bc4743",
          12: "#c45c58",
          13: "#cb706d",
          14: "#d38582",
          15: "#da9997",
          16: "#e1adab",
          17: "#e9c2c0",
          18: "#f0d6d5",
          19: "#f8ebea",
          20: "#ffffff", /* White */
        },
        secondary: {
          0: "#000000", /* Black */
          1: "#130d0c",
          2: "#261a18",
          3: "#382725",
          4: "#4b3431",
          5: "#5e413d",
          6: "#714e49",
          7: "#845b55",
          8: "#966862",
          9: "#a9756e",
          10: "#bc827a", /* Base color */
          11: "#c38f87",
          12: "#c99b95",
          13: "#d0a8a2",
          14: "#d7b4af",
          15: "#dec1bd",
          16: "#e4cdca",
          17: "#ebdad7",
          18: "#f2e6e4",
          19: "#f8f3f2",
          20: "#ffffff", /* White */
        },
        tertiary: {
          0: "#000000", /* Black */
          1: "#0c0e0f",
          2: "#181b1e",
          3: "#24292d",
          4: "#30363c",
          5: "#3d444c",
          6: "#49525b",
          7: "#555f6a",
          8: "#616d79",
          9: "#6d7a88",
          10: "#798897", /* Base color */
          11: "#8694a1",
          12: "#94a0ac",
          13: "#a1acb6",
          14: "#afb8c1",
          15: "#bcc4cb",
          16: "#c9cfd5",
          17: "#d7dbe0",
          18: "#e4e7ea",
          19: "#f2f3f5",
          20: "#ffffff", /* White */
        },
        neutral: {
          0: "#000000", /* Black */
          1: "#0f0e0e",
          2: "#1f1c1c",
          3: "#2e2b2a",
          4: "#3d3938",
          5: "#4d4746",
          6: "#5c5554",
          7: "#6b6362",
          8: "#7a7270",
          9: "#8a807e",
          10: "#998e8c", /* Base color */
          11: "#a39998",
          12: "#ada5a3",
          13: "#b8b0af",
          14: "#c2bbba",
          15: "#ccc7c6",
          16: "#d6d2d1",
          17: "#e0dddd",
          18: "#ebe8e8",
          19: "#f5f4f4",
          20: "#ffffff", /* White */
        },
        error: {
          0: "#000000", /* Black */
          1: "#130303",
          2: "#250505",
          3: "#380808",
          4: "#4a0a0a",
          5: "#5d0d0d",
          6: "#701010",
          7: "#821212",
          8: "#951515",
          9: "#a71717",
          10: "#ba1a1a", /* Base color */
          11: "#c13131",
          12: "#c84848",
          13: "#cf5f5f",
          14: "#d67676",
          15: "#dd8d8d",
          16: "#e3a3a3",
          17: "#eababa",
          18: "#f1d1d1",
          19: "#f8e8e8",
          20: "#ffffff", /* White */
        },
        succes: {
          0: "#000000", /* Black */
          1: "#101809",
          2: "#1f2f12",
          3: "#2f471b",
          4: "#3e5e24",
          5: "#4e762e",
          6: "#5e8e37",
          7: "#6da540",
          8: "#7dbd49",
          9: "#8cd452",
          10: "#9cec5b", /* Base color */ /* #A7EE6D have to try */
          11: "#a6ee6b",
          12: "#b0f07c",
          13: "#baf28c",
          14: "#c4f49d",
          15: "#cef6ad",
          16: "#d7f7bd",
          17: "#e1f9ce",
          18: "#ebfbde",
          19: "#f5fdef",
          20: "#ffffff", /* White */
        },
        warning: {
          0: "#000000", /* Black */
          1: "#191406",
          2: "#33280c",
          3: "#4c3d11",
          4: "#665117",
          5: "#80651d",
          6: "#997923",
          7: "#b38d29",
          8: "#cca22e",
          9: "#e6b634",
          10: "#ffca3a", /* Base color */
          11: "#ffcf4e",
          12: "#ffd561",
          13: "#ffda75",
          14: "#ffdf89",
          15: "#ffe59d",
          16: "#ffeab0",
          17: "#ffefc4",
          18: "#fff4d8",
          19: "#fffaeb",
          20: "#ffffff", /* White */
        },
        info: {
          0: "#000000", /* Black */
          1: "#010f14",
          2: "#011d28",
          3: "#022c3b",
          4: "#023b4f",
          5: "#034a63",
          6: "#045877",
          7: "#04678b",
          8: "#05769e",
          9: "#0584b2",
          10: "#0693c6", /* Base color */
          11: "#1f9ecc",
          12: "#38a9d1",
          13: "#51b3d7",
          14: "#6abedd",
          15: "#83c9e3",
          16: "#9bd4e8",
          17: "#b4dfee",
          18: "#cde9f4",
          19: "#e6f4f9",
          20: "#ffffff", /* White */
        },
        help: {
          0: "#000000", /* Black */
          1: "#090311",
          2: "#110722",
          3: "#1a0a33",
          4: "#220e44",
          5: "#2b1255",
          6: "#341565",
          7: "#3c1976",
          8: "#451c87",
          9: "#4d2098",
          10: "#5623a9", /* Base color */
          11: "#6739b2",
          12: "#784fba",
          13: "#8965c3",
          14: "#9a7bcb",
          15: "#ab91d4",
          16: "#bba7dd",
          17: "#ccbde5",
          18: "#ddd3ee",
          19: "#eee9f6",
          20: "#ffffff", /* White */
        },
      },
    },
    fontFamily: {
      header: ["Lato", "sans-serif"], //Header, subtitle
      body: ["Merriweather", "sans-serif"], //Body, button, caption, overline
    },
  },
  plugins: [],
};
