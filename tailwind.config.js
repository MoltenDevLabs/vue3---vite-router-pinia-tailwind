/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: { // Colors for MoltenDev Labs
        primary: {
          0: "#000000", /* Black */
          10: "#410003",
          20: "#690007",
          25: "#7c030b",
          30: "#8d1416",
          35: "#9e2120",
          40: "#af2e2a", /* Base color */
          50: "#d14740",
          60: "#f46056",
          70: "#ff897f",
          80: "#ffb4ac",
          90: "#ffdad6",
          95: "#ffedea",
          98: "#fff8f7",
          99: "#fffbff",
          100: "#ffffff",  /* White */
        },
        secondary: {
          0: "#000000", /* Black */
          10: "#2c1513",
          20: "#442927",
          25: "#513431",
          30: "#5d3f3c",
          35: "#6a4b47",
          40: "#775653", /* Base color */
          50: "#926f6b",
          60: "#ad8884",
          70: "#caa29d",
          80: "#e7bdb8",
          90: "#ffdad6",
          95: "#ffedea",
          98: "#fff8f7",
          99: "#fffbff",
          100: "#ffffff",  /* White */
        },
        tertiary: {
          0: "#000000", /* Black */
          10: "#00201c",
          20: "#003731",
          25: "#00443c",
          30: "#005047",
          35: "#005d53",
          40: "#006b5f", /* Base color */
          50: "#008678",
          60: "#00a392",
          70: "#00c0ad",
          80: "#2bdec8",
          90: "#58fae4",
          95: "#b4fff1",
          98: "#e5fff8",
          99: "#f2fffb",
          100: "#ffffff",  /* White */
        },
        neutral: {
          0: "#000000", /* Black */
          10: "#201a19",
          20: "#362f2e",
          25: "#413a39",
          30: "#4d4544",
          35: "#59504f",
          40: "#655c5b", /* Base color */
          50: "#7f7574",
          60: "#998e8d",
          70: "#b4a9a7",
          80: "#d0c4c2",
          90: "#ede0de",
          95: "#fbeeec",
          98: "#fff8f7",
          99: "#fffbff",
          100: "#ffffff",  /* White */
        },
        neutralVariant: {
          0: "#000000", /* Black */
          10: "#251917",
          20: "#3b2d2c",
          25: "#473836",
          30: "#534341",
          35: "#5f4f4d",
          40: "#6b5a59", /* Base color */
          50: "#857371",
          60: "#a08c8a",
          70: "#bba6a4",
          80: "#d8c2bf",
          90: "#f5dddb",
          95: "#ffedea",
          98: "#fff8f7",
          99: "#fffbff",
          100: "#ffffff",  /* White */
        },
        error: {
          0: "#000000", /* Black */
          10: "#410002",
          20: "#690005",
          25: "#7e0007",
          30: "#93000a",
          35: "#a80710",
          40: "#ba1a1a", /* Base color */
          50: "#de3730",
          60: "#ff5449",
          70: "#ff897d",
          80: "#ffb4ab",
          90: "#ffdad6",
          95: "#ffedea",
          98: "#fff8f7",
          99: "#fffbff",
          100: "#ffffff",  /* White */
        },
        succes: {
          0: "#000000", /* Black */
          10: "#022100",
          20: "#063900",
          25: "#094600",
          30: "#0d5300",
          35: "#106000",
          40: "#146e00", /* Base color */
          50: "#33881f",
          60: "#4ea338",
          70: "#68bf50",
          80: "#83db68",
          90: "#9ef981",
          95: "#cbffb6",
          98: "#edffe0",
          99: "#f7ffee",
          100: "#ffffff",  /* White */
        },
        warning: {
          0: "#000000", /* Black */
          10: "#211c00",
          20: "#383000",
          25: "#443b00",
          30: "#514700",
          35: "#5e5200",
          40: "#6c5e00", /* Base color */
          50: "#887700",
          60: "#a49117",
          70: "#c0ac34",
          80: "#dcc74d",
          90: "#fae366",
          95: "#fff1b3",
          98: "#fff9eb",
          99: "#fffbff",
          100: "#ffffff",  /* White */
        },
        info: {
          0: "#000000", /* Black */
          10: "#001e31",
          20: "#003350",
          25: "#003f61",
          30: "#004b72",
          35: "#005784",
          40: "#006496", /* Base color */
          50: "#147db9",
          60: "#3f97d5",
          70: "#5eb2f1",
          80: "#91cdff",
          90: "#cce5ff",
          95: "#e7f2ff",
          98: "#f7f9ff",
          99: "#fcfcff",
          100: "#ffffff",  /* White */
        },
        help: {
          0: "#000000", /* Black */
          10: "#30004b",
          20: "#4b116d",
          25: "#571f79",
          30: "#642d85",
          35: "#703992",
          40: "#7d469f", /* Base color */
          50: "#985fba",
          60: "#b479d6",
          70: "#d093f3",
          80: "#e5b4ff",
          90: "#f4d9ff",
          95: "#fcecff",
          98: "#fff7fc",
          99: "#fffbff",
          100: "#ffffff",  /* White */
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
