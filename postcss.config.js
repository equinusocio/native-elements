const path = require("path");

module.exports = {
  modules: false,
  plugins: {
    "postcss-easy-import": {
      extensions: ".pcss"
    },
    "postcss-responsive-type": {},
    "postcss-preset-env": {
      stage: 0,
      autoprefixer: {
        grid: true
      },
      insertAfter: {
        "custom-media-queries": require("postcss-mixins")({
          mixinsFiles: path.join(__dirname, "src/elements/**", "_*.pcss")
        })
      }
    },
    cssnano: {
      preset: [
        "advanced",
        {
          discardComments: {
            removeAll: true
          }
        }
      ]
    },
    "postcss-reporter": {
      clearReportedMessages: true
    }
  }
};
