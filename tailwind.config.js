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
  },
  plugins: [],
  purge: process.env.NODE_ENV === "production" ? {
    enabled: true,
    content: ["src/**/*.njk"],
  } : {}
};
