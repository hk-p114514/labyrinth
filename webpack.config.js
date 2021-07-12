module.exports = {
  mode: "development",

  entry: "./src/main.ts",
  output: {
    path: `${__dirname}/dist`,
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },

  resolve: {
    extensions: [".js", ".ts"],
  },

  devServer: {
    contentBase: "./dist/",
    hot: true,
  },
};
