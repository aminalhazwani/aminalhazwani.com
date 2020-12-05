module.exports = {
  darkMode: "media",
  theme: {
    fontFamily: {
      "sans": ["Helvetica", "Arial", "sans-serif"],
    },
    screens: {
      "md": "32rem",
      "lg": "64rem",
      "xl": "80rem",
    },
  },
  variants: {},
  plugins: [],
  purge: process.env.NODE_ENV === 'production' ? {
    enabled: true,
    content: ['src/**/*.njk'],
  } : {}
};
