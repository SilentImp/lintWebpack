const path = require('path');

module.exports = {
  name: 'client',
  target: 'node',
  mode: 'development',
  entry: {
    index: [
        '@babel/polyfill',
        path.join(__dirname, 'src/test.js'),
      ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    symlinks: true,
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  output: {
    libraryTarget: 'umd',
    path: path.join(__dirname, "build"),
    publicPath: '/',
    chunkFilename: '[name].chunk.js',
    filename: '[name].bundle.js',
  },
  stats: {
      warningsFilter: /Error: TypeScript emitted no output for.*/
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          "babel-loader",
          {
            loader: "eslint-loader",
            options: {
              fix: true,
            }
          },
        ]
      },
    ],
  },
}
