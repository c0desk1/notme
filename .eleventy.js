module.exports = function (eleventyConfig) {
    return {
      dir: {
        input: "src",
        output: "dist",
        layouts: "layouts",
      },
      htmlTemplateEngine: "liquid",
    };
  };
  