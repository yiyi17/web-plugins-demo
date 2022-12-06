const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/App.tsx',
    remoteEntry: './src/plugin.tsx',
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].js',
    // libraryTarget: 'commonjs',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
    new CleanWebpackPlugin(),
  ],
  externals: {
    React: 'react',
    ReactDOM: 'react-dom',
  },
  devServer: {
    hot: true,
    port: 9001,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  module: {
    rules: [
      {
        test: /\.(jsx|jsx|tsx|ts)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['js', 'ts', 'tsx', 'json', 'jsx'].map(ext => `.${ext}`),
  },
}
