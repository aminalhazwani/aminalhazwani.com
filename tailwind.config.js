const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: "media",
  theme: {
    fontFamily: {
      "sans": ["aldo", "Helvetica Neue", "Arial", "sans-serif"],
      "inter": ["inter", "Helvetica Neue", "Arial", "sans-serif"],
    },
    colors: {
      black: colors.black,
      gray: colors.neutral,
      white: colors.white,
      yellow: colors.yellow,
      blue: colors.blue,
      "edge-blue": "#04f",
      "selective-yellow": "#ffb200",
    },
    screens: {
      "sm": "24rem",  // 384px
      "md": "36rem",  // 576px
      "lg": "64rem",  // 1024px
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
      lineHeight: {
        'extra': '0.9',
        'tighter': '1.125',
      },
    },
  },
  variants: {
    fontSmoothing: ['dark'],
    translate: ["group-hover"],
  },
  plugins: [],
  content: [
    "src/**/*.njk",
  ],
};
