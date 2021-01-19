const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: "media",
  theme: {
    fontFamily: {
      "sans": ["Styrene", "Helvetica Neue", "Arial", "sans-serif"],
      "inter": ["Inter", "Arial", "sans-serif"],
    },
    colors: {
      black: colors.black,
      gray: colors.trueGray,
      white: colors.white,
      yellow: colors.yellow,
      "edge-blue": "#0063e1",
      "selective-yellow": "#ffb200",
    },
    screens: {
      "sm": "24rem",  // 384px
      "md": "36rem",  // 576px
      "lg": "60rem",  // 960px
      "xl": "80rem",  // 1280px
      "2xl": "96rem", // 1536px
    },
    extend: {
      gridTemplateColumns: {
        "24": "repeat(24, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-13": "span 13 / span 13",
        "span-14": "span 14 / span 14",
        "span-15": "span 15 / span 15",
        "span-16": "span 16 / span 16",
      },
      gridColumnStart: {
        "13": "13",
        "14": "14",
        "15": "15",
        "16": "16",
        "17": "17",
        "18": "18",
        "19": "19",
        "20": "20",
        "21": "21",
        "22": "22",
        "23": "23",
      },
      gridRowStart: {
        "10": "10",
      },
      spacing: {
        "16/9": "56.25%",
        "16/10": "62.5%",
        "16/11": "68.75%",
        "3/2": "66.66666667%",
        "4/3": "75%",
        "9/16": "177.77777778%",
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  variants: {
    fontSmoothing: ['dark'],
    translate: ["group-hover"],
  },
  plugins: [],
  purge: process.env.NODE_ENV === "production" ? {
    enabled: true,
    content: ["src/**/*.njk"],
  } : {}
};
