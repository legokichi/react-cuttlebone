var path = require('path');
module.exports = {
  entry: {
    index: './src/index.tsx'
  },
  output: {
    filename: './lib/index.js'
  },
  resolve: {
    root: [path.join(__dirname,'node_modules')],
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  externals: {
    //don't bundle the 'react' npm package with our bundle.js
    //but get it from a global 'React' variable
    'react': 'React'
  },
  module: {
    loaders: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  ts: {
    configFileName: "./src/tsconfig.json"
  }
}
