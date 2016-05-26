var path = require('path');
module.exports = {
  entry: {
    index: './src/index.coffee'
  },
  output: {
    filename: './lib/index.js'
  },
  resolve: {
    root: [path.join(__dirname,'node_modules')],
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [
      '',
      //'.webpack.js', '.web.js', '.ts', '.tsx', '.js', 
      '.coffee', '.coffee.me', '.litcoffee']
  },
  externals: {
    //don't bundle the 'react' npm package with our bundle.js
    //but get it from a global 'React' variable
    'react': 'React',
    'react-dom': "ReactDOM",
    'jquery': 'jQuery'
  },
  module: {
    loaders: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      //{ test: /\.tsx?$/, loader: 'ts-loader' },
      //{ test: /\.css$/, loader: "style-loader!css-loader" },
      //{ test: /\.png$/, loader: "url-loader?limit=100000&mimetype=image/png" },
      //{ test: /\.jpg$/, loader: "file-loader" }
      { test: /\.coffee$/, loader: "coffee-loader" },
      { test: /\.(coffee\.md|litcoffee)$/, loader: "coffee-loader?literate" }
    ]
  }/*,
  ts: {
    configFileName: "./src/tsconfig.json"
  }*/
}
