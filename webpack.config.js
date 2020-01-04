const path = require("path");

module.exports = {
  entry: {
    app: "./dist/js/index.js"
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "app.bundle.js"
  },
  module: {
    rules: [{ test: /\.txt$/, use: "raw-loader" }]
  }
};
