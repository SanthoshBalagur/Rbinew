import ProvidePlugin from 'webpack/lib/ProvidePlugin';

module.exports = {
  entry: './src/index.js',
  output: {
    path: `${__dirname}/public`,
    filename: './index.min.js',
  },
  devServer: {
    inline: true,
    contentBase: './',
    port: 3000,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=20000',
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
};
