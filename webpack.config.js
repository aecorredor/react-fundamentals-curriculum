// the HtmlWebpackPlugin allows us to automatically put out app's index.html
// file in our output folder's index.html file everytime the original app file
// changes
var HtmlWebpackPlugin = require('html-webpack-plugin');
// here we say where our index.html file is located, and we also state
// the name of the file where the template will be injected, and where in the
// file.
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  // entry point used by babel loader to properly transpile JSX
  entry: [
    './app/index.js'
  ],
  // babel will spit out its results in the path specified by this output
  // property. The contents will be in a file called index_bundle.js
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  // here we specify the files where babel will work on (.js), and we exclude
  // the node_modules directory since those are just are dependencies that we
  // wouldn't want to modify. Lastly we specify our loader to be babel-loader
  // which is used to transpile JSX
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  },
  // here we remember to include our HTMLWebpackPluginConfig as a plugin
  plugins: [HTMLWebpackPluginConfig]
};
