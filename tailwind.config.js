module.exports = {
  darkMode: "media",
  theme: {
    fontFamily: {
      "sans": ["Helvetica Neue", "Arial", "sans-serif"],
      "inter": ["Inter", "Arial", "sans-serif"],
    },
    screens: {
      "sm": "375px",
      "md": "36rem",
      "lg": "64rem",
      "xl": "80rem",
      "2xl": "1536px",
    },
    extend: {
      gridTemplateColumns: {
        "24": "repeat(24, minmax(0, 1fr))",
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
      spacing: {
        "16/9": "56.25%",
        "16/10": "62.5%",
        "16/11": "68.75%",
        "3/2": "66.66666667%",
        "4/3": "75%",
        "9/16": "177.77777778%",
      }
    },
  },
  variants: {
    translate: ["group-hover"],
  },
  plugins: [],
  purge: process.env.NODE_ENV === "production" ? {
    enabled: true,
    content: ["src/**/*.njk"],
  } : {}
};
