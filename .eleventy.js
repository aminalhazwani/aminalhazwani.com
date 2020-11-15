module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: "./",
      output: "./_site"
    }
  };
};

const CleanCSS = require("clean-css");
module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });
};
