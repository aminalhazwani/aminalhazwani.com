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
  },
  variants: {
    extend: {
      inset: ['group-hover'],
      margin: ['group-hover'],
      transitionProperty: ['group-hover'],
    },
  },
  plugins: [],
  purge: process.env.NODE_ENV === 'production' ? {
    enabled: true,
    content: ['src/**/*.njk'],
  } : {}
};
